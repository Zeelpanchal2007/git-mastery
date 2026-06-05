import { Coffee } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-darkRoast text-primaryBg py-12 border-t border-coffeeBrown/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2 text-2xl font-serif font-bold text-primaryBg mb-6">
              <Coffee className="w-8 h-8 text-accent" />
              <span>Aura Roasters</span>
            </a>
            <p className="text-primaryBg/70 max-w-sm leading-relaxed mb-6">
              Dedicated to sourcing and roasting the finest coffees from around the world. Bringing people together, one cup at a time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-coffeeBrown flex items-center justify-center hover:bg-accent transition-colors duration-300 text-white text-sm font-bold">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-coffeeBrown flex items-center justify-center hover:bg-accent transition-colors duration-300 text-white text-sm font-bold">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-coffeeBrown flex items-center justify-center hover:bg-accent transition-colors duration-300 text-white text-sm font-bold">
                TW
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-4 text-primaryBg/80">
              <li><a href="#home" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-accent transition-colors">Menu</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-accent">Legal</h4>
            <ul className="space-y-4 text-primaryBg/80">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Returns</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-coffeeBrown/30 text-center text-primaryBg/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Aura Roasters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
