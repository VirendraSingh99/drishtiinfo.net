"use client";
import React from "react";
import {
  Users,
  BarChart3,
  ShieldCheck,
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
    {
      title: "Advanced Genealogy Tree",
      desc: "Visual representation of downline with real-time tracking of levels and placements.",
      icon: <Layers className="w-6 h-6" />,
    },
    {
      title: "Auto-Payout System",
      desc: "Automated commission calculations and secure multi-gateway fund transfers.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Multi-Currency & Language",
      desc: "Scale your network globally with built-in support for multiple regions.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "E-Wallet Integration",
      desc: "Secure digital wallet for members to manage earnings, upgrades, and transfers.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
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
    <div className="min-h-screen bg-white text-slate-900">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-28 pb-16 bg-gradient-to-br from-red-50 via-white to-red-100 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-3/5">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold bg-blue-500/20 text-red-500 rounded-full border border-blue-500/30">
                Enterprise MLM Solution v4.0
              </span>
              <h1 className="text-5xl lg:text-7xl text-red-500 font-bold tracking-tight mb-6 leading-[1.1]">
                Scale Your Network with{" "}
                <span className="text-black">Confidence.</span>
              </h1>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
                The most reliable, secure, and scalable MLM software in the
                industry. Manage thousands of distributors, automate payouts,
                and track growth in real-time.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-red-500 text-white rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20">
                  Book Free Demo <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="lg:w-2/5 w-full">
              <div className="relative">
                <div className="absolute -inset-1  rounded-2xl blur opacity-30"></div>
                <div className="relative   p-2 rounded-2xl ">
                  <img
                    src="/mlm.webp"
                    alt="MLM Dashboard"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl text-red-500 lg:text-4xl font-bold mb-4">
              Everything you need to run a successful MLM
            </h2>
            <p className="text-slate-600">
              Powerful features designed to handle the complexities of
              multi-level marketing businesses of any size.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-8 bg-white border border-slate-200 rounded-3xl hover:border-red-500 hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-50 text-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- COMPENSATION PLANS SECTION --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-red-600 rounded p-8 lg:p-16 text-white flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative">
            <div className="absolute left-0 top-0 w-full h-full opacity-10 pointer-events-none">
              <Workflow className="w-[500px] h-[500px] -translate-x-1/4 -translate-y-1/4 rotate-12" />
            </div>

            <div className="lg:w-1/2 relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Support for Every Compensation Plan
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Our engine is built with 100% flexibility. Whether you run a
                standard Binary or a complex custom Hybrid plan, we've got you
                covered.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {plans.map((plan, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-300" />
                    <span className="font-medium">{plan}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 gap-4 relative z-10">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <h4 className="font-bold mb-2">Custom Algorithms?</h4>
                <p className="text-sm text-blue-50">
                  Our developers can code any custom calculation logic for your
                  unique business needs.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <h4 className="font-bold mb-2">Real-time Processing</h4>
                <p className="text-sm text-blue-50">
                  Instant commission credit to E-wallets as soon as a sale is
                  made in the downline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl text-red-500 font-bold mb-6">
            Ready to launch your MLM empire?
          </h2>
          <p className="text-slate-600 mb-10 text-lg">
            Join 500+ successful network marketing companies that trust our
            software for their daily operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-10 py-4 bg-red-500 text-white rounded-2xl font-bold hover:bg-red-500 transition-all">
              Request a Quote
            </button>
            <button className="w-full sm:w-auto px-10 py-4 border border-red-500 rounded-2xl font-bold  transition-all">
              Talk to Expert
            </button>
          </div>
          <p className="mt-8 text-sm text-slate-400">
            No credit card required • Setup in 48 hours • 24/7 Support
          </p>
        </div>
      </section>
    </div>
  );
};

export default MLMProductPage;
