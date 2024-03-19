import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Error from "../pages/errorPage/Error";
import Home from "../pages/home/Home";
import Component from "../pages/component/Component";
import { Mobile } from "../pages/mobile/Mobile";
import Cart from "../pages/cart/Cart";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/Mobile", element: <Mobile /> },
      {
        path: "/:componentName",
        loader: ({ params }) => params.componentName,

        element: <Component />,
      },
    ],
  },
]);
