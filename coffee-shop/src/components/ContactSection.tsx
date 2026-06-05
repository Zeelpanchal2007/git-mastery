import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-secondaryBg">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-darkRoast mb-8">
              Visit Us
            </h2>
            <p className="text-primaryText text-lg mb-12 leading-relaxed">
              We'd love to hear from you. Whether you have a question about our roasting process, want to book an event, or just want to say hi.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primaryBg p-3 rounded-full text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-xl text-darkRoast mb-1">Location</h4>
                  <p className="text-primaryText/80">123 Artisan Way<br />Coffee District, CA 90210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primaryBg p-3 rounded-full text-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-xl text-darkRoast mb-1">Contact</h4>
                  <p className="text-primaryText/80">+1 (555) 123-4567<br />hello@auraroasters.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primaryBg p-3 rounded-full text-accent">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-xl text-darkRoast mb-1">Hours</h4>
                  <p className="text-primaryText/80">Mon - Fri: 7:00 AM - 6:00 PM<br />Sat - Sun: 8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-primaryBg p-8 md:p-12 rounded-3xl shadow-lg border border-darkRoast/5"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-darkRoast mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border border-secondaryBg bg-secondaryBg/50 focus:bg-primaryBg focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 text-primaryText"
                  placeholder="Jane Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-darkRoast mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-secondaryBg bg-secondaryBg/50 focus:bg-primaryBg focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 text-primaryText"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-darkRoast mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-secondaryBg bg-secondaryBg/50 focus:bg-primaryBg focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 text-primaryText resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full bg-darkRoast text-white py-4 rounded-xl font-medium hover:bg-coffeeBrown transition-colors duration-300 mt-4"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
