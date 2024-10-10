import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import "@/styles/FixedBookAppointment.css";

const FixedBookAppointment = () => {
  return (
    <div className="fixed bottom-0 right-0">
      <div className="bottomBook">
        <span className="tooltip text-white"> Book an Appointment </span>
        <span>
          {" "}
          <FaCalendarAlt />
        </span>
      </div>
    </div>
  );
};

export default FixedBookAppointment;
