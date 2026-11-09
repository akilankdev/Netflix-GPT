import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "./Error";
import MovieDetailsPage from "./movieDetails/MovieDetailsPage";
import ShowDetailsPage from "./showDetails/ShowDetailsPage";

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
      element: <ShowDetailsPage/>
    }
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
