import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { selectBalance } from "redux/selectors";

export const ReportsNav = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || '/';
    const backLink = () => navigate(from);
    const transactionBalance = useSelector(selectBalance);

    return (
        <div>
            <button to={backLink}>
                <p>Main page</p>
            </button>
            <div>
                <p>Balance:</p>
                <p>{transactionBalance.toFixed(2) ?? 0} UAH</p>
            </div>
        </div>
    )
}