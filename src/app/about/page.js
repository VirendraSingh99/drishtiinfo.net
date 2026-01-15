"use client";
import React, { useState } from "react";
import {
  Target,
  Eye,
  Award,
  Users,
  TrendingUp,
  Heart,
  Zap,
  Shield,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Briefcase,
  Globe,
  Clock,
} from "lucide-react";

const AboutUsPage = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Briefcase,
      number: "1000+",
      label: "Projects Completed",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Globe,
      number: "15+",
      label: "Countries Served",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Clock,
      number: "10+",
      label: "Years Experience",
      color: "from-red-500 to-red-600",
    },
  ];

  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We constantly push boundaries and embrace cutting-edge technologies to deliver exceptional solutions.",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "Transparency and honesty are at the core of everything we do, building trust with our clients.",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description:
        "Your success is our priority. We tailor our solutions to meet your unique business needs.",
      color: "from-red-500 to-red-600",
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description:
        "We strive for perfection in every project, ensuring top-quality deliverables and results.",
      color: "from-red-500 to-red-600",
    },
  ];

  const milestones = [
    {
      year: "2014",
      title: "Company Founded",
      description: "Started our journey in Ghaziabad",
    },
    {
      year: "2016",
      title: "100+ Clients",
      description: "Reached our first major milestone",
    },
    {
      year: "2019",
      title: "International Expansion",
      description: "Expanded to serve global markets",
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description: "Won multiple awards for excellence",
    },
    {
      year: "2025",
      title: "500+ Projects",
      description: "Successfully delivered cutting-edge solutions",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-red-500">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-28 lg:py-32">
          <div className="text-center text-black">
            <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-sm font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                About Kanak Drishti Infotech
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight">
              Empowering Businesses Through
              <br />
              <span className="text-white">Innovative Technology</span>
            </h1>

            <p className="text-lg sm:text-xl text-white text-opacity-95 max-w-3xl mx-auto mb-8 leading-relaxed">
              We are a leading software development company specializing in
              creating powerful, scalable, and user-friendly solutions that
              transform businesses and drive growth.
            </p>

            <button className="bg-red-500 text-white font-bold py-4 px-8 rounded-xl hover:bg-opacity-90 transition-all duration-300 shadow-2xl flex items-center gap-2 mx-auto group">
              Get to Know Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="rgb(248, 250, 252)"
            />
          </svg>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`inline-flex bg-gradient-to-br ${stat.color} rounded-xl p-3 mb-4`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-red-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mission, Vision & Values Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="bg-white rounded shadow-xl overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("mission")}
              className={`flex-1 py-4 px-6 font-semibold transition-all duration-300 ${
                activeTab === "mission"
                  ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Target className="w-5 h-5 inline mr-2" />
              Our Mission
            </button>
            <button
              onClick={() => setActiveTab("vision")}
              className={`flex-1 py-4 px-6 font-semibold transition-all duration-300 ${
                activeTab === "vision"
                  ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Eye className="w-5 h-5 inline mr-2" />
              Our Vision
            </button>
            <button
              onClick={() => setActiveTab("values")}
              className={`flex-1 py-4 px-6 font-semibold transition-all duration-300 ${
                activeTab === "values"
                  ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Award className="w-5 h-5 inline mr-2" />
              Core Values
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-8 sm:p-12">
            {activeTab === "mission" && (
              <div className="animate-fadeIn">
                <h3 className="text-3xl font-bold text-red-500 mb-6">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To empower businesses worldwide with innovative, scalable, and
                  user-friendly software solutions that drive digital
                  transformation and sustainable growth. We are committed to
                  delivering excellence through cutting-edge technology,
                  exceptional customer service, and continuous innovation.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-red-500 mb-1">
                        Customer Success
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Putting client needs at the forefront of everything we
                        do
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-red-500 mb-1">
                        Innovation First
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Leveraging latest technologies for competitive advantage
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "vision" && (
              <div className="animate-fadeIn">
                <h3 className="text-3xl font-bold text-red-500 mb-6">
                  Our Vision
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To become a globally recognized leader in software
                  development, known for transforming businesses through
                  innovative technology solutions. We envision a future where
                  every business, regardless of size, has access to world-class
                  software that propels them toward success.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-red-500 mb-1">
                        Global Impact
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Serving businesses across continents and industries
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-red-500 mb-1">
                        Technology Leadership
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Setting industry standards for excellence and innovation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "values" && (
              <div className="animate-fadeIn">
                <h3 className="text-3xl font-bold text-red-500 mb-8">
                  Core Values
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <div key={index} className="flex gap-4">
                        <div
                          className={`bg-gradient-to-br ${value.color} rounded-xl p-3 h-fit`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-red-500 mb-2">
                            {value.title}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-red-500 text-white rounded-full mb-4">
              <span className="text-sm font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver
              exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-red-500 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Proven Expertise
              </h3>
              <p className="text-gray-700 leading-relaxed">
                10+ years of experience delivering world-class software
                solutions across multiple industries and technologies.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-red-500 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Dedicated Support
              </h3>
              <p className="text-gray-700 leading-relaxed">
                24/7 customer support and dedicated account managers to ensure
                your success at every step of the journey.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-red-500 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Cutting-Edge Tech
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We leverage the latest technologies and frameworks to build
                scalable, future-proof solutions for your business.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group bg-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-red-500 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Goal-Oriented
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We focus on delivering measurable results that align with your
                business objectives and drive real growth.
              </p>
            </div>

            {/* Card 5 */}
            <div className="group bg-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Security First
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Enterprise-grade security measures and data protection protocols
                to keep your business safe and compliant.
              </p>
            </div>

            {/* Card 6 */}
            <div className="group bg-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-red-500 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Scalable Solutions
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our software grows with your business, ensuring seamless
                scalability without compromising performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-red-500 mb-6">
            Ready to Start Your Journey With Us?
          </h2>
          <p className="text-lg text-black text-opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their
            businesses with our innovative solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-500 text-white font-bold py-4 px-8 rounded-xl hover:bg-opacity-90 transition-all duration-300 shadow-xl">
              Contact Us Today
            </button>
            <button className="border-2 border-red-500 text- font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-red-600 transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
