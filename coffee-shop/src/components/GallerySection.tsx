import { motion } from 'framer-motion';

const images = [
  { src: '/images/gallery-1.png', alt: 'Elegant coffee cups', className: 'md:col-span-2 md:row-span-2' },
  { src: '/images/gallery-2.png', alt: 'Cafe interior', className: 'md:col-span-1 md:row-span-1' },
  { src: '/images/gallery-3.png', alt: 'Barista pouring', className: 'md:col-span-1 md:row-span-2' },
  { src: '/images/gallery-4.png', alt: 'Roasting process', className: 'md:col-span-1 md:row-span-1' },
];

export default function GallerySection() {
  return (
    <section className="py-24 bg-primaryBg">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-serif font-bold text-darkRoast mb-4"
          >
            The Experience
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-16 h-1 bg-accent mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-darkRoast/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
