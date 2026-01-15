// import React from "react";
// import {
//   Database,
//   Users,
//   Plane,
//   Smartphone,
//   UserCog,
//   CreditCard,
// } from "lucide-react";

// const ServicesPage = () => {
//   const services = [
//     {
//       icon: Database,
//       title: "MLM Software",
//       description:
//         "Our MLM Software empowers businesses to run smart, transparent, and scalable network marketing operations. With customizable compensation models (binary, matrix, hybrid), automated commission calculations, real-time performance tracking, and secure user dashboards, it enables frictionless growth. From distributor onboarding to payout clarity, this platform streamlines every touchpoint of your MLM ecosystem.",
//       image: "./mlm.webp",
//     },
//     {
//       icon: Plane,
//       title: "Travel CRM Software",
//       description:
//         "Travel CRM Software by Kanak Drishti Infotech is a powerful customer relationship management solution designed specifically for travel agencies, tour operators, and travel businesses. It helps manage leads, customer inquiries, bookings, itineraries, follow-ups, and relationships from a single centralized platform.",
//       image: "./travelCrm.webp",
//     },
//     {
//       icon: CreditCard,
//       title: "Swiftopay-Payment Orchestration",
//       description:
//         "Swiftopay – Payment Orchestration by Kanak Drishti Infotech is a next-generation platform that simplifies and centralizes payment operations. Instead of relying on a single gateway, Swiftopay allows businesses to integrate multiple payment gateways, processors, and methods into one powerful system.",
//       image: "./siftopay.webp",
//     },
//     {
//       icon: Smartphone,
//       title: "Task Management Software",
//       description:
//         "Our Task Management Software helps you plan, prioritize, and execute tasks efficiently. From personal productivity to team collaboration, it offers intuitive dashboards, deadline tracking, reminders, and seamless integrations. Stay on top of your goals and boost productivity with an all-in-one task manager designed to fit your workflow.",
//       image: "./taskmanagement.jpg",
//     },
//     {
//       icon: UserCog,
//       title: "HRMS Software",
//       description:
//         "Our HRMS Software is designed to simplify and automate every aspect of human resource management. From payroll processing and attendance tracking to recruitment, onboarding, and performance evaluations, this all-in-one solution helps organizations manage employee data seamlessly. With powerful features, easy integration, and a user-friendly interface, businesses can save time, reduce errors, and focus on building a productive workforce. Whether you’re a startup or a large enterprise, our HRMS ensures efficiency, compliance, and smarter HR decision-making.",
//       image: "./hrms.webp",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Hero Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 items-center bg-gradient-to-br from-red-50 via-white to-red-100 rounded-3xl p-6 md:p-10">
//           {/* Left - Image */}
//           <div className="relative">
//             <div className="rounded-3xl overflow-hidden shadow-2xl max-h-[260px] sm:max-h-[320px] lg:max-h-[380px]">
//               <img
//                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop"
//                 alt="Our Services"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             <div className="absolute -bottom-4 -right-4 bg-red-500 text-white rounded-xl p-4 shadow-xl">
//               <div className="text-3xl font-bold">5+</div>
//               <div className="text-xs">Services</div>
//             </div>
//           </div>

//           {/* Right - Content */}
//           <div>
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-500 mb-4 leading-tight">
//               Transform Your Business with Our Software Solutions
//             </h1>

//             <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
//               We provide cutting-edge software solutions designed to streamline
//               operations, enhance productivity, and drive growth.
//             </p>

//             <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
//               Our systems are scalable, secure, and user-friendly—perfectly
//               tailored to your business needs.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <button className="bg-red-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-red-600 transition-all duration-300 shadow-lg">
//                 Get Started
//               </button>
//               <button className="border-2 border-red-500 text-red-500 font-semibold py-3 px-8 rounded-lg hover:bg-red-50 transition-all duration-300">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Services Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl sm:text-4xl font-bold  text-red-500 mb-3">
//             Our Services
//           </h2>
//           <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
//             Comprehensive software solutions to transform your business
//           </p>
//         </div>

//         {/* Service Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => {
//             const Icon = service.icon;
//             return (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-lg overflow-hidden
//                 hover:shadow-2xl transition-all duration-300
//                 hover:-translate-y-2 flex flex-col"
//               >
//                 {/* Image Section */}
//                 <div className="relative h-52 bg-gray-50 flex items-center justify-center p-4">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="max-h-full max-w-full object-contain"
//                   />

