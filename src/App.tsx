import { useState, useEffect, ReactNode } from "react";
import { 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  Phone, 
  MapPin, 
  Clock, 
  Scissors, 
  Sparkles, 
  Heart, 
  ChevronRight,
  MessageCircle,
  Star
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- Types ---
interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: ReactNode;
  image: string;
}

// --- Constants ---
const SERVICES: Service[] = [
  {
    id: "haircut",
    title: "Gunting Pria & Wanita",
    description: "Potongan rambut profesional yang disesuaikan dengan fitur wajah dan keinginan Anda.",
    price: "Premium Cut",
    icon: <Scissors className="w-6 h-6" />,
    image: "https://plus.unsplash.com/premium_photo-1669675935927-0ed8935e6600?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "sanggul",
    title: "Sanggul",
    description: "Tatanan rambut elegan untuk acara spesial, pesta, atau pernikahan.",
    price: "Elegant Style",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1610653093036-884c3f867fe3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "smoothing",
    title: "Smoothing",
    description: "Rambut lurus, lembut, dan berkilau alami dengan produk berkualitas tinggi.",
    price: "Silky Smooth",
    icon: <Heart className="w-6 h-6" />,
    image: "https://plus.unsplash.com/premium_photo-1661715268771-aa4f3d559262?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "keriting",
    title: "Keriting",
    description: "Tekstur rambut bervolume dan bergelombang indah yang tahan lama.",
    price: "Perfect Curls",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1712641966810-611ff1503c6d?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "creambath",
    title: "Creambath",
    description: "Perawatan kulit kepala dan batang rambut untuk relaksasi dan kesehatan optimal.",
    price: "Relaxing Care",
    icon: <Heart className="w-6 h-6" />,
    image: "https://plus.unsplash.com/premium_photo-1664477119867-5e03b4c80ccf?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "color",
    title: "Cat Rambut",
    description: "Pewarnaan rambut tren terbaru dengan perlindungan warna maksimal.",
    price: "Vibrant Color",
    icon: <Sparkles className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1707812343087-c9ff9e5abb43?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const TESTIMONIALS = [
  {
    name: "Tribertus Payung",
    comment: "Tempatnya sangat bersih dan tertata rapi. Pelayanannya juga sangat ramah. Disediakan tempat tunggu dengan Snack yang dapat dibeli. Tempatnya juga sangat nyaman untuk nyalon disini. Tempatnya sejuk walaupun dipinggir jalan.",
    rating: 5
  },
  {
    name: "Christian Banna Toraya",
    comment: "Tempat yg bagus untuk salon wanita dan pria...",
    rating: 5
  },
  {
    name: "yulia lenny",
    comment: "mayan ok hasil potongan rambutnya..",
    rating: 4
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#hero" },
    { name: "Layanan", href: "#services" },
    { name: "Tentang", href: "#about" },
    { name: "Testimoni", href: "#testimonials" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md border-b border-brand-border py-4" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-12 flex justify-between items-center">
        <a href="#hero" className="text-2xl tracking-[0.2em] font-light uppercase text-brand-brown">
          Ester <span className="font-semibold text-brand-accent">Salon</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-80 hover:text-brand-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} id="mobile-menu-toggle">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-brand-muted overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-brand-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  return (
    <div className="min-h-screen text-brand-brown">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative min-height-[100vh] flex items-center pt-20 px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="z-10"
          >
            <h1 className="text-6xl lg:text-[5.5rem] font-serif font-light leading-[0.95] mb-10">
              Ester<br />
              <span className="italic lg:pl-16 text-brand-accent">Salon</span>
            </h1>
            <p className="text-sm text-brand-brown/70 mb-12 max-w-sm leading-loose">
              Mewujudkan penampilan impian Anda dengan sentuhan profesional di jantung Makale, Tana Toraja. Kami hadir untuk pria dan wanita yang menghargai kualitas.
            </p>
            <div className="flex items-center gap-8">
              <a 
                href="#services" 
                className="px-10 py-5 bg-brand-brown text-white text-[10px] uppercase tracking-[0.2em] hover:bg-brand-accent transition-all shadow-xl"
              >
                Lihat Layanan
              </a>
              <a 
                href="#services"
                className="text-[10px] uppercase tracking-[0.15em] border-b border-brand-brown pb-1 cursor-pointer font-bold hover:text-brand-accent hover:border-brand-accent transition-all"
              >
                Daftar Perawatan
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="relative py-12 flex justify-center"
          >
            <div className="arch-mask w-[320px] lg:w-[420px] h-[450px] lg:h-[580px] shadow-2xl relative overflow-hidden flex flex-col items-center justify-center bg-brand-arch">
              <div className="text-white text-[100px] lg:text-[140px] font-serif opacity-30 select-none tracking-widest uppercase">ESTER</div>
              <div className="absolute inset-0 border-[16px] border-brand-cream opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop" 
                alt="Salon Interior" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-12 bg-brand-muted-bg/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent mb-6">Signature Care</h2>
            <h3 className="text-4xl md:text-6xl font-serif font-light mb-4">Layanan Unggulan Kami</h3>
            <div className="w-24 h-[1px] bg-brand-accent mx-auto mt-8 opacity-40"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group flex flex-col"
              >
                <div className="aspect-[3/4] overflow-hidden mb-8 relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 border border-brand-brown/10 pointer-events-none"></div>
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="flex justify-between items-baseline mb-4">
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-accent">0{index + 1} {service.id}</h4>
                    <span className="text-[10px] italic font-serif text-brand-brown/40">{service.price}</span>
                  </div>
                  <h5 className="text-2xl font-serif mb-4 group-hover:text-brand-accent transition-colors italic">{service.title}</h5>
                  <p className="text-brand-brown/60 text-xs leading-loose mb-8 pr-4">
                    {service.description}
                  </p>
                  <button className="mt-auto flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold border-b border-brand-brown/20 pb-2 self-start hover:border-brand-accent transition-all group-hover:text-brand-accent">
                    Selengkapnya
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-12 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24">
          <div className="md:w-1/2 relative">
            <div className="relative z-10 grid grid-cols-2 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="arch-mask aspect-[3/4] overflow-hidden shadow-xl mt-16 bg-brand-arch"
              >
                <img 
                  src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=800&auto=format&fit=crop" 
                  alt="Styling" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="arch-mask aspect-[3/4] overflow-hidden shadow-xl bg-brand-arch"
              >
                <img 
                  src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=800&auto=format&fit=crop" 
                  alt="Salon Work" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-muted-bg rounded-full blur-3xl -z-10 opacity-30"></div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative z-10">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent mb-6">Our Philosophy</h3>
              <h4 className="text-4xl md:text-6xl font-serif font-light mb-8 leading-tight">Keindahan & <span className="italic text-brand-accent">Kualitas</span> di Tana Toraja</h4>
              <p className="text-brand-brown/70 text-sm leading-loose mb-8">
                Ester Salon telah melayani masyarakat Makale dengan dedikasi tinggi, menghadirkan standar salon modern dalam suasana yang nyaman dan profesional.
              </p>
              <p className="text-brand-brown/70 text-sm leading-loose mb-12">
                Kami berkomitmen untuk memberikan hasil potongan dan perawatan rambut terbaik, memastikan setiap pelanggan pulang dengan senyum dan rasa percaya diri baru.
              </p>

              <button className="text-[10px] uppercase tracking-[0.3em] font-bold border-b-2 border-brand-accent pb-2 hover:text-brand-accent transition-all">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 px-12 bg-brand-brown text-brand-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent mb-6">Kisah Pelanggan</h2>
            <h3 className="text-4xl md:text-6xl font-serif font-light text-white italic">Sentuhan yang Membekas</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/[0.03] backdrop-blur-sm p-10 border border-white/10 flex flex-col"
              >
                <div className="flex gap-1 mb-8 opacity-40">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={12} 
                      className={i < t.rating ? "fill-brand-accent text-brand-accent" : "text-white/20"} 
                    />
                  ))}
                </div>
                <p className="font-serif italic text-2xl mb-12 leading-relaxed text-brand-cream/80 whitespace-pre-line font-light">
                  “{t.comment}”
                </p>
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-8 h-[1px] bg-brand-accent"></div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">{t.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-24 items-start">
            <div className="md:w-1/2">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent mb-8">Reservasi</h3>
              <h4 className="text-4xl md:text-6xl font-serif font-light mb-12">Siap Untuk <span className="italic text-brand-accent">Transformasi?</span></h4>
              
              <div className="space-y-12">
                <div className="flex items-start gap-8">
                  <span className="text-[10px] uppercase font-bold text-brand-accent tracking-tighter opacity-40 mt-1">Loc</span>
                  <div>
                    <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-3">Atelier Address</h5>
                    <p className="text-brand-brown/60 text-sm leading-relaxed max-w-xs">Jl. Buisun, Pantan, Kec. Makale, Tana Toraja</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-8">
                  <span className="text-[10px] uppercase font-bold text-brand-accent tracking-tighter opacity-40 mt-1">Tel</span>
                  <div>
                    <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-3">WhatsApp Inquiry</h5>
                    <p className="text-brand-brown/60 text-sm">0822-9232-5097</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-8">
                  <span className="text-[10px] uppercase font-bold text-brand-accent tracking-tighter opacity-40 mt-1">Hrs</span>
                  <div>
                    <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-3">Studio Hours</h5>
                    <p className="text-brand-brown/60 text-sm font-medium">Buka Setiap Hari</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 w-full">
              <div className="p-12 border border-brand-border bg-brand-muted-bg/30 text-center">
                <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8">Hubungi Kami</h5>
                <p className="text-sm text-brand-brown/60 mb-10 leading-loose">
                  Untuk informasi lebih lanjut, konsultasi, atau kunjungan, silakan hubungi kami melalui WhatsApp atau telepon langsung.
                </p>
                <div className="flex flex-col gap-6">
                  <a 
                    href="https://wa.me/6282292325097" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-5 bg-brand-brown text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-brand-accent transition-all shadow-lg flex items-center justify-center gap-4 group"
                  >
                    <MessageCircle size={14} />
                    WhatsApp Sekarang
                  </a>
                  <a 
                    href="tel:082292325097" 
                    className="w-full py-5 border border-brand-brown/20 text-brand-brown text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-brand-brown hover:text-white transition-all flex items-center justify-center gap-4"
                  >
                    <Phone size={14} />
                    Telepon Langsung
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-muted-bg py-24 px-12 border-t border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            <div className="col-span-1 md:col-span-1">
              <a href="#" className="text-2xl font-light tracking-[0.2em] uppercase text-brand-brown mb-8 block">
                Ester <span className="font-semibold text-brand-accent">Salon</span>
              </a>
              <p className="text-brand-brown/50 text-[11px] leading-relaxed uppercase tracking-widest pr-8">
                Pusat kecantikan rambut pilihan di Tana Toraja. Melayani dengan hati sejak bertahun-tahun lalu.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-accent font-bold mb-2">Layanan Utama</span>
              <span className="font-serif italic text-xl">Hair Art & Styling</span>
            </div>

            <div className="flex flex-col md:items-end gap-3">
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-accent font-bold mb-2 tracking-widest">Connect</span>
              <div className="flex flex-col md:items-end gap-1 mb-4">
                <span className="text-[10px] font-medium">Buka Setiap Hari</span>
              </div>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/ester.salon.toraja?igsh=MTI3OXg1eDFubXN4Zw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-all"><Instagram size={18} /></a>
                <a href="https://www.facebook.com/profile.php?id=61589383747119" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-all"><Facebook size={18} /></a>
                <a href="https://wa.me/6282292325097" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-all"><MessageCircle size={18} /></a>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-[10px] uppercase tracking-[0.2em] opacity-40">
              © 2026 Ester Salon. Crafted for Elegance.
            </div>
            <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium opacity-60">
              <a href="#" className="hover:text-brand-accent transition-all">Privacy</a>
              <a href="#" className="hover:text-brand-accent transition-all">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
