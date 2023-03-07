import { useMediaQuery } from 'react-responsive';

export const useMatchMedia = () => {
  const forMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const forTablet = useMediaQuery({
    query: '((min-width: 768px) and (max-width: 1279px))',
  });
  const forDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  return { forMobile, forTablet, forDesktop };
};
