import { Route, Routes } from "react-router-dom";
import "./App.css";

import MapSection from "./components/Contact/MapSection";
import Layout from "./components/layouts/Layout.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import Contact from "./pages/Contact";
import EventsPage from "./pages/EventsPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import { JuniorYouthMinistry } from "./pages/JuniorYouthMinistry.jsx";
import LeadershipPage from "./pages/LeadershipPage";
import NewsPage from "./pages/NewsPage.jsx";
import NotFound from "./pages/NotFound";
import { SeniorYouthMinistry } from "./pages/SeniorYouthMinistry.jsx";
import { ChildrenMinistry } from "./pages/ChildrenMinistry.jsx";
import { MenMinistry } from "./pages/MenMinistry.jsx";
import { WomenMinistry } from "./pages/WomenMinistry.jsx";
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
        <Route path="/news" element={<NewsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/ministries/SY" element={<SeniorYouthMinistry />} />{" "}
        <Route path="/ministries/JY" element={<JuniorYouthMinistry />} />
        <Route path="/ministries/children" element={<ChildrenMinistry />} />
        <Route path="/ministries/Men" element={<MenMinistry />} />
        <Route path="/ministries/Women" element={<WomenMinistry />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
