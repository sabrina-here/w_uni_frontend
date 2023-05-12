import "./App.css";
import { useEffect, useState } from "react";
import Country from "./Country";
import { RouterProvider } from "react-router";
import router from "./Components/Routes";

function App() {
  // const [countries, setCountries] = useState([]);

  // const getCountries = () => {
  //   fetch("http://localhost:5000/countries")
  //     .then((res) => res.json())
  //     .then((data) => setCountries(data));
  // };

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

      {/* <button onClick={getCountries}>Click to start</button>
      <Country countries={countries}></Country> */}
    </div>
  );
}

export default App;
