import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import Test from "./pages/Test";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      setLoading(false); // Set loading to false when data is loaded
    }, 2000);
  }, []); 

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/test",
      element: <Test />,
    },
    {
      path: "/login",
      element: isAuthenticated ? <Navigate to="/dashboard" /> : <Login />,
    },
    {
      path: "/signup",
      element: isAuthenticated ? <Navigate to="/dashboard" /> : <Signup />,
    },
    {
      path: "/dashboard",
      element: isAuthenticated ? <Dashboard /> : <Navigate to="/login" />,
    },
  ]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <RouterProvider router={router}>
            <Outlet />
          </RouterProvider>
        </div>
      )}
    </div>
  );
};

export default App;
