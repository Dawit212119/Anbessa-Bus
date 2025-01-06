import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [position, setPosition] = useState({ lat: null, long: null });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setPosition({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    }
  }, []);

  return (
    <main className="container bg-black mx-auto px-4 py-16">
      <div className=" md:flex-row items-center justify-between gap-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 items-center mb-6">
          <h1 className="text-5xl lg:text-[4.5rem] md:text-6xl font-bold ">
            Anbessa Bus <span className="text-orange-500">Addis Ababa</span>
          </h1>
          <div className="flex justify-center items-center">
            <img
              src="src/img/anbessaclear.png"
              alt="Anbessa Bus"
              className="rounded-lg shadow-2xl w-[80%] "
            />
          </div>
        </div>
        <div className="">
          <p className=" flex items-center text-gray-400 text-lg mb-8 w-[950px] mx-auto">
            Experience reliable public transportation in Addis Ababa like never
            before. Easily discover routes, plan your trips, and travel
            comfortably with our comprehensive schedules and user-friendly
            system. Our efficient service ensures you reach your destination on
            time, every time, with real-time updates and seamless connectivity.
            Whether you&apos;re commuting for work or exploring the city, trust
            us to make your journey smooth and hassle-free.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 w-[85%] h-auto mx-auto gap-8 mt-24">
        <div className="bg-gray-900 rounded-xl p-8 flex flex-col justify-between hover:bg-gray-800 transition-colors cursor-pointer">
          <img
            src="src\img\routeselect.png"
            className="flex justify-center w-30 h-25"
          />
          <h3 className="text-2xl font-bold mb-4">Submit Request</h3>
          <p className="text-gray-400 mb-6">
            Need a new bus route or have suggestions? Submit your request form
            and help us improve our service.
          </p>

          {/* only there is session */}

          <Link to="/request">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
              Submit Request Form
            </button>
          </Link>
        </div>
        {/*   */}
        <div className="bg-gray-900 rounded-xl p-8 flex flex-col justify-between hover:bg-gray-800 transition-colors cursor-pointer">
          <img
            src="src\img\travelman.png"
            className="flex justify-center w-100% h-100% object-cover"
          />

          <h3 className="text-2xl font-bold mb-4">View Routes</h3>
          <p className="text-gray-400 mb-6">
            Find the nearest bus routes, check schedules, and plan your journey
            across Addis Ababa.
          </p>
          <Link to={`/view?lat=${position.lat}&long=${position.long}`}>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
              View Routes Near By
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
