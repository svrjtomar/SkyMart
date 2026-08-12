import React from "react";

const MetricCard = ({ icon, value, title, subtitle, className }) => {
  return (
    <div className="flex gap-4 border rounded-2xl p-8 border-[var(--color-accent)]">
      <div className={`border size-15 rounded-2xl flex justify-center items-center ${className}`}>{icon}</div>

      <div >
      <h3 className="text-2xl font-bold">{value}</h3>
        <p className="text-gray-500">{title}</p> 
        <p className="text-gray-600 text-xs">{subtitle}</p> 
      </div>
    </div>
  );
};

export default MetricCard;
