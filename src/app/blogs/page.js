"use client";
import React, { useState } from "react";
import { Calendar, ArrowRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    tag: "TRAVEL CRM",
    image: "./TravelCrm.webp",
    title: "How Travel CRM Software Transforms Tourism Business",
    desc: "Discover how our Travel CRM Software streamlines booking management, customer relationships, and revenue tracking for travel agencies.",
    color: "from-red-500 to-red-500",
  },
  {
    id: 2,
    tag: "TASK MANAGEMENT",
    image: "./taskmanagement.jpg",
    title: "Boost Team Productivity with Task Management Software",
    desc: "Learn how efficient task management software can help your team collaborate better, meet deadlines, and achieve project goals.",
    color: "from-red-500 to-red-500",
  },
  {
    id: 3,
    tag: "MLM SOFTWARE",
    image: "./mlm.webp",
    title: "MLM Software: Complete Guide for Network Marketing Success",
    desc: "Everything you need to know about choosing the right MLM software for managing your network marketing business.",
    color: "from-red-500 to-red-500",
  },
  {
    id: 4,
    tag: "HRMS",
    image: "./hrms.webp",
    title: "Modern HRMS: Automating Employee Management",
    desc: "Explore how HRMS management software automates payroll, attendance, leave management, and performance tracking.",
    color: "from-red-500 to-red-500",
  },
  {
    id: 5,
    tag: "PAYMENT",
    image: "./siftopay.webp",
    title: "Payment Orchestration: Simplifying Multi-Gateway Payments",
    desc: "Understand how payment orchestration software helps businesses manage multiple payment gateways and reduce failures.",
    color: "from-red-500 to-red-500",
  },
];

export default function SoftwareBlog() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-white mt-24">
      {/* Hero Section */}
      <section
        className="relative py-24 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-red-500 mb-6">
            Blogs & Updates
          </h1>

          <p className="text-xl text-white max-w-3xl mx-auto">
            Expert articles on Travel CRM, Task Management, MLM, HRMS, and
            Payment Solutions to grow your business digitally.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-6 sm:px-10 lg:px-24 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {blogs.map((blog, index) => (
            <article
              key={blog.id}
              onMouseEnter={() => setHoveredCard(blog.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="bg-white rounded overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
              }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 p-4">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className={`w-full h-full object-contain transition-transform duration-700 ${
                    hoveredCard === blog.id ? "scale-110" : "scale-100"
                  }`}
                />

                {/* Tag Badge */}
                <span
                  className={`absolute top-6 right-6 bg-gradient-to-r ${blog.color} text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg`}
                >
                  {blog.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-red-500 mb-3 leading-tight hover:text-black transition-colors duration-300">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {blog.desc}
                </p>

                {/* CTA */}
                <div className="flex items-center justify-end pt-4 border-t border-gray-100">
                  <button className="flex items-center gap-2 text-red-600 font-semibold text-sm hover:gap-3 transition-all duration-300">
                    READ MORE
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
