import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Checkpage from "./pages/Checkpage";
import Upload from "./components/Check/Upload";
import Result from "./components/Check/Result";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="check" element={<Checkpage />}>
        <Route path="upload" element={<Upload />} />
        <Route path="result" element={<Result />} />/
      </Route>
      <Route path="not" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
