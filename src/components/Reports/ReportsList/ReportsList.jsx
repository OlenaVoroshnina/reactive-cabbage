import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectReportsData } from 'redux/selectors';
import { Item, ItemSvg, List, ItemIncome } from './ReportsList.styled';
import { filteredDataAction } from 'redux/reportsQuery/reportsQuerySlice';
import { translateToEng } from '../../../hooks/useCategory';

import BgcIcon from '../../../images/imgReports/bgcForSvg.svg';
import OrangeBgc from '../../../images/imgReports/orangeBgc.svg';
import iconReports from '../../../images/imgReports/reports.svg';

export const ReportsList = ({ onChange }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [active, setActive] = useState('');
  const reportsData = useSelector(selectReportsData);

  const valueArr = [];

  const expensesData = useMemo(
    () => reportsData?.expenses?.expensesData ?? {},
    [reportsData]
  );

  const incomesData = useMemo(
    () => reportsData?.incomes?.incomesData ?? {},
    [reportsData]
  );

  useEffect(() => {
    if (onChange === 'expenses') {
      setData(expensesData ?? {});
      setActive('');
    } else {
      setData(incomesData ?? {});
      setActive('');
    }
  }, [onChange, expensesData, incomesData, setActive]);

  const handlerEventClick = event => {
    setActive(event.currentTarget.id);
    const filteredValueArr = valueArr.filter(
      item => item[0].replace(/\s+/g, '') === event.currentTarget.id
    );
    dispatch(filteredDataAction(filteredValueArr));
  };
  const entries = Object.entries(data) ?? [];

  return (
    <div>
      <List className={onChange === 'incomes' ? 'incomeList' : ''}>
        {entries.map(item => {
          const iconName = item[0].replace(/\s+/g, '');
          valueArr.push(item);
          if (onChange === 'expenses') {
            return (
              <Item
                key={iconName}
                id={iconName}
                onClick={handlerEventClick}
                className={iconName === active ? 'active' : ''}
              >
                <p>{item[1].total.toFixed(2)}</p>
                <ItemSvg width="56" height="56">
                  <svg
                    src={iconName === active ? OrangeBgc : BgcIcon}
                    width="59"
                    height="46"
                    viewBox="0 0 54 47"
                    background-position="center"
                    className={iconName === active ? 'active' : ''}
                  />
                  <use href={`${iconReports}#${iconName}`}></use>
                </ItemSvg>
                <p>{translateToEng(item[0]).toUpperCase()}</p>
              </Item>
            );
          } else if (onChange === 'incomes') {
            return (
              <ItemIncome
                key={iconName}
                id={iconName}
                onClick={handlerEventClick}
                className={iconName === active ? 'active' : ''}
              >
                <p>{item[1].total.toFixed(2)}</p>
                <ItemSvg
                  width="56"
                  height="56"
                  className={iconName === active ? 'active' : ''}
                >
                  <svg
                    src={iconName === active ? OrangeBgc : BgcIcon}
                    width="59"
                    height="46"
                    viewBox="0 0 54 47"
                    background-position="center"
                    className={iconName === active ? 'active' : ''}
                  />
                  <use href={`${iconReports}#${iconName}`}></use>
                </ItemSvg>
                <p>{translateToEng(item[0]).toUpperCase()}</p>
              </ItemIncome>
            );
          }
          return <></>;
        })}
      </List>
    </div>
  );
};
