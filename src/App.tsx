import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { AboutPage, HomePage, NotFoundPage } from "./pages";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "*", element: <NotFoundPage /> },
];

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
