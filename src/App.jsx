import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Main from "./components/pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
