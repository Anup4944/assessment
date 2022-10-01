import React from "react";
import "./eventPage.css";
import { AiOutlineCalendar } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";

const EventPage = () => {
  const eventDt = JSON.parse(window.sessionStorage.getItem("data"));
  return (
    <div className="event">
      <div className="leftEvent">
        <div className="topDetails">
          <h4>{eventDt.eventName}</h4>
          <h5>Hosted By {eventDt.hostName}</h5>
        </div>
        <div className="bottomDetails">
          <div className="time">
            <AiOutlineCalendar />
            <div>
              {eventDt.start} <br /> {eventDt.end}
            </div>
          </div>
          <div className="address">
            <GoLocation />
            <div>{eventDt.location}</div>
          </div>
        </div>
        <Link
          to="/event/edit"
          style={{
            textDecoration: "none",
            border: "1px solid #e87bf8",
            padding: "10px",
          }}
        >
          Edit
        </Link>
      </div>

      <div className="rightEvent">
        <img src={eventDt.photo} alt="img" />
      </div>
    </div>
  );
};

export default EventPage;
