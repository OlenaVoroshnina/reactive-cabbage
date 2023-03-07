import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn, selectBalance } from "redux/selectors";
import { getExpense } from "redux/transactions/operation";
import { InputForm } from "components/InputForm/InputForm";

export const ExpensesPage = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectIsLoggedIn);
    const balance = useSelector(selectBalance);

    useEffect(() => {
        if (user) {
            dispatch(getExpense());
            }
        }, [dispatch, user, balance]);

    return (
        <>
            <div>
                <InputForm />

            </div>
        </>
    )
};