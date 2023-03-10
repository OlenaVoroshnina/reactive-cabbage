import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectBalance } from 'redux/selectors';
import { useMatchMedia } from 'hooks/useMatchMedia';
import { routes } from '../../../helpers/routers';
import {
  BalanceText,
  BalanceAmount,
  BalanceBox,
  ButtonBack,
  ButtonBackText,
  Box,
  PreBox,
} from './ReportsNav.styled';
import Balance from 'components/Balance/Balance';
import ReportsSlider from '../ReportsSlider/ReportsSlider';
import reports from '../../../images/imgReports/reports.svg';

export const ReportsNav = () => {
  const location = useLocation();

  const transactionBalance = useSelector(selectBalance);
  const { isMobile, isTablet, isDesktop } = useMatchMedia();

  return (
    <PreBox>
      <ButtonBack to={location.state?.from ?? routes.EXPENSES}>
        <svg width="24" height="24">
          <use href={`${reports}#icon-back`}></use>
        </svg>
        <ButtonBackText>Main page</ButtonBackText>
      </ButtonBack>
      <Box>
        <BalanceBox>
          {isMobile && (
            <>
              <ReportsSlider />
              <BalanceText>Balance:</BalanceText>
              <BalanceAmount>
                {transactionBalance.toFixed(2) ?? 0} UAH
              </BalanceAmount>
            </>
          )}
          {isTablet && (
            <>
              <BalanceText>Balance:</BalanceText>
              <BalanceAmount>
                {transactionBalance.toFixed(2) ?? 0} UAH
              </BalanceAmount>
              <ReportsSlider />
            </>
          )}
          {isDesktop && (
            <>
              <Balance />
              <ReportsSlider />
            </>
          )}
        </BalanceBox>
        {/* <ReportsSlider /> */}
      </Box>
    </PreBox>
  );
};
