import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "./Error";
import MovieDetails from "./MovieDetails";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path:'/movie/:movieId',
      element: <MovieDetails />
    }
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
