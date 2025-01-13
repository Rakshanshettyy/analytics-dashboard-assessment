import React from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const COLORS = [
  '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8',
  '#82ca9d', '#ffc658', '#a4de6c', '#d0ed57', '#83a6ed',
];

const DistributionChart = ({ title, data }) => (
  <div className="bg-white rounded-lg shadow-md p-4">
    <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
    <div className="flex flex-col w-full">
      <div className="w-full h-[300px] md:h-[350px]">
        {data && data.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={({height}) => Math.min(height * 0.35, 120)} 
                innerRadius={({height}) => Math.min(height * 0.2, 60)}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value, name) => [`${value} vehicles`, `${name}`]}
                contentStyle={{ 
                  backgroundColor: '#f5f5f5', 
                  borderRadius: '8px',
                  fontSize: '0.75rem',
                  padding: '8px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-500 text-center text-lg">No data available</p>
        )}
      </div>

      {/* Legend Container */}
      <div className="mt-4 w-full overflow-x-auto">
        <div className="min-w-full px-2">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-xs md:text-sm">
            {data?.map((entry, index) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full flex-shrink-0" 
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span className="truncate" title={entry.name}>
                  {entry.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DistributionChart;
