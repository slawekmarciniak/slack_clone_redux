import { Outlet } from "react-router";
import Header from "../Header";
import Sidebar from "../Sidebar";
import styled from "styled-components";

const Layout = () => {
  return (
    <>
      <Header />
      <PagesContainer>
        <Sidebar />
        <Outlet />
      </PagesContainer>
    </>
  );
};

export default Layout;

const PagesContainer = styled.div`
  display: flex;
  height: 100vh;
`;
