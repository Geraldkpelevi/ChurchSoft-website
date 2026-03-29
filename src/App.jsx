import { Route, Routes } from "react-router-dom";
import "./App.css";

import MapSection from "./components/Contact/MapSection";
import Layout from "./components/layouts/Layout.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage.jsx";
import LeadershipPage from "./pages/LeadershipPage";
import PastEvents from "./pages/PastEventsPage.jsx";
import UpcomingEvents from "./pages/UpcomingEventsPage.jsx";

function App() {
  return (
    <Routes>
      {/* Shared Layout */}
      <Route path="/" element={<Layout />}>
        {/* HOME */}
        <Route index element={<HomePage />} />

        {/* OTHER PAGES */}
        <Route path="about" element={<AboutPage />} />
        <Route path="leadership" element={<LeadershipPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mapSection" element={<MapSection />} />
        <Route path="/events/upcoming" element={<UpcomingEvents />} />
        <Route path="/events/past" element={<PastEvents />} />
      </Route>
    </Routes>
  );
}

export default App;
