import { translateToEng } from 'hooks/useCategory';
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
  Rectangle,
  Cell,
} from 'recharts';
import { BarMain } from './BarChartComponent.styled';

export const BarChartComponent = ({ budget }) => {
  const ref = useRef();
  const filteredData = useSelector(state => state.reportsQuery.filteredDate[0]);
  const { reports } = useSelector(state => state.reports);
  const [data, setData] = useState([]);
  const [size, setSize] = useState({});
  const [xParams, setXParams] = useState({});
  const [yParams, setYParams] = useState({});
  const [option, setOption] = useState({ layout: 'vertical' });

  const resizeHandler = () => {
    const { clientHeight, clientWidth } = ref.current || {};
    setSize({ clientHeight, clientWidth });
    const viewportWidth = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
    if (viewportWidth <= 768) {
      setXParams({ type: 'number', dataKey: '', hide: true });
      setYParams({ type: 'category', dataKey: 'name', hide: true });

      setOption({
        layout: 'vertical',
        textAnchor: 'start',
        shapeRadius: [0, 10, 10, 0],
        strokeVertical: false,
      });
    } else {
      setXParams({ type: 'category', dataKey: 'name', hide: false });
      setYParams({ type: 'number', dataKey: '', hide: true });

      setOption({
        layout: 'horizontal',
        textAnchor: 'middle',
        shapeRadius: [10, 10, 0, 0],
        strokeHorizontal: true,
      });
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
    } else if (reports[budget]) {
      const data = [];
      for (const item in reports[budget][`${budget}Data`]) {
        data.push({
          name: translateToEng(item),
          pv: reports[budget][`${budget}Data`][item].total,
        });
      }
      setData(data);
    }
  }, [filteredData, budget, reports]);
  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  const renderCustomBarLabel = ({
    name,
    payload,
    x,
    y,
    width,
    height,
    value,
  }) => {
    return (
      <text
        x={x + width / 2}
        y={y}
        fill="#666"
        textAnchor={option.textAnchor}
        dy={-6}
      >{`${xParams.hide ? name : ''}   ${value} UAH`}</text>
    );
  };

  return (
    <BarMain ref={ref}>
      <BarChart
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        layout={option.layout}
        width={size.clientWidth}
        height={size.clientHeight}
        data={data}
        barCategoryGap={5}
        fontSize={12}
      >
        <XAxis
          hide={xParams.hide}
          type={xParams.type}
          dataKey={xParams.dataKey}
          stroke="##52555F"
          width={20}
          fontSize={12}
        />
        <YAxis
          hide={yParams.hide}
          type={yParams.type}
          dataKey={yParams.dataKey}
          stroke="#52555F"
          tickCount={10}
          width={50}
          fontSize={12}
        />
        <CartesianGrid
          stroke="#ccc"
          horizontal={option.strokeHorizontal}
          vertical={false}
          strokeDasharray="0 0"
        />
        <Bar
          dataKey="pv"
          fill="#FF751D"
          barSize={40}
          shape={<Rectangle radius={option.shapeRadius} />}
        >
          <LabelList content={renderCustomBarLabel} position="top" />
          <LabelList content={renderCustomBarLabel} position="top" />
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={index % 3 ? '#FFB182' : '#FF751D'}
            />
          ))}
        </Bar>
      </BarChart>
    </BarMain>
  );
};
