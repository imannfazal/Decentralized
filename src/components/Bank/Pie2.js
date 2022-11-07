import React from 'react';
import { Pie } from '@ant-design/plots';

const Pie2 = () => {
    const data = [
        {
          type: 'Value',
          value: 0,
        },
        
      ];
      const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        color:'#999999',
        width: '4px',
        radius: 1,
        innerRadius: 0.7,
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

export default Pie2;