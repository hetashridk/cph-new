import React from 'react';
import { motion } from 'framer-motion';

const AccessibilityStatement = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] } }
  };

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-[941px] mx-auto"
        >
          <h1 className="text-[40px] md:text-[85px] font-normal leading-[1.1] text-[#14242D] mb-16" style={{ fontFamily: "'Wix Madefor Display', sans-serif", letterSpacing: '-0.02em' }}>
            Accessibility Statement
          </h1>

          <div className="space-y-12 text-[#14242D] text-[16px] leading-[1.8] font-normal">
            <div>
              <p className="text-[18px] mb-8">
                Stay updated with the latest trends, insights, and tips in the AI industry through our blog. We share valuable content that empowers individuals and organizations to make informed decisions about AI.
              </p>
              <p>
                This statement was last updated on March 30, 2026.
                We at Crosslinks AI are working to make our site accessible to people with disabilities.
              </p>
            </div>

            <div>
              <h2 className="text-[32px] md:text-[70px] font-normal leading-[1.1] mb-6" style={{ fontFamily: "'Wix Madefor Display', sans-serif", letterSpacing: '-0.02em' }}>
                What web accessibility is
              </h2>
              <p>
                An accessible site allows visitors with disabilities to browse the site with the same or a similar level of ease and enjoyment as other visitors. This can be achieved with the capabilities of the system on which the site is operating, and through assistive technologies.
              </p>
            </div>

            <div>
              <h2 className="text-[32px] md:text-[70px] font-normal leading-[1.1] mb-6" style={{ fontFamily: "'Wix Madefor Display', sans-serif", letterSpacing: '-0.02em' }}>
                Accessibility adjustments on this site
              </h2>
              <p className="mb-6">
                We have adapted this site in accordance with WCAG 2.1 guidelines. Some of the adjustments include:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Used the Accessibility Wizard to find and fix potential accessibility issues</li>
                <li>Set the language of the site</li>
                <li>Set the content order of the site’s pages</li>
                <li>Defined clear heading structures on all of the site’s pages</li>
                <li>Added alternative text to images</li>
                <li>Implemented color combinations that meet the required color contrast</li>
                <li>Reduced the use of motion on the site</li>
                <li>Ensured all videos, audio, and files on the site are accessible</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[32px] md:text-[70px] font-normal leading-[1.1] mb-6" style={{ fontFamily: "'Wix Madefor Display', sans-serif", letterSpacing: '-0.02em' }}>
                Requests, issues, and suggestions
              </h2>
              <p>
                If you find an accessibility issue on the site, or if you require further assistance, you are welcome to contact us through the organization's accessibility coordinator.
              </p>
              <div className="mt-6 p-6 bg-[#14242D]/5 rounded-2xl">
                <p><strong>Coordinator Name:</strong> Accessibility Support</p>
                <p><strong>Email:</strong> accessibility@crosslinks.ai</p>
                <p><strong>Phone:</strong> +91 84602 80468</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AccessibilityStatement;
