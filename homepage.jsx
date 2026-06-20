import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ArrowRight, Settings, Layers, 
  Wrench, Activity, CheckCircle, Phone, 
  Mail, MapPin, ChevronRight, ShieldCheck, 
  Wrench as Tool 
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-xl py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Area */}
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-slate-300 to-blue-200">
                  ETHiCS
                </span>
                <span className="text-[0.6rem] font-bold tracking-[0.2em] text-slate-400 uppercase mt-[-2px]">
                  Metal Forming Machineries
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {['Home', 'About', 'Products', 'Features', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-semibold tracking-wide text-slate-300 hover:text-blue-400 transition-colors uppercase"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-2 rounded-sm font-bold tracking-wide transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(29,78,216,0.5)] border border-blue-500"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-300 hover:text-white">
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950 border-t border-slate-800 absolute w-full left-0 top-full shadow-2xl">
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              {['Home', 'About', 'Products', 'Features', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-3 text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-blue-400 rounded-md uppercase tracking-wider"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-blue-900/20 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-slate-700/20 blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">Engineered for Excellence</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Durable & Efficient <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-slate-400">
                Sheet Metal Solutions
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              We deliver innovative products with superior quality and unmatched customer support tailored to meet heavy industrial demands.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => scrollToSection('products')}
                className="flex items-center justify-center space-x-2 bg-blue-700 hover:bg-blue-600 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(29,78,216,0.4)] border border-blue-500 hover:scale-105"
              >
                <span>View Our Machines</span>
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center justify-center space-x-2 bg-transparent border border-slate-500 hover:border-slate-300 hover:bg-slate-800 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-all"
              >
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-slate-950 relative border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center">
                  <span className="w-12 h-1 bg-blue-600 mr-4"></span>
                  About Us
                </h2>
                <h3 className="text-xl text-blue-400 font-semibold mb-6">A vision to deliver reliable & economical solutions.</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  We are a dynamic sheet metal company providing solutions with a strong vision to deliver reliable and economical machinery. We take immense pride in the quality of our machines and the dedicated service we provide.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  By using high-quality materials and components, we ensure that our machines are robust, reliable, and long-lasting. We are devoted to developing the manufacturing of high-quality machines and press brake tools for advanced sheet metal operations.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-800">
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Our Vision</h4>
                  <p className="text-sm text-slate-400">To deliver innovative products with superior quality and unmatched customer support.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Our Commitment</h4>
                  <p className="text-sm text-slate-400">Continuous improvement of products, quality, and specifications to provide the best to all clients.</p>
                </div>
              </div>
            </div>

            {/* Abstract Graphic / Placeholder for Machine Image */}
            <div className="relative h-[500px] rounded-lg border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden shadow-2xl flex items-center justify-center group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-700 mix-blend-luminosity"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              
              <div className="relative z-10 text-center p-8 backdrop-blur-sm bg-slate-900/60 border border-slate-700 rounded-xl">
                <Tool size={48} className="mx-auto text-blue-500 mb-4 opacity-80" />
                <h3 className="text-2xl font-bold text-white tracking-wider">PRECISION <br/>ENGINEERING</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Core Machinery</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Industry-leading metal forming solutions built for durability, precision, and peak operational efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product 1 */}
            <div className="bg-slate-800/40 border border-slate-700 p-8 rounded-sm hover:bg-slate-800 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(29,78,216,0.15)] flex flex-col h-full">
              <div className="w-14 h-14 bg-slate-900 border border-slate-600 flex items-center justify-center rounded-sm mb-6 group-hover:border-blue-500 transition-colors">
                <Layers className="text-blue-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-tight">Hydraulic Busbar Machine</h3>
              <p className="text-sm text-slate-400 mb-6 flex-grow">
                Compact, portable, and designed for user-friendly operation. Delivers effective solutions for precise punching, bending, and cutting of Copper and Aluminum Bus Bars.
              </p>
              <ul className="text-xs text-slate-500 space-y-2 mb-6 border-t border-slate-700 pt-4">
                <li>• Models: HMB-303, HM-BM20, PM20</li>
                <li>• Speedy and accurate bends</li>
                <li>• Inexpensive tooling</li>
              </ul>
              <button className="text-blue-400 text-sm font-bold uppercase tracking-wider flex items-center group-hover:text-blue-300">
                View Specs <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Product 2 */}
            <div className="bg-slate-800/40 border border-slate-700 p-8 rounded-sm hover:bg-slate-800 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(29,78,216,0.15)] flex flex-col h-full">
              <div className="w-14 h-14 bg-slate-900 border border-slate-600 flex items-center justify-center rounded-sm mb-6 group-hover:border-blue-500 transition-colors">
                <Activity className="text-blue-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-tight">Hydraulic Clinching Machine</h3>
              <p className="text-sm text-slate-400 mb-6 flex-grow">
                High-force fastener insertion machine (HM-640). Features extreme energy efficiency, ensuring force repeatability of ±2% for rigorous industrial applications.
              </p>
              <ul className="text-xs text-slate-500 space-y-2 mb-6 border-t border-slate-700 pt-4">
                <li>• Max 6mm Fastener Insertion</li>
                <li>• Built-in Safety Protection</li>
                <li>• Rigid C-Frame Structure</li>
              </ul>
              <button className="text-blue-400 text-sm font-bold uppercase tracking-wider flex items-center group-hover:text-blue-300">
                View Specs <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Product 3 */}
            <div className="bg-slate-800/40 border border-slate-700 p-8 rounded-sm hover:bg-slate-800 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(29,78,216,0.15)] flex flex-col h-full">
              <div className="w-14 h-14 bg-slate-900 border border-slate-600 flex items-center justify-center rounded-sm mb-6 group-hover:border-blue-500 transition-colors">
                <Settings className="text-blue-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-tight">Section Bending Machine</h3>
              <p className="text-sm text-slate-400 mb-6 flex-grow">
                Versatile hydraulic three-roll pipe rolling machine (HM-SB50H). Supports both horizontal and vertical operations with easy and quick roll changes.
              </p>
              <ul className="text-xs text-slate-500 space-y-2 mb-6 border-t border-slate-700 pt-4">
                <li>• Bends Pipes, Square/Rect Tubes</li>
                <li>• Hardened & Grinded Shafts</li>
                <li>• Welded Steel Construction</li>
              </ul>
              <button className="text-blue-400 text-sm font-bold uppercase tracking-wider flex items-center group-hover:text-blue-300">
                View Specs <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Product 4 */}
            <div className="bg-slate-800/40 border border-slate-700 p-8 rounded-sm hover:bg-slate-800 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(29,78,216,0.15)] flex flex-col h-full">
              <div className="w-14 h-14 bg-slate-900 border border-slate-600 flex items-center justify-center rounded-sm mb-6 group-hover:border-blue-500 transition-colors">
                <Wrench className="text-blue-400" size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-tight">Mechanical Plate Rolling</h3>
              <p className="text-sm text-slate-400 mb-6 flex-grow">
                Electric slip rolling machines (HM-SR Series). Asymmetrical 3-roll design easily operated for thin steel sheet bending with motor-driven power.
              </p>
              <ul className="text-xs text-slate-500 space-y-2 mb-6 border-t border-slate-700 pt-4">
                <li>• Models up to 3mm Thick / 1500mm Width</li>
                <li>• High Strength Steel Rolls</li>
                <li>• Worm Gear Pre-bending</li>
              </ul>
              <button className="text-blue-400 text-sm font-bold uppercase tracking-wider flex items-center group-hover:text-blue-300">
                View Specs <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="features" className="py-20 bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <ShieldCheck size={36} />,
                title: "Premium Quality",
                desc: "We use high-quality materials and components to ensure our machines are reliable and long-lasting."
              },
              {
                icon: <Activity size={36} />,
                title: "Economical Solutions",
                desc: "Providing strong, cost-effective sheet metal solutions without compromising on build quality or performance."
              },
              {
                icon: <Tool size={36} />,
                title: "Low Maintenance",
                desc: "Intelligently designed machines that require minimal maintenance, reducing your operational downtime."
              },
              {
                icon: <CheckCircle size={36} />,
                title: "Excellent Support",
                desc: "We maintain frequent contact with customers to address requirements and build long-term relationships."
              }
            ].map((feature, idx) => (
              <div key={idx} className="text-center px-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-900 border border-slate-700 text-blue-500 mb-6 shadow-inner">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-slate-400 mb-10 text-lg">
                Ready to upgrade your manufacturing capabilities? Contact us today for quotes, specifications, or after-sales support.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="mt-1 w-12 h-12 bg-slate-800 rounded-sm border border-slate-700 flex flex-shrink-0 items-center justify-center text-blue-400 mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Corporate Office & Works</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      #10, 1st Main, 1st Cross, Doddanekundi Industrial Area,<br />
                      Opp to NGEF Ancillary, Mahadevapura Post<br />
                      Bangalore - 560 048, India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 w-12 h-12 bg-slate-800 rounded-sm border border-slate-700 flex flex-shrink-0 items-center justify-center text-blue-400 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Phone</h4>
                    <p className="text-slate-400 text-sm">+91 973 837 1651</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 w-12 h-12 bg-slate-800 rounded-sm border border-slate-700 flex flex-shrink-0 items-center justify-center text-blue-400 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Email</h4>
                    <p className="text-slate-400 text-sm">hydromechengineer@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
             <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">
                  ETHiCS
                </span>
                <span className="text-[0.5rem] font-bold tracking-[0.2em] text-slate-500 uppercase mt-[-2px]">
                  Metal Forming Machineries
                </span>
              </div>
          </div>
          <div className="text-slate-500 text-sm text-center md:text-right">
            &copy; {new Date().getFullYear()} Ethics Metal Forming Machineries / Hydro Mech Engineers. <br className="md:hidden" />All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}