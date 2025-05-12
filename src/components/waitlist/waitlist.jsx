'use client';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Waitlist() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        'service_ij4x562',           
        'template_tyqzx7l',          
        form.current,                
        'VKV4rEvVP-3bybjX_'          
      );
      console.log('EmailJS response:', result);
      alert("Thank you! You've been added to the waitlist.");
      form.current.reset();
    } catch (error) {
      

      alert("Error adding to waitlist. Try again.");
      console.error("EmailJS error object:", error);
      if (error?.text) {
        console.error("EmailJS error text:", error.text);
      }
    }

  };
  return (

<section id="section" className="bg-[#e4f4f2] text-black py-20 text-center">
  <div className="max-w-2xl mx-auto px-4">
    <h2 className="text-2xl sm:text-3xl font-semibold leading-tight font-sans text-black">
      Join the Movement
    </h2>
    <p className="mt-4 leading-normal font-sans text-black">
    We wish Backpack was ready today—the need is urgent. By joining the waitlist, you’ll be the first to know when it launches. No strings attached. You might even be selected to test it for free.<br />
  And just so you know: this is not an app where kids can spend money. There’ll be a free trial, and if you want to continue after that, the monthly fee will likely be <br />between 99–149 SEK.<br />
  P.S. Yes, parents can try Emmo too—we know you’re curious.
    </p>

    <form
      ref={form}
      onSubmit={sendEmail}
      className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
    >
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        className="w-full sm:w-[300px] px-6 py-1.5 rounded-full bg-white text-black placeholder:text-gray-500 font-sans text-base shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
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