//                   <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
//                     <Icon className="w-6 h-6 text-red-500" />
//                   </div>
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-6 flex flex-col flex-1">
//                   <h3 className="text-xl font-bold text-red-500 mb-2">
//                     {service.title}
//                   </h3>

//                   <p className="text-gray-600 mb-5 text-sm leading-relaxed">
//                     {service.description}
//                   </p>

//                   <button
//                     className="mt-auto w-full bg-gradient-to-r
//                     from-red-500 to-red-600 text-white font-semibold
//                     py-3 rounded-lg hover:from-red-600 hover:to-red-700
//                     transition-all duration-300 shadow-md"
//                   >
//                     View More
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="bg-red-500 py-18 sm:py-20 mt-4">
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
//               Ready to Transform Your Business?
//             </h2>
//             <p className="text-lg text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
//               Join hundreds of satisfied clients who have revolutionized their
//               operations with our software solutions
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-white text-red-600 font-bold py-4 px-8 rounded-xl hover:bg-opacity-90 transition-all duration-300 shadow-xl">
//                 Schedule a Demo
//               </button>
//               <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-red-600 transition-all duration-300">
//                 Contact Sales
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesPage;

"use client";
import React from "react";
import Link from "next/link"; // Link import kiya
import {
  Database,
  Users,
  Plane,
  Smartphone,
  UserCog,
  CreditCard,
} from "lucide-react";

const SoftwarePage = () => {
  const services = [
    {
      icon: Database,
      title: "MLM Software",
      slug: "mlmsoftwere", // Route path
      description:
        "Our MLM Software empowers businesses to run smart, transparent, and scalable network marketing operations...",
      image: "./mlm.webp",
    },
    {
      icon: Plane,
      title: "Travel CRM Software",
      slug: "travel-crm", // Route path
      description:
        "Travel CRM Software by Kanak Drishti Infotech is a powerful customer relationship management solution...",
      image: "./travelCrm.webp",
    },
    {
      icon: CreditCard,
      title: "Swiftopay-Payment Orchestration",
      slug: "swiftopay", // Route path
      description:
        "Swiftopay – Payment Orchestration by Kanak Drishti Infotech is a next-generation platform that simplifies...",
      image: "./siftopay.webp",
    },
    {
      icon: Smartphone,
      title: "Task Management Software",
      slug: "task-management", // Route path
      description:
        "Our Task Management Software helps you plan, prioritize, and execute tasks efficiently...",
      image: "./taskmanagement.jpg",
    },
    {
      icon: UserCog,
      title: "HRMS Software",
      slug: "hrms-software", // Route path
      description:
        "Our HRMS Software is designed to simplify and automate every aspect of human resource management...",
      image: "./hrms.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 items-center bg-gradient-to-br from-red-50 via-white to-red-100 rounded-3xl p-6 md:p-10">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl max-h-[260px] sm:max-h-[320px] lg:max-h-[380px]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop"
                alt="Our Services"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-red-500 text-white rounded-xl p-4 shadow-xl">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-xs">Services</div>
            </div>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-500 mb-4 leading-tight">
              Transform Your Business with Our Software Solutions
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-4 leading-relaxed">
              We provide cutting-edge software solutions designed to streamline
              operations, enhance productivity, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-red-600 transition-all duration-300 shadow-lg">
                Get Started
              </button>
              <button className="border-2 border-red-500 text-red-500 font-semibold py-3 px-8 rounded-lg hover:bg-red-50 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Services Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-red-500 mb-3">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive software solutions to transform your business
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden
                hover:shadow-2xl transition-all duration-300
                hover:-translate-y-2 flex flex-col"
              >
                {/* Image Section */}
                <div className="relative h-52 bg-gray-50 flex items-center justify-center p-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="max-h-full max-w-full object-contain"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
                    <Icon className="w-6 h-6 text-red-500" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-red-500 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-5 text-sm leading-relaxed line-clamp-4">
                    {service.description}
                  </p>

                  {/* Dynamic Link Route */}
                  <Link
                    href={`/softwere/${service.slug}`}
                    className="mt-auto block text-center bg-gradient-to-r
                    from-red-500 to-red-600 text-white font-semibold
                    py-3 rounded-lg hover:from-red-600 hover:to-red-700
                    transition-all duration-300 shadow-md"
                  >
                    View More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="bg-red-500 py-16 sm:py-20 mt-20 rounded-3xl overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-white text-opacity-90 mb-8">
              Join hundreds of satisfied clients who have revolutionized their
              operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 font-bold py-4 px-8 rounded-xl">
                Schedule a Demo
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwarePage;
