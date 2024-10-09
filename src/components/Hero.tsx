import { linearGradient } from "framer-motion/client";
import { useEffect, useRef, useState } from "react";
import { FaUserDoctor } from "react-icons/fa6";
import HeroCorousel from "./HeroCorousel";

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
        <HeroCorousel />
      </div>
    </>
  );
}
