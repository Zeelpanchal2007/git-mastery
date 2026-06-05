import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-primaryBg">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src="/images/about.png"
            alt="Coffee roasting process"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-darkRoast/10"></div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-darkRoast mb-8">
            From Bean To Brew
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-serif font-semibold text-accent mb-2">Ethical Sourcing</h3>
              <p className="text-primaryText leading-relaxed">
                We travel the world to build direct relationships with farmers, ensuring fair wages and sustainable practices. Every bean tells a story of care and dedication.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-serif font-semibold text-accent mb-2">Small Batch Roasting</h3>
              <p className="text-primaryText leading-relaxed">
                Our master roasters treat each batch with precision, bringing out the unique flavor profile of every origin. We roast daily to ensure maximum freshness.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-serif font-semibold text-accent mb-2">Handmade Preparation</h3>
              <p className="text-primaryText leading-relaxed">
                Coffee making is an art. Our baristas are trained extensively to extract the perfect shot and pour beautiful latte art, turning your daily cup into an experience.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
