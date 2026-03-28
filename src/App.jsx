import { Route, Routes } from "react-router-dom";
import "./App.css";

import MapSection from "./components/Contact/MapSection";
import Layout from "./components/layouts/Layout.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Contact from "./pages/Contact";
import EventsPage from "./pages/EventsPage";
import HomePage from "./pages/HomePage.jsx";
import LeadershipPage from "./pages/LeadershipPage";

function App() {
  return (
    <Routes>
      {/* Shared Layout */}
      <Route path="/" element={<Layout />}>
        {/* HOME */}
        <Route index element={<HomePage />} />

        {/* OTHER PAGES */}
        <Route path="about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="leadership" element={<LeadershipPage />} />
      </Route>
      <Route path="/mapSection" element={<MapSection />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
