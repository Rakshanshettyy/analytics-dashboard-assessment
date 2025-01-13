import React from 'react';

const StatCard = ({ icon: Icon, title, value }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center">
      <div className="p-2 rounded-lg bg-blue-100">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <div className="ml-4">
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold text-gray-700">{value}</h3>
      </div>
    </div>
  </div>
);

export default StatCard;
