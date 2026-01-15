"use client";
import React from "react";
import {
  UserCog,
  Wallet,
  CalendarCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
  BarChart,
  Clock,
  ShieldCheck,
  Search,
} from "lucide-react";

const HRMSDetails = () => {
  return (
    <html lang="en">
      <head>
        <title>HRMS | Drishti Infotech HRMS Software & HR Solutions</title>

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
          <div className="min-h-screen bg-white text-slate-900 font-sans">
            {/* --- HERO SECTION: LEFT ALIGNED CONTENT --- */}

            <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-100">
              {/* Decorative Element (Ab Left side background color) */}
              <div className="absolute top-0 left-0 w-1/3 h-full bg-slate-50 -z-10 hidden lg:block"></div>

              <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* LEFT SIDE: Professional Image & Floating UI */}
                  <div className="relative order-2 lg:order-1">
                    <div className="relative z-20 rounded overflow-hidden">
                      <img
                        src="/hrms.webp"
                        alt="HR Management Software"
                        className="w-full h-[400px] object-cover"
                      />
                    </div>
                    {/* Decorative background shape */}
                    <div className="absolute -top-10 -left-10 w-64 h-64 bg-red-500 rounded-3xl -z-10 -rotate-12 opacity-10"></div>
                  </div>

                  {/* RIGHT SIDE: Heading & Paragraph */}
                  <div className="z-10 order-1 lg:order-2">
                    <h1 className="text-5xl lg:text-6xl font-black text-slate-900 leading-[1.05] mb-8">
                      Manage People, <br />
                      <span className="text-red-600">Not Paperwork.</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                      Streamline your entire employee lifecycle from hire to
                      retire. Automate payroll, track attendance, and boost
                      engagement with the most intuitive HRMS on the market.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                      <button className="px-10 py-4 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-slate-900/20">
                        Start Free Trial <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* --- DETAILED INFORMATION SECTION --- */}
            <section className="py-28 bg-slate-50 relative overflow-hidden">
              {/* Soft Background Accent */}
              <div className="absolute -top-32 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>

              <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Heading */}
                <div className="max-w-3xl mb-20">
                  <span className="inline-block mb-4 px-5 py-2 bg-red-100 text-red-600 font-bold text-sm rounded-full">
                    Detailed Information
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
                    A Complete HR Management System
                    <span className="text-red-600">
                      {" "}
                      Designed for Modern Workplaces
                    </span>
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Our HRMS is built to eliminate manual processes, improve
                    accuracy, and empower HR teams with real-time insights. From
                    daily attendance to complex payroll and compliance,
                    everything works together seamlessly on a single,
                    intelligent platform.
                  </p>
                </div>

                {/* Content Blocks */}
                <div className="grid lg:grid-cols-3 gap-10">
                  {/* Block 1 */}
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                    <UserCog className="w-10 h-10 text-red-500 mb-6" />
                    <h3 className="text-2xl font-bold mb-4">
                      Employee Lifecycle Management
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      Manage everything from employee onboarding to exit
                      formalities with structured workflows. Maintain
                      centralized employee records, roles, documents, and
                      performance history in one secure system.
                    </p>
                  </div>

                  {/* Block 2 */}
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                    <CalendarCheck className="w-10 h-10 text-red-500 mb-6" />
                    <h3 className="text-2xl font-bold mb-4">
                      Attendance & Leave Automation
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      Track attendance using biometric, facial recognition, or
                      mobile geo-fencing. Automate leave approvals, holiday
                      calendars, and attendance rules without spreadsheets.
                    </p>
                  </div>

                  {/* Block 3 */}
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                    <Wallet className="w-10 h-10 text-red-500 mb-6" />
                    <h3 className="text-2xl font-bold mb-4">
                      Payroll & Compliance Engine
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      Run accurate payroll with built-in PF, ESI, tax
                      calculations, bonus, incentives, and deductions. Generate
                      compliance-ready reports with complete audit trails.
                    </p>
                  </div>
                </div>

                {/* Bottom Long Explanation */}
                <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <h3 className="text-3xl font-black mb-6">
                      Built for Accuracy, Speed & Scale
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                      Whether you manage a team of 20 or an enterprise of 20,000
                      employees, our HRMS scales effortlessly with your
                      organization. Automated workflows reduce human errors,
                      while real-time analytics ensure every decision is backed
                      by reliable data.
                    </p>
                    <p className="text-slate-600 text-lg leading-relaxed">
                      With role-based access control, cloud security, and
                      continuous system updates, your HR operations remain
                      compliant, secure, and future-ready at all times.
                    </p>
                  </div>

                  <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl border border-slate-100">
                    <ul className="space-y-5 text-sm font-semibold">
                      <li className="flex items-center gap-4">
                        <CheckCircle2 className="w-5 h-5 text-red-500" />
                        Centralized employee data & document storage
                      </li>
                      <li className="flex items-center gap-4">
                        <CheckCircle2 className="w-5 h-5 text-red-500" />
                        Automated payroll with compliance reports
                      </li>
                      <li className="flex items-center gap-4">
                        <CheckCircle2 className="w-5 h-5 text-red-500" />
                        Real-time dashboards for HR & leadership
                      </li>
                      <li className="flex items-center gap-4">
                        <CheckCircle2 className="w-5 h-5 text-red-500" />
                        Secure cloud infrastructure with high availability
                      </li>
                      <li className="flex items-center gap-4">
                        <CheckCircle2 className="w-5 h-5 text-red-500" />
                        Easy integration with existing tools
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* --- HRMS DETAILS & KEY FEATURES --- */}
            <section className="py-24 bg-slate-50">
              <div className="max-w-7xl mx-auto px-6">
                {/* Top Description */}
                <div className="max-w-3xl mb-20">
                  <h2 className="text-4xl font-black text-slate-900 mb-6">
                    Everything Your HR Team Needs,
                    <span className="text-red-600"> In One Platform</span>
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Our HRMS is designed to simplify complex HR operations by
                    bringing employee management, payroll, attendance, and
                    compliance into a single, easy-to-use system. Built for
                    growing organizations that demand accuracy, automation, and
                    scalability.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {/* Feature Card */}
                  <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-slate-100">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6">
                      <UserCog />
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                      Employee Lifecycle Management
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Manage employees from onboarding to exit with centralized
                      profiles, documents, roles, and performance history.
                    </p>
                  </div>

                  <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-slate-100">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6">
                      <Wallet />
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                      Smart Payroll Automation
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Automate salary calculations, deductions, incentives, and
                      generate payslips with complete statutory compliance.
                    </p>
                  </div>

                  <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-slate-100">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6">
                      <CalendarCheck />
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                      Attendance & Leave Tracking
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Track attendance using biometric, facial recognition, or
                      mobile punch-in with real-time leave balance updates.
                    </p>
                  </div>

                  <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-slate-100">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6">
                      <Clock />
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                      Shift & Workforce Scheduling
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Create flexible shifts, manage overtime, and optimize
                      workforce planning with real-time visibility.
                    </p>
                  </div>

                  <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-slate-100">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6">
                      <ShieldCheck />
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                      Compliance & Security
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Stay compliant with PF, ESI, TDS and labor laws while
                      keeping employee data protected with enterprise-grade
                      security.
                    </p>
                  </div>

                  <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-slate-100">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6">
                      <BarChart />
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                      Reports & Analytics
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Generate actionable HR insights with real-time reports on
                      attendance, payroll costs, attrition, and productivity.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* --- WHY CHOOSE US --- */}
            <section className="py-28 bg-white relative overflow-hidden">
              {/* Decorative Background */}
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 -left-24 w-80 h-80 bg-slate-200/40 rounded-full blur-3xl"></div>

              <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Heading */}
                <div className="max-w-3xl mb-20">
                  <span className="inline-block mb-4 px-4 py-2 bg-red-100 text-red-600 font-bold text-sm rounded-full">
                    Why Choose Our HRMS
                  </span>
                  <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                    Built for Growing Teams,
                    <span className="text-red-600"> Trusted by Leaders</span>
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    We don’t just provide HR software — we deliver a complete
                    people management ecosystem designed to save time, reduce
                    costs, and empower your HR team with real insights.
                  </p>
                </div>

                {/* Points Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-red-500 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Zap />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        Fast Implementation
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Get your HRMS up and running in days, not months — with
                        guided onboarding and zero disruption to your
                        operations.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-red-500 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <ShieldCheck />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        Enterprise-Grade Security
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Your employee data is protected with role-based access,
                        encryption, and compliance-ready infrastructure.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-red-500 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <BarChart />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        Data-Driven Decisions
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Powerful dashboards and reports help leadership make
                        smarter, faster people decisions.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-red-500 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <UserCog />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        Designed for HR Teams
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Simple, intuitive UI that HR teams love — minimal
                        training, maximum productivity.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-red-500 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Clock />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        Always On, Always Reliable
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Cloud-based architecture ensures 99.9% uptime and
                        seamless access anytime, anywhere.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-red-500 text-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <CheckCircle2 />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Proven Results</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Trusted by 500+ organizations to reduce HR workload,
                        improve accuracy, and scale confidently.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      </body>
    </html>
  );
};

export default HRMSDetails;
