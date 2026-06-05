import { motion } from 'framer-motion';

const menuItems = [
  {
    name: 'Espresso',
    description: 'A perfect single shot of rich crema resting on a wooden table.',
    price: '$3.50',
    image: '/images/espresso.png',
  },
  {
    name: 'Cappuccino',
    description: 'Beautiful cappuccino with perfect microfoam in an elegant ceramic cup.',
    price: '$4.50',
    image: '/images/cappuccino.png',
  },
  {
    name: 'Latte',
    description: 'Beautifully poured latte with intricate art and shallow depth of field.',
    price: '$5.00',
    image: '/images/latte.png',
  },
  {
    name: 'Mocha',
    description: 'Decadent cafe mocha with a light dusting of cocoa powder on top.',
    price: '$5.50',
    image: '/images/mocha.png',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function MenuSection() {
  return (
    <section id="menu" className="py-24 bg-secondaryBg">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold text-darkRoast mb-4"
          >
            Today's Favorites
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 h-1 bg-accent mx-auto"
          ></motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-primaryBg rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-secondaryBg/50 group"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-serif font-semibold text-darkRoast">{item.name}</h3>
                  <span className="text-accent font-medium">{item.price}</span>
                </div>
                <p className="text-primaryText text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
