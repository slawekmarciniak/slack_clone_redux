import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <p>main</p>;
      <Outlet />
    </>
  );
};

export default Layout;
