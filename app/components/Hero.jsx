"use client";
import React from 'react';
import Hyperspeed from './Hyperspeed';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Hyperspeed />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl lg:text-8xl">
          DROPEE
        </h1>
        <p className="max-w-2xl mb-8 text-xl text-gray-300 md:text-2xl">
          Your effortless solution for stress-free daily commuting.
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-3 text-lg font-semibold text-black bg-white rounded-lg hover:scale-105">
            Ride Now
          </button>
          <button className="px-8 py-3 text-lg font-semibold text-white border-2 border-white rounded-lg hover:scale-105">
            How It Works
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;