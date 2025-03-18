"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

export default function RegistrationForm() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    jobTitle: "",
    attendeeType: "",
    dietaryRequirements: "",
    specialNeeds: "",
    hearAbout: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formState.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formState.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    
    if (!formState.organization.trim()) {
      newErrors.organization = "Organization is required";
    }
    
    if (!formState.attendeeType) {
      newErrors.attendeeType = "Please select an attendee type";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setSubmitting(true);
    
    // Simulate API request
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
      // In a real app, you would send the data to your backend here
    } catch (error) {
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  const formInputStyles = "w-full bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 hover:border-[#2E8B57]/50 focus:border-[#2E8B57] transition-colors duration-300 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#2E8B57]/50";
  
  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 0 15px rgba(46, 139, 87, 0.15)" },
    blur: { scale: 1, boxShadow: "none" },
  };

  if (submitted) {
    return (
      <motion.div 
        className="max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-xl border border-[#2E8B57]/20 rounded-2xl p-10 shadow-2xl shadow-black/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="mx-auto w-20 h-20 rounded-full bg-[#2E8B57]/20 flex items-center justify-center">
            <CheckCircle2 className="text-[#2E8B57] w-10 h-10" />
          </div>
          
          <h3 className="text-3xl font-bold text-white">Registration Successful!</h3>
          
          <p className="text-gray-300 max-w-md mx-auto">
            Thank you for registering for FOC'25. We have sent a confirmation email to{" "}
            <span className="text-[#FF6B00] font-medium">{formState.email}</span>. 
            Please check your inbox (and spam folder) for further instructions.
          </p>
          
          <div className="pt-6">
            <motion.a 
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] text-white font-medium rounded-full shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(46, 139, 87, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Return to Home <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 md:p-10 shadow-2xl shadow-black/20 relative overflow-hidden">
        {/* Decorative circuit elements */}
        <motion.div 
          className="absolute top-0 right-0 w-40 h-40 opacity-30"
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        >
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="40" stroke="#2E8B57" strokeWidth="0.5" strokeDasharray="10 5" />
            <circle cx="50" cy="50" r="30" stroke="#FF6B00" strokeWidth="0.5" strokeDasharray="8 4" />
            <circle cx="50" cy="50" r="20" stroke="#2E8B57" strokeWidth="0.5" strokeDasharray="6 3" />
          </svg>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-0 left-0 w-40 h-40 opacity-30"
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            rotate: [180, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        >
          <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="40" stroke="#FF6B00" strokeWidth="0.5" strokeDasharray="10 5" />
            <circle cx="50" cy="50" r="30" stroke="#2E8B57" strokeWidth="0.5" strokeDasharray="8 4" />
            <circle cx="50" cy="50" r="20" stroke="#FF6B00" strokeWidth="0.5" strokeDasharray="6 3" />
          </svg>
        </motion.div>
        
        <div className="relative z-10">
          <form onSubmit={handleSubmit}>
            <div className="space-y-10">
              {/* Free Event Banner */}
              <motion.div 
                className="bg-gradient-to-r from-[#2E8B57]/20 to-[#FF6B00]/20 p-6 rounded-xl border border-[#2E8B57]/30 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2E8B57] to-[#FF6B00] mb-2">
                  Register for Free!
                </h2>
                <p className="text-gray-300">
                  The Festival of Change 2025 is completely free for all attendees. Secure your spot today!
                </p>
              </motion.div>
              
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#2E8B57]">
                  Personal Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-gray-300 font-medium">
                      Full Name*
                    </label>
                    <motion.div
                      whileFocus="focus"
                      whileTap="focus"
                      variants={inputVariants}
                    >
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formState.fullName}
                        onChange={handleChange}
                        className={formInputStyles}
                        placeholder="Your full name"
                      />
                    </motion.div>
                    {errors.fullName && (
                      <motion.p 
                        className="text-red-400 text-sm flex items-center gap-1 mt-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle className="w-4 h-4" /> {errors.fullName}
                      </motion.p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-gray-300 font-medium">
                      Email Address*
                    </label>
                    <motion.div
                      whileFocus="focus"
                      whileTap="focus"
                      variants={inputVariants}
                    >
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={formInputStyles}
                        placeholder="Your email address"
                      />
                    </motion.div>
                    {errors.email && (
                      <motion.p 
                        className="text-red-400 text-sm flex items-center gap-1 mt-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle className="w-4 h-4" /> {errors.email}
                      </motion.p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-gray-300 font-medium">
                      Phone Number*
                    </label>
                    <motion.div
                      whileFocus="focus"
                      whileTap="focus"
                      variants={inputVariants}
                    >
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className={formInputStyles}
                        placeholder="Your phone number"
                      />
                    </motion.div>
                    {errors.phone && (
                      <motion.p 
                        className="text-red-400 text-sm flex items-center gap-1 mt-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle className="w-4 h-4" /> {errors.phone}
                      </motion.p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="organization" className="block text-gray-300 font-medium">
                      Organization*
                    </label>
                    <motion.div
                      whileFocus="focus"
                      whileTap="focus"
                      variants={inputVariants}
                    >
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formState.organization}
                        onChange={handleChange}
                        className={formInputStyles}
                        placeholder="Your organization or institution"
                      />
                    </motion.div>
                    {errors.organization && (
                      <motion.p 
                        className="text-red-400 text-sm flex items-center gap-1 mt-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle className="w-4 h-4" /> {errors.organization}
                      </motion.p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="jobTitle" className="block text-gray-300 font-medium">
                      Job Title
                    </label>
                    <motion.div
                      whileFocus="focus"
                      whileTap="focus"
                      variants={inputVariants}
                    >
                      <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={formState.jobTitle}
                        onChange={handleChange}
                        className={formInputStyles}
                        placeholder="Your role or position"
                      />
                    </motion.div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="attendeeType" className="block text-gray-300 font-medium">
                      Attendee Type*
                    </label>
                    <motion.div
                      whileFocus="focus"
                      whileTap="focus"
                      variants={inputVariants}
                    >
                      <select
                        id="attendeeType"
                        name="attendeeType"
                        value={formState.attendeeType}
                        onChange={handleChange}
                        className={formInputStyles}
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="educator">Educator</option>
                        <option value="administrator">School Administrator</option>
                        <option value="technology">Technology Provider</option>
                        <option value="government">Government Official</option>
                        <option value="student">Student</option>
                        <option value="other">Other</option>
                      </select>
                    </motion.div>
                    {errors.attendeeType && (
                      <motion.p 
                        className="text-red-400 text-sm flex items-center gap-1 mt-1"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <AlertCircle className="w-4 h-4" /> {errors.attendeeType}
                      </motion.p>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF6B00]">
                  Additional Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="dietaryRequirements" className="block text-gray-300 font-medium">
                      Dietary Requirements
                    </label>
                    <motion.div
                      whileFocus="focus"
                      whileTap="focus"
                      variants={inputVariants}
                    >
                      <input
                        type="text"
                        id="dietaryRequirements"
                        name="dietaryRequirements"
                        value={formState.dietaryRequirements}
                        onChange={handleChange}
                        className={formInputStyles}
                        placeholder="Any dietary requirements"
                      />
                    </motion.div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="specialNeeds" className="block text-gray-300 font-medium">
                      Accessibility Requirements
                    </label>
                    <motion.div
                      whileFocus="focus"
                      whileTap="focus"
                      variants={inputVariants}
                    >
                      <input
                        type="text"
                        id="specialNeeds"
                        name="specialNeeds"
                        value={formState.specialNeeds}
                        onChange={handleChange}
                        className={formInputStyles}
                        placeholder="Any accessibility needs"
                      />
                    </motion.div>
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="hearAbout" className="block text-gray-300 font-medium">
                      How did you hear about FOC'25?
                    </label>
                    <motion.div
                      whileFocus="focus"
                      whileTap="focus"
                      variants={inputVariants}
                    >
                      <select
                        id="hearAbout"
                        name="hearAbout"
                        value={formState.hearAbout}
                        onChange={handleChange}
                        className={formInputStyles}
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="social">Social Media</option>
                        <option value="email">Email</option>
                        <option value="colleague">Colleague Referral</option>
                        <option value="website">Website</option>
                        <option value="previous">Attended Previous Event</option>
                        <option value="other">Other</option>
                      </select>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                {errors.form && (
                  <div className="mb-6 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <p className="text-red-400 text-sm flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" /> {errors.form}
                    </p>
                  </div>
                )}
                
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-gray-400 text-sm">
                    * Required fields
                  </p>
                  
                  <motion.button
                    type="submit"
                    className="relative px-8 py-3.5 bg-gradient-to-r from-[#2E8B57] to-[#FF6B00]/90 text-white font-medium rounded-full shadow-lg shadow-[#2E8B57]/10 overflow-hidden group"
                    whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(46, 139, 87, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    disabled={submitting}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {submitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          Register Now <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </span>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-[#2E8B57]/80 to-[#FF6B00]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </motion.button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}