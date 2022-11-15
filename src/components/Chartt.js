import React from 'react';
import { Area } from '@ant-design/plots';

const Chartt = () => {
  const data = [
    { year: '11/1/22', value: 3 },
    { year: '11/2/22', value: 4 },
    { year: '11/3/22', value: 3.5 },
    { year: '11/4/22', value: 5 },
    { year: '11/5/22', value: 4.9 },
    { year: '11/6/22', value: 6 },
    { year: '11/7/22', value: 7 },
    { year: '11/8/22', value: 9 },
    { year: '11/9/22', value: 13 },
  ];

  const config = {
    data,
    xField: 'year',
    yField: 'value',
    xAxis: {
      range: [0, 1],
      tickCount: 5,
    },
    areaStyle: () => {
      return {
        fill: 'l(270) 0:#ffffff 0.5:#006DFF 1:#004CB2',
      };
    },
  };

  return <Area {...config} />;

};
export default Chartt;