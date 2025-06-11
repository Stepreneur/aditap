"use client"
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight} from 'lucide-react';
import { Phone, MessageCircle, Truck, Scissors, Package, TreePine, MapPin, Star, Leaf, Users, Award, Clock } from 'lucide-react';
import Navbar from "@/compo/Navbar/page"
import Line from '@/compo/Line/page';
import Contact from '@/compo/Contact/page';

const PortfolioPage = () => {
  
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
 const [scrollY, setScrollY] = useState(0);
   const [activeSection, setActiveSection] = useState('home');
 const [menuOpen, setMenuOpen] = useState(false);
  const [displayedItems, setDisplayedItems] = useState(5); // เริ่มต้นแสดง 20 รูป
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalImages = 112;
  const itemsPerLoad = 5;

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
      <Navbar/>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden  "style={{backgroundColor:'black'}}>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{ backgroundImage: "url('/img/hero.jpg')" }}
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
              <div className="text-3xl font-bold">5,000 +</div>
              <div className="text-sm">โครงการสำเร็จ</div>
            </div>
            <div className="bg-black/20 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/20">
              <div className="text-3xl font-bold">18 +</div>
              <div className="text-sm">ปีประสบการณ์</div>
            </div>
            <div className="bg-black/20 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/20">
              <div className="text-3xl font-bold">ขาย</div>
              <div className="text-sm">ทั่วประเทศ</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
         
          <div className="columns-3 sm:columns-3 lg:columns-3 xl:columns-4 gap-4 space-y-4">
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
                  inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform
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
          
          <div className="text-center ">
            <div className="inline-flex items-center gap-4  rounded-2xl px-8 py-6 ">
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
     <Contact />

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
      <Line />

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