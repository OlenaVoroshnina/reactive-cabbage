import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { selectBalance } from "redux/selectors";
import { useMatchMedia } from "hooks/useMatchMedia";
import { BalanceText, BalanceAmount, BalanceBox, ButtonBack, ButtonBackText, Box, PreBox } from "./ReportsNav.styled";
import Balance from "components/Balance/Balance";
import ReportsSlider from "../ReportsSlider/ReportsSlider";
import reports from "../../../images/imgReports/reports.svg"

export const ReportsNav = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || '/';
    const backLink = () => navigate(from);
    const transactionBalance = useSelector(selectBalance);
    const { isMobile, isTablet, isDesktop } = useMatchMedia();

    return (
    <PreBox>
      <ButtonBack to={backLink}>
        <svg width="24" height="24">
          <use href={`${reports}#icon-back`}></use>
        </svg>
        <ButtonBackText>Main page</ButtonBackText>
      </ButtonBack>
      <Box>
        <ReportsSlider />
        <BalanceBox>
          {isMobile && (
            <>
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
            </>
          )}
          {isDesktop && <Balance />}
        </BalanceBox>
      </Box>
    </PreBox>
        // <div>
        //     <button to={backLink}>
        //         <p>Main page</p>
        //     </button>
        //     <div>
        //         <p>Balance:</p>
        //         <p>{transactionBalance.toFixed(2) ?? 0} UAH</p>
        //     </div>
        // </div>
    )
}