import { useEffect, useState } from 'react';
import { useRef } from 'react';
// import { useSelector } from 'react-redux';
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  LabelList,
  YAxis,
} from 'recharts';
import { BarMain } from './BarChartComponent.styled';

export const BarChartComponent = () => {
  const ref = useRef();
  const [size, setSize] = useState({});
  const [xParams, setXParams] = useState({
    type: 'category',
    dataKey: 'name',
    hide: false,
  });
  const [yParams, setYParams] = useState({
    type: 'number',
    dataKey: '',
  });
  const [layout, setLayout] = useState('horizontal');
  const data = [
    {
      name: 'Page A',
      pv: 2400,
    },
    {
      name: 'Page B',
      pv: 1398,
    },
    {
      name: 'Page C',
      pv: 80,
    },
    {
      name: 'Page D',
      pv: 3908,
    },
    {
      name: 'Page E',
      pv: 4800,
    },
    {
      name: 'Page F',
      pv: 3800,
    },
    {
      name: 'Page G',
      pv: 4300,
    },
  ];
  const resizeHandler = () => {
    const { clientHeight, clientWidth } = ref.current || {};
    setSize({ clientHeight, clientWidth });

    const viewportWidth = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    if (viewportWidth <= 768) {
      setXParams({ type: 'number', dataKey: '', hide: true });
      setYParams({ type: 'category', dataKey: 'name', hide: false });
      setLayout('vertical');
    } else {
      setXParams({ type: 'category', dataKey: 'name', hide: false });
      setYParams({ type: 'number', dataKey: '', hide: true });
      setLayout('horizontal');
    }
  };
  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler();

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    return (
      <text
        x={x + width / 2}
        y={y}
        fill="#666"
        textAnchor="middle"
        dy={-6}
      >{`${value} UAH`}</text>
    );
  };

  return (
    <BarMain ref={ref}>
      <BarChart
        layout={layout}
        width={size.clientWidth}
        height={size.clientHeight}
        data={data}
      >
        <XAxis
          hide={xParams.hide}
          type={xParams.type}
          dataKey={xParams.dataKey}
          stroke="#8884d8"
        />
        <YAxis
          hide={yParams.hide}
          type={yParams.type}
          dataKey={yParams.dataKey}
          stroke="#8884d8"
        />
        {/* <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} /> */}
        <CartesianGrid stroke="#ccc" vertical={false} strokeDasharray="0 0" />
        <Bar dataKey="pv" fill="#FF751D" barSize={40}>
          <LabelList content={renderCustomBarLabel} position="top" />
        </Bar>
      </BarChart>
    </BarMain>
  );
};
