import React from "react";
import { motion } from "framer-motion";
import "../Styles/Policy.css";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "Personal Information: This includes identifiable data such as your name, address, contact details (phone number, email address), medical history, treatment details, payment information, insurance details, and other data necessary for your care and hospital services.",
      "Non-Personal Information: This may include technical data such as IP addresses, browser type, device information, operating system, and browsing patterns, which are used for improving system performance, analytics, and service optimization.",
      "Sensitive Data: We may collect sensitive personal data, including medical records, diagnostic information, prescriptions, and other healthcare-related information. This data is kept confidential and secure in compliance with healthcare privacy laws.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "Healthcare Services: To provide you with medical care and services.",
      "Appointment Scheduling: For scheduling appointments and follow-ups.",
      "Billing and Payment: To process payments and verify insurance.",
      "Medical Records: To manage and update your medical records.",
      "Communication: To send notifications, reminders, and updates.",
      "System Improvement: To enhance functionality and user experience.",
      "Legal and Compliance: To fulfill obligations under HIPAA, GDPR, and similar laws.",
    ],
  },
  {
    title: "3. How We Protect Your Information",
    content: [
      "Data Encryption: Your information is encrypted both in transit and at rest.",
      "Access Control: Only authorized personnel have access based on need.",
      "Regular Audits: We perform security audits and monitor for breaches.",
    ],
  },
  {
    title: "4. Sharing Your Information",
    content: [
      "Healthcare Providers: For diagnosis and treatment purposes.",
      "Third-Party Service Providers: For services like payment processing.",
      "Legal Compliance: If required by law or regulation.",
      "Business Transfers: In case of mergers or acquisitions.",
    ],
  },
  {
    title: "5. Your Rights and Choices",
    content: [
      "Access to Information: You can request your medical records.",
      "Correction and Updates: You may update inaccurate info.",
      "Consent to Treatment: You can provide or withdraw consent.",
      "Opt-Out of Communications: You may opt out of non-essential messages.",
      "Data Retention and Deletion: You may request deletion of your data.",
    ],
  },
  {
    title: "6. Data Retention",
    content: [
      "We retain your data as needed for services and legal compliance. Secure disposal follows after it is no longer necessary.",
    ],
  },
  {
    title: "7. International Transfers",
    content: [
      "Your data may be transferred internationally and will comply with data protection laws.",
    ],
  },
  {
    title: "8. Updates to This Privacy Policy",
    content: [
      "We may update this policy. Changes will be posted on our website with a new effective date.",
    ],
  },
  {
    title: "9. Contact Us",
    content: [
      "Medibook",
      "123 Health Street, Los Angeles, CA 90001",
      "Phone: +1 (555) 123-4567",
      "Email: support@medibook.com",
    ],
  },
];
const PrivacyPolicy = () => {
  return (
    <div className="mx-4 mt-[7rem]">
      <div className="privacypolicy-container">
        <motion.h1
          className="privacypolicy-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Privacy Policy – Medibook Hospital Management System
        </motion.h1>

        {sections.map((section, index) => (
          <motion.div
            className="privacypolicy-section"
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={sectionVariants}
          >
            <h2 className="privacypolicy-heading">{section.title}</h2>
            <ul className="privacypolicy-list">
              {section.content.map((item, i) => (
                <li key={i} className="privacypolicy-list-item">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default PrivacyPolicy;
