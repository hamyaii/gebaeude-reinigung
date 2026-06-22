import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Check, Star, Sparkles, Building2, Droplets, 
  Leaf, ShieldCheck, Clock, Menu, X, MessageCircle, Briefcase, Frame
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import heroBg from './assets/images/cleaning_hero_bg_1782119449449.jpg';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      // Adjusted for bento margins
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="font-sans text-slate-900 bg-slate-50 min-h-screen p-4 sm:p-6 lg:p-8 flex flex-col gap-6">
      {/* Navigation */}
      <nav className="sticky top-4 z-50 w-full max-w-7xl mx-auto">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-slate-200 shadow-sm px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer" onClick={() => scrollTo('home')}>
            <img src="/img/logo.png" alt="Elite Glanz Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-xl shadow-sm border border-slate-200" />
            <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
              ELITE<span className="text-sky-600">GLANZ</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <button onClick={() => scrollTo('home')} className="hover:text-slate-900 cursor-pointer text-sky-600 border-b-2 border-sky-600 pb-1">Home</button>
            <button onClick={() => scrollTo('leistungen')} className="hover:text-slate-900 cursor-pointer">Leistungen</button>
            <button onClick={() => scrollTo('preise')} className="hover:text-slate-900 cursor-pointer">Preise</button>
            <button onClick={() => scrollTo('bewertungen')} className="hover:text-slate-900 cursor-pointer">Bewertungen</button>
            <button onClick={() => scrollTo('kontakt')} className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-2.5 rounded-xl transition-colors flex items-center gap-2 shadow-lg">
              <MessageCircle className="w-4 h-4" />
              <span>Anfragen</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-sky-600">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0, marginTop: 0 }}
              animate={{ height: 'auto', opacity: 1, marginTop: 8 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              className="md:hidden bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden absolute w-full top-full"
            >
              <div className="flex flex-col p-6 gap-4 text-sm font-bold uppercase tracking-widest text-slate-500">
                <button onClick={() => scrollTo('home')} className="text-left text-sky-600">Home</button>
                <button onClick={() => scrollTo('leistungen')} className="text-left hover:text-slate-900">Leistungen</button>
                <button onClick={() => scrollTo('preise')} className="text-left hover:text-slate-900">Preise</button>
                <button onClick={() => scrollTo('bewertungen')} className="text-left hover:text-slate-900">Bewertungen</button>
                <button onClick={() => scrollTo('kontakt')} className="bg-sky-600 text-white px-5 py-3 rounded-xl flex items-center justify-center gap-2 mt-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Anfrage</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="max-w-7xl mx-auto w-full flex flex-col gap-6">
        {/* Section 1: Hero & Stats Bento */}
        <section id="home" className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 scroll-mt-32">
          {/* Hero Cell (Spans 3 cols) */}
          <div className="relative lg:col-span-3 bg-slate-900 rounded-3xl p-6 sm:p-12 flex flex-col justify-center overflow-hidden min-h-[400px] sm:min-h-[500px]">
             {/* Background Image / Banner */}
             <div className="absolute inset-0 z-0">
               <img src={heroBg} alt="Gebäudereinigung Banner" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
             </div>
             <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-0"></div>
             
             <div className="absolute -right-4 -top-4 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl shadow-2xl"></div>
             <div className="absolute -left-10 bottom-10 w-48 h-48 bg-slate-700/30 rounded-full blur-2xl"></div>
             
             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10 max-w-2xl">
                <span className="inline-block py-1 px-3 rounded-lg bg-white/10 text-sky-400 font-bold uppercase tracking-widest text-[10px] mb-6 border border-white/10">
                  Ihr Partner für professionelle Reinigung
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6 mt-4 sm:mt-0">
                  Gebäudereinigung mit <span className="text-sky-400 italic">System.</span><br/>
                  Sauber in allen Bereichen.
                </h1>
                <p className="text-slate-400 text-sm sm:text-base mb-10 max-w-lg leading-relaxed mix-blend-lighten">
                  Zuverlässig. Gründlich. Professionell. Wir sorgen für makellose Sauberkeit in Ludwigshafen und Umgebung.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={() => scrollTo('preise')} className="bg-white text-sky-600 hover:bg-slate-50 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-colors shadow-xl">
                    Aktionsangebote
                  </button>
                  <button onClick={() => scrollTo('kontakt')} className="bg-sky-600/20 hover:bg-sky-600/30 text-white border border-sky-400/30 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </button>
                </div>
             </motion.div>
          </div>

           {/* Stats / Features Column (Spans 1 col) */}
           <div className="lg:col-span-1 flex flex-col gap-6">
             <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-sky-50 text-sky-600 rounded-lg">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Aktiv</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">Zuverlässig</h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">Pünktlich & diskret.</p>
                </div>
             </div>
             
             <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-indigo-50 text-indigo-500 rounded-lg">
                    <Star className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Top</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">Qualität</h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">Hohe Standards.</p>
                </div>
             </div>

             <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-emerald-50 text-emerald-500 rounded-lg">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Eco</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">Nachhaltig</h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">Umweltfreundlich.</p>
                </div>
             </div>
           </div>
        </section>

        {/* Section 2: Leistungen */}
        <section id="leistungen" className="flex flex-col gap-6 scroll-mt-32">
           {/* Section Header Cell */}
           <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 overflow-hidden relative">
              <div className="absolute -left-20 top-0 w-48 h-48 bg-sky-50 text-sky-100 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                 <span className="text-sky-600 font-bold text-[10px] uppercase tracking-widest mb-2 block">Portfolio</span>
                 <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 uppercase">Unsere Leistungen</h2>
              </div>
              <p className="text-slate-500 text-sm max-w-sm relative z-10 font-medium">Umfassende Reinigungskonzepte, die genau auf Ihre Bedürfnisse abgestimmt sind.</p>
           </div>

           {/* Services Grid */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard icon={<Building2 />} title="Unterhaltsreinigung" desc="Regelmäßige Reinigung von Büros, Praxen, Schulen, Kindergärten & mehr." colorClass="bg-sky-50 text-sky-600" />
              <ServiceCard icon={<Briefcase />} title="Treppenhausreinigung" desc="Saubere & gepflegte Treppenhäuser für Wohn- und Geschäftshäuser." colorClass="bg-cyan-50 text-cyan-600" />
              <ServiceCard icon={<Sparkles />} title="Grundreinigung" desc="Intensive Reinigung für eine gründliche Sauberkeit bis ins Detail." colorClass="bg-indigo-50 text-indigo-500" />
              <ServiceCard icon={<Frame />} title="Bauendreinigung" desc="Bauendreinigung & Bauzwischenreinigung - sauber bis zur Übergabe." colorClass="bg-slate-100 text-slate-700" />
              <ServiceCard icon={<Droplets />} title="Glas- & Fassaden" desc="Reinigung von Glasflächen, Rahmen und Fassaden für perfekten Glanz." colorClass="bg-blue-50 text-blue-500" />
              <ServiceCard icon={<Leaf />} title="Außenanlagen" desc="Wege, Höfe, Einfahrten & Parkplätze - gepflegt & einladend." colorClass="bg-emerald-50 text-emerald-500" />
           </div>
        </section>

        {/* Section 3: Preise & Aktionsangebote Bento */}
        <section id="preise" className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 scroll-mt-32">
           <div className="lg:col-span-3 bg-slate-900 rounded-3xl p-6 sm:p-12 text-center text-white relative flex flex-col items-center shadow-xl overflow-hidden">
             <div className="absolute right-0 top-0 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl"></div>
             <div className="absolute left-0 bottom-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
             
             <div className="relative z-10 w-full flex flex-col items-center">
                <div className="bg-sky-500/20 text-sky-300 px-4 py-1.5 rounded-xl border border-sky-400/20 text-[10px] font-bold tracking-widest uppercase mb-6 inline-flex">
                   Aktionsangebot - Nur für kurze Zeit!
                </div>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Fensterreinigung</h2>
                <p className="text-xs sm:text-sm md:text-base font-bold tracking-widest uppercase text-sky-400 mb-8 sm:mb-12">Klare Sicht. Glänzend Sauber.</p>
                
                {/* Visual Image of the Offer */}
                <div className="mb-12 w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl border border-white/10 mx-auto relative group">
                   <img src="/img/angebot.png" alt="Aktionsangebot Fensterreinigung" className="w-full h-auto object-cover" />
                </div>
                
                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl pt-4">
                   <PricingCard title="Standard" desc="innen & außen" price="4€" isHighlighted={false} />
                   <PricingCard title="Sprossen" desc="innen & außen inkl. Streben" price="6€" isHighlighted={false} />
                   
                   {/* Highlighted Complete Package */}
                   <div className="bg-sky-600 rounded-3xl p-6 md:p-8 flex flex-col shadow-2xl relative overflow-hidden transform md:-translate-y-4 md:scale-105 border border-sky-400/50">
                      <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm self-center">
                         <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-black text-white mb-2 uppercase tracking-wide text-center">Komplett</h3>
                      <p className="text-sky-100 text-[10px] mb-6 font-bold uppercase tracking-widest text-center">Rundum Sorglos</p>
                      
                      <ul className="space-y-4 mb-8 text-white text-xs font-medium text-left">
                        <li className="flex items-center gap-3"><Check className="w-4 h-4 text-sky-200 shrink-0" /><span>innen & außen</span></li>
                        <li className="flex items-center gap-3"><Check className="w-4 h-4 text-sky-200 shrink-0" /><span>Rahmenreinigung</span></li>
                        <li className="flex items-center gap-3"><Check className="w-4 h-4 text-sky-200 shrink-0" /><span>Fensterbänke</span></li>
                        <li className="flex items-center gap-3"><Check className="w-4 h-4 text-sky-200 shrink-0" /><span>Falzen & Dichtungen</span></li>
                      </ul>
                      
                      <div className="mt-auto text-center border-t border-white/20 pt-6">
                        <div className="flex items-end justify-center gap-1 mb-1">
                          <span className="text-sky-200 font-bold text-sm uppercase">ab</span>
                          <span className="text-4xl font-black text-white">10€</span>
                        </div>
                        <p className="text-sky-200 text-[10px] uppercase font-bold tracking-widest">/ Fenster</p>
                      </div>
                   </div>
                </div>

                {/* Additional Pricing Info Bento */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 w-full max-w-4xl">
                   <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4 text-left">
                      <div className="bg-white/10 p-2 rounded-lg"><DropIcon className="w-5 h-5 text-sky-300"/></div>
                      <div><span className="font-bold text-white text-sm">Stark verschmutzt</span><br/><span className="text-xs text-sky-200">+1€ - 3€ / Fenster</span></div>
                   </div>
                   <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4 text-left">
                      <div className="bg-white/10 p-2 rounded-lg"><LadderIcon className="w-5 h-5 text-sky-300"/></div>
                      <div><span className="font-bold text-white text-sm">Schwer erreichbar</span><br/><span className="text-xs text-sky-200">+1€ - 2€ / Fenster</span></div>
                   </div>
                   <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4 text-left">
                      <div className="bg-white/10 p-2 rounded-lg"><Clock className="w-5 h-5 text-sky-300"/></div>
                      <div><span className="font-bold text-white text-sm">Mindestpauschale</span><br/><span className="text-xs text-sky-200">50 €</span></div>
                   </div>
                </div>
             </div>
           </div>
        </section>

        {/* Section 4: Bewertungen Grid */}
        <section id="bewertungen" className="flex flex-col gap-4 sm:gap-6 scroll-mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="lg:col-span-3 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col md:flex-row justify-between items-center md:items-end gap-4 shadow-sm">
              <div className="text-center md:text-left">
                <span className="text-sky-600 font-bold text-[10px] uppercase tracking-widest mb-2 block">Testimonials</span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 uppercase">Kundenstimmen</h2>
              </div>
              <div className="flex gap-1 text-yellow-500 bg-yellow-50 px-4 py-2 rounded-xl">
                <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
              </div>
            </div>

            {/* Testimonial Cards */}
            <div className="bg-slate-100 rounded-3xl p-6 flex flex-col justify-between col-span-1 shadow-sm">
               <div className="flex gap-1 text-yellow-500 mb-4"><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /></div>
               <p className="text-sm italic text-slate-600 mb-6 font-medium leading-relaxed">"Sehr professionelles Team. Die wöchentliche Büroreinigung läuft reibungslos. Absolut empfehlenswert."</p>
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-slate-300 flex items-center justify-center font-bold text-slate-600">M</div>
                 <div className="flex flex-col"><span className="text-xs font-bold text-slate-900">Michael S.</span><span className="text-[10px] uppercase tracking-wider text-slate-500">Gebäudereinigung</span></div>
               </div>
            </div>

            {/* Testimonial spanning 2 cols or 1 col on small */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center sm:items-start gap-6 lg:col-span-2 shadow-sm">
               <div className="w-24 h-24 sm:w-32 sm:h-32 bg-sky-50 rounded-2xl flex-shrink-0 flex items-center justify-center text-sky-300 mb-4 sm:mb-0">
                 <MessageCircle className="w-12 h-12" />
               </div>
               <div className="flex flex-col h-full justify-center">
                 <h5 className="text-sky-600 font-bold text-[10px] uppercase tracking-widest mb-2 text-center sm:text-left">Hervorragend</h5>
                 <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed italic mb-4 text-center sm:text-left">"Die Fenster unseres Hauses strahlen wieder. Schnell, freundlich und der Preis für das Komplettpaket war sehr fair. Wir buchen sicher bald wieder."</p>
                 <span className="text-xs text-slate-500 font-bold tracking-widest uppercase text-center sm:text-left">— Sarah W., Fensterreinigung</span>
               </div>
            </div>
          </div>
        </section>

        {/* Section 5: Kontakt Form & Info (Bento style) */}
        <section id="kontakt" className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 scroll-mt-32">
           {/* Contact Info */}
           <div className="lg:col-span-1 bg-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-200">
             <div>
               <h2 className="text-2xl font-black text-slate-900 uppercase mb-4">Kontakt</h2>
               <p className="text-slate-500 text-sm mb-8 font-medium">Melden Sie sich für ein kostenloses Angebot.</p>
               
               <div className="space-y-4">
                 <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                   <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600"><MapPin className="w-6 h-6" /></div>
                   <div>
                     <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-1">Einsatzgebiet</h4>
                     <p className="font-bold text-slate-800 text-sm">Ludwigshafen & Umgebung</p>
                   </div>
                 </div>
                 
                 <a href="https://wa.me/491711593762" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:border-[#25D366]/30 hover:shadow-md transition-all group">
                   <div className="p-3 bg-[#25D366]/10 rounded-xl text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors"><Phone className="w-6 h-6" /></div>
                   <div>
                     <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-1">WhatsApp</h4>
                     <p className="font-bold text-slate-800 text-sm">+49 171 159 3762</p>
                   </div>
                 </a>
               </div>
             </div>
             
             <div className="mt-8">
               <a href="https://wa.me/491711593762" target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] hover:bg-[#1faa53] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 shadow-xl shadow-[#25D366]/20 transition-all">
                 <MessageCircle className="w-4 h-4" /> Direkt per Chat
               </a>
             </div>
           </div>

           {/* Contact Form */}
           <div className="lg:col-span-2 bg-sky-600 rounded-3xl p-6 sm:p-8 text-white flex flex-col shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
             
             <h3 className="text-2xl font-black mb-2 uppercase relative z-10">Preisanfrage</h3>
             <p className="text-sky-100 text-xs mb-8 font-medium">Erhalten Sie zeitnah ein unverbindliches Angebot.</p>
             
             <form className="flex flex-col gap-4 flex-grow relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-sky-200">Name</label>
                    <input type="text" placeholder="Max Mustermann" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm placeholder:text-white/40 outline-none focus:bg-white/20 transition-all text-white" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-sky-200">Telefon / E-Mail</label>
                    <input type="text" placeholder="Für Rückfragen" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm placeholder:text-white/40 outline-none focus:bg-white/20 transition-all text-white" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-sky-200">Leistung</label>
                  <select className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm outline-none focus:bg-white/20 transition-all text-white appearance-none">
                    <option className="text-slate-900 bg-white">Fensterreinigung</option>
                    <option className="text-slate-900 bg-white">Unterhaltsreinigung</option>
                    <option className="text-slate-900 bg-white">Grundreinigung</option>
                    <option className="text-slate-900 bg-white">Bauendreinigung</option>
                    <option className="text-slate-900 bg-white">Andere / Kombination</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-1.5 flex-grow">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-sky-200">Nachricht / Eckdaten</label>
                  <textarea rows={3} placeholder="Wie viele Fenster? Welche Quadratmeterzahl?" className="bg-white/10 border border-white/20 rounded-xl p-4 text-sm placeholder:text-white/40 outline-none focus:bg-white/20 transition-all text-white resize-none h-full"></textarea>
                </div>
                
                <button type="submit" className="mt-4 bg-white text-sky-600 font-black py-4 rounded-xl shadow-lg hover:bg-slate-50 transition-colors uppercase text-[10px] tracking-widest active:scale-[0.98]">
                  Jetzt anfragen
                </button>
             </form>
           </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto w-full bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-sm mt-3 mb-2">
         <div className="flex items-center gap-2">
            <img src="/img/logo.png" alt="Elite Glanz Logo" className="w-8 h-8 object-contain rounded-xl" />
            <span className="text-lg font-black tracking-tight text-slate-900">ELITE<span className="text-sky-600">GLANZ</span></span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-2 hidden sm:inline border-l border-slate-200 pl-4">Gebäudereinigung</span>
         </div>
         
         <div className="flex gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-slate-900 transition-colors">Impressum</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-slate-900 transition-colors">AGB</a>
         </div>
         
         <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            © {new Date().getFullYear()} Elite Glanz
         </div>
      </footer>
    </div>
  );
}

// Subcomponents

function ServiceCard({ icon, title, desc, colorClass }: { icon: React.ReactNode, title: string, desc: string, colorClass: string }) {
  return (
    <div className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${colorClass}`}>
        {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6' })}
      </div>
      <h4 className="font-black text-slate-900 text-lg mb-2">{title}</h4>
      <p className="text-xs text-slate-500 font-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function PricingCard({ title, desc, price, isHighlighted }: { title: string, desc: string, price: string, isHighlighted: boolean }) {
  return (
    <div className="bg-white/10 rounded-3xl p-6 md:p-8 border border-white/10 flex flex-col backdrop-blur-sm shadow-sm relative overflow-hidden">
       <div className="w-12 h-12 border-2 border-white/20 rounded-xl mb-6 mx-auto flex items-center justify-center">
         <div className="w-4 h-6 border-2 border-white/40"></div>
       </div>
       <h3 className="text-xl font-black text-white mb-2 uppercase tracking-wide text-center">{title}</h3>
       <p className="text-sky-200 text-[10px] mb-8 font-bold uppercase tracking-widest text-center h-8">{desc}</p>
       
       <div className="mt-auto text-center border-t border-white/10 pt-6">
         <div className="flex items-end justify-center gap-1 mb-1">
           <span className="text-sky-200 font-bold text-sm uppercase">ab</span>
           <span className="text-4xl font-black text-white">{price}</span>
         </div>
         <p className="text-sky-200 text-[10px] uppercase font-bold tracking-widest">/ Fenster</p>
       </div>
    </div>
  );
}

function DropIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
       <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  );
}

function LadderIcon({ className }: { className?: string }) {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
         <path d="M6 22V2" />
         <path d="M18 22V2" />
         <path d="M6 6h12" />
         <path d="M6 12h12" />
         <path d="M6 18h12" />
      </svg>
   )
}
