import React from 'react';

import { Pie } from '@ant-design/plots';

const DemoPie = () => {
  const data = [
    {
      type: 'Deposit',
      value: 100,
    },
    {
      type: 'Collateral',
      value: 0,
    },
    
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    color:['#3E8501','#000000'],
    width: '4px',
    radius: 1,
    innerRadius: 0.8,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: '',
      },
    },
  };
  return <Pie {...config} />;
};

export default DemoPie;