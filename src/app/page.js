// "use client";
// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import {
//   ArrowRight,
//   Code,
//   Smartphone,
//   Globe,
//   Database,
//   Users,
//   TrendingUp,
//   Zap,
//   CheckCircle,
//   Star,
//   Quote,
// } from "lucide-react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// const Page = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const testimonials = [
//     {
//       name: "Rahul Sharma",
//       role: "Founder, TechNova",
//       message:
//         "Amazing experience! The team delivered our ERP system on time with excellent quality. Highly recommended.",
//       rating: 5,
//     },
//     {
//       name: "Anjali Verma",
//       role: "Marketing Head, Growthify",
//       message:
//         "Professional team with great support. Our website and CRM increased our leads significantly.",
//       rating: 5,
//     },
//     {
//       name: "Amit Singh",
//       role: "Director, BizCore Solutions",
//       message:
//         "Very reliable and transparent process. The mobile app works smoothly and looks premium.",
//       rating: 4,
//     },
//   ];

//   const services = [
//     {
//       icon: Database,
//       title: "MLM Softwere",
//       slug: "mlmsoftwere",
//       description:
//         "Our MLM Software empowers businesses to run smart, transparent, and scalable network marketing operations. With customizable compensation models (binary, matrix, hybrid), automated commission calculations, real-time performance tracking, and secure user dashboards, it enables frictionless growth. From distributor onboarding to payout clarity, this platform streamlines every touchpoint of your MLM ecosystem...",
//       color: "from-red-500 to-red-500",
//       image: "./mlm.webp",
//     },
//     {
//       icon: Users,
//       title: " Travel CRM Software",
//       slug: "travel-crm",
//       description:
//         "DRISHTI Travel CRM is the ultimate solution for travel agencies and tour operators. Manage customer relationships, bookings, suppliers, and operations from one powerful dashboard. Increase bookings, improve customer satisfaction, and scale your travel business efficiently...",
//       color: "from-red-500 to-red-500",
//       image: "./travelCrm.webp",
//     },
//     {
//       icon: Globe,
//       title: "Swiftopay-Payment Orchestration",
//       slug: "swiftopay",
//       description:
//         "Swiftopay – Payment Orchestration by Kanak Drishti Infotech is a next-generation platform that simplifies and centralizes payment operations. Instead of relying on a single gateway, Swiftopay allows businesses to integrate multiple payment gateways, processors, and methods into one powerful system. From intelligent routing to advanced fraud prevention, Swiftopay ensures higher success rates, reduced costs, and an enhanced customer experience. In today’s digital economy, businesses need flexibility, reliability, and scalability in payments. Relying on a single provider creates risks like downtime, higher fees, and failed transactions...",
//       color: "from-red-500 to-red-500",
//       image: "./siftopay.webp",
//     },
//     {
//       icon: Smartphone,
//       title: "Task Managemnt Softwere",
//       slug: "task-management",
//       description:
//         "Our Task Management Software helps you plan, prioritize, and execute tasks efficiently. From personal productivity to team collaboration, it offers intuitive dashboards, deadline tracking, reminders, and seamless integrations. Stay on top of your goals and boost productivity with an all-in-one task manager designed to fit your workflow...",
//       image: "./taskmanagement.jpg",
//     },
//     {
//       icon: Code,
//       title: "HRMS Software",
//       slug: "hrms-software",
//       description:
//         "Our HRMS Software is designed to simplify and automate every aspect of human resource management. From payroll processing and attendance tracking to recruitment, onboarding, and performance evaluations, this all-in-one solution helps organizations manage employee data seamlessly. With powerful features, easy integration, and a user-friendly interface, businesses can save time, reduce errors, and focus on building a productive workforce. Whether you’re a startup or a large enterprise, our HRMS ensures efficiency, compliance, and smarter HR decision-making...",
//       color: "from-red-500 to-red-500",
//       image: "./hrms.webp",
//     },
//   ];

