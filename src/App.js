import React, { useState, useEffect } from 'react';
import DashboardHeader from './components/DashboardHeader';
import Filters from './components/Filters';
import StatCard from './components/StatCard';
import DistributionChart from './components/DistributionChart';
import BarChartCard from './components/BarChartCard';
import Loader from './components/Loader';
import { MapPin, Car, BatteryCharging, Building } from 'lucide-react';

const App = () => {
  const [evData, setEvData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedMake, setSelectedMake] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Electric_Vehicle_Population_Data.csv');
        const text = await response.text();
        const parsedData = parseCSV(text);
        setEvData(parsedData);
        setLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const parseCSV = (csvText) => {
    const lines = csvText.split('\n');
    return lines.slice(1).map(line => {
      const values = line.split(',');
      return {
        vin: values[0],
        county: values[1],
        city: values[2],
        state: values[3],
        postalCode: values[4],
        modelYear: parseInt(values[5]),
        make: values[6],
        model: values[7],
        evType: values[8],
        range: parseInt(values[11]) || 0,
        msrp: parseInt(values[12]) || 0,
        utility: values[16]
      };
    }).filter(item => item.make && item.modelYear);
  };

  const filteredData = evData.filter(item =>
    (selectedYear === 'all' || item.modelYear === parseInt(selectedYear)) &&
    (selectedMake === 'all' || item.make === selectedMake)
  );

  // Data aggregations
  const makeDistribution = Object.entries(
    filteredData.reduce((acc, curr) => {
      acc[curr.make] = (acc[curr.make] || 0) + 1;
      return acc;
    }, {})
  ).map(([name, value]) => ({ name, value }));

  // Top 10 models
  const modelDistribution = Object.entries(
    filteredData.reduce((acc, curr) => {
      const key = `${curr.make} ${curr.model}`;
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {})
  )
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 10); 

    // Top 10 cities
  const cityDistribution = Object.entries(
    filteredData.reduce((acc, curr) => {
      acc[curr.city] = (acc[curr.city] || 0) + 1;
      return acc;
    }, {})
  )
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 10); 

  const rangeCategories = Object.entries(
    filteredData.reduce((acc, curr) => {
      let category;
      if (curr.range === 0) category = 'Unknown';
      else if (curr.range < 200) category = '< 200 miles';
      else if (curr.range < 300) category = '200-300 miles';
      else category = '300+ miles';
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {})
  ).map(([name, value]) => ({ name, value }));


  const years = [...new Set(evData.map(item => item.modelYear))].sort();
  const makes = [...new Set(evData.map(item => item.make))].sort();

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <DashboardHeader />
        <Filters
          years={years}
          makes={makes}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          selectedMake={selectedMake}
          setSelectedMake={setSelectedMake}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard icon={Car} title="Total Vehicles" value={filteredData.length.toLocaleString()} />
          <StatCard icon={Building} title="Unique Makes" value={makeDistribution.length} />
          <StatCard icon={MapPin} title="Cities Covered" value={cityDistribution.length} />
          <StatCard icon={BatteryCharging} title="Avg Range (mi)" value={Math.round(filteredData.reduce((acc, curr) => acc + curr.range, 0) / filteredData.length) || 0} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DistributionChart title="Manufacturer Distribution" data={makeDistribution} />
          <DistributionChart title="Range Distribution" data={rangeCategories} />
          <BarChartCard title="Top 10 Models" data={modelDistribution} />
          <BarChartCard title="Top 10 Cities" data={cityDistribution} />
        </div>
      </div>
    </div>
  );
};

export default App;
