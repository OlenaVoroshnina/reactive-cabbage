import { useSelector } from 'react-redux';
import {
  selectToken,
  selectRefreshToken,
  selectSid,
  selectUserId,
  selectUserEmail,
  selectIsLoggedIn,
  selectBalanceAuth,
} from 'redux/selectors';

export const useAuth = () => {
  const accessToken = useSelector(selectToken);
  const refreshToken = useSelector(selectRefreshToken);
  const sid = useSelector(selectSid);
  const userId = useSelector(selectUserId);
  const userEmail = useSelector(selectUserEmail);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const balance = useSelector(selectBalanceAuth);

  return {
    accessToken,
    refreshToken,
    sid,
    userId,
    userEmail,
    isLoggedIn,
    balance,
  };
};
