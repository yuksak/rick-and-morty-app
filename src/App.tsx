import { Route, Routes } from 'react-router-dom';

import { AboutPage, HomePage, NotFoundPage } from 'pages';
import { Layout } from 'components';

const routes = [
  { path: '/', component: <HomePage /> },
  { path: '/about', component: <AboutPage /> },
  { path: '*', component: <NotFoundPage /> },
];

const App = () => {
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
