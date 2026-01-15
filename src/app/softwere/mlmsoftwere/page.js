"use client";
import React from "react";
import Link from "next/link";
import {
  Users,
  BarChart3,
  ShieldCheck,
  CheckCircle,
  Zap,
  Globe,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Layers,
  Workflow,
} from "lucide-react";

const MLMProductPage = () => {
  const features = [
    "Supports Multiple MLM Plans (Binary, Matrix, Unilevel, Hybrid & more)",
    "Member Registration & Hierarchy Management",
    "Automated Commission & Payout System",
    "E-Wallet Integration & Transaction Tracking",
    "Real-time Reports & Analytics Dashboard",
    "Product & Inventory Management",
    "Multi-currency & Multi-language Support",
    "Mobile-friendly & Cloud-based Access",
    "High Security with Data Backup & Encryption",
  ];

  const plans = [
    "Binary Plan",
    "Matrix Plan",
    "Unilevel Plan",
    "Board Plan",
    "Generation Plan",
    "Stair-Step Plan",
  ];

  return (
    <html lang="en">
      <head>
        <title>MLM | Drishti Infotech HRMS Software & HR Solutions</title>

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
          <div className="min-h-screen bg-white text-slate-900">
            {/* --- HERO SECTION --- */}
            <section className="relative pt-28 pb-16 bg-gradient-to-br from-red-50 via-white to-red-100 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>

              <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  <div className="lg:w-3/5 w-full text-center lg:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl text-red-500 font-bold tracking-tight mb-6 leading-snug">
                      Scale Your Network with{" "}
                      <span className="text-black">Confidence.</span>
                    </h1>
                    <p className="text-base sm:text-lg text-slate-400 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                      The most reliable, secure, and scalable MLM software in
                      the industry. Manage thousands of distributors, automate
                      payouts, and track growth in real-time.
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                      <Link href="/demo">
                        <button className="px-8 py-4 bg-red-500 text-white rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20">
                          Book Free Demo <ArrowRight className="w-5 h-5" />
                        </button>
                      </Link>
                    </div>
                  </div>

                  <div className="lg:w-2/5 w-full">
                    <div className="relative">
                      <div className="absolute -inset-1 rounded-2xl blur opacity-30"></div>
                      <div className="relative p-2 rounded-2xl">
                        <img
                          src="/mlm.webp"
                          alt="MLM Dashboard"
                          className="rounded-xl w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* --- DETAILED INFORMATION --- */}
            <section className="bg-white py-10 sm:py-12 px-4 sm:px-6 md:px-16">
              {/* Header */}
              <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500 mb-3">
                  Detailed Information
                </h2>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  Kanak Drishti Infotech presents{" "}
                  <span className="font-semibold">DRISHTI MLM Software</span>, a
                  complete solution for network marketing companies to manage
                  members, payouts, commissions, and reports effortlessly. Our
                  software adapts to various MLM plans, ensuring smooth
                  operations and data security.
                </p>
              </div>

              {/* Image + Text Layout */}
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-6 sm:mb-8">
                <div className="md:w-1/2 w-full">
                  <img
                    src="/mlm.webp"
                    alt="MLM Software Illustration"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>

                <div className="md:w-1/2 w-full space-y-3 text-gray-700">
                  <p className="text-sm sm:text-base md:text-lg">
                    Our software empowers direct selling businesses with
                    automation and transparency. It allows you to:
                  </p>

                  <ul className="list-none space-y-2">
                    {[
                      "Register & manage unlimited members",
                      "Automate payouts & commission distribution",
                      "Monitor business growth with detailed reports",
                      "Customize MLM plans as per requirements",
                      "Ensure data security with advanced encryption",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm sm:text-base md:text-lg"
                      >
                        <CheckCircle className="text-red-500 w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Key Features Heading */}
              <div className="text-center font-bold mb-4 sm:mb-6">
                <p className="text-xl sm:text-2xl md:text-3xl">Key Features</p>
              </div>

              {/* Key Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="bg-red-600 p-4 sm:p-5 rounded-lg shadow hover:shadow-md transition-shadow duration-300 flex items-start"
                  >
                    <CheckCircle className="text-white w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-white text-sm sm:text-base font-medium leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* --- COMPENSATION PLANS SECTION --- */}
            <section className="py-24">
              <div className="max-w-7xl mx-auto px-6">
                <div className="bg-red-600 rounded p-8 lg:p-16 text-white flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative">
                  <div className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none">
                    <Workflow className="w-[500px] h-[500px] -translate-x-1/4 -translate-y-1/4 rotate-12" />
                  </div>

                  <div className="lg:w-1/2 relative z-10 text-center lg:text-left">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                      Support for Every Compensation Plan
                    </h2>
                    <p className="text-blue-100 mb-8 text-base sm:text-lg">
                      Our engine is built with 100% flexibility. Whether you run
                      a standard Binary or a complex custom Hybrid plan, we've
                      got you covered.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-left justify-center lg:justify-start">
                      {plans.map((plan, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-300" />
                          <span className="font-medium text-base sm:text-lg">
                            {plan}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-1/2 grid grid-cols-1 gap-4 relative z-10">
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                      <h4 className="font-bold mb-2">Custom Algorithms?</h4>
                      <p className="text-sm text-blue-50">
                        Our developers can code any custom calculation logic for
                        your unique business needs.
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                      <h4 className="font-bold mb-2">Real-time Processing</h4>
                      <p className="text-sm text-blue-50">
                        Instant commission credit to E-wallets as soon as a sale
                        is made in the downline.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="py-24 text-center px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-4xl text-red-500 font-bold mb-6">
                  Ready to launch your MLM empire?
                </h2>
                <p className="text-slate-600 mb-10 text-base sm:text-lg">
                  Join 500+ successful network marketing companies that trust
                  our software for their daily operations.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contact">
                    <button className="w-full sm:w-auto px-10 py-4 bg-red-500 text-white rounded-2xl font-bold hover:bg-red-500 transition-all">
                      Request a Quote
                    </button>
                  </Link>
                  <Link href="tel:+918744878555">
                    <button className="w-full sm:w-auto px-10 py-4 border border-red-500 rounded-2xl font-bold transition-all">
                      Talk to Expert
                    </button>
                  </Link>
                </div>
                <p className="mt-8 text-sm text-slate-400">
                  No credit card required • Setup in 48 hours • 24/7 Support
                </p>
              </div>
            </section>
          </div>
        </>
      </body>
    </html>
  );
};

export default MLMProductPage;
