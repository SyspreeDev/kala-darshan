import { Phone, Mail, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, FormEvent } from 'react';


// Import images
import imgLogo from '@/assets/logo-header.png';
import imgLogoMobile from "../../assets/mob-logo.png";
import imgHeroBackground from "../../assets/bg.png";

import imgBlueSapphire from "../../assets/blue.png";
import imgEmerald from "../../assets/green.png";
import imgYellowSapphire from "../../assets/gold.png";
import imgRuby from "../../assets/red.png";

import imgAbout from "../../assets/Rectangle-43.png";
import imgHeritage from "../../assets/Rectangle-43.png";

import imgLogoFooter from "../../assets/logo-footer.png";

import imgPearl from "../../assets/pearl.png";
import imgDiamond from "../../assets/diamond.png";

export default function Home() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    if (data.success) {
      // optional: keep session storage
      sessionStorage.setItem("consultationForm", JSON.stringify(formData));

      // redirect after success
      navigate("/thank-you");
    } else {
      alert("❌ Email not sent");
    }

  } catch (error) {
    console.error("Error:", error);
    alert("⚠️ Something went wrong");
  }
};

  const handleWhatsAppClick = (gemName?: string) => {
    const message = gemName 
      ? `Hi, I would like to inquire about ${gemName}`
      : 'Hi, I would like to inquire about gemstones';
    window.open(`https://wa.me/7666694747?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* Top Banner */}
      <div className="bg-black text-center py-4 px-4">
        <p className="text-[15px] font-['Lato'] leading-[25px]">
          <span className="text-[#fffecf]">Unlock 30% OFF Your First Gemstone </span>
          <span className="text-[#ffa439]">Use Code DARSHAN30</span>
        </p>
      </div>

      {/* Header - Desktop Only */}
      <header className="bg-white py-6 px-4 md:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <div className="w-[190px] md:w-[230px]">
            <img src={imgLogo} alt="Kala Darshan Gems & Co" className="w-full h-auto" />
          </div>
        </div>
      </header>

      {/* Mobile Header with Navigation */}
      <header className="md:hidden bg-white border-b border-[#f5f5f5] sticky top-0 z-50 shadow-sm">
        <div className="flex items-center justify-between px-4 h-[70px]">
          {/* Logo - Left Side */}
          <div className="flex items-center flex-1">
            <img src={imgLogoMobile} alt="Kala Darshan Gems & Co" className="h-[50px] w-auto object-contain max-w-[200px]" />
          </div>

          {/* Hamburger Menu - Right Side */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#1a1a1a] p-2 hover:bg-[#f9f9f9] rounded-md transition-all duration-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-[#f5f5f5] ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col py-2 text-[15px] font-['Poppins'] font-light text-[#3b3c3d]">
            <li onClick={() => scrollToSection('home')} className="cursor-pointer hover:bg-[#faf9f7] hover:text-[#c5a572] transition-all duration-200 py-4 px-5 border-b border-[#f5f5f5]">Home</li>
            <li onClick={() => scrollToSection('about')} className="cursor-pointer hover:bg-[#faf9f7] hover:text-[#c5a572] transition-all duration-200 py-4 px-5 border-b border-[#f5f5f5]">About us</li>
            <li onClick={() => scrollToSection('products')} className="cursor-pointer hover:bg-[#faf9f7] hover:text-[#c5a572] transition-all duration-200 py-4 px-5 border-b border-[#f5f5f5]">Products</li>
            <li onClick={() => scrollToSection('testimonials')} className="cursor-pointer hover:bg-[#faf9f7] hover:text-[#c5a572] transition-all duration-200 py-4 px-5 border-b border-[#f5f5f5]">Testimonials</li>
            <li onClick={() => scrollToSection('contact')} className="cursor-pointer hover:bg-[#faf9f7] hover:text-[#c5a572] transition-all duration-200 py-4 px-5">Contact</li>
          </ul>
        </div>
      </header>

      {/* Navigation - Desktop Only */}
      <nav className="bg-[#fffaef] shadow-sm sticky top-0 z-50 hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex items-center justify-center gap-6 md:gap-[70px] py-5 text-[16px] font-['Poppins'] font-light text-[#3b3c3d]">
            <li onClick={() => scrollToSection('home')} className="cursor-pointer hover:text-[#c5a572] transition-all duration-300">Home</li>
            <li onClick={() => scrollToSection('about')} className="cursor-pointer hover:text-[#c5a572] transition-all duration-300">About us</li>
            <li onClick={() => scrollToSection('products')} className="cursor-pointer hover:text-[#c5a572] transition-all duration-300">Products</li>
            <li onClick={() => scrollToSection('testimonials')} className="cursor-pointer hover:text-[#c5a572] transition-all duration-300">Testimonials</li>
            <li onClick={() => scrollToSection('contact')} className="cursor-pointer hover:text-[#c5a572] transition-all duration-300">Contact</li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-[500px] md:h-[600px] lg:h-[677px] bg-black">
        <div className="absolute inset-0">
          <img src={imgHeroBackground} alt="Gemstones Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-[#c9a227] text-[11px] md:text-[12px] font-['Montserrat'] tracking-[3px] mb-4 uppercase animate-[fadeIn_0.8s_ease-in]">
            Since 1990
          </p>
          <h1 className="text-white text-3xl md:text-5xl lg:text-[61.2px] font-['Brawler'] font-normal mb-6 max-w-3xl leading-[1.18] animate-[fadeIn_1s_ease-in] opacity-0 [animation-fill-mode:forwards]">
            Authentic Certified Gemstones
          </h1>
          <p className="text-[#d1d5db] text-sm md:text-base lg:text-[17px] font-['Lato'] font-light max-w-2xl mb-8 leading-[28px] animate-[fadeIn_1s_ease-in_0.4s] opacity-0 [animation-fill-mode:forwards]">
            Rare, transparent and powerful gemstones selected to enhance your life through astrology and natural energy.
          </p>
          
          {/* Hero Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-[fadeIn_1s_ease-in_0.6s] opacity-0 [animation-fill-mode:forwards]">
            <button 
              onClick={() => scrollToSection('products')}
              className="group bg-white text-black px-8 py-3 rounded-[8px] transition-all duration-300 flex items-center justify-center gap-2 font-['Inter'] font-medium text-[14px] hover:bg-[#4a4a4a] hover:text-white"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 3L4 9L12 15L20 9L12 3Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 15L12 21L20 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              View Collection
            </button>
            <button 
              onClick={() => handleWhatsAppClick()}
              className="group bg-transparent border-2 border-white text-white px-8 py-3 rounded-[8px] transition-all duration-300 flex items-center justify-center gap-2 font-['Inter'] font-medium text-[14px] hover:bg-[#25D366] hover:border-[#25D366]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Inquiry
            </button>
          </div>

          {/* Feature Badges */}
          <div className="flex flex-col sm:flex-row gap-6 md:gap-12 text-white/80 text-xs md:text-sm animate-[fadeIn_1s_ease-in_0.8s] opacity-0 [animation-fill-mode:forwards]">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#c9a227]" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                <circle cx="10" cy="10" r="8" strokeWidth="2"/>
                <path d="M8 10l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-['Inter']">Certified Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#c9a227]" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                <circle cx="10" cy="10" r="8" strokeWidth="2"/>
                <path d="M8 10l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-['Inter']">Astrological Guidance</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#c9a227]" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                <circle cx="10" cy="10" r="8" strokeWidth="2"/>
                <path d="M8 10l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-['Inter']">Pan India Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Second Banner */}
      <div className="bg-[#95775b] text-white text-center py-5 px-4">
        <p className="text-sm md:text-[15px] font-['Lato']">
          Discover Your Perfect Gemstone: <span className="text-[#ffd89f]">Get 30% OFF on Your First Order | Code: KALAdas</span>
        </p>
      </div>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a227] text-[12px] font-['Montserrat'] tracking-[3px] mb-2 uppercase">
              OUR GEMSTONES
            </p>
            <h2 className="text-3xl md:text-[40px] font-['Brawler'] text-[#383937] mb-4">
              Our Best-Selling Gemstones
            </h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto text-sm md:text-[14px] font-['Lato']">
              Each stone is handpicked and certified for authenticity
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { 
                name: 'BLUE SAPPHIRE', 
                description: 'Enhances passion, vitality & leadership',
                price: 'Starts from 7500 per ct', 
                image: imgBlueSapphire,
              },
              { 
                name: 'EMERALD', 
                description: 'Brings wisdom, growth & prosperity',
                price: 'Starts from 5500 per ct', 
                image: imgEmerald,
              },
              { 
                name: 'YELLLOW SAPPHIRE', 
                description: 'Attracts wealth, fortune & happiness',
                price: 'Starts from 7500 per ct', 
                image: imgYellowSapphire,
              },
              { 
                name: 'RUBY', 
                description: 'Provides protection, focus & discipline',
                price: 'Starts from 7500 per ct', 
                image: imgRuby,
              },
            ].map((gem, index) => (
              <div key={index} 
                className="bg-white group cursor-pointer border border-[#f3f4f6] rounded-[12px] p-6 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
              >
                {/* Image Container with Zoom Effect */}
                <div className="bg-white h-[220px] flex items-center justify-center mb-6 overflow-hidden">
                  <img 
                    src={gem.image} 
                    alt={gem.name}
                    className="max-h-[160px] w-auto object-contain transition-transform duration-500 ease-in-out group-hover:scale-150"
                  />
                </div>
                
                {/* Content */}
                <div className="text-left">
                  <h3 className="text-[15px] font-['Libre_Baskerville'] font-normal text-[#95775b] mb-2">
                    {gem.name}
                  </h3>
                  <p className="text-[12px] font-['Inter'] font-normal text-[#6b7280] mb-4 leading-[1.5]">
                    {gem.description}
                  </p>
                  
                  {/* Price and Button Row */}
                  <div className="flex items-center justify-between mt-6">
                    <p className="text-[13px] font-['Inter'] font-semibold text-[#111827]">
                      {gem.price}
                    </p>
                    <button onClick={() =>
                        window.open(
                          "https://wa.me/917666694747",
                          "_blank"
                        )
                      } className="border border-[#c9a227] text-[#c9a227] py-2 px-4 rounded-[8px] hover:bg-[#c9a227] hover:text-white transition-all duration-300 flex items-center gap-2 text-[12px] font-['Inter'] font-medium whitespace-nowrap"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 md:px-8 bg-[#f8f5f0]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src={imgHeritage} alt="Heritage" className="w-full h-auto rounded-[10px]" />
            </div>
            <div>
              <div className="mb-8">
                <p className="text-[15px] font-['Libre_Baskerville'] font-bold text-[#111827] tracking-[0.3em] uppercase">
                  A B O U T
                </p>
              </div>
              <h2 className="text-2xl md:text-[25px] font-['Libre_Baskerville'] text-[#95775b] mb-6">
                A Legacy of Authentic Gemstones Since 1990
              </h2>
              <p className="text-[#2e2e2e99] mb-4 leading-normal font-['Lato'] text-[16px]">
                Established in 1990, Kala Darshan Gems deals in rare, transparent, clean, and brilliant gemstones. Gems are our inspiration, our passion, and the foundation of our knowledge.
              </p>
              <p className="text-[#2e2e2e99] mb-4 leading-normal font-['Lato'] text-[16px]">
                Our business philosophy reflects the very qualities of the gemstones we offer honest, clear, and committed.
              </p>
              <p className="text-[#2e2e2e99] italic mb-6 font-['Lato'] text-[16px]">
                "We believe the right gemstone can transform your life for the better."
              </p>
              <p className="text-[#2e2e2e99] leading-normal font-['Lato'] text-[16px]">
                At Kala Darshan Gems, we don't just sell gems – we offer guidance, meaning, and positive transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* 100% Natural */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                  <path d="M10 5H30L36.6667 15L20 36.6667L3.33333 15L10 5Z" stroke="#B8860B" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18.3333 5L13.3333 15L20 36.6667L26.6667 15L21.6667 5" stroke="#B8860B" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.33333 15H36.6667" stroke="#B8860B" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-[20px] font-['Inter'] font-normal mb-3">100%<br />Natural</h3>
              <p className="text-sm text-[#ffffff99] font-['Inter'] font-light leading-relaxed">
                Rare, transparent and clean stones carefully selected for maximum efficiency.
              </p>
            </div>

            {/* Certified Quality */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                  <path d="M33.3333 21.6667C33.3333 30 27.5 34.1667 20.5667 36.5833C20.2036 36.7064 19.8092 36.7005 19.45 36.5667C12.5 34.1667 6.66667 30 6.66667 21.6667V10C6.66667 9.55797 6.84226 9.13405 7.15482 8.82149C7.46738 8.50893 7.89131 8.33333 8.33333 8.33333C11.6667 8.33333 15.8333 6.33333 18.7333 3.8C19.0864 3.49833 19.5356 3.33258 20 3.33258C20.4644 3.33258 20.9136 3.49833 21.2667 3.8C24.1833 6.35 28.3333 8.33333 31.6667 8.33333C32.1087 8.33333 32.5326 8.50893 32.8452 8.82149C33.1577 9.13405 33.3333 9.55797 33.3333 10V21.6667Z" stroke="#B8860B" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 20L18.3333 23.3333L25 16.6667" stroke="#B8860B" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-[20px] font-['Inter'] font-normal mb-3">Certified<br />Quality</h3>
              <p className="text-sm text-[#ffffff99] font-['Inter'] font-light leading-relaxed">
                Authentic certificates available from GII, GIA, and IGTL.
              </p>
            </div>

            {/* Expert Guidance */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                  <path d="M19.2083 3.825C19.2814 3.67743 19.3942 3.55322 19.5341 3.46638C19.674 3.37953 19.8353 3.33351 20 3.33351C20.1647 3.33351 20.326 3.37953 20.4659 3.46638C20.6058 3.55322 20.7186 3.67743 20.7917 3.825L24.6417 11.6233C24.8953 12.1366 25.2697 12.5807 25.7327 12.9174C26.1957 13.2542 26.7335 13.4735 27.3 13.5567L35.91 14.8167C36.0731 14.8403 36.2264 14.9091 36.3525 15.0153C36.4786 15.1215 36.5724 15.2609 36.6234 15.4177C36.6743 15.5744 36.6805 15.7423 36.641 15.9024C36.6015 16.0624 36.518 16.2083 36.4 16.3233L30.1733 22.3867C29.7627 22.7868 29.4555 23.2808 29.2781 23.826C29.1007 24.3713 29.0584 24.9515 29.155 25.5167L30.625 34.0833C30.6538 34.2464 30.6362 34.4143 30.5742 34.5678C30.5121 34.7213 30.4082 34.8543 30.2742 34.9517C30.1403 35.049 29.9816 35.1067 29.8164 35.1182C29.6513 35.1297 29.4862 35.0945 29.34 35.0167L21.6433 30.97C21.1362 30.7037 20.572 30.5646 19.9992 30.5646C19.4264 30.5646 18.8621 30.7037 18.355 30.97L10.66 35.0167C10.5139 35.094 10.349 35.1288 10.1841 35.1171C10.0192 35.1054 9.86086 35.0476 9.72716 34.9504C9.59345 34.8531 9.48972 34.7203 9.42776 34.567C9.3658 34.4138 9.3481 34.2462 9.37667 34.0833L10.845 25.5183C10.942 24.9529 10.9 24.3723 10.7226 23.8267C10.5452 23.2812 10.2377 22.7869 9.82667 22.3867L3.6 16.325C3.48099 16.2101 3.39666 16.064 3.3566 15.9035C3.31655 15.7429 3.32239 15.5744 3.37346 15.417C3.42453 15.2596 3.51878 15.1197 3.64546 15.0133C3.77214 14.9069 3.92617 14.8382 4.09 14.815L12.6983 13.5567C13.2654 13.4742 13.804 13.2551 14.2676 12.9183C14.7313 12.5815 15.1062 12.1371 15.36 11.6233L19.2083 3.825Z" stroke="#B8860B" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-[20px] font-['Inter'] font-normal mb-3">Expert<br />Guidance</h3>
              <p className="text-sm text-[#ffffff99] font-['Inter'] font-light leading-relaxed">
                Astrological consultation helping you choose the right gemstone.
              </p>
            </div>

            {/* Since 1990 */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                  <path d="M20 36.6667C29.2047 36.6667 36.6667 29.2047 36.6667 20C36.6667 10.7953 29.2047 3.33333 20 3.33333C10.7953 3.33333 3.33333 10.7953 3.33333 20C3.33333 29.2047 10.7953 36.6667 20 36.6667Z" stroke="#B8860B" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 10V20L26.6667 23.3333" stroke="#B8860B" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-[20px] font-['Inter'] font-normal mb-3">Since<br />1990</h3>
              <p className="text-sm text-[#ffffff99] font-['Inter'] font-light leading-relaxed">
                Over 36 years of trusted experience in premium gemstone curation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Astrology Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-[40px] font-['Libre_Baskerville'] text-[#383937] mb-4">
              Unlock the Secrets of Gemstone Astrology
            </h2>
            <p className="text-[#97755f] text-[16px] md:text-[25px] font-['Lato']">
              Personalized Gem Recommendations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {[
              { title: 'Ruby Radiance', desc: 'Ignite confidence and passion with the power of Ruby — a gemstone of leadership, vitality, and inner strength.', img: imgRuby },
              { title: 'Divine Yellow Sapphire', desc: 'Attract prosperity, wisdom, and success. Yellow Sapphire is believed to bring clarity in decisions and financial growth.', img: imgYellowSapphire },
              { title: 'Blue Sapphire Mystique', desc: 'Fast, powerful, and transformative — Blue Sapphire enhances focus, discipline, and protects from negativity.', img: imgBlueSapphire },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="mb-6 flex justify-center">
                  <img src={item.img} alt={item.title} className="w-34 h-34 object-contain" />
                </div>
                <h3 className="text-[23px] font-['Libre_Baskerville'] text-[#58514a] mb-4">{item.title}</h3>
                <p className="text-[16px] font-['Lato'] text-[#896a54] leading-[1.794]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            {[
              { title: 'Emerald Harmony', desc: 'A stone of intelligence and communication, Emerald nurtures growth, balance, and emotional healing.', img: imgEmerald },
              { title: 'Pearl Serenity', desc: 'Calm your mind and emotions with Pearl — known for peace, purity, and emotional stability.', img: imgPearl },
              { title: 'Diamond Brilliance', desc: 'A symbol of luxury and strength, Diamond amplifies energy, clarity, and attracts abundance.', img: imgDiamond },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="mb-6 flex justify-center">
                  <img src={item.img} alt={item.title} className="w-34 h-34 object-contain" />
                </div>
                <h3 className="text-[23px] font-['Libre_Baskerville'] text-[#58514a] mb-4">{item.title}</h3>
                <p className="text-[16px] font-['Lato'] text-[#896a54] leading-[1.794]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 px-4 md:px-8 bg-[#1c1c1c]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a227] text-[12px] font-['Montserrat'] tracking-[3px] mb-2 uppercase">TESTIMONIALS</p>
            <h2 className="text-3xl md:text-[40px] font-['Brawler'] text-white">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                text: "The service and quality of gems is wonderful. I will definitely suggest to visit and make gems from Kala Darshan.", 
                name: "Ms. Vaishali Sawant", 
                location: "Mumbai"
              },
              { 
                text: "I have purchased Emerald and Yellow Sapphire from Kala Darshan and really happy with the knowledge and Service they have provided to us.", 
                name: "Ms. Kavitar Naiksatam", 
                location: "Thane"
              },
              { 
                text: "Yellow sapphire helped me gain clarity and confidence in my career. Highly recommend this shop for astrological gemstone buyers.", 
                name: "Mr. Abhijeet Salaskar", 
                location: "Pune"
              },
              { 
                text: "An Authentic Gemstone shop, with great clarity of information about quality and origin of Gemstone. Gemstone Consultation by Pandit ji is eye opener and shop owners show genuine concern in helping you out in choosing right stone for your self. Great experience, nice people.", 
                name: "Dr. Sonal Gaur Ma'am", 
                location: "Pune"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] p-8 rounded-[12px] hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300">
                <div className="flex gap-1 mb-6 text-[#c9a227]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#d1d5db] mb-8 font-['Inter'] text-[13.6px] leading-[1.6] min-h-[130px]">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-white font-['Inter'] text-[15px] mb-1">{testimonial.name}</p>
                  <p className="text-sm text-[#9ca3af] font-['Inter'] text-[13px]">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#c5a572] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-[40px] font-['Brawler'] mb-6">
            Find the Right Gemstone for Your Journey Today
          </h2>
          <p className="text-lg mb-8 font-['Lato']">
            Consult with our astrology experts and discover your perfect gemstone
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-black text-white px-10 py-4 rounded-[8px] hover:bg-[#2a2a2a] transition-all duration-300 font-['Inter'] font-medium"
          >
            Book Now
          </button>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#fdfbf7] border border-[#f5eedc] rounded-[16px] shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-gradient-to-br from-[#c5a572] to-[#95775b] p-8 md:p-12 text-white">
                <h2 className="text-3xl font-['Brawler'] mb-6">Get in Touch</h2>
                <p className="mb-8 font-['Inter'] text-[14px]">Have questions about our gemstones? We're here to help you find the perfect stone for your needs.</p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1 font-['Inter']">Phone</h3>
                      <p className="font-['Inter'] text-[14px]">+91 98765 43210</p>
                      <p className="font-['Inter'] text-[14px]">Mon-Sat, 10AM-7PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1 font-['Inter']">Email</h3>
                      <p className="font-['Inter'] text-[14px]">info@kaladarshansgems.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <a href="https://maps.app.goo.gl/W9kxob3a2jUcfGu99" target="_blank" rel="noopener noreferrer"><MapPin className="w-6 h-6 shrink-0 mt-1" /></a>
                    <div>
                      <h3 className="font-semibold mb-1 font-['Inter']">Address</h3>
                      <p className="font-['Inter'] text-[14px]">Shop 1, Ishan Co Society, Ram Maruti Rd, <br/>opposite PNG Jewellers, Naupada, <br/>Thane West, Maharashtra 400602</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 md:p-12">
                <h3 className="text-2xl font-semibold mb-6 font-['Brawler']">Get Free Consultation</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-2 font-['Inter']">Full Name *</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 border border-[#e5e7eb] rounded-[8px] focus:ring-2 focus:ring-[#c5a572] focus:border-transparent outline-none transition-all font-['Inter']" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 font-['Inter']">Email Address *</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 border border-[#e5e7eb] rounded-[8px] focus:ring-2 focus:ring-[#c5a572] focus:border-transparent outline-none transition-all font-['Inter']" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 font-['Inter']">Phone Number *</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 border border-[#e5e7eb] rounded-[8px] focus:ring-2 focus:ring-[#c5a572] focus:border-transparent outline-none transition-all font-['Inter']" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 font-['Inter']">Message</label>
                    <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="w-full px-4 py-3 border border-[#e5e7eb] rounded-[8px] focus:ring-2 focus:ring-[#c5a572] focus:border-transparent outline-none transition-all resize-none font-['Inter']" placeholder="Tell us what you're looking for..." />
                  </div>
                  <button type="submit" className="w-full bg-black text-white py-4 rounded-[10px] hover:bg-gray-800 transition-all duration-300 font-medium font-['Inter']">
                    Get Free Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-20 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="mb-6 h-20 w-48">
                <img src={imgLogoFooter} alt="Kala Darshan" className="h-full w-auto object-contain" />
              </div>
              <p className="text-sm font-['Inter']">© 2026 Kala Darshan, Inc.</p>
              <p className="text-sm font-['Inter']">All rights reserved.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 font-['Inter'] text-[16px]">Quick Links</h3>
              <ul className="space-y-3 text-sm text-gray-400 font-['Inter']">
                <li onClick={() => scrollToSection('home')} className="hover:text-white cursor-pointer transition-colors">Home</li>
                <li onClick={() => scrollToSection('about')} className="hover:text-white cursor-pointer transition-colors">About</li>
                <li onClick={() => scrollToSection('products')} className="hover:text-white cursor-pointer transition-colors">Products</li>
                <li onClick={() => scrollToSection('contact')} className="hover:text-white cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 font-['Inter'] text-[16px]">Explore More</h3>
              <ul className="space-y-3 text-sm text-gray-400 font-['Inter']">
                <li className="hover:text-white cursor-pointer transition-colors">Gemstone Astrology</li>
                <li className="hover:text-white cursor-pointer transition-colors">Gem Education</li>
                <li className="hover:text-white cursor-pointer transition-colors">Ethical Sourcing</li>
                <li onClick={() => scrollToSection('testimonials')} className="hover:text-white cursor-pointer transition-colors">Testimonials</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 font-['Inter'] text-[16px]">Connect with Us</h3>
              <ul className="space-y-3 text-sm text-gray-400 font-['Inter']">
                <li className="hover:text-white cursor-pointer transition-colors"><a href="https://www.instagram.com/kaladarshangemsandco/" target="_blank">Instagram</a></li>
                <li className="hover:text-white cursor-pointer transition-colors"><a href="https://www.facebook.com/Kaladarshangems" target="_blank">Facebook</a></li>
                
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-sm text-gray-400 text-center font-['Inter']">
              Designed By Syspree Digital
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
