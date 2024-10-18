import React from "react";
import { TCBcard } from "../sideComponents/TCBcard";
import { title } from "process";

export const WhatweCard = () => {
  return (
    <div className="whatwedo flex flex-col justify-center items-center bg-[#eef7f7] py-10">
      <div className="w-[85%] border-red-500">
        <div className="whatweHeader justify-start">
          <h1 className="text-2xl py-14">
            <span className="text-[#113876] font-bold border-b-2 border-blue-900 py-2">
              What we do
            </span>
          </h1>
        </div>
        <div className="content flex gap-10 justify-between">
          <div className="left w-[30%]">
            <h1 className="text-3xl pb-5">
              <span className="font-bold tracking-wider text-[#113876]">
                Connect with Patient
              </span>
            </h1>
            <p>
              We provide our members with a platform for knowledge exchange and
              networking with different actors in the health sector. Motivated
              by a shared commitment to well-managed hospitals, our members act
              together to improve the standard, quality, and level of healthcare
              service delivery.
            </p>
          </div>
          <div className="right grid grid-cols-2 gap-10">
            {weDoCardData.map((item) => {
              return <TCBcard title={item.title} content={item.content} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const weDoCardData = [
  {
    title: "Knowledge exchange",
    content:
      "Connect at the annual World Hospital Congress, virtual events, and study tours. Special interest groups focus on the key issues for today’s hospital managers. Annual IHF Awards recognize and share good practice.",
  },
  {
    title: "Knowledge exchange",
    content:
      "Connect at the annual World Hospital Congress, virtual events, and study tours. Special interest groups focus on the key issues for today’s hospital managers. Annual IHF Awards recognize and share good practice.",
  },
  {
    title: "Knowledge exchange",
    content:
      "Connect at the annual World Hospital Congress, virtual events, and study tours. Special interest groups focus on the key issues for today’s hospital managers. Annual IHF Awards recognize and share good practice.",
  },
  {
    title: "Knowledge exchange",
    content:
      "Connect at the annual World Hospital Congress, virtual events, and study tours. Special interest groups focus on the key issues for today’s hospital managers. Annual IHF Awards recognize and share good practice.",
  },
];
