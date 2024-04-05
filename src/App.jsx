import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Checkpage from "./pages/Checkpage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home/>}/>
      <Route path="/check" element={<Checkpage/>}/>
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
