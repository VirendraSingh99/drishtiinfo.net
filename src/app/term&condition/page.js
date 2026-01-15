"use client";
import React from "react";
import {
  ShieldCheck,
  Scale,
  Clock,
  ChevronRight,
  FileText,
} from "lucide-react";

const TermsAndConditions = () => {
  const lastUpdated = "January 13, 2026";

  const legalSections = [
    { id: "acceptance", title: "1. Acceptance of Terms" },
    { id: "license", title: "2. Use License" },
    { id: "disclaimer", title: "3. Disclaimer" },
    { id: "limitations", title: "4. Limitations" },
    { id: "revisions", title: "5. Revisions and Updates" },
    { id: "governing", title: "6. Governing Law" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* --- TOP HEADER --- */}
      <section className="pt-32 pb-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-2 text-red-600 font-bold text-xs uppercase tracking-[0.3em] mb-4">
            <ShieldCheck className="w-4 h-4" />
            Legal Documentation
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">
            Terms of <span className="text-red-600 italic">Conditions.</span>
          </h1>
          <div className="flex items-center gap-6 text-slate-500 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Updated: {lastUpdated}</span>
            </div>
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4" />
              <span>Compliance: Global Standard</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT AREA --- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* LEFT: STICKY NAVIGATION */}
            <aside className="lg:w-1/4 hidden lg:block">
              <div className="sticky top-32 space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 ml-4">
                  Table of Contents
                </p>
                {legalSections.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="group flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
                  >
                    <span className="text-sm font-bold text-slate-600 group-hover:text-red-600">
                      {item.title}
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-red-600 transition-transform group-hover:translate-x-1" />
                  </a>
                ))}
              </div>
            </aside>

            {/* RIGHT: LEGAL TEXT CONTENT */}
            <main className="lg:w-3/4">
              <div className="space-y-16">
                {/* 1. Acceptance */}
                <section id="acceptance" className="scroll-mt-32 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-8 w-1 bg-red-600 rounded-full group-hover:h-12 transition-all"></div>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                      1. Acceptance of Terms
                    </h2>
                  </div>
                  <p className="text-slate-600 leading-[1.8] text-lg">
                    By accessing or using our website, you agree to be bound by
                    these Terms and Conditions, all applicable laws, and
                    regulations. If you do not agree, you are prohibited from
                    using or accessing this site.
                  </p>
                </section>

                {/* 2. Use License */}
                <section id="license" className="scroll-mt-32 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-8 w-1 bg-red-600 rounded-full group-hover:h-12 transition-all"></div>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                      2. Use License
                    </h2>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                    <p className="text-slate-600 leading-[1.8] text-lg mb-6 italic">
                      Permission is granted to temporarily download one copy of
                      the materials (information or software) on our website for
                      personal, non-commercial use only. Under this license you
                      may not:
                    </p>
                    <ul className="space-y-4">
                      {[
                        "Modify or copy the materials",
                        "Use the materials for any commercial purpose or public display",
                        "Attempt to decompile or reverse engineer any software",
                        "Remove any copyright or proprietary notations",
                        "Transfer the materials to another person or mirror them",
                      ].map((list, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-slate-700 font-medium"
                        >
                          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                          {list}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-8 pt-6 border-t border-slate-200 text-sm text-slate-500">
                      This license will automatically terminate if you violate
                      any of these restrictions and may be terminated by the
                      company at any time.
                    </p>
                  </div>
                </section>

                {/* 3. Disclaimer */}
                <section id="disclaimer" className="scroll-mt-32 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-8 w-1 bg-red-600 rounded-full group-hover:h-12 transition-all"></div>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                      3. Disclaimer
                    </h2>
                  </div>
                  <p className="text-slate-600 leading-[1.8] text-lg">
                    The materials on this website are provided{" "}
                    <span className="font-bold text-slate-900">"as is"</span>.
                    We make no warranties, expressed or implied, and hereby
                    disclaim all other warranties, including without limitation,
                    implied warranties of merchantability or fitness for a
                    particular purpose.
                  </p>
                </section>

                {/* 4. Limitations */}
                <section id="limitations" className="scroll-mt-32 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-8 w-1 bg-red-600 rounded-full group-hover:h-12 transition-all"></div>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                      4. Limitations
                    </h2>
                  </div>
                  <p className="text-slate-600 leading-[1.8] text-lg">
                    In no event shall the company or its suppliers be liable for
                    any damages (including, without limitation, damages for loss
                    of data or profit, or business interruption) arising out of
                    the use or inability to use the materials on this website.
                  </p>
                </section>

                {/* 5. Revisions */}
                <section id="revisions" className="scroll-mt-32 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-8 w-1 bg-red-600 rounded-full group-hover:h-12 transition-all"></div>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                      5. Revisions and Updates
                    </h2>
                  </div>
                  <p className="text-slate-600 leading-[1.8] text-lg">
                    The materials on this website may include technical,
                    typographical, or photographic errors. We do not warrant
                    that any of the materials are accurate, complete, or
                    current. We may make changes to the materials at any time
                    without notice.
                  </p>
                </section>

                {/* 6. Governing Law */}
                <section id="governing" className="scroll-mt-32 group pb-20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-8 w-1 bg-red-600 rounded-full group-hover:h-12 transition-all"></div>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                      6. Governing Law
                    </h2>
                  </div>
                  <p className="text-slate-600 leading-[1.8] text-lg">
                    These terms and conditions are governed by and construed in
                    accordance with the laws of your jurisdiction, and you
                    irrevocably submit to the exclusive jurisdiction of the
                    courts in that State or location.
                  </p>
                </section>
              </div>

              {/* Support Banner */}
              <div className="bg-red-500 rounded p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2 italic">
                    Still have questions?
                  </h3>
                  <p className="text-white">
                    Our legal team is here to help you understand our policies.
                  </p>
                </div>
                <button className="px-8 py-4 bg-white rounded-xl font-bold text-red-500 transition shadow-xl shadow-red-600/20 whitespace-nowrap">
                  Contact Support
                </button>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
