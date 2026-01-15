"use client";
import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Database,
  UserPlus,
  Share2,
  RefreshCcw,
  Mail,
  ChevronRight,
  Clock,
} from "lucide-react";

const PrivacyPolicy = () => {
  const lastUpdated = "January 13, 2026";

  const policySections = [
    {
      id: "intro",
      title: "Introduction",
      icon: <ShieldCheck className="w-4 h-4" />,
    },
    {
      id: "info-collection",
      title: "1. Information Collected",
      icon: <Database className="w-4 h-4" />,
    },
    {
      id: "info-use",
      title: "2. Information Use",
      icon: <UserPlus className="w-4 h-4" />,
    },
    {
      id: "disclosing",
      title: "3. Disclosing Information",
      icon: <Share2 className="w-4 h-4" />,
    },
    {
      id: "changes",
      title: "4. Changes to Policy",
      icon: <RefreshCcw className="w-4 h-4" />,
    },
    {
      id: "contact",
      title: "5. Contacting Us",
      icon: <Mail className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-800 font-sans">
      {/* --- HERO HEADER --- */}
      <section className="pt-32 pb-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-red-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
            <Lock className="w-4 h-4" />
            Your Privacy Matters
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">
            Privacy <span className="text-red-600">Policy.</span>
          </h1>
          <div className="flex items-center gap-3 text-slate-500 text-sm font-medium">
            <Clock className="w-4 h-4 text-red-500" />
            <span>Updated: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* --- CONTENT AREA --- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* LEFT: STICKY NAV */}
            <aside className="lg:w-1/4">
              <div className="sticky top-32 space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 px-4">
                  Sections
                </p>
                {policySections.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="group flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
                  >
                    <span className="text-slate-400 group-hover:text-red-600 transition-colors">
                      {item.icon}
                    </span>
                    <span className="text-sm font-bold text-slate-600 group-hover:text-red-600">
                      {item.title}
                    </span>
                  </a>
                ))}
              </div>
            </aside>

            {/* RIGHT: POLICY CONTENT */}
            <main className="lg:w-3/4 space-y-20">
              {/* Introduction */}
              <section id="intro" className="scroll-mt-32">
                <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">
                  Introduction
                </h2>
                <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 border-l-8 border-l-red-600">
                  <p className="text-lg text-slate-700 leading-relaxed font-medium italic">
                    "We collect the minimum amount of information about you that
                    is necessary to provide you with a satisfactory service.
                    This policy outlines the types of processes that may result
                    in data being collected about you. By using this website,
                    you consent to the collection and use of your information as
                    described in this Privacy Policy."
                  </p>
                </div>
              </section>

              {/* 1. Information Collected */}
              <section id="info-collection" className="scroll-mt-32">
                <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="text-red-600">1.</span> Information Collected
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  We may collect any or all of the information that you provide
                  to us, depending on the type of transaction you enter into.
                  This may include:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Your name",
                    "Address",
                    "Telephone number",
                    "Email address",
                    "Data about your use of the website",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm"
                    >
                      <div className="w-2 h-2 bg-red-600 rounded-full" />
                      <span className="font-bold text-slate-700 text-sm">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-slate-500 text-sm font-medium bg-slate-50 p-4 rounded-xl border border-dashed border-slate-200">
                  * Additional information may be required from time to time to
                  process specific requests.
                </p>
              </section>

              {/* 2. Information Use */}
              <section id="info-use" className="scroll-mt-32">
                <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="text-red-600">2.</span> Information Use
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Information collected is primarily used to process the task
                  for which you visited the website. Data is held in accordance
                  with the Data Protection Act, and all reasonable precautions
                  are taken to prevent unauthorized access.
                </p>
                <div className="bg-blue-50 text-blue-800 p-6 rounded-2xl border border-blue-100 text-sm font-bold flex gap-4 items-start">
                  <ShieldCheck className="w-6 h-6 shrink-0" />
                  <p>
                    You may be required to provide additional forms of identity
                    to access certain account information.
                  </p>
                </div>
              </section>

              {/* 3. Disclosing Information */}
              <section id="disclosing" className="scroll-mt-32">
                <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="text-red-600">3.</span> Disclosing
                  Information
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  We do not disclose any personal information obtained from this
                  website to third parties unless you permit us to do so. We may
                  use your information to stay in contact with you and inform
                  you of updates or services. You will always have the option to
                  opt out of such communications.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Occasionally, we may provide general statistics to third
                  parties (e.g., the number of users visiting our website), but
                  such information will never include details that identify
                  individuals.
                </p>
              </section>

              {/* 4. Changes to Policy */}
              <section id="changes" className="scroll-mt-32">
                <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <span className="text-red-600">4.</span> Changes to This
                  Policy
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-slate-200 pl-6">
                  Any updates to this Privacy Policy will be posted here and
                  will supersede prior versions. We encourage you to review this
                  page each time you use the website to ensure you continue to
                  agree with the terms.
                </p>
              </section>

              {/* 5. Contacting Us */}
              <section id="contact" className="scroll-mt-32 pb-20">
                <div className="bg-red-500 rounded p-10 text-white relative overflow-hidden">
                  <h2 className="text-3xl font-black mb-6">5. Contacting Us</h2>
                  <p className="text-white text-lg mb-8 leading-relaxed max-w-xl">
                    If you have any questions about our Privacy Policy or wish
                    to know what information we hold about you, please email us.
                  </p>

                  <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                    <Link
                      href="mailto:sales@kanakdrishtiinfo.com"
                      className="flex items-center gap-4 bg-white text-red-500 px-6 py-4 rounded-2xl font-black transition shadow-xl shadow-red-600/30"
                    >
                      <Mail className="w-5 h-5" />
                      sales@kanakdrishtiinfo.com
                    </Link>
                  </div>

                  <p className="mt-10 text-xs text-white font-bold uppercase tracking-widest leading-relaxed">
                    You may also request corrections to your information or ask
                    us to remove your details from our records.
                  </p>

                  {/* Decorative background blur */}
                  <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-red-600 rounded-full blur-[100px] opacity-20"></div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
