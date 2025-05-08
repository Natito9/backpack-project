'use client'; 

import React from "react";

export default function Waitlist() {
  return (
    <section className="bg-[var(--main-color)] text-black py-20 text-center">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold leading-tight font-subtitle text-[var(--text-color)]">
          
          Join the Movement

        </h2>
        <p className="mt-4 text-placeholder leading-normal font-placeholder text-[var(--text-color)]">
          Be part of something special. Help us create a world where every child{" "}
          <br />
          has the tools to understand and express their emotions.
        </p>

        <form className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-[300px] px-6 py-1.5 rounded-full bg-white text-black placeholder:text-gray-400 font-placeholder text-base shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--main-color)]"
            required
          />

          <button
            type="submit"
            className="px-8 py-2 rounded-full bg-white font-semibold shadow-sm text-black cursor-pointer hover:bg-[#cde5e2]"
          >

            Join Waitlist

          </button>
          
        </form>
      </div>
    </section>
  );
}
