"use client"
import 'aos/dist/aos.css';
import AOS from 'aos';
import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Truck, Scissors, Package, TreePine, MapPin, Star, Leaf, Users, Award, Clock } from 'lucide-react';
import Image from 'next/image';

const GrassSellingWebsite = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
      AOS.init({
      duration: 200,       // Animation duration
      easing: 'ease-in-out', // Easing pattern
      once: true,          // Whether animation should happen only once
      mirror: false,       // Whether elements should animate out while scrolling past them
    });
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const grassProducts = [
    {
      name: 'หญ้านวลน้อย',
      description: 'หญ้าคุณภาพสูง เหมาะสำหรับสนามหญ้าทั่วไป ทนแล้ง ทนเหยียบย่ำ',
      image: '/product/nuannoy.jpg'
    },
    {
      name: 'หญ้าญี่ปุ่น',
      description: 'หญ้าเกรดพรีเมี่ยม นุ่ม สีเขียวสวย เหมาะสำหรับสนามกอล์ฟ',
      image: '/product/japan.jpg'
    },
    {
      name: 'หญ้ามาเลเซีย',
      description: 'หญ้าใบหนา ทนร้อน เหมาะสำหรับภูมิอากาศเมืองไทย ชอบอยู่ในแดดรำไรและสามารถปลูกกลางแดดได้',
      image: '/product/malaysia.jpg'
    },
    {
      name: 'หญ้าพลาสพาลั่ม',
      description: 'หญ้าใบแคบ ทนแล้ง เหมาะสำหรับพื้นที่แห้งแล้ง',
      image: '/product/plaspalum.jpg'
    },
    {
      name: 'หญ้าเมอร์บิวด้า',
      description: 'หญ้าทนทาน เจริญเติบโตเร็ว เหมาะสำหรับสนามกีฬา',
      image: '/product/bermuda.jpg'
    },
    {
      name: 'หญ้าไทเปย์',
      description: 'หญ้าใบเล็ก สีเขียวเข้ม เหมาะสำหรับการตกแต่ง',
      image: '/product/thaipay.jpg'
    }
  ];

  const services = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'บริการขายหญ้า',
      description: 'หญ้าคุณภาพสูงหลากหลายชนิด ราคาหน้าสวนไม่ผ่านแม่ค้าคนกลาง ส่งทั่วประเทศ มีเก็บปลายทาง',
      image: '/img/allgrass.png',
      href : '#products'
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: 'จัดและตัดแต่งสวน',
      description: 'บริการปลูกหญ้า เคลียริ่ง ปรับพื้นที่ โดยช่างมากประสบการณ์กว่า 10 ปี',
      image: '/img/garden.png',
      href : 'https://line.me/ti/p/zSV34qgq4u'
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: 'จัดหาต้นไม้',
      description: 'รับจัดหาคัดสรรต้นไม้ทุกชนิด ช้อนเงินช้อนทอง',
      image: '/img/tree.png',
      href : 'https://line.me/ti/p/zSV34qgq4u'
    },
   
  ];

  const portfolioItems = [
    { title: 'สวนหน้าบ้าน', description: 'จัดสวนหญ้านวลน้อยถึงบ้าน', image:'/img/rev1.jpg' },
    { title: 'จัดส่งต้นไม้', description: 'คัดสรรและจัดส่งต้นไม้เกรดคุณภาพ',image:'/img/rev5.jpg'},
    { title: 'สวนหิน', description: 'จัดสวนหินผสมผสานกับหญ้าเขียว',image:'/img/rev3.jpg'},
    { title: 'หญ้าข้างสระน้ำ', description: 'ปูหญ้าข้างสระน้ำ', image:'/img/rev4.jpg'},
    { title: 'หญ้าสนามกีฬา', description: 'ปูหญ้าสนามฟุตบอลขนาดมาตรฐาน',image:'/img/rev2.jpg' },
    { title: 'สวนหน้าบ้าน', description: 'จัดสวนหน้าบ้าน', image:'/img/rev6.jpg' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
     <nav
  className={`fixed w-full z-50 transition-all duration-300 ${
    scrollY > 680
      ? 'bg-green-950/90 backdrop-blur-sm shadow-md border-b border-green-700'
      : 'bg-transparent'
  }`}
>
  <div className="max-w-6xl mx-auto px-4 py-4 flex justify-end sm:justify-center items-center">

    {/* เมนู Desktop/iPad (md ขึ้นไป) */}
    <div className="hidden sm:flex space-x-8 items-center">
      {[
        { label: 'หน้าแรก', href: '/' },
        { label: ' | ', isDivider: true },
        { label: 'บริการ', href: '/service#services' },
        { label: ' | ', isDivider: true },
        { label: 'สินค้า', href: '/service#products' },
        { label: ' | ', isDivider: true },
        { label: 'ผลงาน', href: '/portfolio' },
        { label: ' |    ', isDivider: true },
        { label: 'ติดต่อ', href: '/contact' },
      ].map((item, index) =>
        item.isDivider ? (
          <span
            key={index}
            className="text-white select-none pointer-events-none"
          >
            |
          </span>
        ) : (
          <a
            key={index}
            href={item.href}
            className="text-white hover:text-green-300 transition-colors duration-300"
          >
            {item.label}
          </a>
        )
      )}
    </div>

    {/* ปุ่ม Hamburger (มือถือ) */}
    <div className="sm:hidden">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-white focus:outline-none"
      >
        {menuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
    </div>
  </div>

  {/* เมนูมือถือ */}
  {menuOpen && (
    <div className="md:hidden bg-green-950/90 backdrop-blur-sm border-t border-green-700 px-6 py-4 space-y-4">
      {[
        { label: 'หน้าแรก', href: '/' },
        { label: 'บริการ', href: '/service#services' },
        { label: 'สินค้า', href: '/service#products' },
        { label: 'ผลงาน', href: '/portfolio' },
        { label: 'ติดต่อ', href: '/contact' },
      ].map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="block text-white hover:text-green-300 transition-colors duration-300"
          onClick={() => setMenuOpen(false)}
        >
          {item.label}
        </a>
      ))}
    </div>
  )}
</nav>


   <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Multi-layer Background System */}
  <div className="absolute inset-0 bg-[url('/img/hero1.jpg')] bg-cover bg-center bg-fixed"></div>
  <div className="absolute inset-0 bg-black/70"></div>
  
  {/* Advanced Animated Elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute top-3/4 right-1/4 w-40 h-40 md:w-60 md:h-60 bg-yellow-400/8 rounded-full blur-3xl animate-bounce"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[600px] md:h-[600px] bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
  </div>
  
  {/* Floating Particles Effect */}
  <div className="absolute inset-0">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className={`absolute w-2 h-2 bg-green-400/30 rounded-full animate-pulse`}
        style={{
          left: `${20 + i * 15}%`,
          top: `${30 + i * 10}%`,
          animationDelay: `${i * 0.5}s`,
          animationDuration: `${3 + i}s`
        }}
      ></div>
    ))}
  </div>
  
  <div className="relative z-20 text-center text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    {/* Premium Badge */}
    <div className="mb-8 md:mb-12 inline-block animate-fade-in-down">
      <div className="relative group">
        <div className="absolute -inset-2 bg-gradient-to-r from-green-400 via-emerald-500 to-yellow-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
        <span className="relative px-6 py-3 md:px-8 md:py-4 bg-black/30 backdrop-blur-xl rounded-full text-sm md:text-base font-bold border border-green-400/40 shadow-2xl">
          <span className="text-2xl mr-2">🌟</span>
          Premium Landscape Solutions
        </span>
      </div>
    </div>
    
    {/* Main Heading - Ultra Responsive */}
    <h1 className="mb-8 md:mb-12 animate-fade-in-up">
      <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black bg-gradient-to-r from-white via-green-200 to-yellow-200 bg-clip-text text-transparent leading-tight mb-4">
        จัดสวนครบวงจร
      </span>
      <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-green-300 leading-relaxed">
        สร้างพื้นที่สีเขียวแห่งความสุข
      </span>
    </h1>

    {/* Description - Perfect Mobile Typography */}
    <div className="mb-10 md:mb-16 animate-fade-in-up animation-delay-300">
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-200 max-w-4xl mx-auto mb-4">
        เปลี่ยนพื้นที่ว่างเปล่าให้กลายเป็นสวนสวยด้วยบริการออกแบบและติดตั้งระบบสวนแบบครบวงจร
      </p>
      <p className="text-sm sm:text-base md:text-lg text-green-300 font-medium max-w-3xl mx-auto">
        ⭐ พร้อมการันตีคุณภาพระดับมาตรฐานสากล ประสบการณ์กว่า 15 ปี
      </p>
    </div>

    {/* CTA Buttons - Ultra Responsive */}
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 md:mb-20 animate-fade-in-up animation-delay-600">
      <a
        href="#services"
        className="group relative w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-4 sm:py-5 bg-gradient-to-r from-green-500 via-emerald-600 to-green-600 hover:from-green-400 hover:via-emerald-500 hover:to-green-500 text-white rounded-2xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-green-500/30 transition-all duration-500 transform hover:scale-105 hover:rotate-1 overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        <span className="relative flex items-center justify-center gap-3">
          <span className="text-xl">🎯</span>
          <span>เช็คบริการของเรา</span>
          <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      </a>

      <a
        href="tel:0801738530"
        className="group relative w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-4 sm:py-5 bg-black/20 backdrop-blur-xl border-2 border-white/40 text-white hover:bg-white hover:text-green-700 hover:border-green-400 rounded-2xl font-bold text-base sm:text-lg transition-all duration-500 transform hover:scale-105 hover:-rotate-1 shadow-xl hover:shadow-2xl"
      >
        <span className="flex items-center justify-center gap-3">
          <span className="text-xl">📞</span>
          <span className="hidden sm:inline">โทรเลย </span>
          <span>080-173-8530</span>
        </span>
      </a>
    </div>

    {/* Feature Cards - Revolutionary Mobile-First Design */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 animate-fade-in-up animation-delay-900">
      {[
        {
          icon: '🚀',
          title: 'ติดตั้งรวดเร็ว',
          desc: 'ทีมงานมืออาชีพ พร้อมเครื่องมือครบครัน งานเสร็จภายใน 1-3 วัน',
        },
        {
          icon: '🎨',
          title: 'ออกแบบเฉพาะ',
          desc: 'Custom Design ตามความต้องการ ปรึกษาฟรี 3D Modeling',
        },
        {
          icon: '🛡️',
          title: 'รับประกันผลงาน',
          desc: 'มั่นใจในคุณภาพ รับประกาน 3 ปีเต็ม บริการหลังการขายครบครัน',
        },
      ].map((item, i) => (
        <div
          key={i}
          className="group relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/30 hover:border-green-400/60 transition-all duration-700 hover:bg-white/20 hover:scale-105 hover:rotate-1 shadow-xl hover:shadow-2xl"
          style={{ animationDelay: `${i * 200}ms` }}
        >
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative">
            <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500 text-center sm:text-left">
              {item.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-green-200 group-hover:text-green-100 transition-colors text-center sm:text-left">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-300 group-hover:text-gray-200 leading-relaxed transition-colors text-center sm:text-left">
              {item.desc}
            </p>
          </div>
          
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-green-400/50 to-emerald-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
        </div>
      ))}
    </div>

    {/* Trust Indicators - Mobile Optimized */}
    <div className="mt-16 md:mt-20 animate-fade-in-up animation-delay-1200">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto">
        <div className="text-center group cursor-pointer">
          <div className="text-2xl sm:text-3xl font-black text-green-400 group-hover:text-green-300 transition-colors">15+</div>
          <div className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">ปีประสบการณ์</div>
        </div>
        <div className="text-center group cursor-pointer">
          <div className="text-2xl sm:text-3xl font-black text-green-400 group-hover:text-green-300 transition-colors">5,000+</div>
          <div className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">โปรเจคสำเร็จ</div>
        </div>
        <div className="text-center group cursor-pointer">
          <div className="text-2xl sm:text-3xl font-black text-green-400 group-hover:text-green-300 transition-colors">77</div>
          <div className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">จังหวัดทั่วไทย</div>
        </div>
        <div className="text-center group cursor-pointer">
          <div className="text-2xl sm:text-3xl font-black text-green-400 group-hover:text-green-300 transition-colors">100%</div>
          <div className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">ความพึงพอใจ</div>
        </div>
      </div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
      <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
    </div>
  </div>
</section>

{/* Services Section - เปลี่ยนเป็น Card Grid แบบใหม่ */}
<section id="services" className="py-24 bg-gradient-to-b from-white to-green-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-20">
      <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-100 rounded-full mb-6">
        <span className="text-3xl">🌟</span>
        <span className="text-green-800 font-bold">บริการของเรา</span>
      </div>
      <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
        สร้างสรรค์พื้นที่
        <span className="block text-green-600">ให้สวยงามทุกมุมมอง</span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
      {services.map((service, index) => (
        <div
          key={index}
          className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:rotate-1 border-2 border-gray-100 hover:border-green-200"
        >
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl text-green-600">{service.icon}</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-green-700 transition-colors">
                  {service.title}
                </h3>
                <div className="w-12 h-1 bg-green-400 rounded-full mt-2 group-hover:w-20 transition-all duration-300"></div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
            
            <div className="relative h-48 mb-8 rounded-2xl overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-green-600/30 transition-all duration-500"></div>
            </div>

            <a
              href={service.href}
              className="group/btn w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-green-600 hover:to-emerald-600 text-white rounded-2xl font-bold transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="mr-3">
                {service.title === 'บริการขายหญ้า' ? '🌿 ดูหญ้าทั้งหมด' : '💬 สอบถามเลย'}
              </span>
              <svg className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Products Section - เปลี่ยนเป็น Modern Grid Layout */}
<section id="products" className="py-24 bg-gradient-to-b from-gray-900 to-black text-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-20">
      <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-600/20 backdrop-blur-md rounded-full mb-6 border border-green-400/30">
        <span className="text-3xl">🌱</span>
        <span className="text-green-300 font-bold">หญ้าพรีเมียม</span>
      </div>
      <h2 className="text-5xl md:text-6xl font-black mb-6">
        หญ้าคุณภาพระดับ
        <span className="block bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
          Export Standard
        </span>
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        คัดสรรหญ้าเกรดเอ จากฟาร์มที่ได้มาตรฐาน พร้อมระบบจัดส่งที่รวดเร็วและปลอดภัย
      </p>
      <div className="mt-8 flex items-center justify-center gap-2 text-green-400">
        <span className="text-2xl">⭐</span>
        <span className="font-bold">มากกว่า 5,000+ ออเดอร์ ลูกค้าประทับใจทั่วประเทศ</span>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {grassProducts.map((product, index) => (
        <div
          key={index}
          className="group relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-gray-700 hover:border-green-500/50 transition-all duration-500 hover:scale-105"
        >
          {/* Product Image */}
          <div className="relative h-64 overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            
            {/* Price tag or badge */}
            <div className="absolute top-4 right-4 px-4 py-2 bg-green-500 text-white rounded-full text-sm font-bold shadow-lg">
              Premium
            </div>
          </div>

          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors">
              {product.name}
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">{product.description}</p>
            
            {/* Action buttons */}
            <div className="flex gap-4">
              <a
                href="https://line.me/ti/p/zSV34qgq4u"
                target="_blank"
                className="flex-1 group/btn bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-6 py-4 rounded-2xl font-bold text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  <img src="/img/line.webp" className="w-6 h-6 rounded-full" alt="Line" />
                  สอบถามราคา
                </span>
              </a>
              
              <a
                href="tel:0801738530"
                className="px-6 py-4 bg-gray-700 hover:bg-gray-600 text-white rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                📞
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Bottom section - เปลี่ยนเป็น split layout */}
    <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-green-400">
          🌍 ส่งทั่วไทย การันตีคุณภาพ
        </h3>
        <p className="text-xl text-gray-300 leading-relaxed">
          ไม่ว่าคุณจะอยู่จังหวัดไหน เรามีระบบจัดส่งที่เชื่อถือได้ พร้อมบริการหลังการขายที่ครบครัน
        </p>
        <div className="text-lg text-green-300">
          ✨ ชมตัวอย่างหญ้าจริงได้ที่ฟาร์มของเรา ก่อนตัดสินใจ
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <a
          href="/portfolio"
          className="group block p-8 bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl transform hover:scale-105 transition-all duration-300 shadow-2xl"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📸</div>
          <h4 className="text-xl font-bold mb-2">ดูผลงานจริง</h4>
          <p className="text-green-100 text-sm">กว่า 5,000 โปรเจค ผลงานที่ภูมิใจ</p>
        </a>
        
        <a
          href="https://www.google.com/maps/place/14%C2%B001'22.5%22N+100%C2%B053'25.9%22E/@14.022903,100.8879441,17z/data=!3m1!4b1!4m4!3m3!8m2!3d14.022903!4d100.890519?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          className="group block p-8 bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-gray-600 hover:border-green-500 rounded-3xl transform hover:scale-105 transition-all duration-300 shadow-2xl"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📍</div>
          <h4 className="text-xl font-bold mb-2">มาดูที่ฟาร์ม</h4>
          <p className="text-gray-300 text-sm">Google Maps นำทางตรงไปฟาร์ม</p>
        </a>
      </div>
    </div>
  </div>
</section>

{/* Portfolio Section - เปลี่ยนเป็น Masonry Layout */}
<section id="reviews" className="py-24 bg-gradient-to-b from-green-50 to-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-20">
      <div className="inline-flex items-center gap-3 px-6 py-3 bg-white shadow-lg rounded-full mb-6 border border-green-200">
        <span className="text-3xl">🏆</span>
        <span className="text-green-800 font-bold">ผลงานของเรา</span>
      </div>
      <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
        มากกว่า 15 ปี
        <span className="block text-green-600">แห่งความเชี่ยวชาญ</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        ด้วยประสบการณ์ที่สั่งสมมายาวนาน เราได้สร้างสรรค์พื้นที่สีเขียวให้กับลูกค้ามากกว่า 5,000 โปรเจค
      </p>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
        <div className="text-center">
          <div className="text-3xl font-black text-green-600">5,000+</div>
          <div className="text-sm text-gray-500">โปรเจคสำเร็จ</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-black text-green-600">15+</div>
          <div className="text-sm text-gray-500">ปีประสบการณ์</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-black text-green-600">77</div>
          <div className="text-sm text-gray-500">จังหวัด</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-black text-green-600">100%</div>
          <div className="text-sm text-gray-500">ความพึงพอใจ</div>
        </div>
      </div>
    </div>

    {/* Portfolio Grid - เปลี่ยนเป็น staggered layout */}
    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
      {portfolioItems.map((item, index) => (
        <div
          key={index}
          className="group relative break-inside-avoid bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100"
        >
          <div className="relative overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={300}
              className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div className="p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </div>
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-green-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-8">
            <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-green-100">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Call to action */}
    <div className="mt-20 text-center">
      <a
        href="/portfolio"
        className="group inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-green-600 via-emerald-600 to-green-700 hover:from-green-500 hover:via-emerald-500 hover:to-green-600 text-white rounded-full text-xl font-bold shadow-2xl hover:shadow-green-500/25 transition-all duration-500 transform hover:scale-105"
      >
        <span className="text-3xl group-hover:scale-110 transition-transform">📱</span>
        <span>ดูผลงานทั้งหมด</span>
        <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </a>
      <p className="mt-6 text-gray-500 text-lg">
        มากกว่า 5,000 โปรเจคที่เราภูมิใจ พร้อมแสดงให้คุณเห็น
      </p>
    </div>
  </div>
</section>

      {/* Contact Section */}
      {/* Contact Section */}
<section id="contact" className="py-20 bg-gradient-to-b from-white via-green-50 to-white">
  <div className="max-w-5xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-2xl font-bold text-green-800 mb-4"><span className="text-2xl">📞</span> ติดต่อเรา</h2>
      <p className="text-3xl font-bold text-gray-800">พร้อมให้บริการ <span className="text-green-700">ทุกวัน</span> ทั่วประเทศ</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
      
    <a href="https://line.me/ti/p/zSV34qgq4u" target="_blank" rel="noopener noreferrer" className="bg-white border hover:border-green-500 shadow-md rounded-2xl p-6 transition hover:scale-105">
      <img src="/img/line.webp" alt="LINE Logo" className="w-6 h-6 mx-auto mb-3" />
      <p className="font-bold text-gray-800">แชททาง LINE</p>
      <p className="text-green-600">id : jirayut6812</p>
    </a>

    <a href="tel:0801738530" className="bg-white border hover:border-green-500 shadow-md rounded-2xl p-6 transition hover:scale-105">
        <Phone className="w-8 h-8 mx-auto text-green-600 mb-3" />
        <p className="font-bold text-gray-800">โทรด่วน</p>
        <p className="text-green-600 text-lg">080-173-8530</p>
    </a>

  
      <a href="https://www.facebook.com/profile.php?id=61577147002093&rdid=C8z1HUrWIJQu15ik&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15yK1jepgU%2F#" target="_blank" rel="noopener noreferrer" className="bg-white border hover:border-green-500 shadow-md rounded-2xl p-6 transition hover:scale-105">
        <img src="/img/facebook.webp" alt="Facebook Logo" className="w-6 h-6 mx-auto mb-3" />
        <p className="font-bold text-gray-800">Facebook Page</p>
        <p className="text-green-600">ไร่หญ้าสมสมัยการ์เด้น.com </p>
      </a>

       <a href="https://www.tiktok.com/@jirayut6112546?_t=ZS-8wrp3jqXqUb&_r=1" target="_blank" rel="noopener noreferrer" className="bg-white border hover:border-green-500 shadow-md rounded-2xl p-6 transition hover:scale-105">
        <img src="/img/tiktok.webp" alt="TikTok Logo" className="w-10 h-10 mx-auto mb-3" />
        <p className="font-bold text-gray-800">ติดตามใน TikTok</p>
        <p className="text-green-600">jirayut6112546</p>
      </a>

      <a href="https://www.google.com/maps/place/14%C2%B001'22.5%22N+100%C2%B053'25.9%22E/@14.022903,100.8879441,17z/data=!3m1!4b1!4m4!3m3!8m2!3d14.022903!4d100.890519?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="bg-white border hover:border-green-500 shadow-md rounded-2xl p-6 transition hover:scale-105">
        <MapPin className="w-8 h-8 mx-auto text-green-600 mb-3" />
        <p className="font-bold text-gray-800">เยี่ยมชมสวน</p>
        <p className="text-green-600">เปิดทุกวัน จ.-อา.</p>
      </a>
    </div>

    <p className="text-center text-gray-500 text-sm mt-12">
      รับงานทั่วประเทศ — คิดถึงหญ้า คิดถึงเรา 🌿
    </p>
  </div>
</section>


      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
  <a
    href="https://line.me/ti/p/zSV34qgq4u"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex items-center justify-center w-16 h-16 bg-[#00C300] rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
  >
    <img
      src="/img/line.webp"
      alt="LINE"
      className="w-8 h-8 rounded-2xl"
    />
    <span className="absolute bottom-full mb-2 px-3 py-1 text-xs text-white bg-black bg-opacity-80 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
      แชทผ่าน LINE
    </span>
  </a>
</div>


      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-900 {
          animation-delay: 0.9s;
        }
      `}</style>
    </div>
  );
};

export default GrassSellingWebsite;