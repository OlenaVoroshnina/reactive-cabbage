import { useEffect, useState } from 'react';
import { useRef } from 'react';

import { useSelector } from 'react-redux';

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
  const filteredData = useSelector(state => state.reportsQuery.filteredDate[0]);
  const [data, setData] = useState([]);
  const [size, setSize] = useState({});
  const [layout, setLayout] = useState('horizontal');
  const [xParams, setXParams] = useState({});
  const [yParams, setYParams] = useState({});

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
    if (filteredData) {
      const data = [];
      for (const item in filteredData[1]) {
        data.push({
          name: item,
          pv: filteredData[1][item],
        });
      }
      setData(data);
    }
  }, [filteredData]);
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
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
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
        <CartesianGrid stroke="#ccc" vertical={false} strokeDasharray="0 0" />
        <Bar dataKey="pv" fill="#FF751D" barSize={40}>
          <LabelList content={renderCustomBarLabel} position="top" />
        </Bar>
      </BarChart>
    </BarMain>
  );
};