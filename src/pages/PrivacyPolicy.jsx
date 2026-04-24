import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
          className="max-w-[655px] mx-auto"
        >
          <h1 className="text-[40px] md:text-[85px] font-normal leading-[1.1] text-[#14242D] mb-12" style={{ fontFamily: "'Wix Madefor Display', sans-serif", letterSpacing: '-0.02em' }}>
            Privacy Policy
          </h1>

          <div className="space-y-8 text-[#14242D] text-[16px] leading-[1.8] font-normal">
            <div>
              <h2 className="text-[19px] font-bold mb-4">A legal disclaimer</h2>
              <p>
                The explanations and information provided on this page are only general and high-level explanations and information on how to write your own document of a Privacy Policy. You should not rely on this article as legal advice or as recommendations regarding what you should actually do, because we cannot know in advance what are the specific privacy policies you wish to establish between your business and your customers and visitors. We recommend that you seek legal advice to help you understand and to assist you in the creation of your own Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-[19px] font-bold mb-4">Privacy Policy: the basics</h2>
              <p>
                Having said that, a privacy policy is a statement that discloses some or all of the ways a website collects, uses, discloses, processes, and manages the data of its visitors and customers. It usually also includes a statement regarding the website’s commitment to protecting its visitors’ or customers’ privacy, and an explanation about the different mechanisms the website is implementing in order to protect privacy.
              </p>
              <p className="mt-4">
                Different jurisdictions have different legal obligations of what must be included in a Privacy Policy. You are responsible to make sure you are following the relevant legislation to your activities and location.
              </p>
            </div>

            <div>
              <h2 className="text-[19px] font-bold mb-4">What to include in the Privacy Policy</h2>
              <p>
                Generally speaking, a Privacy Policy often addresses these types of issues: the types of information the website is collecting and the manner in which it collects the data; an explanation about why is the website collecting these types of information; what are the website’s practices on sharing the information with third parties; ways in which your visitors and customers can exercise their rights according to the relevant privacy legislation; the specific practices regarding minors’ data collection; and much, much more.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
