// import React from "react";

// import { MapContainer, TileLayer, useMap } from "react-leaflet";
// import { Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

// const position: [number, number] = [51.505, -0.09];

// const Map = () => {
//   return (
//     <div style={{ height: "100vh", width: "100%" }}>
//       <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={position}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// };
// export default Map;
import React from "react";
import { useLocation, useParams } from "react-router-dom";
const Location = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const lat = params.get("lat");
  const long = params.get("long");

  console.log(lat);
  return (
    <div className="w-full  mt-8 md:mt-0">
      {" "}
      {/* Set width to full */}
      <h3 className="text-3xl font-semibold text-gray-700 mb-4 p-5">
        Your Location
      </h3>
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8365724670785!2d${long}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164bcb59a44f27e9%3A0x4b66ffb9399b750!2sYour%20Location!5e0!3m2!1sen!2sus!4v1632868717050`}
        width="300"
        height="500"
        loading="lazy"
        className="w-full mx-auto p-5 "
      ></iframe>
    </div>
  );
};
export default Location;
