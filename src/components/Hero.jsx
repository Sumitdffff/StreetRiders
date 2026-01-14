import React from "react";
import img from "../assets/img/hero.png";
import Button from "../layouts/Button";

const Hero = () => {
  return (
    <section className="bg-[#fef6f6] py-12 lg:py-20 px-5 lg:px-14">
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* left section */}
        <div className="flex-1 space-y-6">
          <h3
            className="text-red-500 font-semibold text-sm tracking-widest uppercase"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Welcome To StreetRiders
          </h3>
          <h1
            className="text-4xl font-extrabold leading-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Rent The Best Quality <span className="text-red-500"> Car's</span>{" "}
            With us
          </h1>
          <p
            className="text-gray-600 max-w-xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            We provide top-notch car rental services with affordable pricing and
            flexible options. Whether you're going on a trip or need a ride in
            town — we got you covered.
          </p>

          {/* button */}
          <div className="flex gap-4" data-aos="fade-up" data-aos-delay="400">
            <Button title="Book your Ride" hover={false} />
            <Button title="sell your Car" />
          </div>
        </div>

        {/* right section */}
        <div data-aos=" zoom-in-left">
          <img src={img} alt="car" />
        </div>
      </div>

      {/* form section */}
      <div
        className="bg-white shadow-lg p-6 rounded-lg max-w-5xl mx-auto mt-12 flex flex-col lg:flex-row items-center justify-between  gap-6"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {/* location */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <input
            type="text"
            placeholder=" choose your location"
            className="outline-none border-b w-full md:w-48 py-2 text-sm"
          />
          <faLocationArrow className="text-red-500"/>
        </div>

        {/* pickup date */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <input
            type="date"
            className="outline-none border-b w-full md:w-36 py-2 text-sm"
          />
        </div>

        {/* return date */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <input
            type="date"
            className="outline-none border-b w-full md:w-36 py-2 text-sm"
          />
        </div>

        {/* bookbutton */}
        <Button title="Book Your Ride" hover={false} />
      </div>
    </section>
  );
};

export default Hero;
