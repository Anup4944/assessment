import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import CreateEventPage from "./components/CreateEventPage/CreateEventPage.jsx";
import EventPage from "./components/EventPage/EventPage.jsx";
import EditEventDetails from "./components/EventPage/EditEventDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create" element={<CreateEventPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/event/edit" element={<EditEventDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
