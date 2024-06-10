import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import MainPage from "./MainPage";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import RouterLayout from "./RouterLayout";
import NotFoundPage from "./NotFoundPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RouterLayout/>}>
        <Route path="/" element={<MainPage />} />
        <Route path="first" element={<FirstPage />} />
        <Route path="second" element={<SecondPage />} />
        <Route path="third" element={<ThirdPage />} />
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}



export default App;
