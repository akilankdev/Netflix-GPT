import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error";
import MovieDetailsPage from "./movieDetails/MovieDetailsPage";
import ShowDetails from "./showDetails/ShowDetails";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <PublicRoute>
          <Login />
        </PublicRoute>
      ),
      errorElement: <Error />,
    },
    {
      path: "/browse",
      element: (
        <ProtectedRoute>
          <Browse />
        </ProtectedRoute>
      ),
    },
    {
      path: "/movie/:movieId",
      element: (
        <ProtectedRoute>
          <MovieDetailsPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/tv/:showId",
      element: (
        <ProtectedRoute>
          <ShowDetails />
        </ProtectedRoute>
      ),
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
