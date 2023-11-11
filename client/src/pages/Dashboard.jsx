import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Tilt from "react-parallax-tilt";


const Dashboard = () => {
  <script src="https://cdn.jsdelivr.net/npm/tsparticles-confetti@2.12.0/tsparticles.confetti.bundle.min.js"></script>;
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(null); // Use null as the initial state value

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      setLoading(false); // Set loading to false when data is loaded
    }, 2000);
  }, []);

  const handleFetchImage = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_LINK + "api/isAuth/image/1"
      );
      if (response.ok) {
        const data = await response.blob();
        setImage(URL.createObjectURL(data)); // Set the image source
        console.log(data);
      } else {
        console.error("Image fetching failed with status:", response.status);
      }
      console.log(response)
    } catch (error) {
      console.error("Image fetching error:", error);
    }
  };

  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch an action to update authentication status to false
    dispatch({ type: "LOGOUT", isAuthenticated: false });
  };

  // If not authenticated, redirect to the login page

  return (
    <div>
      {loading ? (
        <Loader /> // Render the loader while loading is true
      ) : (
        <>
          <Navbar />
          <div className="flex flex-col h-screen justify-center items-center">
            <h2 className="text-5xl text-center">Welcome to the Dashboard!</h2>
            {/* Add your dashboard content here */}
            <Link to="/">
              <button
                onClick={handleLogout}
                className="bg-red-500 text-3xl text-white p-2 rounded hover-bg-red-600 mt-4"
              >
                Logout
              </button>
            </Link>
            <div className="text-5xl">
              <button onClick={handleFetchImage}>Click</button>
              {image && (
                <img crossOrigin="anonymous" src={image} alt="Fetched Image" />
              )}
            </div>
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.9}
              glareColor="lightblue"
              glarePosition="all"
            >
              <div className="h-48 w-48 bg-blue-700 flex flex-col justify-center items-center text-3xl">
                <h1>Hello Ashmit</h1>
                <img
                  crossOrigin="anonymous"
                  src={
                    import.meta.env.VITE_BACKEND_LINK + "api/isAuth/imagejpg/1"
                  }
                  alt="test"
                />
              </div>
            </Tilt>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
