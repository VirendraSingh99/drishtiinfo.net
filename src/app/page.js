"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Code,
  Smartphone,
  Globe,
  Database,
  Users,
  TrendingUp,
  Zap,
  CheckCircle,
  Star,
  Quote,
} from "lucide-react";

const Page = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Founder, TechNova",
      message:
        "Amazing experience! The team delivered our ERP system on time with excellent quality. Highly recommended.",
      rating: 5,
    },
    {
      name: "Anjali Verma",
      role: "Marketing Head, Growthify",
      message:
        "Professional team with great support. Our website and CRM increased our leads significantly.",
      rating: 5,
    },
    {
      name: "Amit Singh",
      role: "Director, BizCore Solutions",
      message:
        "Very reliable and transparent process. The mobile app works smoothly and looks premium.",
      rating: 4,
    },
  ];

  const services = [
    {
      icon: Database,
      title: "MLM Softwere",
      description:
        "Complete business automation system for inventory, accounting, HR, and operations management.",
      color: "from-red-500 to-red-500",
    },
    {
      icon: Users,
      title: " Travel CRM Software",
      description:
        "Customer relationship management system to track leads, sales, and customer interactions.",
      color: "from-red-500 to-red-500",
    },
    {
      icon: Globe,
      title: "Sifttopay-Payment Orchestration",
      description:
        "Modern, fast, and secure websites & web applications tailored for your business.",
      color: "from-red-500 to-red-500",
    },
    {
      icon: Smartphone,
      title: "Task Managemnt Softwere",
      description:
        "High-performance Android & iOS apps to reach customers anywhere, anytime.",
      color: "from-red-500 to-red-500",
    },
    {
      icon: Code,
      title: "HRMS Software",
      description:
        "Custom-built software solutions designed to match your business needs.",
      color: "from-red-500 to-red-500",
    },
  ];

  const features = [
    "24/7 Technical Support",
    "Affordable Pricing",
    "Fast Project Delivery",
    "Quality Assured Solutions",
  ];

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-red-50 via-white to-red-100 py-16 sm:py-20"
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div
              className={`space-y-6 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h1 className="text-4xl mt-12 sm:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-tight">
                Transform Your
                <span className="block text-red-500">Business Digitally</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 max-w-xl">
                We build high-quality software, websites, and mobile
                applications at affordable prices to help your business grow
                faster.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-red-500 text-white font-semibold rounded-lg hover:shadow-xl transition transform hover:scale-105 flex items-center gap-2">
                  Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-lg border border-slate-300 hover:border-red-500 transition">
                  Call Now: +91 XXXXX XXXXX
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-red-500" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative max-w-md mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800"
                  alt="IT Team"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                />

                <div className="absolute -bottom-6 left-4 right-4 sm:left-auto sm:-left-6 bg-white rounded-xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-800">95%</p>
                      <p className="text-xs text-slate-600">
                        Client Satisfaction
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* TOP HEADING */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block bg-red-100 text-red-600 text-sm font-semibold px-4 py-1 rounded-full">
              Who We Are
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
              Trusted Software Development Company
              <span className="block text-red-500">in India</span>
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              We help startups and enterprises build powerful, scalable, and
              secure digital products that drive real business growth.
            </p>
          </div>

          {/* MAIN CONTENT */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT IMAGE */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=900"
                alt="Software Development Team"
                className="rounded-2xl shadow-xl w-full object-cover"
              />

              <div className="absolute -bottom-6 left-6 bg-red-600 text-white px-5 py-3 rounded-xl shadow-lg">
                <p className="text-sm font-semibold">10+ Years Experience</p>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Building Smart Software Solutions
              </h3>

              <p className="text-slate-600 text-lg">
                We are a trusted software company delivering high-quality web,
                mobile, and enterprise software solutions tailored to your
                business goals. Our experienced team focuses on innovation,
                performance, and security in every solution we build, helping
                your business stay ahead in the digital world.
              </p>

              <div className="pt-6 flex gap-4">
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                  Get Started
                </button>
                <button className="border border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 rounded-lg font-semibold transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our <span className="text-red-500">Softweres</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">
              Complete digital solutions for your business growth
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl transition transform hover:-translate-y-2"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                  <button className="mt-6 text-red-500 font-semibold flex items-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="bg-gradient-to-br from-red-50 via-white to-red-100 py-16 sm:py-20"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Zap className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 mb-8">
            Contact us today and turn your idea into a powerful digital
            solution. Free consultation available.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-red-500 text-white font-semibold rounded-lg hover:shadow-2xl transition transform hover:scale-105">
              WhatsApp Now
            </button>
            <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:shadow-xl transition">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              What Our <span className="text-red-500">Clients Say</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">
              Trusted by businesses across India
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition"
              >
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-red-500 mb-4" />

                {/* Message */}
                <p className="text-slate-700 leading-relaxed mb-6">
                  “{item.message}”
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < item.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-slate-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Client Info */}
                <div>
                  <p className="font-bold text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div class="max-w-7xl max-lg:max-w-3xl mx-auto bg-white p-4">
        <div class="text-center px-6">
          <h2 class="text-slate-900 text-3xl font-bold">Contact Us</h2>
          <p class="text-[15px] text-slate-600 mt-4">
            Have some big idea or brand to develop and need help?
          </p>
        </div>

        <div class="grid lg:grid-cols-5 items-center p-2 shadow-[0_2px_10px_-3px_rgba(115,120,131,0.6)] rounded-lg mt-12">
          <div
            class="lg:col-span-2 bg-gradient-to-br from-red-600 via-red-500 to-red-700
             rounded-lg p-6 h-full max-lg:order-1 relative overflow-hidden max-lg:mt-12"
          >
            <h3 class="text-[24px] text-white font-semibold">
              Contact Information
            </h3>

            <p class="text-[15px] text-red-100 mt-4">
              Have some big idea or brand to develop and need help?
            </p>

            <div class="mt-14 relative z-50">
              <ul class="space-y-8">
                <li class="flex items-center text-red-100 hover:text-white">
                  <span class="ml-4 text-sm">info@example.com</span>
                </li>
                <li class="flex items-center text-red-100 hover:text-white">
                  <span class="ml-4 text-sm">+91 99999 88888</span>
                </li>
                <li class="flex items-center text-red-100 hover:text-white">
                  <span class="ml-4 text-sm">Delhi, India</span>
                </li>
              </ul>

              <ul class="flex gap-4 mt-14">
                <li class="bg-white/20 hover:bg-white h-9 w-9 rounded-full flex items-center justify-center"></li>
                <li class="bg-white/20 hover:bg-white h-9 w-9 rounded-full flex items-center justify-center"></li>
                <li class="bg-white/20 hover:bg-white h-9 w-9 rounded-full flex items-center justify-center"></li>
              </ul>
            </div>

            <div class="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-white/10"></div>
            <div class="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-white/10"></div>
          </div>

          <div class="px-4 sm:px-8 py-4 lg:col-span-3">
            <form>
              <div class="grid md:grid-cols-2 gap-8">
                <input
                  type="text"
                  placeholder="First Name"
                  class="border-b border-gray-300 py-3 outline-none focus:border-red-500"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  class="border-b border-gray-300 py-3 outline-none focus:border-red-500"
                />

                <input
                  type="number"
                  placeholder="Phone No."
                  class="border-b border-gray-300 py-3 outline-none focus:border-red-500"
                />

                <input
                  type="email"
                  placeholder="Email"
                  class="border-b border-gray-300 py-3 outline-none focus:border-red-500"
                />

                <textarea
                  placeholder="Write Message"
                  class="md:col-span-2 border-b border-gray-300 py-3 outline-none focus:border-red-500"
                ></textarea>

                <div class="md:col-span-2">
                  <h6 class="text-sm font-medium text-slate-900">
                    Select Subject
                  </h6>
                  <div class="flex gap-6 mt-3">
                    <label class="flex items-center gap-2 text-sm">
                      <input type="radio" name="subject" checked />
                      General Inquiry
                    </label>
                    <label class="flex items-center gap-2 text-sm">
                      <input type="radio" name="subject" />
                      Technical Support
                    </label>
                    <label class="flex items-center gap-2 text-sm">
                      <input type="radio" name="subject" />
                      Website Feedback
                    </label>
                  </div>
                </div>
              </div>

              <button class="mt-10 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-sm font-medium">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
