import React from "react";
import Image from "next/image";
import InfiniteTestimonials from "@/components/sideComponents/InfiniteTestimonials";
import { BsPersonStanding } from "react-icons/bs";
import { FaBedPulse } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { FaRegHospital } from "react-icons/fa";

import NumberAnimation from "@/components/sideComponents/Animation";

const AboutUs = () => {
  return (
    <div className="about-page ">
      <div className="aboutCover">
        <div className="aboutContent flex flex-col items-center">
          <div className="vision w-full p-10 px-20 flex flex-col gap-5 bg-white">
            <h1
              className="text-3xl font-extrabold text-[#113876] "
              style={{ letterSpacing: "3px" }}
            >
              Vision & Mission
            </h1>
            <p>
              <span className="font-bold text-xl">Vision: </span>
              <span>
                Provide each patient with the world-class care, exceptional
                service and compassion we would want for our loved ones.
              </span>
            </p>
            <p>
              <span className="font-bold text-xl">Mission: </span>
              <span>
                Suyash Hospital is a compassionate provider of patient-centred
                health services. We respect each person as a member of the
                hospital community. We are committed to our standards of service
                excellence and dedicated to exceeding the expectations of those
                we serve. We accept personal accountability for the work we do
                and consistently strive to provide the highest quality, safe
                patient care. We are committed to a supportive environment that
                encourages new ideas and creativity.
              </span>
            </p>
            <img src="/public/vision_mission.jpg" alt="" className="" />
          </div>
          <div className="aboutVisionImg flex justify-center bg-[#e6e3e4] w-[99vw]">
            <Image
              src="/vision_mission.jpg"
              alt=""
              className="w-[70%]"
              width={500}
              height={500}
            />
          </div>
          <div className="currStats flex flex-wrap min-h-96 justify-evenly w-[99vw] bg-[#dfedf0] py-10">
            <div className="stat1 flex flex-col gap-2 justify-center items-center p-10 w-80">
              <BsPersonStanding className="text-5xl h-20" />
              <NumberAnimation targetNumber={8765} className={"text-xl"} />
              <p className="uppercase text-center font-thin text-gray-500 text-lg tracking-wider">
                outpatient treatment cases
              </p>
            </div>
            <div className="stat2 flex flex-col gap-2 justify-center items-center p-10 w-80">
              <FaBedPulse className="text-5xl h-20" />
              <NumberAnimation targetNumber={432} />
              <p className="uppercase text-center font-thin text-gray-500 text-lg tracking-wider">
                inpatient patients
              </p>
            </div>
            <div className="stat3 flex flex-col gap-2 justify-center items-center p-10 w-80">
              <FaUserDoctor
                className="text-5xl h-20"
                fill=""
                strokeWidth={0.35}
              />
              <NumberAnimation targetNumber={125} />
              <p className="uppercase text-center font-thin text-gray-500 text-lg tracking-wider">
                employees
              </p>
            </div>
            <div className="stat4 flex flex-col gap-2 justify-center items-center p-10 w-80">
              <FaRegHospital className="text-5xl h-20" />
              <NumberAnimation targetNumber={25} />
              <p className="uppercase text-center font-thin text-gray-500 text-lg tracking-wider">
                medical departments
              </p>
            </div>
          </div>
          <div className="service py-20 w-full p-10 px-20 flex flex-col gap-5 bg-[#ffffff50]">
            <h1
              className="text-2xl p-4 font-extrabold text-[#113876] pt- 10"
              style={{ letterSpacing: "3px", lineHeight: "50px" }}
            >
              Services & Facilities
            </h1>
            <p>
              <span>
                We provide best Superspeciality healthcare provider in Central
                India. The Healthcare segment consists and provide care in over
                40 specialties, including Gastroenterology, Urosurgery, Joint
                Replacement & Orthopedics Surgery, Advance Laparoscopic surgery,
                surgical Gastroenterology & General Surgery, Neuro sciences,
                Plastic Surgery, Cardiology & Cardiac Cathlab, Oncology, ENT,
                Pediatrics, Nephrology & Dialysis, Neurology, Oral, Dental &
                Maxillofacial Surgery, Physiotherapy, Obstetrics & Gynaecology,
                Pulmonology, Anesthesiology, Radiology & Diagnostics,
                Infertility Treatment, Cosmetic & Reconstructive Gynecology.
                <span className="font-bold">
                  {" "}
                  250 bedded hospital performed more than 3,00,000 OPD & health
                  checks, more than 40,000 successful General & Laparoscopic
                  Surgeries, 7 Ultra modern operation theater, 60 modern & full
                  facilitated ICU for critical patients care.
                </span>{" "}
                24 Hours emergency, trauma & ambulance services along with
                experienced doctors & experts team in each department.
              </span>
            </p>
            <img src="../../assets/vision_mission.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="testimonials flex justify-center pb-24">
        <InfiniteTestimonials />
      </div>
    </div>
  );
};

export default AboutUs;
