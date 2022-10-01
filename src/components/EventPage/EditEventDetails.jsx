import React, { useState } from "react";
import "./eventPage.css";
import { useNavigate } from "react-router-dom";

const EditEventDetails = () => {
  const eventDt = JSON.parse(window.sessionStorage.getItem("data"));

  const [eventName, setEventName] = useState(eventDt.eventName);
  const [hostName, setHostName] = useState(eventDt.hostName);
  const [start, setStart] = useState(eventDt.start);
  const [end, setEnd] = useState(eventDt.end);
  const [location, setLocation] = useState(eventDt.location);
  const [photo, setPhoto] = useState(eventDt.photo);

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
        <h2>Edit Event Details</h2>
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
        <img
          src={eventDt.photo}
          alt="img"
          style={{ height: "50px", width: "60px" }}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleOnImgChange}
          required
        />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default EditEventDetails;
