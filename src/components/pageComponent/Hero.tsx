import { linearGradient } from "framer-motion/client";
import { useEffect, useRef, useState } from "react";
import { FaUserDoctor } from "react-icons/fa6";
import HeroCorousel from "../sideComponents/HeroCorousel";

export function Hero() {
  const [scrollIndex, setScrollIndex] = useState(0);

  return (
    <>
      <div className="flex overflow-x-scroll scroll-m-0 heroScroll">
        <HeroCorousel />
      </div>
    </>
  );
}
