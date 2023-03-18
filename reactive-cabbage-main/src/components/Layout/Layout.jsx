import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import BgGrey from 'components/Backgrounds/BgGrey/BgGrey';

export const Layout = () => {
  return (
    <>
      <Header />

      <BgGrey>

          <Container>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>

      </BgGrey>
    </>
  );
};
