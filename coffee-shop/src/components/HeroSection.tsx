import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="z-10 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-serif font-bold text-darkRoast leading-tight mb-6 text-balance"
          >
            Crafted One Cup <br className="hidden md:block"/> At A Time.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-primaryText mb-10 max-w-lg leading-relaxed"
          >
            Experience freshly roasted coffee made with passion, precision, and the finest beans from around the world.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#menu" className="bg-darkRoast text-white px-8 py-4 rounded-full font-medium text-center hover:bg-coffeeBrown hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-darkRoast/20">
              Explore Menu
            </a>
            <a href="#about" className="bg-transparent text-darkRoast border border-darkRoast px-8 py-4 rounded-full font-medium text-center hover:bg-darkRoast hover:text-white hover:-translate-y-1 transition-all duration-300">
              Visit Us
            </a>
          </motion.div>
        </div>

        {/* Right Image Container */}
        <div className="relative h-[60vh] md:h-[80vh] w-full rounded-2xl overflow-hidden">
          <motion.div style={{ y }} className="absolute inset-0 h-[120%] -top-[10%]">
            <img
              src="/images/hero.png"
              alt="Beautifully crafted latte art"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Decorative floating element */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-coffeeBrown/5 rounded-full blur-3xl -z-10"
      />
    </section>
  );
}
