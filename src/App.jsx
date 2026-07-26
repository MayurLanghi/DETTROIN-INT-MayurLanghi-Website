import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default App;