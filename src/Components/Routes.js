import Main from "./Main";
import Home from "./Home";
import UniPage from "./UniPage";
import Modal from "./Modal";
import AllUnis from "./AllUnis";
import SearchedUnis from "./SearchedUnis";
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
          fetch(`http://localhost:5000/universities/${params.name}`),
        element: <UniPage></UniPage>,
      },
      {
        path: "/searchedUniPage/:name",
        loader: ({ params }) =>
          fetch(`http://universities.hipolabs.com/search?name=${params.name}`),
        element: <SearchedUnis></SearchedUnis>,
      },
      {
        path: "/modal/:name",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/numOfUniversities/${params.name}`),
        element: <Modal></Modal>,
      },
      {
        path: "/allUnis",
        loader: () => fetch(`http://localhost:5000/allUniversities`),
        element: <AllUnis></AllUnis>,
      },
    ],
  },
]);

export default router;
