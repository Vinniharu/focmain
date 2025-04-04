"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  Diamond,
  Award,
  Gem,
  Medal,
  CircleDollarSign,
} from "lucide-react";

export default function SponsorshipPackagesSection() {
  const [expandedPackage, setExpandedPackage] = useState(null);
  const packageRefs = useRef({});

  const packages = [
    {
      id: "diamond",
      name: "Diamond",
      price: "₦5,000,000",
      color: "from-blue-400 to-cyan-300",
      icon: <Diamond className="w-6 h-6" />,
      description:
        "Our premium sponsorship tier with maximum visibility and exclusive benefits.",
      benefits: [
        "Access to the main database of registered participants",
        "VIP speaking slot on keynote sessions and panels",
        "Meeting activities opportunities at FOC",
        "Exclusive exhibition stand for product showcase",
        "Brand presence across all event materials",
        "Logo placement on the festival banner",
        "Mentioned in PR & media coverage",
        "Access to the VIP lounge",
        "Spotlight in the FOC'25 publication",
        "Social media mentions and content sharing",
      ],
    },
    {
      id: "platinum",
      name: "Platinum",
      price: "₦3,000,000",
      color: "from-slate-300 to-gray-200",
      icon: <Award className="w-6 h-6" />,
      description:
        "Excellent visibility with premium placement and extensive benefits.",
      benefits: [
        "Access to the email database of registered participants",
        "VIP speaking slot on keynote sessions and panels",
        "Meeting activities opportunities at FOC",
        "Standard exhibition stand for product showcase",
        "Brand presence across all event materials",
        "Logo placement on the festival banner",
        "Mentioned in PR & media coverage",
        "Spotlight in the FOC'25 publication",
      ],
    },
    {
      id: "gold",
      name: "Gold",
      price: "₦2,000,000",
      color: "from-yellow-400 to-amber-300",
      icon: <Gem className="w-6 h-6" />,
      description:
        "Strong presence at the event with quality benefits and good visibility.",
      benefits: [
        "Pre-meeting with 10 selected exhibitors and vendors",
        "Meeting activities opportunity at FOC",
        "Standard exhibition stand for product and service",
        "Logo placement on the festival banner",
        "Spotlight in the FOC'25 publication",
      ],
    },
    {
      id: "silver",
      name: "Silver",
      price: "₦1,000,000",
      color: "from-gray-400 to-gray-300",
      icon: <Medal className="w-6 h-6" />,
      description:
        "Solid sponsorship package with good visibility and selected benefits.",
      benefits: [
        "Gold visibility with restricted details",
        "Pre-meeting with 5 selected exhibitors and vendors",
        "Standard exhibition stand for product and service",
        "Logo placement on the festival banner",
        "Spotlight in the FOC'25 publication",
      ],
    },
    {
      id: "bronze",
      name: "Bronze",
      price: "₦500,000",
      color: "from-amber-700 to-amber-600",
      icon: <CircleDollarSign className="w-6 h-6" />,
      description: "Entry-level sponsorship with basic visibility benefits.",
      benefits: [
        "Silver level sponsorship with basic benefits",
        "Standard exhibition stand for product and service",
        "Logo placement on the festival banner",
        "Spotlight in the FOC'25 publication",
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Scroll to expanded package when it changes
  useEffect(() => {
    if (expandedPackage && packageRefs.current[expandedPackage]) {
      const yOffset = -120; // Offset to account for navbar height
      const element = packageRefs.current[expandedPackage];
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      // Only scroll if element is not already in view
      const isInView =
        element.getBoundingClientRect().top >= 0 &&
        element.getBoundingClientRect().bottom <= window.innerHeight;

      if (!isInView) {
        setTimeout(() => {
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    }
  }, [expandedPackage]);

  const togglePackage = (id) => {
    setExpandedPackage(expandedPackage === id ? null : id);
  };

  return (
    <div className="relative bg-gray-900 py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient overlays */}
        <div
          className="absolute top-0 right-0 w-full h-96 opacity-10"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(46,139,87,0.3), transparent 70%)",
          }}
        />

        <div
          className="absolute bottom-0 left-0 w-full h-96 opacity-10"
          style={{
            background:
              "radial-gradient(circle at bottom left, rgba(255,107,0,0.3), transparent 70%)",
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "35px 35px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] to-[#FF6B00]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Sponsorship Packages
          </motion.h2>

          <motion.div
            className="h-1 w-16 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />

          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Choose the sponsorship level that aligns with your goals and budget.
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              ref={(el) => (packageRefs.current[pkg.id] = el)}
              className={`relative bg-gray-900/30 border border-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 ${
                expandedPackage === pkg.id
                  ? "ring-2 ring-offset-2 ring-offset-gray-900"
                  : "hover:border-gray-700"
              }`}
              style={{
                boxShadow:
                  expandedPackage === pkg.id
                    ? `0 0 20px 0 rgba(${
                        pkg.id === "diamond"
                          ? "49, 196, 255"
                          : pkg.id === "platinum"
                          ? "148, 163, 184"
                          : pkg.id === "gold"
                          ? "234, 179, 8"
                          : pkg.id === "silver"
                          ? "156, 163, 175"
                          : "180, 83, 9"
                      }, 0.3)`
                    : "none",
              }}
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              {/* Gradient bar on the left */}
              <div
                className={`absolute top-0 left-0 h-full w-2 bg-gradient-to-b ${pkg.color}`}
              ></div>

              {/* Package header */}
              <div
                className="flex flex-col md:flex-row md:items-center justify-between p-6 cursor-pointer"
                onClick={() => togglePackage(pkg.id)}
              >
                <div className="flex items-center mb-4 md:mb-0">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${pkg.color} p-2.5 mr-4`}
                  >
                    {pkg.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {pkg.name} Sponsor
                    </h3>
                    <p className="text-gray-400 text-sm">{pkg.description}</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="text-right">
                    <div className="text-xl md:text-2xl font-bold text-white">
                      {pkg.price}
                    </div>
                    <p className="text-xs text-gray-400">Naira</p>
                  </div>
                  <div
                    className={`p-1.5 rounded-full border border-gray-700 ${
                      expandedPackage === pkg.id ? "bg-gray-800" : ""
                    }`}
                  >
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        expandedPackage === pkg.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Benefits list */}
              <AnimatePresence>
                {expandedPackage === pkg.id && (
                  <motion.div
                    className="border-t border-gray-800 px-6 py-6"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 className="font-semibold text-white mb-4">
                      Package Benefits:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {pkg.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-gray-400 text-sm italic max-w-2xl mx-auto">
            Need Help Choosing? Not sure which sponsorship is right for your
            organization? Our sponsorship team can help you find the perfect fit
            for your goals and budget.
          </p>
        </motion.div>

        {/* Custom Partnership Option */}
        <motion.div
          className="mt-16 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#2E8B57]/10 to-[#FF6B00]/10 rounded-2xl blur-xl opacity-30"></div>
          <div className="relative bg-gray-900/50 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden p-8">
            {/* Animated corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
              <div className="absolute h-px w-12 bg-gradient-to-r from-[#2E8B57] to-transparent"></div>
              <div className="absolute w-px h-12 bg-gradient-to-b from-[#2E8B57] to-transparent"></div>
            </div>
            <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
              <div className="absolute h-px w-12 right-0 bg-gradient-to-l from-[#FF6B00] to-transparent"></div>
              <div className="absolute w-px h-12 right-0 bg-gradient-to-b from-[#FF6B00] to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden">
              <div className="absolute h-px w-12 bottom-0 bg-gradient-to-r from-[#2E8B57] to-transparent"></div>
              <div className="absolute w-px h-12 bottom-0 bg-gradient-to-b from-transparent to-[#2E8B57]"></div>
            </div>
            <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
              <div className="absolute h-px w-12 bottom-0 right-0 bg-gradient-to-l from-[#FF6B00] to-transparent"></div>
              <div className="absolute w-px h-12 bottom-0 right-0 bg-gradient-to-b from-transparent to-[#FF6B00]"></div>
            </div>

            <div className="text-center mb-6">
              <motion.div
                className="inline-flex items-center justify-center bg-gradient-to-br from-[#2E8B57]/20 to-[#FF6B00]/20 border border-white/10 rounded-full p-3 mb-4"
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(255,255,255,0.1)",
                    "0 0 20px rgba(255,255,255,0.2)",
                    "0 0 0 rgba(255,255,255,0.1)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <motion.div
                  className="p-1.5 rounded-full bg-gradient-to-r from-[#2E8B57] to-[#FF6B00]"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </motion.div>
              </motion.div>

              <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2E8B57] via-white to-[#FF6B00]">
                CUSTOM PARTNERSHIP OPTION
              </h3>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
              <div className="md:flex-1">
                <motion.p
                  className="text-gray-200 text-lg leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Beyond our standard partnership tiers, we offer a{" "}
                  <span className="font-semibold text-white">
                    Custom Partnership
                  </span>{" "}
                  option for brands looking to collaborate through media,
                  merchandise, food, beverages, or other creative contributions.
                  This flexible approach allows you to tailor your involvement,
                  maximize brand impact, and enhance the Festival of Change
                  experience.
                </motion.p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {[
                    "Media",
                    "Merchandise",
                    "Food & Beverages",
                    "Technology",
                    "Education",
                    "Creative",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-2 bg-black/20 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/5"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#2E8B57] to-[#FF6B00]"></div>
                      <span className="text-gray-200 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="md:w-80 bg-black/30 backdrop-blur-md rounded-xl p-6 border border-white/5">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Partnership Benefits
                </h4>
                <ul className="space-y-3">
                  {[
                    "Tailored to your specific objectives",
                    "Flexible contribution options",
                    "Custom brand integration",
                    "Unique audience engagement",
                    "Bespoke recognition opportunities",
                  ].map((benefit, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    >
                      <svg
                        className="w-5 h-5 text-[#2E8B57] mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a href="mailto:info@festivalofchange.org">
                <motion.button
                  className="px-8 py-3 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] text-white font-medium rounded-full relative overflow-hidden group"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 20px rgba(46, 139, 87, 0.4)",
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10">
                    Discuss Custom Partnership
                  </span>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-full w-full bg-gradient-to-r from-[#FF6B00] to-[#2E8B57] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: "100%" }}
                    whileHover={{ y: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
