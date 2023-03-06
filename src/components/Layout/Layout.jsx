import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Container from "components/Container/Container";
import { Header } from "components/Header/Header";
import { Loader } from "components/Loader/Loader";

export const Layout = () => {

    return (
    <Container>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
    )
};