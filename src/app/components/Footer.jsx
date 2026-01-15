import Link from "next/link";
import Image from "next/image";
import { FaYoutube, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-red-500 text-white py-8 sm:py-10 px-4 sm:px-6 md:px-12 w-full">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        <div data-aos="fade-up">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <Image
              src="/logo2.png"
              alt="Drishti Infotech Logo"
              width={35}
              height={35}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <span className="text-base sm:text-lg font-semibold">
              Drishti Infotech
            </span>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-white mb-4">
            Kanak Drishti Infotech provides smart, customized software solutions
            to automate and streamline business operations. Their services
            include ERP, CRM, HRMS, Hospital Management, School ERP, MLM, and
            more — helping organizations boost efficiency, productivity, and
            digital growth.
          </p>
          <div className="flex gap-3 sm:gap-4 text-2xl sm:text-3xl">
            <Link
              href="https://www.youtube.com/@kanakdrishtiofficial"
              target="_blank"
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FF0000] text-white hover:opacity-80 transition text-sm sm:text-base"
            >
              <FaYoutube />
            </Link>
            <Link
              href="https://www.instagram.com/kanakdrishtiinfotech_/#"
              target="_blank"
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white hover:opacity-80 transition text-sm sm:text-base"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://www.facebook.com/kanakdrishti1"
              target="_blank"
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1877F2] text-white hover:opacity-80 transition text-sm sm:text-base"
            >
              <FaFacebook />
            </Link>
            <Link
              href="https://www.linkedin.com/company/kanakdrishtiinfotech/posts/?feedView=all"
              target="_blank"
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0A66C2] text-white hover:opacity-80 transition text-sm sm:text-base"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://x.com/kanakdrishti_"
              target="_blank"
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#1DA1F2] text-white hover:opacity-80 transition text-sm sm:text-base"
            >
              <FaXTwitter />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
            Quick Links
          </h3>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
            <li>
              <Link href="/about" className="hover:text-black block py-1">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-black block py-1">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/softwere" className="hover:text-black block py-1">
                Softwares
              </Link>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
            Policies
          </h3>
          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
            <li>
              <Link
                href="/term&condition"
                className="hover:text-black block py-1"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/privacyPolicy"
                className="hover:text-black block py-1"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white mt-6 sm:mt-8 pt-4 px-4 text-xs">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <p className="text-white mb-2 md:mb-0">© 2025 All Rights Reserved</p>
          <p className="text-white">
            Designed & Developed by{" "}
            <Link
              href="https://kanakdrishtiinfo.com/"
              target="_blank"
              className="underline text-white font-medium"
            >
              Kanak Drishti Infotech Pvt. Ltd.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
