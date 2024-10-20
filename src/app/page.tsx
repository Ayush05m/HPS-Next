"use client";
import Image from "next/image";
import { Hero } from "@/components/pageComponent/Hero";
import { WhatweCard } from "@/components/pageComponent/WhatweCard";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <WhatweCard />
    </div>
  );
}
