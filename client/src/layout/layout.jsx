//create layout from layout components
import { Outlet } from 'react-router-dom';
import { Header } from './header';

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};