import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./UI/Navbar";
import Footer from "./UI/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Festival Of Change",
  description: "Festival Of Change",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
