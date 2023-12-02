import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Layout from "./components/pages/Layout";
import Connect from "./components/pages/Connect";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/connect",
        element: <Connect />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
