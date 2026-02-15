import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      {/* Menu */}
      <Outlet />
      {/* Cart */}
    </>
  );
}

export default Layout;