//   const features = [
//     "24/7 Technical Support",
//     "Affordable Pricing",
//     "Fast Project Delivery",
//     "Quality Assured Solutions",
//   ];

//   return (
//     <div className="min-h-screen bg-slate-50 overflow-x-hidden">
//       {/* HERO SECTION */}
//       <section
//         id="home"
//         className="relative bg-gradient-to-br from-red-50 via-white to-red-100 py-16 sm:py-20"
//       >
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* LEFT CONTENT */}
//             <div
//               className={`space-y-6 transition-all duration-1000 ${
//                 isVisible
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-10"
//               }`}
//             >
//               <h1 className="text-4xl mt-12 sm:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-tight">
//                 Transform Your
//                 <span className="block text-red-500">Business Digitally</span>
//               </h1>

//               <p className="text-lg sm:text-xl text-slate-600 max-w-xl">
//                 We build high-quality software, websites, and mobile
//                 applications at affordable prices to help your business grow
//                 faster.
//               </p>

//               <div className="flex flex-wrap gap-4">
//                 <Link
//                   href="/contact"
//                   className="px-8 py-4 bg-red-500 text-white font-semibold rounded-lg hover:shadow-xl transition transform hover:scale-105 flex items-center gap-2"
//                 >
//                   Free Consultation
//                   <ArrowRight className="w-5 h-5" />
//                 </Link>

//                 <Link
//                   href="tel:+919911210174"
//                   className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-lg border border-slate-300 hover:border-red-500 transition"
//                 >
//                   Call Now: +91 9911210174
//                 </Link>
//               </div>

//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
//                 {features.map((feature, index) => (
//                   <div key={index} className="flex items-center gap-2">
//                     <CheckCircle className="w-5 h-5 text-red-500" />
//                     <span className="text-sm text-slate-600">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* RIGHT IMAGE */}
//             <div
//               className={`transition-all duration-1000 delay-300 ${
//                 isVisible
//                   ? "opacity-100 translate-x-0"
//                   : "opacity-0 translate-x-10"
//               }`}
//             >
//               <div className="relative max-w-md mx-auto">
//                 <img
//                   src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800"
//                   alt="IT Team"
//                   className="rounded-2xl shadow-2xl w-full object-cover"
//                 />

//                 <div className="absolute -bottom-6 left-4 right-4 sm:left-auto sm:-left-6 bg-white rounded-xl p-4 shadow-xl">
//                   <div className="flex items-center gap-3">
//                     <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
//                       <TrendingUp className="w-6 h-6 text-white" />
//                     </div>
//                     <div>
//                       <p className="text-2xl font-bold text-slate-800">95%</p>
//                       <p className="text-xs text-slate-600">
//                         Client Satisfaction
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="bg-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* TOP HEADING */}
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <span className="inline-block bg-red-100 text-red-600 text-sm font-semibold px-4 py-1 rounded-full">
//               Who We Are
//             </span>
//             <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900">
//               Trusted Software Development Company
//               <span className="block text-red-500">in India</span>
//             </h2>
//             <p className="mt-4 text-slate-600 text-lg">
//               We help startups and enterprises build powerful, scalable, and
//               secure digital products that drive real business growth.
//             </p>
//           </div>

//           {/* MAIN CONTENT */}
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* LEFT IMAGE */}
//             <div className="relative">
//               <img
//                 src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=900"
//                 alt="Software Development Team"
//                 className="rounded-2xl shadow-xl w-full object-cover"
//               />

//               <div className="absolute -bottom-6 left-6 bg-red-600 text-white px-5 py-3 rounded-xl shadow-lg">
//                 <p className="text-sm font-semibold">16+ Years Experience</p>
//               </div>
//             </div>

//             {/* RIGHT CONTENT */}
//             <div className="space-y-6">
//               <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
//                 Building Smart Software Solutions
//               </h3>

//               <p className="text-slate-600 text-lg">
//                 We are a trusted software company delivering high-quality web,
//                 mobile, and enterprise software solutions tailored to your
//                 business goals. Our experienced team focuses on innovation,
//                 performance, and security in every solution we build, helping
//                 your business stay ahead in the digital world.
//               </p>

