import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Header";
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ✅ GLOBAL META TITLE + DESCRIPTION */
export const metadata = {
  title:
    "Kanak Drishti Infotech - Best Software Development Company in India | MLM, CRM, HRMS Solutions",
  description:
    "Leading software development company in India with 16+ years experience. We provide MLM Software, Travel CRM, HRMS, Payment Gateway and custom IT solutions. Call +91 9911210174",

  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ======================= */}
        {/* ⭐ Organization Schema  */}
        {/* ======================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://hrms.drishtiinfotech.net/#organization",
              name: "HRMS Drishti Infotech",
              url: "https://hrms.drishtiinfotech.net/",
              logo: "https://hrms.drishtiinfotech.net/img/logo.png",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-9911210174",
                  contactType: "customer service",
                  areaServed: "IN",
                  availableLanguage: ["en", "hi"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+91-8744878555",
                  contactType: "customer service",
                  areaServed: "IN",
                  availableLanguage: ["en", "hi"],
                },
              ],
              sameAs: [
                "https://www.facebook.com/kanakdrishti1/",
                "https://x.com/kanakdrishti_",
                "https://www.instagram.com/kanakdrishtiinfotech_/",
                "https://www.youtube.com/@kanakdrishtiofficial",
                "https://www.linkedin.com/company/2548902/",
              ],
            }),
          }}
        />

        {/* ======================= */}
        {/* ⭐ Local Business Schema */}
        {/* ======================= */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://kanakdrishtiinfo.com/#localbusiness",
              name: "Kanak Drishti Infotech Pvt. Ltd.",
              image: "https://kanakdrishtiinfo.com/img/logo.png",
              url: "https://kanakdrishtiinfo.com/",
              telephone: "+91-9911210174",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "A-88, Sector 4 Noida, Nearest Metro - Sector 16",
                addressLocality: "Noida",
                addressRegion: "UP",
                postalCode: "201301",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 28.5834593,
                longitude: 77.33268500000001,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "10:00",
                closes: "19:00",
              },
              sameAs: [
                "https://www.facebook.com/kanakdrishti1/",
                "https://x.com/kanakdrishti_",
                "https://www.instagram.com/kanakdrishtiinfotech_/",
                "https://www.linkedin.com/company/2548902/",
                "https://www.drishtiinfotech.net/",
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
