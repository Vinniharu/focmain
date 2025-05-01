import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "./UI/Navbar";
import Footer from "./UI/Footer";

const quicksand = Quicksand({
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
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
        className={`${quicksand.variable}`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
