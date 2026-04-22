import { motion } from 'framer-motion';

const clients = [
  { name: "Corporate Connections Surat", category: "Business Networking" },
  { name: "Aditi Silk Mills", category: "Textile & Dyeing" },
  { name: "Sitaram Creation", category: "Textile" },
  { name: "Mosaic Moments", category: "Events" },
  { name: "BringJal", category: "Tech" },
  { name: "Quicky Bowl", category: "F&B" },
  { name: "Life of a Miracle", category: "Wellness" },
  { name: "Constant Edits", category: "Video Production" },
  { name: "Magic Health Club", category: "Health & Fitness" },
];

const Clients = () => {
  return (
    <section id="clients" className="bg-white border-t border-[#14242D]/5 py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12">

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">

          {/* Left — sticky heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="lg:sticky lg:top-32 self-start flex flex-col gap-6"
          >
            <p className="text-[13px] font-semibold tracking-[0.2em] text-[#14242D]/40 uppercase">Trusted By</p>
            <h2
              className="text-[2.8rem] md:text-[3.5rem] font-normal leading-[1.1] text-[#14242D]"
              style={{ letterSpacing: '-0.02em' }}
            >
              Our<br />Clients
            </h2>
            <p className="text-[15px] text-[#14242D]/50 leading-relaxed max-w-xs">
              Brands we've helped grow smarter and faster using AI.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-[3rem] font-normal text-[#14242D]" style={{ letterSpacing: '-0.04em' }}>
                {clients.length}
              </span>
              <span className="text-[13px] text-[#14242D]/40 uppercase tracking-widest leading-tight">
                Brands<br />& Growing
              </span>
            </div>
          </motion.div>

          {/* Right — client list */}
          <div className="flex flex-col">
            {clients.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: i * 0.07 }}
                className="group flex items-center justify-between py-6 border-t border-[#14242D]/8 hover:-mx-6 hover:px-6 hover:bg-[#ffb950]/8 transition-all duration-300 cursor-default rounded-2xl"
              >
                <div className="flex items-center gap-5">
                  <span
                    className="text-[1.4rem] md:text-[1.7rem] font-normal text-[#14242D] group-hover:translate-x-1 transition-transform duration-300 leading-none"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {client.name}
                  </span>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] bg-[#ffb950]/20 text-[#14242D]/60 group-hover:bg-[#ffb950] group-hover:text-[#14242D] px-3 py-1.5 rounded-full transition-all duration-300 shrink-0 hidden sm:block">
                  {client.category}
                </span>
              </motion.div>
            ))}
            <div className="border-t border-[#14242D]/8" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Clients;
