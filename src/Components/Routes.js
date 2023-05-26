import Main from "./Main";
import Home from "./Home";
import UniPage from "./UniPage";
import AllUnis from "./AllUnis";
import SearchedUnis from "./SearchedUnis";
import ApiSetUp from "./ApiSetUp";
import ApiPage from "./ApiPage";
const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/uniPage/:name",
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/universities/countryName=${params.name}`
          ),
        element: <UniPage></UniPage>,
      },
      {
        path: "/searchedUniPage/:name",
        loader: ({ params }) =>
          fetch(`http://universities.hipolabs.com/search?name=${params.name}`),
        element: <SearchedUnis></SearchedUnis>,
      },

      {
        path: "/allUnis",
        loader: () => fetch(`http://localhost:5000/allUniversities`),
        element: <AllUnis></AllUnis>,
      },
      {
        path: "/apiSetup",
        element: <ApiSetUp></ApiSetUp>,
      },
      {
        path: "/apiPage",
        element: <ApiPage></ApiPage>,
      },
    ],
  },
]);

export default router;
