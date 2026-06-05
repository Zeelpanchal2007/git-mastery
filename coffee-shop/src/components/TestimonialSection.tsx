import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    review: 'The best espresso I have had in years. The atmosphere is just as warm and inviting as the staff. A true hidden gem.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Michael Chen',
    review: 'Their pour-over coffee changed my perspective on what coffee can taste like. You can really tell they care about the craft.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=11',
  },
  {
    name: 'Emma Roberts',
    review: 'I love working from here. The interior design is stunning, and the mocha is to die for. Highly recommend!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
];

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="py-24 bg-secondaryBg overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-serif font-bold text-darkRoast mb-4"
          >
            What They Say
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-16 h-1 bg-accent mx-auto"
          ></motion.div>
        </div>

        <div className="flex overflow-x-auto pb-8 md:grid md:grid-cols-3 gap-8 snap-x snap-mandatory hide-scrollbar">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="min-w-[85vw] md:min-w-0 snap-center bg-primaryBg p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-darkRoast/5"
            >
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-primaryText/80 text-lg italic mb-8 leading-relaxed">
                "{testimonial.review}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-secondaryBg"
                />
                <h4 className="font-serif font-semibold text-darkRoast text-lg">
                  {testimonial.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
