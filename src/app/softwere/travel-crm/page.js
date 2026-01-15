"use client";
import React from "react";
import Link from "next/link";
import {
  Plane,
  Map,
  Clock,
  ShieldCheck,
  Globe2,
  LayoutDashboard,
  FileText,
  Headphones,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  CreditCard,
} from "lucide-react";

const TravelCRMDetails = () => {
  const features = [
    {
      title: "Smart Lead Management",
      desc: "Capture leads from your website, WhatsApp, and social media directly into one dashboard.",
      icon: <LayoutDashboard className="w-6 h-6" />,
    },
    {
      title: "Fast Itinerary Builder",
      desc: "Create beautiful, professional travel itineraries with day-wise plans in minutes, not hours.",
      icon: <Map className="w-6 h-6" />,
    },
    {
      title: "Automated Follow-ups",
      desc: "Never miss a booking. Set automated email and WhatsApp reminders for your potential clients.",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Supplier & Voucher Mgmt",
      desc: "Manage hotel/flight bookings and generate automated service vouchers instantly.",
      icon: <FileText className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-28 pb-20 bg-gradient-to-br from-red-50 via-white to-red-100 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-bold mb-6">
                <Plane className="w-4 h-4" /> #1 Travel Agency CRM
              </div>
              <h1 className="text-5xl lg:text-5xl font-extrabold text-red-600 leading-[1.1] mb-6">
                Stop Managing Sheets. Start{" "}
                <span className="text-black">Managing Experiences.</span>
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                The all-in-one CRM designed for modern travel agencies. Automate
                your bookings, generate itineraries, and grow your sales with
                Kanak Drishti's Travel Solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo">
                  <button className="px-8 py-4 bg-red-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-700 transition shadow-lg shadow-red-600/20">
                    Try Free Demo <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="rounded-3xl p-2 relative z-10 w-full max-w-[650px] lg:max-w-[750px]">
                <img
                  src="/TravelCrm.webp"
                  alt="Travel CRM Preview"
                  className="rounded-2xl w-full scale-110 lg:scale-125 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY TRAVEL CRM? --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Everything a Tour Operator Needs
            </h2>
            <p className="text-slate-500">
              Built by experts who understand the complexity of itineraries,
              payments, and client management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="group p-8 bg-white border border-slate-100 rounded-[32px] hover:border-red-100 hover:bg-red-50/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-100  text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-black leading-tight">
                Simplify your <br />
                <span className="text-red-500">Lead-to-Booking</span> Journey
              </h2>

              <div className="space-y-6">
                {[
                  {
                    t: "Inquiry Collection",
                    d: "Automated capture from your travel website/FB ads.",
                  },
                  {
                    t: "Quotation Engine",
                    d: "Send multiple package options to clients in PDF/Web links.",
                  },
                  {
                    t: "Booking & Vouchers",
                    d: "Generate flight/hotel vouchers with your company branding.",
                  },
                  {
                    t: "Feedback & Analytics",
                    d: "Get post-trip reviews and track your most profitable destinations.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-black text-lg">
                        {step.t}
                      </h4>
                      <p className="text-black text-sm">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-500 backdrop-blur-sm p-8 rounded border border-white/10">
              <div className="flex items-center justify-between mb-8">
                <h4 className="font-bold text-xl">Operational Snapshot</h4>
                <Globe2 className="text-red-500" />
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                  <span className="text-sm">Total Bookings Today</span>
                  <span className="font-bold text-white">24</span>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                  <span className="text-sm">Pending Itineraries</span>
                  <span className="font-bold text-white">07</span>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                  <span className="text-sm">Revenue This Month</span>
                  <span className="font-bold text-white">₹4.2L</span>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <Headphones className="text-black w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-white">Need help with setup?</p>
                  <p className="text-sm font-bold">24/7 Priority Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRUST BADGES & CTA --- */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 italic text-red-500">
            Ready to take off?
          </h2>
          <p className="text-slate-500 mb-10 text-lg">
            Join over 800+ travel agencies worldwide that use our CRM to
            automate their daily operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-10 py-4 bg-red-600 text-white rounded-2xl font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-600/10">
              Get Started for Free
            </button>
            <button className="w-full sm:w-auto px-10 py-4 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all">
              Talk to Travel Expert
            </button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-40 grayscale">
            <span className="font-black text-2xl uppercase">Traveller</span>
            <span className="font-black text-2xl uppercase">Agoda</span>
            <span className="font-black text-2xl uppercase">Expedia</span>
            <span className="font-black text-2xl uppercase">Trivago</span>
          </div>
        </div>
      </section>

      {/* Footer Minimal */}
      <footer className="py-10 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-xs tracking-widest uppercase">
          © 2026 Kanak Drishti Infotech • Travel Solutions
        </p>
      </footer>
    </div>
  );
};

export default TravelCRMDetails;
