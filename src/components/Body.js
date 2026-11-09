import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "./Error";
import MovieDetailsPage from "./movieDetails/MovieDetailsPage";
import ShowDetails from "./showDetails/ShowDetails";

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
      element: <MovieDetailsPage />
    },{
      path:'/tv/:showId',
      element: <ShowDetails/>
    }
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
