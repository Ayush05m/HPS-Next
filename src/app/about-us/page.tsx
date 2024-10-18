import InfiniteTestimonials from "@/components/sideComponents/InfiniteTestimonials";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";

const AboutUs = () => {
  return (
    <div className="about-page bg-gray-200">
      <div className="aboutCover">
        <h1>About</h1>
        <div className="aboutContent">
          <p>
            Welcome to GHC Hospital, a premier healthcare facility that caters
            to patients from all over the world seeking the best medical care.
            We understand that seeking medical treatment in a foreign country
            can be a daunting experience, which is why we have created a warm
            and welcoming environment for international patients.
          </p>
          <p>
            Our hospital is staffed with highly trained and experienced medical
            professionals who are committed to providing exceptional care to all
            our patients. We offer a wide range of medical services, including
            state-of-the-art diagnostic and treatment options, to ensure that
            our patients receive the best possible care.
          </p>
          <p>
            At GHC Hospital, we understand the unique needs of international
            patients, which is why we have a dedicated International Patient
            Services team that is available to assist you every step of the way.
            From coordinating medical appointments and transportation to
            arranging accommodations and translation services, our team is
            committed to making your experience as smooth and stress-free as
            possible.
          </p>
        </div>
      </div>
      <InfiniteTestimonials />
    </div>
  );
};

export default AboutUs;
