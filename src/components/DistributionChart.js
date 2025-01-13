import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, Legend } from 'recharts';

const COLORS = [
  '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8',
  '#82ca9d', '#ffc658', '#a4de6c', '#d0ed57', '#83a6ed',
];

const DistributionChart = ({ title, data }) => (
  <div className="bg-white rounded-lg shadow-md ">
    <h3 className="text-lg font-semibold mb-4 text-center">{title}</h3>
    <div className="h-[450px] flex justify-center items-center">
      {data && data.length > 0 ? (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              labelLine={false}
              outerRadius={120}
              innerRadius={60}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value, name) => [`${value} vehicles`, `${name}`]} 
              contentStyle={{ backgroundColor: '#f5f5f5', borderRadius: '8px' }}
            />
            <Legend 
              layout="horizontal" 
              align="center" 
              verticalAlign="bottom" 
              iconType="circle" 
            />
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-gray-500 text-center text-lg">No data available</p>
      )}
    </div>
  </div>
);

export default DistributionChart;
