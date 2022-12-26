import { useAppSelector } from 'hooks/redux-hooks';
import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../index';

export const Layout = () => {
  const { darkMode } = useAppSelector((state) => state.darkMode);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen flex flex-col dark:bg-zinc-900">
        <div className="my-1 py-8" />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
