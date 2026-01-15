"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Zap,
  Layers,
  ArrowRight,
  CreditCard,
  Lock,
  BarChart4,
  BarChart3,
  Settings,
  Globe2,
  Cpu,
  CheckCircle2,
  Percent,
} from "lucide-react";

const SwiftopayDetails = () => {
  return (
    <html lang="en">
      <head>
        <title>Swiftopay | Drishti Infotech HRMS Software & HR Solutions</title>

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
          <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 text-slate-900 font-sans antialiased">
            {/* ==================== HERO SECTION ==================== */}
            <section className="relative pt-20 pb-20 md:pb-32 overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
                <div className="grid lg:grid-cols-2 gap-14 xl:gap-24 items-center">
                  {/* Left Content */}
                  <div className="space-y-8">
                    <h1 className="text-5xl sm:text-6xl lg:text-5xl xl:text-5xl font-extrabold leading-[1.05] tracking-tight">
                      The Intelligent <br />
                      <span className="bg-red-500 bg-clip-text text-transparent">
                        Payment Brain
                      </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600   max-w-xl">
                      Swiftopay is a unified payment orchestration platform that
                      intelligently connects, routes, and optimizes transactions
                      across multiple gateways in real time. Built for speed,
                      scale, and reliability — helping businesses boost success
                      rates and reduce transaction costs globally.
                    </p>

                    <div className="flex flex-wrap gap-6 pt-4">
                      <Link href="/demo">
                        <button className="group px-10 py-4 bg-red-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.04] transition-all duration-300 flex items-center gap-3">
                          Start Free Trial
                          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                    </div>

                    {/* Metrics */}
                  </div>

                  {/* Right Image */}
                  <div className="relative hidden lg:block">
                    <div className="relative rounded-3xl overflow-hidden ">
                      <img
                        src="/siftopay.webp"
                        alt="Swiftopay Real-time Payment Dashboard"
                        width={1138}
                        height={803}
                        className="w-full h-auto object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ==================== FEATURES BENTO ==================== */}
            <section className="relative py-12 bg-gradient-to-br from-red-50 via-white to-red-100 overflow-hidden">
              <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center max-w-4xl mx-auto mb-24">
                  <h2 className="text-5xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                    Key Features that Power <br />
                    <span className="text-red-500">Modern Payments</span>
                  </h2>
                  <p className="mt-6 text-xl text-gray-600">
                    Designed for performance, reliability, and secure scaling
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {/* Card */}
                  <div className="group p-10 rounded-3xl bg-white shadow-xl shadow-red-100 hover:shadow-red-200 transition-all">
                    <Zap className="w-14 h-14 text-red-500 mb-6 group-hover:scale-110 transition" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Manage Centralized Platform to Multiple Gateways
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      AI-driven routing ensures every transaction is processed
                      through the most efficient and high-performing gateway in
                      real time.
                    </p>
                  </div>

                  <div className="group p-10 rounded-3xl bg-white shadow-xl shadow-red-100 hover:shadow-red-200 transition-all">
                    <ShieldCheck className="w-14 h-14 text-red-500 mb-6 group-hover:scale-110 transition" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Smart Payment Routing & Retry Mechanism
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      PCI-DSS compliance, tokenization, AI-based fraud
                      prevention, and end-to-end encryption secure every
                      payment.
                    </p>
                  </div>

                  <div className="group p-10 rounded-3xl bg-white shadow-xl shadow-red-100 hover:shadow-red-200 transition-all">
                    <Globe2 className="w-14 h-14 text-red-500 mb-6 group-hover:scale-110 transition" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Multi-Currency & Cross-Border Transactions
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Accept payments in 150+ countries with 300+ local payment
                      methods and seamless multi-currency settlements.
                    </p>
                  </div>

                  <div className="group p-10 rounded-3xl bg-white shadow-xl shadow-red-100 hover:shadow-red-200 transition-all">
                    <Cpu className="w-14 h-14 text-red-500 mb-6 group-hover:scale-110 transition" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Advanced Fraud Detection & Compliance Tools
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Sub-200ms API response times with real-time WebSocket
                      support for live transaction updates.
                    </p>
                  </div>

                  <div className="group p-10 rounded-3xl bg-white shadow-xl shadow-red-100 hover:shadow-red-200 transition-all">
                    <BarChart3 className="w-14 h-14 text-red-500 mb-6 group-hover:scale-110 transition" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Real-Time Analytics & Reporting Dashboards
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Advanced dashboards provide instant visibility into
                      success rates, settlements, and performance metrics.
                    </p>
                  </div>

                  <div className="group p-10 rounded-3xl bg-white shadow-xl shadow-red-100 hover:shadow-red-200 transition-all">
                    <Settings className="w-14 h-14 text-red-500 mb-6 group-hover:scale-110 transition" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Seamless API Integration with Existing Systems
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Developer-friendly SDKs, APIs, and no-code workflows
                      ensure fast integration with minimal effort.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* ==================== SIMPLIFIED INFRA SECTION ==================== */}
            <section className="py-32 bg-white relative overflow-hidden">
              {/* Soft decorative shapes */}
              <div className="absolute -top-24 right-0 w-[420px] h-[420px] bg-red-50 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 -left-24 w-[360px] h-[360px] bg-red-100/40 rounded-full blur-3xl"></div>

              <div className="relative max-w-7xl mx-auto px-6 md:px-10">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                  {/* LEFT CONTENT */}
                  <div className="space-y-10">
                    <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-100 text-red-600 font-bold text-sm uppercase tracking-wide">
                      Payment Capabilities
                    </span>

                    <h2 className="text-5xl font-black leading-tight text-gray-900">
                      One Platform.
                      <br />
                      <span className="text-red-500">
                        Infinite Possibilities.
                      </span>
                    </h2>

                    <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
                      A unified payment orchestration layer that adapts to your
                      business — from local startups to global enterprises.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 pt-4">
                      {[
                        "Single API — connect once, scale forever",
                        "99.99% uptime with intelligent failover",
                        "Real-time analytics & reconciliation",
                        "Enterprise-grade 24/7 support",
                      ].map((text, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-5 h-5 text-red-600" />
                          </div>
                          <p className="font-medium text-gray-700">{text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT STACKED FEATURES */}
                  <div className="space-y-6">
                    {[
                      {
                        icon: Layers,
                        title: "Multi-Currency & Settlement",
                        desc: "Seamless global settlements with automated currency conversion.",
                      },
                      {
                        icon: CreditCard,
                        title: "One-Click & Embedded Payments",
                        desc: "Frictionless checkout experiences across platforms.",
                      },
                      {
                        icon: Lock,
                        title: "Advanced Fraud Shield",
                        desc: "AI-powered fraud detection and risk scoring in real time.",
                      },
                      {
                        icon: BarChart4,
                        title: "Real-Time Reconciliation",
                        desc: "Instant visibility into transactions and settlements.",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="group flex gap-6 items-start p-8 bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center shrink-0 group-hover:scale-110 transition">
                          <item.icon className="w-7 h-7 text-red-500" />
                        </div>

                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ==================== FINAL CTA ==================== */}
            <section className="py-8 text-center relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 relative">
                <div className="bg-red-500 rounded py-8 px-8 md:px-16   text-white">
                  <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">
                    Ready to Orchestrate
                    <br />
                    the Future?
                  </h2>
                  <p className="text-xl md:text-2xl text-red-100 mb-12 max-w-2xl mx-auto opacity-90">
                    Join hundreds of growing businesses who already reduced
                    costs and boosted conversions.
                  </p>
                  <Link href="/demo">
                    <button className="px-14 py-3 bg-white text-red-700 rounded-xl font-semibold text-xl shadow-2xl hover:bg-red-50 hover:scale-105 active:scale-100 transition-all duration-300">
                      Get Started — It's Free
                    </button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </>
      </body>
    </html>
  );
};

export default SwiftopayDetails;
