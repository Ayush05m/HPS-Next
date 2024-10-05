import { useEffect, useRef, useState } from "react";

export function Hero() {
  // const heroScroll = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    // const handleScroll = (e) => {
    //   console.log(e);
    // console.log(heroScroll);
    const heroScroll = document.querySelector(".heroScroll");

    //   const scrollWidth = heroScroll.innerWidth;
    // };
    // heroScroll.addEventListener("wheel", handleScroll);

    // return () => {
    //   heroScroll.removeEventListener("wheel", handleScroll);
    // };
  }, [scrollIndex]);

  return (
    <>
      <div className="flex overflow-x-scroll scroll-m-0 heroScroll">
        <div
          className="heroCorouselHome min-h-screen flex justify-end items-center  border-red-600 w-[100vw]"
          style={{
            backgroundImage:
              "url('/bg.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="HeroHead flex justify-end items-end mr-32 mt-10">
            <div className="heroAppointmentBtn font-bold text-2xl border p-6 text-neutral-200 bg-gray-700 hover:bg-gray-800 cursor-pointer rounded-badge hover:text-slate-50">Book an Appointment</div>
          </div>
        </div>
      </div>
    </>
  );
}
