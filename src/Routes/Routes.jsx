import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import UpdateToy from "../components/UpdateToy";
import MyToys from "../components/MyToys";
import AllToys from "../components/AllToys";
import AddToy from "../components/AddToy";
import SingleToyDetails from "../components/SingleToyDetails";
import Blog from "../components/Blog";
import PrivateRoute from "../components/PrivateRoute";
import Page404 from "../components/page404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "alltoys",
        element: <AllToys></AllToys>,
        loader: () =>
          fetch("https://toy-marketplace-server-eta.vercel.app/addatoy"),
      },
      {
        path: "mytoys",
        element: <MyToys></MyToys>,
      },
      {
        path: "addatoy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/updatetoy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(
            `https://toy-marketplace-server-eta.vercel.app/addatoy/${params.id}`
          ),
      },
      {
        path: "details/:id",
        element: <SingleToyDetails></SingleToyDetails>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "*",
    element: <Page404></Page404>,
  },
]);

export default router;
