import { Outlet } from 'react-router';

function Layout() {
  return (
    <div>
      General layout
      <Outlet />
    </div>
  );
}

export default Layout;
