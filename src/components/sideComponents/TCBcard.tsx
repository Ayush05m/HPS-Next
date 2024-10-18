import React from "react";

export const TCBcard = (data: any) => {
  return (
    <div className="TCBcard peer flex flex-col justify-center items-center max-w-[400px] border p-5 rounded-3xl bg-white hover:bg-[#113876] hover:text-white hover:-translate-y-7">
      <h2 className="text-xl font-semibold py-3 text-[#113876] tracking-wider">
        {data.title}
      </h2>
      <p className="text-center tracking-wide">{data.content}</p>
      <div className="AboutBtn btn hover:text-white btn-outline btn-accent mt-7 rounded-full px-10">
        {data.btnText || "Read more"}{" "}
      </div>
    </div>
  );
};
