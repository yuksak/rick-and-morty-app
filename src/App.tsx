import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from 'hooks/redux-hooks';

import { getCharacters } from 'api';

import { AboutPage, HomePage, NotFoundPage, ReadMorePage } from 'pages';
import { Layout } from 'components';

const routes = [
  { path: '*', component: <NotFoundPage /> },
  { path: '/', component: <HomePage /> },
  { path: '/about', component: <AboutPage /> },
  { path: '/character/:id', component: <ReadMorePage /> },
];

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
