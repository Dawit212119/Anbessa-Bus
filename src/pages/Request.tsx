import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "4 killo-mexico", label: "4 killo-mexico" },
  { value: "mexico-bethel", label: "mexico-bethel" },
  { value: "22-cmc", label: "22-cmc" },
  { value: "ayat-atobstera", label: "ayat-atobstera" },
];
export default function Request() {
  // const [requestForm, setRequestForm] = useState({
  //   source: "",
  //   distination: "",
  // });
  // const [error, seterror] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("hello");
  // };
  const [selectedOption, setSelectedOption] = useState(null);

  //   handle submit

  const handleSubmit = (e) => {
    e.preventDefault();
    ///   fetch
    setSelectedOption(null);
    console.log("submit");
  };

  const handleChange = (option) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
  };
  return (
    <div className="flex   h-screen p-10  bg-black m-auto  ">
      <div>
        <div
          style={{ width: "300px", margin: "20px auto" }}
          className=" text-black border-r p-10"
        >
          <Select
            options={options}
            value={selectedOption}
            onChange={handleChange}
            isSearchable={true} // Enables search functionality
            placeholder="Select a route..."
          />
        </div>
        <button
          onClick={(e) => handleSubmit(e)}
          className="w-full bg-orange-500 hover:opacity-95 text-white py-2 rounded-lg"
        >
          Submit
        </button>
      </div>
      <div className="mx-auto">
        <p>jfdndrf</p>
        <p>dfklnvjerdfkbn</p>
      </div>
    </div>
  );
}

{
  /* <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md relative"> */
}

{
  /* <form onSubmit={handleSubmit} className="border-r pr-3">
        <div className="flex justify-center p-4 border-b border-gray-700  ">
          {" "}
          <p className="text-white text-lg font-bold"> where to go</p>
        </div>
        <div className="space-y-6 p-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Source
            </label>
            <input
              className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
              placeholder="$kilo"
              value={requestForm.source}
              onChange={(e) =>
                setRequestForm({ ...requestForm, source: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 font-medium mb-3">
              Distination
            </label>
            <input
              className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white"
              placeholder="pissa"
              value={requestForm.distination}
              onChange={(e) =>
                setRequestForm({ ...requestForm, distination: e.target.value })
              }
              required
            />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg"
          >
            submit
          </button>
        </div>
      </form> */
}
{
  /* </div> */
}
