import React from 'react';
import { Line } from '@ant-design/charts';

const Chartt = () => {
  const data = [
    { year: '11/1/2022', value: 3 },
    { year: '11/2/2022', value: 4 },
    { year: '11/3/2022', value: 3.5 },
    { year: '11/4/2022', value: 5 },
    { year: '11/5/2022', value: 4.9 },
    { year: '11/6/2022', value: 6 },
    { year: '11/7/2022', value: 7 },
    { year: '11/8/2022', value: 9 },
    { year: '11/9/2022', value: 13 },
  ];

  const config = {
    data,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
  return <Line {...config} />;
};
export default Chartt;