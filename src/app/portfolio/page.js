"use client"
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight} from 'lucide-react';
import { Phone, MessageCircle, Truck, Scissors, Package, TreePine, MapPin, Star, Leaf, Users, Award, Clock } from 'lucide-react';


const PortfolioPage = () => {
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
 const [scrollY, setScrollY] = useState(0);
   const [activeSection, setActiveSection] = useState('home');
 const [menuOpen, setMenuOpen] = useState(false);
  const [displayedItems, setDisplayedItems] = useState(20); // เริ่มต้นแสดง 20 รูป
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalImages = 112;
  const itemsPerLoad = 20;

  // สร้าง portfolio items ทั้งหมด
  const allPortfolioItems = Array.from({ length: totalImages }, (_, i) => ({
    id: i + 1,
    image: `/rev/${i + 1}.jpg`,
  }));

  // แสดงเฉพาะรูปที่ต้องการ
  const portfolioItems = allPortfolioItems.slice(0, displayedItems);

  const loadMoreImages = () => {
    setIsLoading(true);
    // จำลองการโหลด
    setTimeout(() => {
      setDisplayedItems(prev => Math.min(prev + itemsPerLoad, totalImages));
      setIsLoading(false);
    }, 500);
  };

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % portfolioItems.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(portfolioItems[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? portfolioItems.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(portfolioItems[prevIndex]);
  };

  const hasMoreImages = displayedItems < totalImages;

  return (
    <div className="min-h-screen bg-white">
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

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{ backgroundImage: "url('/img/revhero.jpg')" }}
        />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            ผลงานของเรา
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300">
            ประสบการณ์กว่า 10 ปี ส่งมอบความสวยงามให้ลูกค้ามากกว่า 3,500 ราย
            <br />
            ทั่วทุกจังหวัดในประเทศไทย
          </p>
          
          <div className="flex flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <div className="bg-black/20 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/20">
              <div className="text-3xl font-bold">3,500+</div>
              <div className="text-sm">โครงการสำเร็จ</div>
            </div>
            <div className="bg-black/20 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/20">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm">ปีประสบการณ์</div>
            </div>
            <div className="bg-black/20 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/20">
              <div className="text-3xl font-bold">77</div>
              <div className="text-sm">จังหวัดที่ส่ง</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              ผลงานที่เราภูมิใจ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              จากประสบการณ์กว่า 10 ปี เราได้สร้างสรรค์พื้นที่สวยงามให้ลูกค้ามากกว่า 3,500 ราย
              <br />
              ทั่วทุกจังหวัดในประเทศไทย
            </p>
            <div className="mt-8 inline-block bg-gradient-to-r from-green-600 to-emerald-500 h-1 w-24 rounded-full"></div>
          </div>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]"
                onClick={() => openLightbox(item, index)}
              >
                <img
                  src={item.image}
                  alt="ผลงาน"
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between">
                      <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2">
                        <span className="text-white text-sm font-medium">ดูรูปขยาย</span>
                      </div>
                      <div className="bg-white/20 backdrop-blur-md rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-200">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          {hasMoreImages && (
            <div className="text-center mt-12">
              <button
                onClick={loadMoreImages}
                disabled={isLoading}
                className={`
                  inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform
                  ${isLoading 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-green-600 to-emerald-500 text-white hover:from-green-700 hover:to-emerald-600 hover:scale-105 shadow-lg hover:shadow-xl'
                  }
                `}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                    กำลังโหลด...
                  </>
                ) : (
                  <>
                    <span>โหลดรูปเพิ่ม</span>
                    <span className="bg-white/20 rounded-full px-3 py-1 text-sm">
                      +{Math.min(itemsPerLoad, totalImages - displayedItems)} รูป
                    </span>
                  </>
                )}
              </button>
            </div>
          )}
          
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl px-8 py-6 border border-green-100">
              <div className="text-4xl">🌿</div>
              <div>
                <p className="text-green-800 font-bold text-lg">
                  แสดงผลงาน {displayedItems} จาก {totalImages} รายการ
                </p>
                <p className="text-green-600 text-sm">คลิกที่รูปภาพเพื่อดูแบบขยาย</p>
                {displayedItems < totalImages && (
                  <p className="text-green-500 text-xs mt-1">
                    เหลืออีก {totalImages - displayedItems} รูป
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            <p className="text-green-600">ID : jirayut681</p>
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
              <p className="text-green-600">@jirayut6112546</p>
            </a>
      
            <a href="https://maps.app.goo.gl/tyL7cPPNYUea5VQs8" target="_blank" rel="noopener noreferrer" className="bg-white border hover:border-green-500 shadow-md rounded-2xl p-6 transition hover:scale-105">
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full h-full flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-60 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 z-60 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 z-60 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            <img
              src={selectedImage.image}
              alt="ผลงาน"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full">
              {currentImageIndex + 1} / {portfolioItems.length}
            </div>
          </div>
        </div>
      )}

      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://line.me/ti/p/zSV34qgq4u"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 animate-pulse"
        >
          <MessageCircle className="w-6 h-6" />
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
      `}</style>
    </div>
  );
};

export default PortfolioPage;