import React from 'react';
import { Line } from '@ant-design/plots';

const Chart2 = () => {
  const data = [
    { month: 'Nov', value: 3, "category": "Total Deposit" },
    { month: 'Dec', value: 4, "category": "Total Deposit"  },
    { month: 'Jan', value: 3.5 , "category": "Total Deposit"  },
    { month: 'Feb', value: 5 , "category": "Total Deposit" },
    { month: 'Nov', value: 0, "category": "Total Borrow"  },
    { month: 'April', value: 6, "category": "Total Borrow"  },
    { month: 'May', value: 7, "category": "Total Borrow"  },
    { month: 'June', value: 9, "category": "Total Borrow"  },
    { month: 'July', value: 13, "category": "Total Borrow" },
    { month: 'July', value: 5 , "category": "Total Deposit" },
  ];

  const config = {
    data,
    xField: 'month',
    yField: 'value',
    seriesField: 'category',
    yAxis: {
      label: {
        
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
    color: ['#008910', '#5f5f5f'],
  };

  return <Line {...config} />;
};
export default Chart2;