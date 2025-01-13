import React from 'react';

const Filters = ({ years, makes, selectedYear, setSelectedYear, selectedMake, setSelectedMake }) => (
  <div className="flex flex-wrap gap-4 mb-6">
    <select 
      className="px-4 py-2 border rounded-md"
      value={selectedYear}
      onChange={(e) => setSelectedYear(e.target.value)}
    >
      <option value="all">All Years</option>
      {years.map(year => (
        <option key={year} value={year}>{year}</option>
      ))}
    </select>

    <select 
      className="px-4 py-2 border rounded-md"
      value={selectedMake}
      onChange={(e) => setSelectedMake(e.target.value)}
    >
      <option value="all">All Makes</option>
      {makes.map(make => (
        <option key={make} value={make}>{make}</option>
      ))}
    </select>
  </div>
);

export default Filters;
