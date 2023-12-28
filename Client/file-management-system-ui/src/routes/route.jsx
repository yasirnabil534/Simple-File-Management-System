import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateUser from "../pages/CreateUser";
import SignIn from "../pages/SignIn";
// const secureRouteWrapper = (element) => <SecureRoute>{element}</SecureRoute>

const AppRoutes = () => {
  const routes = createBrowserRouter([
    // {
    //   path: "/",
    //   element: secureRouteWrapper(<Base />),
    //   children: [
    //     {
    //       path: "home",
    //       element: secureRouteWrapper(<Home />),
    //     },
    //     {
    //       path: "about",
    //       element: secureRouteWrapper(<About />),
    //     },
    //     {
    //       path: "employees",
    //       element: secureRouteWrapper(<Employee />),
    //     },
    //     {
    //       path: "profile",
    //       element: secureRouteWrapper(<Profile />),
    //     },
    //   ],
    // },
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
