import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Base from "../pages/Base";
import CreateUser from "../pages/CreateUser";
import Profile from '../pages/Profile';
import SignIn from "../pages/SignIn";
// const secureRouteWrapper = (element) => <SecureRoute>{element}</SecureRoute>

const AppRoutes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Base />, // secureRouteWrapper(<Base />),
      children: [
        // {
        //   path: "files",
        //   element: secureRouteWrapper(<Files />),
        // },
        {
          path: "profile-list",
          element: <Profile />, // secureRouteWrapper(<Profile />),
        },
      ],
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/create-user",
      element: <CreateUser />,
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default AppRoutes;
