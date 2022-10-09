import React, { useEffect, useState } from 'react';

import { PieChart, Pie, Cell, Tooltip, Legend, text } from 'recharts';
import policyByResultData from './data';

const data = [
  { name: 'GCP', value: 400 },
  { name: 'AWS', value: 300 },
  { name: 'Azure', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function ReChartPieChart() {
  const [policyData, setPolicyData] = useState([]);

  useEffect(() => {
    console.log(policyByResultData);
    let tempTopPolicy = [];
    policyByResultData.map((data) => {
      tempTopPolicy.push({
        policy: data.name,
        total: data.fail.length + data.pass.length + data.skipped.length,
      });
    });

    console.log(tempTopPolicy);
  }, [policyByResultData]);

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
            onClick={(e) => alert('Drill down WIP')}
          />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}

export default ReChartPieChart;
