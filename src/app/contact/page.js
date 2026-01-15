"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const page = () => {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="mt-28 mb-20">
      {/* ===== TOP HEADING ===== */}
      <div
        data-aos="fade-down"
        className="max-w-3xl mx-auto text-center mb-12 px-4"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-red-500">
          Contect Us
        </h2>
        <p className="mt-4 text-gray-600 text-sm sm:text-base">
          Have a question, project idea, or need support? Fill out the form
          below and our team will get back to you shortly.
        </p>
      </div>

      {/* ===== MAIN CARD ===== */}
      <div
        data-aos="fade-up"
        className="max-w-6xl mx-auto grid lg:grid-cols-5 items-stretch p-2 shadow-[0_2px_10px_-3px_rgba(115,120,131,0.6)] rounded-lg px-4 sm:px-6 lg:px-0"
      >
        {/* ===== LEFT INFO PANEL ===== */}
        <div
          data-aos="fade-right"
          className="lg:col-span-2 bg-gradient-to-br from-red-600 via-red-500 to-red-700
          rounded-lg p-6 sm:p-8 h-full relative overflow-hidden max-lg:order-1 max-lg:mt-8"
        >
          <h3 className="text-xl sm:text-2xl text-white font-semibold">
            Contact Information
          </h3>

          <p className="text-sm text-red-100 mt-4 max-w-sm">
            Have some big idea or brand to develop and need help? Reach out to
            us anytime.
          </p>

          <div className="mt-12 relative z-50">
            <ul className="space-y-6">
              <li className="text-red-100 hover:text-white text-sm">
                info@example.com
              </li>
              <li className="text-red-100 hover:text-white text-sm">
                +91 99999 88888
              </li>
              <li className="text-red-100 hover:text-white text-sm">
                Delhi, India
              </li>
            </ul>

            <ul className="flex gap-4 mt-10">
              <li className="bg-white/20 hover:bg-white h-9 w-9 rounded-full"></li>
              <li className="bg-white/20 hover:bg-white h-9 w-9 rounded-full"></li>
              <li className="bg-white/20 hover:bg-white h-9 w-9 rounded-full"></li>
            </ul>
          </div>

          <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-white/10"></div>
          <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-white/10"></div>
        </div>

        {/* ===== FORM SECTION ===== */}
        <div
          data-aos="fade-left"
          className="px-4 sm:px-8 py-6 lg:col-span-3"
        >
          <form className="space-y-2">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <input
                type="text"
                placeholder="First Name"
                required
                minLength={2}
                className="border-b border-gray-300 py-3 outline-none focus:border-red-500 text-sm"
              />

              <input
                type="text"
                placeholder="Last Name"
                required
                minLength={2}
                className="border-b border-gray-300 py-3 outline-none focus:border-red-500 text-sm"
              />

              <input
                type="tel"
                placeholder="Phone No."
                required
                pattern="[0-9]{10}"
                title="Enter 10 digit phone number"
                className="border-b border-gray-300 py-3 outline-none focus:border-red-500 text-sm"
              />

              <input
                type="email"
                placeholder="Email"
                required
                className="border-b border-gray-300 py-3 outline-none focus:border-red-500 text-sm"
              />

              <textarea
                placeholder="Write Message"
                required
                minLength={10}
                className="md:col-span-2 border-b border-gray-300 py-3 outline-none focus:border-red-500 text-sm resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              data-aos="zoom-in"
              className="mt-10 bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded-lg text-sm font-medium w-full sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* ===== FULL WIDTH MAP ===== */}
      <div
        data-aos="fade-up"
        className="mt-20 w-full px-4 sm:px-8 lg:px-14"
      >
        <h3 className="text-center text-xl font-semibold text-slate-900 mb-6">
          Our Location – Kanak Drishti Infotech
        </h3>

        <div className="w-full h-[300px] sm:h-[420px] lg:h-[480px] rounded-lg overflow-hidden">
          <iframe
            title="Kanak Drishti Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.535189031957!2d77.3182618742208!3d28.583717186298085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5acd86d2d77%3A0x34955dbaf07baf15!2sKanak%20Drishti%20Infotech%20Pvt.Ltd.!5e0!3m2!1sen!2sin!4v1768223375500!5m2!1sen!2sin"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default page;
