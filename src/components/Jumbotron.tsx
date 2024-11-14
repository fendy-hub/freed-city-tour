import Image from "next/image";
import React from "react";
import backgroundImg from "../image/candi.avif";

const Jumbotron = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      <div
        className="h-screen">
          <Image src={backgroundImg} alt="candi"
          fill
          className="object-cover"
          />
        <div className="flex relative items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Discover The City Like Never Before
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
