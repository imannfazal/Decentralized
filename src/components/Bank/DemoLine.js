import { Line } from '@ant-design/plots';

const DemoLine = () => {
  const data = [
    { month: 'Nov', value: 3 },
    { month: 'Dec', value: 4 },
    { month: 'Jan', value: 4.5 },
    { month: 'Feb', value: 5  },
    { month: 'Mar', value: 5.6},
    { month: 'April', value: 6 },
    { month: 'May', value: 7 },
    { month: 'June', value: 9},
    { month: 'July', value: 13},
  ];

  const config = {
    data,
    padding: 'auto',
    xField: 'month',
    yField: 'value',
    color: '#008910',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
    smooth: true,
  };

  return <Line {...config} />;
};

export default DemoLine;