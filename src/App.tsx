import ArtworksListContent from "./components/artworks-list-content";
import AboutPage from "./components/about-page";
import Header from "./components/header";
import {
  createBrowserRouter,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";

const Root = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ArtworksListContent />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </div>
  );
};

const router = createBrowserRouter([{ path: "*", Component: Root }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
