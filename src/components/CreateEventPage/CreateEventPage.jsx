import React, { useState } from "react";
import "./createEventPage.css";
import { useNavigate } from "react-router-dom";

const CreateEventPage = () => {
  const [eventName, setEventName] = useState("");
  const [hostName, setHostName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [location, setLocation] = useState("");
  const [photo, setPhoto] = useState("");

  const navigate = useNavigate();

  const handleOnImgChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setPhoto(Reader.result);
      }
    };
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const data = { eventName, hostName, start, end, location, photo };
    await window.sessionStorage.setItem("data", JSON.stringify(data));
    navigate("/event");
  };
  return (
    <div className="eventDetails">
      <form className="eventForm" onSubmit={handleOnSubmit}>
        {" "}
        <h2>Event Details</h2>
        <input
          type="text"
          placeholder="Event name"
          required
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Host name"
          required
          value={hostName}
          onChange={(e) => setHostName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Start Date and Time"
          required
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
        <input
          type="text"
          placeholder="End Date and Time"
          required
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleOnImgChange}
          required
        />
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default CreateEventPage;
