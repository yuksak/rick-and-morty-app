import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AboutPage, HomePage, NotFoundPage } from 'pages';
import { Layout } from 'components';
import { useAppDispatch } from 'hooks/redux-hooks';
import { getCharacters } from 'api';

const routes = [
  { path: '/', component: <HomePage /> },
  { path: '/about', component: <AboutPage /> },
  { path: '*', component: <NotFoundPage /> },
];

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, []);
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
