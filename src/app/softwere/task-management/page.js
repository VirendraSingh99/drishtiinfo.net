"use client";
import React from "react";
import {
  Layout,
  Users2,
  Clock,
  BarChart3,
  Calendar,
  Plus,
  CheckCircle2,
  Zap,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

const TaskManagementDetails = () => {
  return (
    <div className="w-full bg-[#F8FAFC] text-slate-900 overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="pt-18 pb-24 bg-gradient-to-br from-red-50 via-white to-red-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-xs font-bold mb-6 uppercase">
              <Zap className="w-4 h-4" /> Productivity Booster
            </span>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black  mb-6">
              Organize Work, <br />
              <span className="text-red-600 ">Faster Than Ever</span>
            </h1>

            <p className="text-lg text-slate-600 max-w-xl mb-8">
              A modern task management system designed for high-performing
              teams. Plan projects, collaborate in real-time, and deliver on
              time — every time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-red-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-700 transition shadow-lg">
                Create First Task <Plus size={18} />
              </button>
              <button className="px-8 py-4 border border-slate-200 rounded-xl font-bold hover:bg-slate-50 transition">
                View Live Demo
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE / MOCKUP */}
          <div className="relative flex justify-center">
            {/* Main Product Image */}
            <img
              src="/taskmanagement.jpg" // apni image ka path
              alt="Task Management Dashboard"
              className="w-full max-w-xl  "
            />
          </div>
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              Powerful Features
              <span className="text-red-600"> Built for Teams</span>
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need to plan, execute, and deliver projects
              efficiently.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <Layout />,
                title: "Kanban Boards",
                desc: "Visual task tracking with drag-and-drop columns.",
              },
              {
                icon: <Users2 />,
                title: "Team Collaboration",
                desc: "Assign tasks, comments, mentions & file sharing.",
              },
              {
                icon: <Clock />,
                title: "Time Tracking",
                desc: "Track work hours with built-in timers & logs.",
              },
              {
                icon: <BarChart3 />,
                title: "Smart Reports",
                desc: "Real-time productivity & progress analytics.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition text-center"
              >
                <div className="w-12 h-12 mx-auto mb-5 text-red-600">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DETAILED WORKFLOW ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT IMAGE */}
          <div className="bg-slate-50 rounded-[2rem] p-10 shadow-xl">
            <Calendar className="text-red-600 mb-4" />
            <h3 className="text-xl font-bold mb-6">Project Timeline</h3>
            {[40, 65, 90].map((v, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between text-xs mb-1">
                  <span>Milestone {i + 1}</span>
                  <span>{v}%</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full">
                  <div
                    className="h-2 bg-red-600 rounded-full"
                    style={{ width: `${v}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT DETAILS */}
          <div>
            <h2 className="text-4xl font-black mb-8">
              Designed for
              <span className="text-red-600"> Seamless Collaboration</span>
            </h2>

            <div className="space-y-6">
              {[
                "Centralized task & file management",
                "Role-based access & permissions",
                "Smart notifications & reminders",
                "Cross-team visibility & accountability",
              ].map((text, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle2 className="text-red-600 shrink-0" />
                  <p className="text-slate-600">{text}</p>
                </div>
              ))}
            </div>

            <button className="mt-10 px-8 py-4 bg-red-600 text-white rounded-xl font-bold flex items-center gap-2 hover:bg-red-700 transition">
              Explore Features <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-gray-100 text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl text-red-500 font-bold mb-6 ">
            Ready to Boost Productivity?
          </h2>
          <p className="text-black mb-10">
            Start managing tasks smarter and faster with our all-in-one
            platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-red-600 rounded-xl font-bold hover:bg-red-700 transition">
              Get Started Free
            </button>
            <button className="px-10 py-4 border border-red-500 rounded-xl text-red-500 font-bold hover:bg-white/10 transition">
              Talk to Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskManagementDetails;
