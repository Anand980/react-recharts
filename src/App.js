import React, { useEffect, useState } from 'react';
import ReChartBarChart from './barchart.js';
import ReChartPieChart from './piechart.js';

function App() {
  return (
    <>
      <ReChartBarChart />
      <ReChartPieChart />
    </>
  );
}

export default App;
