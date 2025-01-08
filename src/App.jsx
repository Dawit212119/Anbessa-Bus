import Navbar from "./components/Navbar";
import "./index.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import Request from "./pages/Request";
import "leaflet/dist/leaflet.css";
import View from "./pages/view";
// import Privateroute from "./components/Privateroute";

function App() {
  return (
    <BrowserRouter>
      <div className="  bg-black text-white flex flex-col">
        <Navbar />

        {/* Hero Section */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route element={<Privateroute />}> */}
            <Route path="/request" element={<Request />} />
            {/* </Route> */}
            <Route path="/view" element={<View />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
