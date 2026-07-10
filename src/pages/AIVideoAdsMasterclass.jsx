import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useModal } from '../context/ModalContext';

// ========== SECTION 1: HERO =========
const HeroSection = ({
  workshop,
  openWorkshopModal,
  currentVideoIndex,
  setCurrentVideoIndex,
  videoRef,
  heroVideoSlider
}) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="pt-20 md:pt-32 pb-16 md:pb-24 px-4"
  >
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px] lg:min-h-[700px]">
        {/* Left Column */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="inline-block mb-6 px-4 py-2 bg-[#ffb950]/10 rounded-full border border-[#ffb950]/30"
          >
            <p className="text-sm font-semibold text-[#ffb950]">
              Live Workshop | 25 july 2026 | 3 Hours
            </p>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#14242D] mb-6 leading-tight">
            Create Your First AI Video Ad Workflow in 3 Hours
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[#14242D]/70 mb-8 leading-relaxed">
            A practical live workshop for creators, freelancers, marketers, business owners, and agency teams who want to create short video ads using AI, without needing professional editing experience.
          </p>

          {/* CTA Button - Desktop Only */}
          <motion.button
            onClick={() => openWorkshopModal(workshop.title)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="hidden lg:block bg-[#ffb950] hover:bg-[#ffb950]/90 text-[#14242D] px-8 md:px-12 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl mb-4"
          >
            Register Now
          </motion.button>

          {/* Secondary Line - Desktop Only */}
          <p className="hidden lg:block text-sm md:text-base text-[#14242D]/60 font-medium">
            Includes recording, templates, prompt system, and practical workflow.
          </p>
        </div>

        {/* Right Column - Video Slider */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-center w-full h-full"
        >
          <div className="h-full flex flex-col items-center justify-center gap-4">
            {/* Video Container with Arrows */}
            <div className="flex items-center justify-center gap-4 h-full">
              {/* Left Arrow */}
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => setCurrentVideoIndex((prev) => (prev === 0 ? heroVideoSlider.length - 1 : prev - 1))}
                className="p-2 rounded-full bg-[#ffb950] hover:bg-[#ffb950]/90 text-[#14242D] transition-all cursor-pointer flex-shrink-0"
              >
                <ChevronLeft size={20} />
              </button>

              {/* Video Container */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl shadow-lg border border-[#14242D]/10 bg-[#14242D] aspect-[9/16] flex items-center justify-center h-full max-h-[550px]"
              >
                <video
                  key={currentVideoIndex}
                  ref={videoRef}
                  src={`${workshop.videoFolder}/${heroVideoSlider[currentVideoIndex]}`}
                  className="w-full h-full object-cover rounded-2xl"
                  controls
                />
              </motion.div>

              {/* Right Arrow */}
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => setCurrentVideoIndex((prev) => (prev === heroVideoSlider.length - 1 ? 0 : prev + 1))}
                className="p-2 rounded-full bg-[#ffb950] hover:bg-[#ffb950]/90 text-[#14242D] transition-all cursor-pointer flex-shrink-0"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Video Indicators */}
            <div className="flex gap-2 justify-center">
              {heroVideoSlider.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentVideoIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentVideoIndex
                    ? 'bg-[#ffb950] w-8'
                    : 'bg-[#14242D]/30 hover:bg-[#14242D]/50'
                    }`}
                />
              ))}
            </div>

          </div>
        </motion.div>

        {/* CTA Button and Secondary Line - Mobile/Tablet Only */}
        <div className="lg:hidden col-span-1">
          <motion.button
            onClick={() => openWorkshopModal(workshop.title)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#ffb950] hover:bg-[#ffb950]/90 text-[#14242D] px-8 md:px-12 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl mb-4 w-full"
          >
            Register Now
          </motion.button>

          <p className="text-sm md:text-base text-[#14242D]/60 font-medium">
            Includes recording, templates, prompt system, and practical workflow.
          </p>
        </div>
      </div>
    </div>
  </motion.section>
);

// ========== SECTION 2-3: BEFORE & AFTER COMPARISON =========
const BeforeAfterComparisonSection = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="py-20 md:py-24 px-4"
  >
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#14242D] mb-6 leading-tight tracking-tight">
          The Difference This Workshop Makes
        </h2>
        <p className="text-base md:text-lg text-[#14242D]/60 max-w-2xl mx-auto leading-relaxed tracking-normal">
          See the clear contrast between struggling without a system and creating confidently with the right workflow.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* BEFORE Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl p-8 md:p-10 border-2 border-[#14242D]/20 bg-gradient-to-br from-[#14242D]/5 to-transparent"
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="inline-block mb-4 px-4 py-2 bg-[#14242D]/10 rounded-full w-full text-center"
            >
              <p className="text-sm font-semibold text-[#14242D]">❌ BEFORE THE WORKSHOP</p>
            </motion.div>
            <p className="text-[#14242D]/70 text-sm leading-relaxed">
              Creating video ads is powerful, but the process is usually painful.
            </p>
          </div>

          {/* Pain Points */}
          <div className="space-y-4">
            {[
              { title: 'Idea Confusion', icon: '💭', desc: 'Struggling to come up with compelling ad angles and hooks.' },
              { title: 'Script Writing', icon: '📝', desc: 'Hard to write punchy scripts that grab attention.' },
              { title: 'Storyboard Planning', icon: '🎬', desc: 'Uncertain about how to plan shots and scenes.' },
              { title: 'Visual Production', icon: '🎨', desc: 'Spending hours creating or sourcing visuals.' },
              { title: 'Editing Delays', icon: '⏰', desc: 'Getting stuck in long, repetitive editing sessions.' },
              { title: 'Repeated Revisions', icon: '🔄', desc: 'Going back and forth multiple times to tweak.' }
            ].map((pain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex gap-3 p-3 rounded-lg border border-[#14242D]/10 bg-white/50"
              >
                <div className="text-2xl flex-shrink-0">{pain.icon}</div>
                <div className="min-w-0">
                  <h4 className="font-bold text-[#14242D] text-sm">{pain.title}</h4>
                  <p className="text-[#14242D]/60 text-xs leading-relaxed">{pain.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AFTER Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl p-8 md:p-10 border-2 border-[#ffb950]/40 bg-gradient-to-br from-[#ffb950]/10 to-transparent"
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="inline-block mb-4 px-4 py-2 bg-[#ffb950]/20 rounded-full w-full text-center"
            >
              <p className="text-sm font-semibold text-[#ffb950]">✓ AFTER THE WORKSHOP</p>
            </motion.div>
            <p className="text-[#14242D]/70 text-sm leading-relaxed">
              You'll have a clear system to create video ads from idea to finished AI video.
            </p>
          </div>

          {/* Workflow Steps */}
          <div className="space-y-3">
            {[
              { step: '1. Idea Generation', icon: '💡', desc: 'Use proven frameworks to brainstorm strong ad angles.' },
              { step: '2. Storytelling', icon: '📖', desc: 'Structure ads with hooks, problems, and solutions.' },
              { step: '3. Storyboarding', icon: '📐', desc: 'Plan the ad scene by scene before AI generation.' },
              { step: '4. Prompt Writing', icon: '✍️', desc: 'Write clear prompts that deliver the visuals you want.' },
              { step: '5. AI Video Creation', icon: '🎬', desc: 'Generate professional video scenes with confidence.' },
              { step: '6. Review & Improve', icon: '⭐', desc: 'Evaluate and enhance outputs using a proven checklist.' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex gap-3 p-3 rounded-lg border border-[#ffb950]/30 bg-white/70"
              >
                <div className="text-2xl flex-shrink-0">{item.icon}</div>
                <div className="min-w-0">
                  <h4 className="font-bold text-[#14242D] text-sm">{item.step}</h4>
                  <p className="text-[#14242D]/60 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </div>
  </motion.section>
);

// ========== SECTION 4: WHAT YOU WILL LEARN =========
const WhatYouWillLearnSection = () => {
  const [selectedLearn, setSelectedLearn] = React.useState(0);

  const learnings = [
    { title: 'Ad Idea Generation', desc: 'Discover a proven framework to generate compelling ad ideas from product benefits, customer pain points, emotions, and special offers. Learn the 5 angles that work best for any business—so you never run out of creative directions. This methodology helps you brainstorm multiple ad variations in minutes instead of hours.' },
    { title: 'Storytelling Frameworks', desc: 'Master the narrative structure that makes ads persuasive: the hook, problem-agitation, solution, social proof, and call-to-action formula. Understand the psychology behind why certain video narratives compel viewers to take action. Apply these frameworks to any product, service, or offer to create ads that actually convert.' },
    { title: 'Storyboarding', desc: 'Plan your entire ad before generating a single video. Learn how to break down your narrative into individual scenes, specify visual elements for each shot, and create a detailed visual blueprint. This prevents wasted AI generation, ensures consistency across your ads, and makes the entire creation process faster and more predictable.' },
    { title: 'AI Video Creation', desc: 'Get hands-on with AI video generation tools—learn which tools work best for different scenarios, how to structure your requests for professional-quality outputs, and the workflows that separate average from exceptional results. Master the best practices for creating video scenes, product demonstrations, and lifestyle visuals that look polished and intentional.' },
    { title: 'Better Prompt Writing', desc: 'Transform your prompts from vague to precise. Learn the exact formula for describing subject matter, background environments, camera movements, framing, lighting conditions, color grading, and visual style. This skill alone can cut your iterations in half—better prompts mean better results on the first try, saving you time and frustration.' },
    { title: 'Review & Improvement', desc: 'Develop a critical eye for AI-generated video quality. Learn the specific checklist to evaluate outputs for coherence, visual quality, brand alignment, and viewer impact. Discover how to identify exactly what went wrong when a video misses the mark—and how to refine your storyboard and prompts to fix it in the next iteration.' }
  ];

  return (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="py-20 md:py-24 px-4"
  >
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#14242D] mb-4">What You Will Learn</h2>
        <p className="text-lg text-[#14242D]/60">6 core learning outcomes</p>
      </div>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side - Card Titles */}
        <div className="flex flex-col gap-3">
          {learnings.map((item, index) => (
            <motion.button
              key={index}
              type="button"
              onClick={() => setSelectedLearn(index)}
              onMouseEnter={() => setSelectedLearn(index)}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`text-left p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer group ${
                selectedLearn === index
                  ? 'border-[#ffb950] bg-[#ffb950]/10'
                  : 'border-[#14242D]/10 hover:border-[#ffb950]/50 hover:bg-[#ffb950]/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={selectedLearn === index ? { scale: 1.2 } : { scale: 1 }}
                  className="w-8 h-8 rounded-full bg-[#ffb950] text-[#14242D] font-bold flex items-center justify-center flex-shrink-0 text-sm"
                >
                  {index + 1}
                </motion.div>
                <h3 className={`font-bold transition-colors ${
                  selectedLearn === index ? 'text-[#14242D]' : 'text-[#14242D]/70 group-hover:text-[#14242D]'
                }`}>
                  {item.title}
                </h3>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Right Side - Description Card */}
        <motion.div
          key={selectedLearn}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-2 p-8 rounded-2xl border-2 border-[#ffb950]/50 bg-gradient-to-br from-[#ffb950]/10 to-transparent"
        >
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-bold text-[#14242D] mb-2">{learnings[selectedLearn].title}</h3>
              <div className="h-1 w-16 bg-[#ffb950] rounded-full"></div>
            </div>
            <p className="text-lg text-[#14242D]/70 leading-relaxed">
              {learnings[selectedLearn].desc}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </motion.section>
);
};

// ========== SECTION 5: WHAT YOU WILL CREATE =========
const WhatYouWillCreateSection = ({ workshop, openWorkshopModal }) => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="py-20 md:py-24 px-4 bg-[#14242D]/2"
  >
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#14242D] mb-4">
          During the workshop, you will build one complete AI video ad direction.
        </h2>
        <p className="text-lg text-[#14242D]/60">You're not just watching a tool demo—you're creating real assets.</p>
      </div>

      {/* Student Videos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {workshop.workshopCreatedVideos.map((video, index) => (
          <motion.div
            key={`student-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-[#14242D]/10 bg-[#14242D]"
          >
            <video
              src={`${workshop.videoFolder}/${video}`}
              controls
              className="w-full aspect-[9/16] object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <motion.button
          onClick={() => openWorkshopModal(workshop.title)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="bg-[#ffb950] hover:bg-[#ffb950]/90 text-[#14242D] px-8 md:px-12 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
        >
          Register Now
        </motion.button>
      </motion.div>
    </div>
  </motion.section>
);

// ========== SECTION 6: CAROUSEL PROOF (outside to prevent recreation) =========
const CarouselProof = ({ workshop, currentAttendeeIndex, setCurrentAttendeeIndex, currentMentorIndex, setCurrentMentorIndex }) => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="py-20 md:py-24 px-4 bg-[#14242D]/2"
  >
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#14242D] mb-4">You can create this type of videos</h2>
        <p className="text-lg text-[#14242D]/60">Watch examples created during the workshop and by the facilitator.</p>
      </div>

      {/* Student Creations */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold text-[#14242D] mb-8">Student Creations</h3>
        <div className="relative w-full flex flex-col items-center">
          {/* Left Arrow */}
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => setCurrentAttendeeIndex((prev) => (prev === 0 ? workshop.attendeeVideos.length - 1 : prev - 1))}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#ffb950] hover:bg-[#ffb950]/90 text-[#14242D] shadow-lg transition-all z-10 cursor-pointer"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Videos Grid */}
          <div className="w-full px-16 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
              {[0, 1, 2].map((offset) => {
                const index = (currentAttendeeIndex + offset) % workshop.attendeeVideos.length;
                return (
                  <motion.div
                    key={`attendee-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: offset * 0.1 }}
                    className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-[#14242D]/10 bg-[#14242D] max-h-[350px]"
                  >
                    <video
                      src={`${workshop.videoFolder}/${workshop.attendeeVideos[index]}`}
                      controls
                      className="w-full aspect-video object-cover"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => setCurrentAttendeeIndex((prev) => ((prev + 1) % workshop.attendeeVideos.length))}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#ffb950] hover:bg-[#ffb950]/90 text-[#14242D] shadow-lg transition-all z-10 cursor-pointer"
          >
            <ChevronRight size={24} />
          </button>

          {/* Video Indicators */}
          <div className="flex gap-2 justify-center mt-6">
            {workshop.attendeeVideos.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentAttendeeIndex(index)}
                className={`w-2 h-2 rounded-full transition-all pointer-events-auto ${index === currentAttendeeIndex
                  ? 'bg-[#ffb950] w-8'
                  : 'bg-[#14242D]/30 hover:bg-[#14242D]/50'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mentor Creations */}
      <div>
        <h3 className="text-2xl font-bold text-[#14242D] mb-8">Mentor Creations</h3>
        <div className="relative w-full flex flex-col items-center">
          {/* Left Arrow */}
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => setCurrentMentorIndex((prev) => (prev === 0 ? workshop.mentorVideos.length - 1 : prev - 1))}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#ffb950] hover:bg-[#ffb950]/90 text-[#14242D] shadow-lg transition-all z-10 cursor-pointer"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Videos Grid */}
          <div className="w-full px-16 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
              {[0, 1].map((offset) => {
                const index = (currentMentorIndex + offset) % workshop.mentorVideos.length;
                return (
                  <motion.div
                    key={`mentor-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: offset * 0.1 }}
                    className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-[#14242D]/10 bg-[#14242D] flex justify-center max-h-[500px]"
                  >
                    <video
                      src={`${workshop.videoFolder}/${workshop.mentorVideos[index]}`}
                      controls
                      className="w-full aspect-[9/16] object-cover"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => setCurrentMentorIndex((prev) => ((prev + 1) % workshop.mentorVideos.length))}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#ffb950] hover:bg-[#ffb950]/90 text-[#14242D] shadow-lg transition-all z-10 cursor-pointer"
          >
            <ChevronRight size={24} />
          </button>

          {/* Video Indicators */}
          <div className="flex gap-2 justify-center mt-6">
            {workshop.mentorVideos.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentMentorIndex(index)}
                className={`w-2 h-2 rounded-full transition-all pointer-events-auto ${index === currentMentorIndex
                  ? 'bg-[#ffb950] w-8'
                  : 'bg-[#14242D]/30 hover:bg-[#14242D]/50'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

// ========== SECTION 7: WHO THIS IS FOR =========
const WhoIsForSection = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="py-20 md:py-24 px-4 bg-gradient-to-b from-white via-[#ffb950]/3 to-white"
  >
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#14242D] mb-4">Who This Is For</h2>
        <p className="text-lg text-[#14242D]/60">Check if you're a good fit for this workshop</p>
      </div>

      {/* Top Section - Perfect For */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-[#ffb950] flex items-center justify-center flex-shrink-0">
            <span className="text-[#14242D] text-lg font-bold">✓</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#14242D]">Perfect For You If You Are...</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Creators', desc: 'Content makers looking to expand' },
            { title: 'Freelancers', desc: 'Adding AI video to your skillset' },
            { title: 'Marketers', desc: 'Needing hands-on AI knowledge' },
            { title: 'Business Owners', desc: 'Want to create your own ads' },
            { title: 'Agency Teams', desc: 'Looking to scale output fast' },
            { title: 'Beginners', desc: 'With little to no editing experience' },
            { title: 'Practical Learners', desc: 'Who want real AI workflows' },
            { title: 'Growth-Focused', desc: 'Ready to level up your skills' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: '0 12px 24px rgba(255, 185, 80, 0.15)' }}
              className="p-5 rounded-xl border-2 border-[#ffb950]/40 bg-gradient-to-br from-white to-[#ffb950]/8 hover:border-[#ffb950]/80 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#ffb950] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  <span className="text-[#14242D] text-xs font-bold">✓</span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-[#14242D] text-sm group-hover:text-[#ffb950] transition-colors">{item.title}</h4>
                  <p className="text-[#14242D]/60 text-xs mt-1 leading-tight">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-16">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#14242D]/20 to-transparent"></div>
        <span className="text-[#14242D]/40 font-semibold text-sm">OR</span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#14242D]/20 to-transparent"></div>
      </div>

      {/* Bottom Section - Not For You */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-[#14242D]/20 flex items-center justify-center flex-shrink-0">
            <span className="text-[#14242D] text-lg font-bold">→</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#14242D]">Not For You If...</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Want Quick Money', desc: 'Looking for passive income shortcut' },
            { title: 'Expect Full Automation', desc: 'Think AI does everything alone' },
            { title: 'Need General Marketing', desc: 'Want a broad marketing course' },
            { title: 'Want Advanced Editing', desc: 'Need professional editing training' },
            { title: 'Not Willing to Practice', desc: 'Looking for zero-effort solutions' },
            { title: 'Only Want a Certificate', desc: 'Not interested in actual skills' },
            { title: 'Need 1-on-1 Support', desc: 'Require ongoing personal mentoring' },
            { title: 'Want Everything Included', desc: 'Expect unlimited scope & updates' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: '0 12px 24px rgba(20, 36, 45, 0.1)' }}
              className="p-5 rounded-xl border-2 border-[#14242D]/15 bg-gradient-to-br from-white via-[#14242D]/2 to-transparent hover:border-[#ffb950]/50 hover:bg-gradient-to-br hover:from-white hover:via-[#ffb950]/5 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#14242D]/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#ffb950] group-hover:scale-110 transition-all">
                  <span className="text-[#14242D] text-xs font-bold">—</span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-[#14242D] text-sm group-hover:text-[#ffb950] transition-colors">{item.title}</h4>
                  <p className="text-[#14242D]/60 text-xs mt-1 group-hover:text-[#14242D]/75 leading-tight transition-colors">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <div className="inline-block">
          <p className="text-[#14242D]/70 text-lg mb-3">
            Still unsure? <span className="font-bold text-[#ffb950]">This is a practical, hands-on workshop</span> — not theory.
          </p>
          <div className="h-1 w-16 bg-[#ffb950] mx-auto rounded-full"></div>
        </div>
      </motion.div>
    </div>
  </motion.section>
);

// ========== SECTION 8: WHY LEARN THIS NOW =========
const WhyLearnNowSection = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="py-20 md:py-24 px-4 bg-[#14242D]/2"
  >
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-[#14242D] mb-12 text-center">Why Learn This Now?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: 'Short Video Demand Is Growing',
            desc: 'Businesses need more videos for social media, ads, launches, and campaigns.'
          },
          {
            title: 'AI Reduces Production Friction',
            desc: 'AI helps people move faster from idea to visual direction.'
          },
          {
            title: 'New Skill Opportunity',
            desc: 'People who combine marketing thinking with AI execution will have an advantage.'
          },
          {
            title: 'Early Adopters Earn More',
            desc: 'Skills are more valuable when fewer people have them. Learning now puts you ahead.'
          },
          {
            title: 'One Person, Many Videos',
            desc: 'You can scale content production solo instead of managing teams or outsourcing.'
          },
          {
            title: 'Faster Testing & Iteration',
            desc: 'Test multiple ad angles in hours instead of days. Speed is competitive advantage.'
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl border border-[#14242D]/10 hover:border-[#ffb950]/50 hover:bg-[#ffb950]/5 transition-all"
          >
            <h3 className="text-lg font-bold text-[#14242D] mb-3">{item.title}</h3>
            <p className="text-[#14242D]/60 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

// ========== SECTION 9: WHAT MAKES THIS DIFFERENT =========
const WhatMakesDifferentSection = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="py-20 md:py-24 px-4"
  >
    <div className="max-w-4xl mx-auto">
      <div className="rounded-3xl bg-gradient-to-r from-[#14242D] to-[#14242D]/80 p-12 md:p-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          What Makes This Workshop Different
        </h2>
        <p className="text-xl text-white text-center mb-12 font-semibold">
          Marketing thinking first. AI tools second.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            'Not just tool demos',
            'Not random prompting',
            'Not theory-heavy',
            'Full ad creation process',
            'Idea to storyboard to prompt to video',
            'Beginner-friendly explanation',
            'Practical examples',
            'Hands-on implementation'
          ].map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-white"
            >
              <span className="text-[#ffb950] font-bold text-lg">✓</span>
              <span className="text-lg">{point}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.section>
);

// ========== SECTION 10: WHAT YOU WILL GET =========
const WhatYouWillGetSection = ({ workshop, openWorkshopModal }) => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="py-20 md:py-24 px-4 bg-[#14242D]/2"
  >
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-[#14242D] mb-12 text-center">What You Will Get</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          'Live practical training',
          'Workshop recording',
          'Ad idea framework',
          'Storytelling structure',
          'Storyboard template',
          'Prompt writing system',
          'AI video workflow',
          'Example ad breakdowns',
          'Output improvement checklist',
          'Practical guidance after the session'
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 p-4 rounded-lg border border-[#14242D]/10 hover:border-[#ffb950]/50 hover:bg-[#ffb950]/5 transition-all"
          >
            <span className="text-[#ffb950] font-bold text-lg">+</span>
            <span className="text-[#14242D] font-semibold">{item}</span>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <motion.button
          onClick={() => openWorkshopModal(workshop.title)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="bg-[#ffb950] hover:bg-[#ffb950]/90 text-[#14242D] px-8 md:px-12 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
        >
          Register Now
        </motion.button>
      </motion.div>
    </div>
  </motion.section>
);

// ========== SECTION 11: FACILITATOR =========
const FacilitatorSection = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="py-20 md:py-24 px-4"
  >
    <div className="max-w-5xl mx-auto">
      <div className="bg-gradient-to-r from-[#14242D] to-[#14242D]/80 rounded-3xl p-8 md:p-12 lg:p-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Meet Your Facilitator</h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 rounded-full bg-[#ffb950] flex items-center justify-center overflow-hidden shadow-lg">
              <img src="/piyush.jpg" alt="Piyush Bharoliya" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-white mb-2">Piyush Bharoliya</h3>
            <p className="text-[#ffb950] font-semibold text-lg mb-6">Founder, Crosslinks AI</p>

            <div className="space-y-4 text-white leading-relaxed">
              <p>
                With 18 years of experience in marketing and business communication, Piyush helps founders, teams, and professionals understand and use AI in a simple, practical way.
              </p>
              <p>
                At Crosslinks AI, he works with businesses to identify where AI can save time, reduce effort, improve output, and make daily work easier.
              </p>
            </div>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/piyushbharoliya/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[#ffb950] text-[#14242D] rounded-lg font-semibold hover:bg-[#ffb950]/90 transition-colors"
            >
              Connect on LinkedIn
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

// ========== SECTION 12: FAQ =========
const FAQSection = ({ expandedFaq, setExpandedFaq }) => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="py-20 md:py-24 px-4 bg-gradient-to-b from-white via-[#ffb950]/3 to-white"
  >
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          className="inline-block mb-4 px-4 py-2 bg-[#ffb950]/10 rounded-full border border-[#ffb950]/30"
        >
          <p className="text-sm font-semibold text-[#ffb950]">QUICK ANSWERS</p>
        </motion.div>
        <h2 className="text-3xl md:text-5xl font-bold text-[#14242D] mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-[#14242D]/60">Everything you need to know about the workshop</p>
      </div>

      <div className="space-y-3">
        {[
          {
            q: 'Do I need video editing experience?',
            a: 'No. This workshop is designed for complete beginners. AI tools do the heavy lifting.'
          },
          {
            q: 'Do I need prior AI experience?',
            a: 'Not at all. We teach you everything step-by-step, starting from the basics.'
          },
          {
            q: 'Will I create a complete video ad?',
            a: 'Yes. During the 3-hour workshop, you will create one complete ad direction from idea to AI video generation.'
          },
          {
            q: 'Can I use this for my business?',
            a: 'Absolutely. The workflow and templates are designed to be immediately applicable to your business.'
          },
          {
            q: 'Can I use this as a freelance service?',
            a: 'Yes. Many attendees use these skills to offer AI video ad creation as a freelance service.'
          },
          {
            q: 'Will recordings be available?',
            a: 'Yes. You get lifetime access to the workshop recording, templates, and all materials.'
          },
          {
            q: 'Is this a general marketing course?',
            a: 'No. This is specifically focused on the AI video ad creation workflow—nothing more, nothing less.'
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group"
          >
            <button
              onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              className={`w-full p-5 md:p-6 flex items-center justify-between rounded-xl transition-all duration-300 border-2 ${
                expandedFaq === index
                  ? 'border-[#ffb950] bg-gradient-to-r from-[#ffb950]/10 to-transparent shadow-lg'
                  : 'border-[#14242D]/10 bg-white hover:border-[#ffb950]/40 hover:bg-gradient-to-r hover:from-[#ffb950]/5 hover:to-transparent'
              }`}
            >
              <div className="flex items-start gap-4 flex-1 text-left">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  expandedFaq === index
                    ? 'bg-[#ffb950] text-[#14242D]'
                    : 'bg-[#14242D]/10 text-[#14242D] group-hover:bg-[#ffb950]/20'
                }`}>
                  {index + 1}
                </div>
                <span className={`font-bold transition-colors duration-300 ${
                  expandedFaq === index
                    ? 'text-[#14242D]'
                    : 'text-[#14242D] group-hover:text-[#ffb950]'
                }`}>
                  {item.q}
                </span>
              </div>
              <ChevronDown
                size={20}
                className={`text-[#ffb950] transition-all duration-300 flex-shrink-0 ml-4 ${expandedFaq === index ? 'rotate-180' : ''}`}
              />
            </button>

            {expandedFaq === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-5 md:p-6 pt-0 md:pt-4">
                  <div className="pl-12 py-3 border-l-2 border-[#ffb950]/40 text-[#14242D]/75 leading-relaxed">
                    {item.a}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Additional Help CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-[#14242D]/5 to-[#ffb950]/10 border border-[#14242D]/10">
          <p className="text-[#14242D] text-sm md:text-base">
            Didn't find your answer? <a href="#contact" className="font-bold text-[#ffb950] hover:underline">Contact us</a> for more details.
          </p>
        </div>
      </motion.div>
    </div>
  </motion.section>
);

// ========== SECTION 13: FINAL CTA =========
const FinalCTASection = ({ workshop, openWorkshopModal }) => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="py-20 md:py-24 px-4 bg-gradient-to-r from-[#14242D] to-[#14242D]/80"
  >
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
        Learn to Create AI Video Ads Practically
      </h2>

      <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
        Join the 3-hour live workshop and learn how to think, plan, prompt, create, and improve AI video ads using a simple workflow.
      </p>

      {/* Details */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10 p-6 rounded-2xl bg-white/5 border border-white/10">
        <div className="text-center">
          <p className="text-[#ffb950] font-bold text-lg">Workshop Date</p>
          <p className="text-white text-sm">25 july 2026</p>
        </div>
        <div className="hidden md:block w-px h-12 bg-white/20"></div>
        <div className="text-center">
          <p className="text-[#ffb950] font-bold text-lg">Duration</p>
          <p className="text-white text-sm">3 Hours</p>
        </div>
        <div className="hidden md:block w-px h-12 bg-white/20"></div>
        <div className="text-center">
          <p className="text-[#ffb950] font-bold text-lg">Format</p>
          <p className="text-white text-sm">Live Workshop</p>
        </div>
        <div className="hidden md:block w-px h-12 bg-white/20"></div>
        <div className="text-center">
          <p className="text-[#ffb950] font-bold text-lg">Includes</p>
          <p className="text-white text-sm">Recording & Materials</p>
        </div>
      </div>

      {/* CTA Button */}
      <motion.button
        onClick={() => openWorkshopModal(workshop.title)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="bg-[#ffb950] hover:bg-[#ffb950]/90 text-[#14242D] px-12 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
      >
        Register Now
      </motion.button>
    </div>
  </motion.section>
);

const workshopConfig = {
  'ai-video-ads-masterclass': {
    id: 'ai-video-ads-masterclass',
    title: 'AI Video Ads Masterclass',
    date: '25 july 2026',
    duration: '3 Hours',
    videoFolder: '/workshop/AI_ads_4th july',
    attendeeVideos: [
      'WhatsApp Video 2026-07-06 at 14.37.46.mp4',
      'WhatsApp Video 2026-07-06 at 14.37.46 (1).mp4',
      'WhatsApp Video 2026-07-06 at 14.37.47.mp4'
    ],
    workshopCreatedVideos: [
      'Mentor_Video_One.mp4',
      'Mentor_Video_Two.mp4',
      'Mentor_Video_Three.mp4'
    ],
    mentorVideos: [
      'Mentor_Video_Four.mp4',
      'Mentor_Video_Five.mp4',
      'Mentor_Video_Six.mp4',
      'Mentor_Video_Seven.mp4',
      'Mentor_Video_Eight.mp4',
      'Mentor_Video_Nine.mp4',
      'Mentor_Video_Ten.mp4'
    ]
  }
};

const AIVideoAdsMasterclass = () => {
  const { workshopId } = useParams();
  const navigate = useNavigate();
  const { openWorkshopModal } = useModal();
  const workshop = workshopConfig[workshopId];
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentAttendeeIndex, setCurrentAttendeeIndex] = useState(0);
  const [currentMentorIndex, setCurrentMentorIndex] = useState(0);

  const heroVideoSlider = [
    'Mentor_Video_Ten.mp4',
    'Mentor_Video_Eight.mp4',
    'Mentor_Video_Seven.mp4'
  ];
  const videoRef = useRef(null);

  if (!workshop) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#14242D] mb-2">Workshop Not Found</h1>
          <p className="text-[#14242D]/60">The workshop you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        workshop={workshop}
        openWorkshopModal={openWorkshopModal}
        currentVideoIndex={currentVideoIndex}
        setCurrentVideoIndex={setCurrentVideoIndex}
        videoRef={videoRef}
        heroVideoSlider={heroVideoSlider}
      />
      <BeforeAfterComparisonSection />
      <WhatYouWillLearnSection />
      <WhatYouWillCreateSection
        workshop={workshop}
        openWorkshopModal={openWorkshopModal}
      />
      <CarouselProof
        workshop={workshop}
        currentAttendeeIndex={currentAttendeeIndex}
        setCurrentAttendeeIndex={setCurrentAttendeeIndex}
        currentMentorIndex={currentMentorIndex}
        setCurrentMentorIndex={setCurrentMentorIndex}
      />
      <WhoIsForSection />
      <WhyLearnNowSection />
      <WhatMakesDifferentSection />
      <WhatYouWillGetSection
        workshop={workshop}
        openWorkshopModal={openWorkshopModal}
      />
      <FacilitatorSection />
      <FAQSection
        expandedFaq={expandedFaq}
        setExpandedFaq={setExpandedFaq}
      />
      <FinalCTASection
        workshop={workshop}
        openWorkshopModal={openWorkshopModal}
      />
      <div className="h-12"></div>
    </div>
  );
};

export default AIVideoAdsMasterclass;
