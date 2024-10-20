import React from "react";
import { RiHealthBookFill } from "react-icons/ri";

const HeroCorousel = () => {
  return (
    <div>
      <div className="heroCorouselCover min-h-screen flex justify-center ">
        <div className="heroCorouselHome flex justify-center items-center flex-col">
          <div
            className="heroCorouselHeader md:min-h-[600px] flex justify-center items-center md:w-[80%] w-[95%] min-h-[400px] rounded-badge mt-16 border-red-600 "
            style={{
              background: `linear-gradient(to right, #11949d, #113775)`,
            }}
          >
            <div className="heroHeadCover">
              <div className="HeroHead flex flex-col justify-center gap-6 mb-14 items-center">
                <h1 className="md:text-5xl text-2xl tracking-wider w-[70%] text-center text-white font-bold">
                  Well-managed hospitals improve health outcomes for everyone,
                  everywhere.
                </h1>
                <div className="heroAppointmentBtn flex gap-4 justify-center items-center font-bold text-xl px-4 py-3 text-neutral-200 cursor-pointer rounded-badge hover:text-slate-50">
                  <a href="/book-an-appointment">
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                      <span className="relative flex justify-center items-center gap-4 text-xl px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        <RiHealthBookFill />
                        Book an Appointment
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="heroCorouselContent flex justify-center items-center text-[#383683]">
            <div className="heroAmbition w-[85%] md:w-[72%]  -mt-24 bg-white flex justify-between flex-col lg:flex-row md:p-16 p-5 rounded-badge">
              <div className="heroAmbitionContent lg:w-[58%]">
                <h1 className="text-xl font-semibold tracking-wide p-7 md:p-0">
                  <span className="border-b-2 border-[#383683] md:py-3">
                    {" "}
                    Knowledge. Interaction. Ambition.
                  </span>
                </h1>
                <p className="text-xl md:text-3xl font-semibold md:mt-10">
                  Through our members, we are the voice of hospitals and health
                  systems on the global stage.
                </p>
                <p className="mt-10 text-black">
                  We connect healthcare leaders, supporting them to excel
                  through training and development. We create forums for
                  international, peer to peer knowledge exchange. Our events,
                  programmes, and special interest groups showcase good
                  practices. We work in partnership with international
                  organizations on key issues for our members.
                </p>
                <p className="text-black my-8">
                  We believe in global learning that leads to local action. In
                  September 2024, we gathered the world's healthcare leaders at
                  the 47th IHF World Hospital Congress in Rio de Janeiro,
                  Brazil, to connect with peers for knowledge exchange and
                  networking that can transform healthcare delivery worldwide.
                </p>

                <div className="AboutBtn btn hover:text-white btn-outline btn-accent ">
                  About Us
                </div>
              </div>
              <div className="heroContentImg lg:w-[35%] flex items-center my-10 lg:m-0">
                <img src="/bg.jpg" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCorousel;
