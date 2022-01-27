import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
import dataCollection from "./config/lineChart";
const DemoLine = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    setData(dataCollection);
  };
  const config = {
    data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      tickCount: 5,
    },
    slider: {
      start: 0.1,
      end: 0.5,
    },
  };

  return <Line {...config} />;
};

export default DemoLine;