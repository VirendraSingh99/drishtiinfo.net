"use client";
import React from "react";
import Link from "next/link";

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-14 py-36">
      {/* ===== HERO SECTION ===== */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-red-500">
          Get in Touch
        </h1>
        <p className="mt-4 text-gray-600 text-base sm:text-lg">
          Have a question, project idea, or need support? Fill out the form
          below and our team will get back to you shortly.
        </p>
      </div>

      {/* ===== CONTACT PARENT CONTAINER ===== */}
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md overflow-hidden flex flex-col lg:flex-row gap-6">
        {/* ===== LEFT INFO BOX ===== */}
        <div className="lg:w-2/5 bg-gradient-to-br from-red-600 via-red-500 to-red-700 p-6 flex flex-col justify-between text-white">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-sm text-red-100 mb-6">
              Have some big idea or brand to develop and need help?
            </p>

            <ul className="space-y-4">
              <li>
                <span className="text-sm">
                  Email:{" "}
                  <a
                    href="mailto:sales@kanakdrishtiinfo.com"
                    className="underline"
                  >
                    sales@kanakdrishtiinfo.com
                  </a>
                </span>
              </li>
              <li>
                <span className="text-sm">
                  <Link href="tel:+919911210174" className="underline">
                    +91 9911210174
                  </Link>
                </span>
              </li>
              <li>
                <span className="text-sm">
                  <Link href="tel:+918744878555" className="underline">
                    +91 8744878555
                  </Link>
                </span>
              </li>
              <li>
                <span className="text-sm">
                  Address: Kanak Drishti Infotech Pvt Ltd, A-88, Sector 4 Noida,
                  Nearest Metro - Sector 16
                </span>
              </li>
            </ul>
          </div>

          {/* OPTIONAL SOCIAL ICONS */}
          <div className="flex gap-3 mt-6">
            <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center"></div>
            <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center"></div>
            <div className="h-8 w-8 bg-white/20 rounded-full flex items-center justify-center"></div>
          </div>
        </div>

        {/* ===== RIGHT FORM BOX ===== */}
        <div className="lg:w-3/5 p-6 flex flex-col justify-between">
          <form className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              placeholder="First Name"
              className="border-b border-gray-300 py-3 outline-none focus:border-red-500"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border-b border-gray-300 py-3 outline-none focus:border-red-500"
              required
            />
            <input
              type="tel"
              placeholder="Phone No."
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
              className="border-b border-gray-300 py-3 outline-none focus:border-red-500"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="border-b border-gray-300 py-3 outline-none focus:border-red-500"
              required
            />
            <textarea
              placeholder="Write Message"
              className="md:col-span-2 border-b border-gray-300 py-3 outline-none focus:border-red-500"
              required
            ></textarea>

            <button
              type="submit"
              className="md:col-span-2 mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* ===== MAP SECTION ===== */}
      <div className="mt-12 w-full">
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

export default ContactPage;
