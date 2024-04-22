"use client";
import React from "react";
import { Meteors } from "@/components/ui/meteors";

const page = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-2 w-2 text-gray-300"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
        />
      </svg>
      <h1>Hello World</h1>
      <Meteors number={60} />
    </div>
  );
};

export default page;