//               <div className="pt-6 flex gap-4">
//                 <Link href="/contact">
//                   <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition">
//                     Get Started
//                   </button>
//                 </Link>
//                 <Link href="/softwere">
//                   <button className="border border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 rounded-lg font-semibold transition">
//                     Learn More
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SERVICES */}

//       <section id="services" className="py-16 sm:py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Heading */}
//           <div className="text-center mb-14">
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
//               Our <span className="text-red-500">Softweres</span>
//             </h2>
//             <p className="text-lg sm:text-xl text-slate-600">
//               Complete digital solutions for your business growth
//             </p>
//           </div>

//           {/* Slider */}
//           <Swiper
//             modules={[Autoplay]}
//             autoplay={{
//               delay: 2500,
//               disableOnInteraction: false,
//             }}
//             loop
//             spaceBetween={24}
//             breakpoints={{
//               0: { slidesPerView: 1 },
//               640: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//           >
//             {services.map((service, index) => {
//               const Icon = service.icon;

//               return (
//                 <SwiperSlide key={index}>
//                   <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col h-full">
//                     {/* Image */}
//                     <div className="relative h-48 bg-gray-50 flex items-center justify-center p-4">
//                       <img
//                         src={service.image}
//                         alt={service.title}
//                         className="max-h-full max-w-full object-contain"
//                       />
//                       <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow">
//                         <Icon className="w-6 h-6 text-red-500" />
//                       </div>
//                     </div>

//                     {/* Content */}
//                     <div className="p-6 flex flex-col flex-1">
//                       <h3 className="text-xl font-bold text-slate-900 mb-2">
//                         {service.title}
//                       </h3>

//                       <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">
//                         {service.description}
//                       </p>

//                       <Link
//                         href={`/softwere/${service.slug}`}
//                         className="mt-auto inline-flex items-center gap-2 text-red-500 font-semibold pt-4"
//                       >
//                         Learn More <ArrowRight className="w-4 h-4" />
//                       </Link>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               );
//             })}
//           </Swiper>
//         </div>
//       </section>

//       {/* CTA */}
//       <section
//         id="contact"
//         className="bg-gradient-to-br from-red-50 via-white to-red-100 py-16 sm:py-20"
//       >
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <Zap className="w-16 h-16 text-red-500 mx-auto mb-6" />
//           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
//             Ready to Start Your Project?
//           </h2>
//           <p className="text-lg sm:text-xl text-slate-600 mb-8">
//             Contact us today and turn your idea into a powerful digital
//             solution. Free consultation available.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             {/* WhatsApp */}
//             <button
//               onClick={() =>
//                 window.open(
//                   "https://wa.me/919911210174?text=Hello%20I%20am%20interested%20in%20your%20software%20services",
//                   "_blank"
//                 )
//               }
//               className="px-8 py-4 bg-red-500 text-white font-semibold rounded-lg hover:shadow-2xl transition transform hover:scale-105"
//             >
//               WhatsApp Now
//             </button>

//             {/* Schedule Call */}
//             <button
//               onClick={() => (window.location.href = "tel:+919911210174")}
//               className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:shadow-xl transition"
//             >
//               Schedule a Call
//             </button>
//           </div>
//         </div>
//       </section>
//       <section className="bg-white py-16 sm:py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Heading */}
//           <div className="text-center mb-14">
//             <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
//               What Our <span className="text-red-500">Clients Say</span>
//             </h2>
//             <p className="text-lg sm:text-xl text-slate-600">
//               Trusted by businesses across India
//             </p>
//           </div>

