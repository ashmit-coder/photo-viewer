import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { confetti } from "tsparticles-confetti";


const Home = () => {
    const handleConfettiClick = () => {
    const defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
    };

    confetti({
      ...defaults,
      particleCount: 50,
      scalar: 2,
    });

    confetti({
      ...defaults,
      particleCount: 25,
      scalar: 3,
    });

    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 4,
    });

    // Additional confetti animation
    const duration = 2.5 * 1000;
    const animationEnd = Date.now() + duration;

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
  };
  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col justify-center items-center bg-gray-200">
        <h1 className="text-4xl font-extrabold mb-4 text-center">
          Welcome to Our Website
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore what our website has to offer.
        </p>
        <div className="flex space-x-4">
          <Link
            to="/login"
            className="text-2xl bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="text-2xl bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
          >
            Sign Up
          </Link>
        </div>
        <button onClick={handleConfettiClick}>Show Confetti</button>
      </div>
    </>
  );
};

export default Home;
