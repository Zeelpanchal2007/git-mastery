import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { label: 'Years Experience', value: 10, suffix: '+' },
  { label: 'Happy Customers', value: 50, suffix: 'k+' },
  { label: 'Premium Beans', value: 100, suffix: '%' },
  { label: 'Signature Drinks', value: 25, suffix: '+' },
];

function Counter({ from, to, suffix }: { from: number; to: number; suffix: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      let start = from;
      const duration = 2000;
      const incrementTime = 20;
      const totalSteps = duration / incrementTime;
      const increment = (to - from) / totalSteps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= to) {
          setCount(to);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, from, to]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-darkRoast text-primaryBg relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute inset-0 opacity-5 bg-[url('/images/gallery-4.png')] bg-cover bg-center" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">
                <Counter from={0} to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base font-medium tracking-wider uppercase opacity-80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
