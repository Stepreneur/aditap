  // app/page.js
  'use client'
  import { ArrowRight , Leaf ,Layers,  Scissors , TreePine , ChevronDown, ChevronUp } from "lucide-react";
  import { useState, useEffect } from 'react'
  import Image from 'next/image'
  import Link from 'next/link'
  import Product from "@/compo/Product/page";
  import Service from "@/compo/Service/page";
  import Navbar from "@/compo/Navbar/page"
import Line from "@/compo/Line/page";
import Contact from "@/compo/Contact/page";

  export default function HomePage() {
     const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

   const portfolioItems = [
    { title: 'สวนหน้าบ้าน', description: 'จัดสวนหญ้านวลน้อยถึงบ้าน', image:'/img/rev3.jpg' },
    { title: 'จัดส่งต้นไม้', description: 'คัดสรรและจัดส่งต้นไม้เกรดคุณภาพ',image:'/img/rev5.jpg'},
    { title: 'สวนหิน', description: 'จัดสวนหินผสมผสานกับหญ้าเขียว',image:'/img/rev6.jpg'},
    { title: 'ขายหญ้า', description: 'ขายหญ้าส่งถึง', image:'/img/rev4.jpg'},
    { title: 'หญ้าสนามกีฬา', description: 'ปูหญ้าสนามฟุตบอลขนาดมาตรฐาน',image:'/img/rev2.jpg' },
    { title: 'สวนหน้าบ้าน', description: 'จัดสวนหน้าบ้าน', image:'/img/rev1.jpg' }
  ];
  const faqData = [
    {
      question: "🌱 ที่ไร่มีหญ้าชนิดไหนบ้าง ?",
      answer: "นวลน้อย มาเลเชีย ญี่ปุ่น เบอร์บิวดา พาสพาลั่ม ไทเป"
    },
    {
      question: "📍 ร้านอยู่ที่ไหน ?",
      answer: "ร้านอยู่ที่ ต.บึงคอไห อ.ลำลูกกา จ.ปทุมธานี"
    },
    {
      question: "🌿 ควรตัดใบช่วงไหน ?",
      answer: "นับวันที่1คือวันที่ปลูกหญ้า ไปถึงวันที่15ของการที่ปลูกหญ้า"
    },
    {
      question: "🛠️ ควรดูแลหญ้ายังไง ?",
      answer: "ช่วงปลูกอาทิตย์แรกควร ลดน้ำ วันละ5-6รอบ และอาทิตย์ต่อไป ให้รดน้ำวันละ2รอบ เช้า เย็น"
    },
  ];

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
      if (typeof window !== 'undefined') {
        const handleScroll = () => {
          setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
      }
    }, [])

    return (
      <div className="min-h-screen "  style={{ backgroundColor: '#F5F3EB' }}>
        {/* Navbar */}
        <Navbar />
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center  justify-center overflow-hidden mb-20">
          <div className="container mx-auto sm:px-4 relative z-10">
            <div className="grid lg:grid-cols-2  items-center px-10 sm:pl-24 sm:pr-22 gap-10 mt-10 lg:mt-0 lg:gap-25">
              {/* Left Content */}
              <div className="text-center lg:text-left animate-fade-in">
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight pt-10">
                  <span className="text-gray-800">
                  เรื่องหญ้าไ<span className="tracking-widest">ว้</span>ใจบัง บริการครบวงจร
                  </span>
                  <br />
                </h1>
                <p className="text-base sm:text-xl text-gray-600 mb-8 max-w-2xl">
                  ไร่หญ้าอาบัง ขายหญ้านวลน้อย , ไทเป , อื่นๆ รับงานทั่วประเทศ ส่งเร็ว มีของตลอด <br /> และบริการจัดสวนครบวงจร
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="https://line.me/ti/p/guAbCz7twh" target="_blank" className="block bg-gradient-to-r from-green-700 via-lime-600 to-amber-800 text-white px-8 py-4 h-[60px] rounded-full font-semibold text-lg hover:bg-green-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                    ปรึกษาฟรี
                  </Link>
                  <Link href="/portfolio" target="_blank" className="block border-2 border-green-600 text-green-800 px-8 py-4 h-[60px ] rounded-full font-semibold text-lg hover:bg-green-600 hover:text-white transition-all">
                    ดูผลงาน
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative animate-float rotate-3 mt-9 ">
                <div className="relative w-full h-[300px] md:h-[350px] lg:h-[470px] rounded-3xl  overflow-hidden shadow-2xl">
                  <div className="w-full h-full   relative p-7">
                        <Image alt="hero image" src="/img/hero.jpg" width={500} height={700} className='w-full h-full rounded-xl object-cover' />
                  </div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-lg animate-bounce">
                  <div className="text-2xl font-bold text-green-600">500+</div>
                  <div className="text-sm text-gray-600">โครงการสำเร็จ</div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg animate-pulse">
                  <div className="text-2xl font-bold text-green-600">10+</div>
                  <div className="text-sm text-gray-600">ปีประสบการณ์</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <Product />

       {/* Services Section */}
        <Service />
       <section id="reviews" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
           <h2 className="text-2xl font-bold text-black mb-6"><span className='text-3xl'>📗</span>ผลงาน</h2>
            <p className="text-4xl text-black font-bold">ไร่หญ้าอาบัง<span className='block mt-2'>อุดหนุนแล้วกว่าทั่วประเทศ</span></p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
              <Image
              className="rounded-2xl object-cover aspect-[3/4] w-full h-auto"
              src={item.image}
              width={400}
              height={533} // 3:4 ratio
              alt="product"
             />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
       <div className="mt-16 flex justify-center px-4">
  {/* รีวิวผลงาน Button */}
  <Link data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="900"
              data-aos-easing="ease-in-out"
    href="/portfolio"
    className="relative group bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500 p-1 rounded-3xl shadow-xl hover:scale-105 transform transition-all duration-300"
  >
    <div className="flex items-center gap-8 bg-white rounded-[calc(1.5rem-4px)] p-5 sm:p-6">
      <div className="relative">
        <div className="absolute -inset-1 bg-emerald-400 blur-lg opacity-30 rounded-full animate-pulse"></div>
        <div className="relative z-10 text-green-700 text-3xl p-3 rounded-full bg-emerald-100 shadow-inner">
          📸
        </div>
      </div>
      <div>
        <p className="text-lg font-bold text-green-800 group-hover:text-green-900">
          ภาพผลงานทั้งหมด   
        </p>
        <p className="text-sm text-gray-500">
          กว่า 3,500 งานที่เราภูมิใจ แค่คลิกก็เห็นภาพชัดเจน
        </p>
      </div>
    </div>
  </Link>
</div>

      </section>

        {/* FAQ Section */}
         <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            คำถามที่พบบ่อย
          </h2>
          <p className="text-xl text-gray-600">
            คำตอบสำหรับคำถามที่ลูกค้าสอบถามบ่อยที่สุด
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-gray-800 pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems[index] ? (
                      <ChevronUp className="w-6 h-6 text-green-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-green-600" />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openItems[index] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-5 pt-2 bg-gray-50">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
<Contact />
<Line />

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-fade-in {
            animation: fade-in 1s ease-out;
          }
          
          html {
            scroll-behavior: smooth;
          }
          
          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
            height: 10px;
          }
          ::-webkit-scrollbar-track {
            background: gray;
          }
          
          ::-webkit-scrollbar-thumb {
            background: #16a34a;
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #15803d;
          }
        `}</style>
      </div>
    )
  }