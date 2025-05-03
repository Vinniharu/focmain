import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "./UI/Navbar";
import Footer from "./UI/Footer";
import StructuredData from "./components/SEO/StructuredData";

const quicksand = Quicksand({
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata = {
  title: "Festival Of Change | Community Impact Event",
  description: "Join the Festival Of Change - bringing together speakers, volunteers, and sponsors to create positive community impact. Register today for this transformational event.",
  keywords: "festival of change, community event, social impact, speakers, volunteers, sponsors",
  openGraph: {
    title: "Festival Of Change | Community Impact Event",
    description: "Join the Festival Of Change - bringing together speakers, volunteers, and sponsors to create positive community impact. Register today!",
    url: "https://festivalofchange.org",
    siteName: "Festival Of Change",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Festival Of Change",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Festival Of Change | Community Impact Event",
    description: "Join the Festival Of Change - bringing together speakers, volunteers, and sponsors to create positive community impact.",
    images: ["/twitter-image.png"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://festivalofchange.org",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${quicksand.variable}`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
