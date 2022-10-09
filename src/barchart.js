import React, { useEffect, useState } from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import policyByResultData from './data';

function ReChartBarChart() {
  const [policyData, setPolicyData] = useState([]);

  useEffect(() => {
    let tempPolicyData = [];
    console.log('policyByResultData', policyByResultData);
    policyByResultData.map((it) => {
      tempPolicyData.push({
        name: it.name,
        pass: it.pass.length,
        fail: it.fail.length,
        skipped: it.skipped.length,
      });
    });

    setPolicyData(tempPolicyData);
  }, [policyByResultData]);

  return (
    <div>
      <BarChart
        width={400}
        height={300}
        data={policyData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pass" fill="#269924" onClick={(e) => onPassClick(e)} />
        <Bar dataKey="fail" fill="#ED2124" onClick={(e) => onFailClick(e)} />
        <Bar
          dataKey="skipped"
          fill="#F1C44D"
          onClick={(e) => onSkippedClick(e)}
        />
      </BarChart>
    </div>
  );
}

export default ReChartBarChart;