//           {/* Testimonials Grid */}
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {testimonials.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-slate-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition"
//               >
//                 {/* Quote Icon */}
//                 <Quote className="w-10 h-10 text-red-500 mb-4" />

//                 {/* Message */}
//                 <p className="text-slate-700 leading-relaxed mb-6">
//                   “{item.message}”
//                 </p>

//                 {/* Rating */}
//                 <div className="flex items-center gap-1 mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className={`w-5 h-5 ${
//                         i < item.rating
//                           ? "text-yellow-400 fill-yellow-400"
//                           : "text-slate-300"
//                       }`}
//                     />
//                   ))}
//                 </div>

//                 {/* Client Info */}
//                 <div>
//                   <p className="font-bold text-slate-900">{item.name}</p>
//                   <p className="text-sm text-slate-500">{item.role}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <div className="max-w-7xl max-lg:max-w-3xl mx-auto bg-white p-4">
//         <div className="text-center px-6">
//           <h2 className="text-slate-900 text-3xl font-bold">Contact Us</h2>
//           <p className="text-[15px] text-slate-600 mt-4">
//             Have some big idea or brand to develop and need help?
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-5 items-start p-2 shadow-[0_2px_10px_-3px_rgba(115,120,131,0.6)] rounded-lg mt-12 gap-6">
//           {/* LEFT INFO BOX */}
//           <div
//             className="lg:col-span-2 bg-gradient-to-br from-red-600 via-red-500 to-red-700
//        rounded-lg p-6 h-full max-lg:order-1 relative overflow-hidden max-lg:mb-6"
//           >
//             <h3 className="text-[24px] text-white font-semibold">
//               Contact Information
//             </h3>

//             <p className="text-[15px] text-red-100 mt-4">
//               Have some big idea or brand to develop and need help?
//             </p>

//             <div className="mt-14 relative z-50 space-y-6">
//               <ul className="space-y-4">
//                 <li className="flex items-center text-red-100 hover:text-white">
//                   <span className="ml-4 text-sm">
//                     <a href="mailto:sales@kanakdrishtiinfo.com">
//                       sales@kanakdrishtiinfo.com
//                     </a>
//                   </span>
//                 </li>
//                 <li className="flex items-center text-red-100 hover:text-white">
//                   <span className="ml-4 text-sm">
//                     <a href="tel:+919911210174">+91 9911210174</a>
//                   </span>
//                 </li>
//                 <li className="flex items-center text-red-100 hover:text-white">
//                   <span className="ml-4 text-sm">
//                     <a href="tel:+91 8744878555">+91 8744878555</a>
//                   </span>
//                 </li>
//                 <li className="flex items-center text-red-100 hover:text-white">
//                   <span className="ml-4 text-sm">
//                     Kanak Drishti Infotech Pvt Ltd A-88, Sector 4 Noida, Nearest
//                     Metro - sector 16
//                   </span>
//                 </li>
//               </ul>

//               <ul className="flex gap-4 mt-14">
//                 <li className="bg-white/20 hover:bg-white h-9 w-9 rounded-full flex items-center justify-center"></li>
//                 <li className="bg-white/20 hover:bg-white h-9 w-9 rounded-full flex items-center justify-center"></li>
//                 <li className="bg-white/20 hover:bg-white h-9 w-9 rounded-full flex items-center justify-center"></li>
//               </ul>
//             </div>

//             <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-white/10"></div>
//             <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-white/10"></div>
//           </div>

//           {/* FORM BOX */}
//           <div className="px-4 sm:px-8 py-4 lg:col-span-3">
//             <form>
//               <div className="grid md:grid-cols-2 gap-8">
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   className="border-b border-gray-300 py-3 outline-none focus:border-red-500"
//                   required
//                 />

//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   className="border-b border-gray-300 py-3 outline-none focus:border-red-500"
//                   required
//                 />

//                 <input
//                   type="tel"
//                   placeholder="Phone No."
//                   className="border-b border-gray-300 py-3 outline-none focus:border-red-500"
//                   pattern="[0-9]{10}"
//                   title="Please enter a valid 10-digit phone number"
//                   required
//                 />

//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="border-b border-gray-300 py-3 outline-none focus:border-red-500"
//                   required
//                 />

//                 <textarea
//                   placeholder="Write Message"
//                   className="md:col-span-2 border-b border-gray-300 py-3 outline-none focus:border-red-500"
//                   required
//                 ></textarea>
//               </div>

//               <button className="mt-10 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-sm font-medium w-full md:w-auto">
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

"use client";
import Link from "next/link";
import Head from "next/head";
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

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

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
      title: "MLM Software",
      slug: "mlmsoftware",
      description:
        "Our MLM Software empowers businesses to run smart, transparent, and scalable network marketing operations. With customizable compensation models (binary, matrix, hybrid), automated commission calculations, real-time performance tracking, and secure user dashboards, it enables frictionless growth.",
      color: "from-red-500 to-red-500",
      image: "./mlm.webp",
    },
    {
      icon: Users,
      title: "Travel CRM Software",
      slug: "travel-crm",
      description:
        "DRISHTI Travel CRM is the ultimate solution for travel agencies and tour operators. Manage customer relationships, bookings, suppliers, and operations from one powerful dashboard. Increase bookings, improve customer satisfaction, and scale your travel business efficiently.",
      color: "from-red-500 to-red-500",
      image: "./travelCrm.webp",
    },
    {
      icon: Globe,
      title: "Swiftopay - Payment Orchestration",
      slug: "swiftopay",
      description:
        "Swiftopay is a next-generation platform that simplifies and centralizes payment operations. Instead of relying on a single gateway, Swiftopay allows businesses to integrate multiple payment gateways, processors, and methods into one powerful system.",
      color: "from-red-500 to-red-500",
      image: "./siftopay.webp",
    },
    {
      icon: Smartphone,
      title: "Task Management Software",
      slug: "task-management",
      description:
        "Our Task Management Software helps you plan, prioritize, and execute tasks efficiently. From personal productivity to team collaboration, it offers intuitive dashboards, deadline tracking, reminders, and seamless integrations.",
      image: "./taskmanagement.jpg",
    },
    {
      icon: Code,
      title: "HRMS Software",
      slug: "hrms-software",
      description:
        "Our HRMS Software is designed to simplify and automate every aspect of human resource management. From payroll processing and attendance tracking to recruitment, onboarding, and performance evaluations, this all-in-one solution helps organizations manage employee data seamlessly.",
      color: "from-red-500 to-red-500",
      image: "./hrms.webp",
    },
  ];

  const features = [
    "24/7 Technical Support",
    "Affordable Pricing",
    "Fast Project Delivery",
    "Quality Assured Solutions",
  ];

  return (
    <html lang="en">
      <head>
        <title>About Us | Drishti Infotech HRMS Software & HR Solutions</title>

        <link
          rel="canonical"
          href="https://hrms.drishtiinfotech.net/about-us"
        />

        <meta
          name="description"
          content="Learn about Drishti Infotech, a leading provider of HRMS software and smart HR solutions. Our mission is to automate HR, boost efficiency, and empower businesses."
        />
        {/* <meta
          name="keywords"
          content="hrms leave management,
hr software leave management,
hr leave management system,
hrms leave management system,
leave management software,
employee leave management system,
employee leave management software,
software for leave management,
attendance leave management system"
        /> */}

        {/* Open Graph */}
        <meta
          property="og:title"
          content="About Us | Drishti Infotech HRMS Software & HR Solutions"
        />
        <meta
          property="og:description"
          content="Learn about Drishti Infotech, a leading provider of HRMS software and smart HR solutions. Our mission is to automate HR, boost efficiency, and empower businesses."
        />
        <meta
          property="og:url"
          content="https://hrms.drishtiinfotech.net/about-us"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Drishti HRMS" />
        <meta
          property="og:image"
          content="https://hrms.drishtiinfotech.net/img/logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us | Drishti Infotech HRMS Software & HR Solutions"
        />
        <meta
          name="twitter:description"
          content="Learn about Drishti Infotech, a leading provider of HRMS software and smart HR solutions. Our mission is to automate HR, boost efficiency, and empower businesses."
        />
        <meta
          name="twitter:image"
          content="https://hrms.drishtiinfotech.net/img/logo.png"
        />
        <meta name="twitter:site" content="@kanakdrishti_" />

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              url: "https://hrms.drishtiinfotech.net/about-us",
              name: "About Us | Drishti Infotech HRMS Software & HR Solutions",
              description:
                "Learn about Drishti Infotech, a leading provider of HRMS software and smart HR solutions. Our mission is to automate HR, boost efficiency, and empower businesses.",
              inLanguage: "en",
              isPartOf: {
                "@type": "WebSite",
                url: "https://hrms.drishtiinfotech.net/",
              },
              publisher: {
                "@type": "Organization",
                name: "Drishti Infotech",
              },
            }),
          }}
        />
      </head>

      <body>
        <>
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
                      <span className="block text-red-500">
                        Business Digitally
                      </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-600 max-w-xl">
                      We build high-quality software, websites, and mobile
                      applications at affordable prices to help your business
                      grow faster.
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <Link
                        href="/contact"
                        className="px-8 py-4 bg-red-500 text-white font-semibold rounded-lg hover:shadow-xl transition transform hover:scale-105 flex items-center gap-2"
                      >
                        Free Consultation
                        <ArrowRight className="w-5 h-5" />
                      </Link>

                      <Link
                        href="tel:+919911210174"
                        className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-lg border border-slate-300 hover:border-red-500 transition"
                      >
                        Call Now: +91 9911210174
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-red-500" />
                          <span className="text-sm text-slate-600">
                            {feature}
                          </span>
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
                        alt="Professional IT Team Working on Software Development"
                        className="rounded-2xl shadow-2xl w-full object-cover"
                      />

                      <div className="absolute -bottom-6 left-4 right-4 sm:left-auto sm:-left-6 bg-white rounded-xl p-4 shadow-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                            <TrendingUp className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-slate-800">
                              95%
                            </p>
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
                    We help startups and enterprises build powerful, scalable,
                    and secure digital products that drive real business growth.
                  </p>
                </div>

                {/* MAIN CONTENT */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* LEFT IMAGE */}
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=900"
                      alt="Expert Software Development Team at Kanak Drishti Infotech"
                      className="rounded-2xl shadow-xl w-full object-cover"
                    />

                    <div className="absolute -bottom-6 left-6 bg-red-600 text-white px-5 py-3 rounded-xl shadow-lg">
                      <p className="text-sm font-semibold">
                        16+ Years Experience
                      </p>
                    </div>
                  </div>

                  {/* RIGHT CONTENT */}
                  <div className="space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                      Building Smart Software Solutions
                    </h3>

                    <p className="text-slate-600 text-lg">
                      We are a trusted software company delivering high-quality
                      web, mobile, and enterprise software solutions tailored to
                      your business goals. Our experienced team focuses on
                      innovation, performance, and security in every solution we
                      build, helping your business stay ahead in the digital
                      world.
                    </p>

                    <div className="pt-6 flex gap-4">
                      <Link href="/contact">
                        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                          Get Started
                        </button>
                      </Link>
                      <Link href="/software">
                        <button className="border border-red-600 text-red-600 hover:bg-red-50 px-6 py-3 rounded-lg font-semibold transition">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SERVICES */}
            <section id="services" className="py-16 sm:py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-14">
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                    Our <span className="text-red-500">Software Solutions</span>
                  </h2>
                  <p className="text-lg sm:text-xl text-slate-600">
                    Complete digital solutions for your business growth
                  </p>
                </div>

                {/* Slider */}
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  loop
                  spaceBetween={24}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                >
                  {services.map((service, index) => {
                    const Icon = service.icon;

                    return (
                      <SwiperSlide key={index}>
                        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col h-full">
                          {/* Image */}
                          <div className="relative h-48 bg-gray-50 flex items-center justify-center p-4">
                            <img
                              src={service.image}
                              alt={`${service.title} - Kanak Drishti Infotech`}
                              className="max-h-full max-w-full object-contain"
                            />
                            <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow">
                              <Icon className="w-6 h-6 text-red-500" />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                              {service.title}
                            </h3>

                            <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">
                              {service.description}
                            </p>

                            <Link
                              href={`/software/${service.slug}`}
                              className="mt-auto inline-flex items-center gap-2 text-red-500 font-semibold pt-4"
                            >
                              Learn More <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
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
                  {/* WhatsApp */}
                  <button
                    onClick={() =>
                      window.open(
                        "https://wa.me/919911210174?text=Hello%20I%20am%20interested%20in%20your%20software%20services",
                        "_blank"
                      )
                    }
                    className="px-8 py-4 bg-red-500 text-white font-semibold rounded-lg hover:shadow-2xl transition transform hover:scale-105"
                  >
                    WhatsApp Now
                  </button>

                  {/* Schedule Call */}
                  <button
                    onClick={() => (window.location.href = "tel:+919911210174")}
                    className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:shadow-xl transition"
                  >
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
                        "{item.message}"
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

            <div className="max-w-7xl max-lg:max-w-3xl mx-auto bg-white p-4">
              <div className="text-center px-6">
                <h2 className="text-slate-900 text-3xl font-bold">
                  Contact Us
                </h2>
                <p className="text-[15px] text-slate-600 mt-4">
                  Have some big idea or brand to develop and need help?
                </p>
              </div>

              <div className="grid lg:grid-cols-5 items-start p-2 shadow-[0_2px_10px_-3px_rgba(115,120,131,0.6)] rounded-lg mt-12 gap-6">
                {/* LEFT INFO BOX */}
                <div className="lg:col-span-2 bg-gradient-to-br from-red-600 via-red-500 to-red-700 rounded-lg p-6 h-full max-lg:order-1 relative overflow-hidden max-lg:mb-6">
                  <h3 className="text-[24px] text-white font-semibold">
                    Contact Information
                  </h3>

                  <p className="text-[15px] text-red-100 mt-4">
                    Have some big idea or brand to develop and need help?
                  </p>

                  <div className="mt-14 relative z-50 space-y-6">
                    <ul className="space-y-4">
                      <li className="flex items-center text-red-100 hover:text-white">
                        <span className="ml-4 text-sm">
                          <a href="mailto:sales@kanakdrishtiinfo.com">
                            sales@kanakdrishtiinfo.com
                          </a>
                        </span>
                      </li>
                      <li className="flex items-center text-red-100 hover:text-white">
                        <span className="ml-4 text-sm">
                          <a href="tel:+919911210174">+91 9911210174</a>
                        </span>
                      </li>
                      <li className="flex items-center text-red-100 hover:text-white">
                        <span className="ml-4 text-sm">
                          <a href="tel:+918744878555">+91 8744878555</a>
                        </span>
                      </li>
                      <li className="flex items-center text-red-100 hover:text-white">
                        <span className="ml-4 text-sm">
                          Kanak Drishti Infotech Pvt Ltd A-88, Sector 4 Noida,
                          Nearest Metro - sector 16
                        </span>
                      </li>
                    </ul>

                    <ul className="flex gap-4 mt-14">
                      <li className="bg-white/20 hover:bg-white h-9 w-9 rounded-full flex items-center justify-center"></li>
                      <li className="bg-white/20 hover:bg-white h-9 w-9 rounded-full flex items-center justify-center"></li>
                      <li className="bg-white/20 hover:bg-white h-9 w-9 rounded-full flex items-center justify-center"></li>
                    </ul>
                  </div>

                  <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-white/10"></div>
                  <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-white/10"></div>
                </div>

                {/* FORM BOX */}
                <div className="px-4 sm:px-8 py-4 lg:col-span-3">
                  <form>
                    <div className="grid md:grid-cols-2 gap-8">
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
                        className="border-b border-gray-300 py-3 outline-none focus:border-red-500"
                        pattern="[0-9]{10}"
                        title="Please enter a valid 10-digit phone number"
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
                    </div>

                    <button className="mt-10 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-sm font-medium w-full md:w-auto">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      </body>
    </html>
  );
};

export default Page;
