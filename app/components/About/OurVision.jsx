"use client";

import { motion } from "framer-motion";

export default function OurVision() {
  return (
    <div className="relative bg-gray-50 py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#FF6B00]/5 to-[#2E8B57]/5 rounded-bl-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#2E8B57]/5 to-[#FF6B00]/5 rounded-tr-full blur-3xl"></div>

      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-6 space-y-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-center space-y-4">
          <motion.div
            className="inline-block mb-2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <span className="px-4 py-1 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] text-sm font-medium">
              Our Aspiration
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B00] to-[#2E8B57]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Vision
          </motion.h2>

          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-[#FF6B00] to-[#2E8B57] mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="text-gray-600 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We envision a future where education is accessible, engaging, and
              effective for all learners. A future where technology enhances
              human connections rather than replacing them.
            </motion.p>

            <motion.p
              className="text-gray-600 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              The Festival of Change aims to be a catalyst for innovation,
              democratizing knowledge, and building a community of
              forward-thinking educators who are shaping the future of learning.
            </motion.p>

            {/* <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.button
                className="px-6 py-3 bg-white text-[#2E8B57] rounded-full font-medium shadow-md hover:shadow-lg border border-gray-100 flex items-center space-x-2 group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Learn more about our approach</span>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="inline-block transition-all duration-300"
                >→</motion.span>
              </motion.button>
            </motion.div> */}
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2E8B57]/20 to-[#FF6B00]/20 rounded-2xl rotate-3 transform scale-105 blur-sm"></div>

            <motion.div
              className="p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 relative z-10"
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{
                boxShadow: "0 20px 30px rgba(0,0,0,0.1)",
                y: -5,
                transition: { duration: 0.4 },
              }}
            >
              <svg
                className="w-12 h-12 text-[#FF6B00]/20 mb-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-10 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <motion.p
                className="text-xl text-gray-800 font-medium leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                "The festival of change started because we wanted to create a
                space for bright minds to ask questions and think critically
                about the way we can improve the social structures that we have
                in our society"
              </motion.p>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2E8B57] to-[#FF6B00] flex items-center justify-center text-white font-bold text-lg">
                  EA
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <p className="text-gray-900 font-bold">Erioluwa Adeyinka</p>
                  <p className="text-gray-600 text-sm">Convener</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
