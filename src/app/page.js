// app/page.js
'use client'
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen "  style={{ backgroundColor: '#F5F3EB' }}>
      {/* Navbar */}
      <nav style={{ backgroundColor: '#F5F3EB' }} className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? ' backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 rounded-lg items-center justify-center relative bg-transparent">
                <Image fill src="/img/bung_logo_black.png" className ="rounded-full absolute bg-transparent" />
              </div>
              <span className="text-base font-bold  bg-clip-text text-black">
                อาบังการ์เด้น 
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-gray-800 hover:text-green-600 transition-colors font-medium">
                หน้าแรก
              </Link>
              <Link href="#services" className="text-gray-800 hover:text-green-600 transition-colors font-medium">
                บริการ
              </Link>
              <Link href="#products" className="text-gray-800 hover:text-green-600 transition-colors font-medium">
                สินค้า
              </Link>
              <Link href="#portfolio" className="text-gray-800 hover:text-green-600 transition-colors font-medium">
                ผลงาน
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`w-6 h-6 flex flex-col justify-center items-center ${isMenuOpen ? 'gap-0' : 'gap-1'}`}>
                <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${isMenuOpen ? 'rotate-45 translate-y-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-800 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-4 bg-white/95 backdrop-blur-md rounded-lg mt-2">
              <Link href="#home" className="block px-4 py-2 text-gray-800 hover:text-green-600">หน้าแรก</Link>
              <Link href="#services" className="block px-4 py-2 text-gray-800 hover:text-green-600">บริการ</Link>
              <Link href="#products" className="block px-4 py-2 text-gray-800 hover:text-green-600">สินค้า</Link>
              <Link href="#portfolio" className="block px-4 py-2 text-gray-800 hover:text-green-600">ผลงาน</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center  justify-center overflow-hidden mb-20">
        {/* Animated Background */}
    

        <div className="container mx-auto sm:px-4 relative z-10">
          <div className="grid lg:grid-cols-2  items-center px-10 sm:pl-24 sm:pr-22 gap-10 mt-10 lg:mt-0 lg:gap-25">
            {/* Left Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight pt-10">
                <span className="text-gray-800  ">
                 เรื่องหญ้าไว้ใจบัง – บริการครบวงจร
                </span>
                <br />
              </h1>
              <p className="text-base sm:text-xl text-gray-600 mb-8 max-w-2xl">
                ไร่หญ้าอาบัง ขายหญ้านวลน้อย , ไทเป , อื่นๆ รับงานทั่วประเทศ ส่งเร็ว มีของตลอด <br /> และบริการจัดสวนครบวงจร
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-green-800 text-white px-8 py-4 h-[60px] rounded-full font-semibold text-lg hover:bg-green-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                  ปรึกษาฟรี
                </button>
                <button className="border-2 border-green-600 text-green-800 px-8 py-4 h-[60px ] rounded-full font-semibold text-lg hover:bg-green-600 hover:text-white transition-all">
                  ดูผลงาน
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-float rotate-3 mt-9 ">
              <div className="relative w-full h-[300px] md:h-[350px] lg:h-[470px] rounded-3xl  overflow-hidden shadow-2xl">
                <div className="w-full h-full   relative p-7">
                       <Image src="/img/hero.jpg" width={500} height={700} className='w-full h-full rounded-xl object-cover' />
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
// Additional sections to add after your hero section

      {/* Features and Value Proposition */}
   <section className="py-20" style={{ backgroundColor: '#F1EFE9' }}>
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-2xl font-bold text-green-900 mb-7">
        <Image src="/img/bung_logo_black.png" width={50} height={50} className="inline-block" alt="feature_logo" />
        <span className="ml-5">ทำไมต้องเลือกไร่หญ้าอาบัง?</span>
      </h2>
      <p className="text-4xl font-bold text-gray-800 max-w-3xl mx-auto">
        ครบ จบ พร้อมติดตั้ง – บริการจัดสวนและปูหญ้าคุณภาพ จากทีมมืออาชีพ
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-5">
      {[
        {
          icon: '🌱',
          title: 'หญ้าสด คัดคุณภาพ',
          desc: 'หญ้าแน่น สีสวย ไม่มีหญ้าแปลกปน คัดแผ่นต่อแผ่นก่อนส่ง',
        },
        {
          icon: '🚚',
          title: 'งานเนี๊ยบ ส่งตรงเวลา',
          desc: 'รับงานตามแบบ ตรงสเปก ไม่ขาด ไม่เกิน ส่งถึงไวทั่วไทย',
        },
        {
          icon: '💰',
          title: 'เริ่มต้นแค่หลักสิบ',
          desc: 'ราคายุติธรรม ไม่บวกเกินจริง ถูกและดี มีอยู่จริงที่นี่',
        },
        {
          icon: '🛠️',
          title: 'ครบวงจร จบในที่เดียว',
          desc: 'ตั้งแต่ขายหญ้า ปูหญ้า จัดสวน พร้อมทีมมืออาชีพครบทีม',
        }
      ].map((item, i) => (
        <div key={i} className="text-center p-6 rounded-2xl bg-white border border-[#DDE6D5] shadow-md hover:shadow-lg transition-all hover:scale-105">
          <div className="w-16 h-16 bg-gradient-to-br from-[#CDE4C4] to-[#A5CDA0] rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-white">{item.icon}</span>
          </div>
          <h3 className="text-xl font-bold text-green-900 mb-2">{item.title}</h3>
          <p className="text-gray-700">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Products Section */}
     <section id="products" className="py-20 relative" style={{ backgroundColor: '#F5F3EB' }}>
  <div className="container mx-auto px-4">
    <div className="text-center mb-10">
      <h2 className="text-2xl font-bold text-green-900 mb-7"><span className="text-4xl">🌿</span><span className="ml-4">หญ้าคุณภาพ หลากหลายสายพันธุ์</span></h2>
      <p className="text-4xl font-bold text-black ">
        เลื่อนเพื่อเลือกดูหญ้าที่ร้านเรามีจำหน่าย
      </p>
    </div>

    {/* สไลด์แนวนอน */}
    <div className="absolute top-5/9 right-0 sm:right-9 -translate-y-1/2 z-10 pointer-events-none animate-bounce">
    <ArrowRight className="w-8 h-8 text-gray-500 z-10" />
  </div>
    <div className="overflow-x-auto overflow-y-hidden w-[90%] mx-auto relative">
      <div className="flex gap-10 w-full pt-10 pb-10">
        <div className="w-[10px]"></div>
        {[
          {
            name: "หญ้านวลน้อย",
            desc: "หญ้าทีมีความทนทานสูง ชอบอยู่ในที่ ที่มีแดดจัด ใบนุ่ม ทนต่อการเหยียบย่ำ",
            price: "เริ่ม ฿14/ตร.ม.",
            img: "/product/nuannoy.jpg",
          },
          {
            name: "หญ้ามาเลเซีย",
            desc: "หญ้าใบกว้าง เหมาะปลูกในที่ที่ร่มรื่น และมีแสงแดดรำไร",
            price: "เริ่ม ฿17/ตร.ม.",
            img: "/product/malaysia.jpg",
          },
          {
            name: "หญ้าไทเป",
            desc: "เป็นหญ้าใบกว้าง ที่ไม่ต้องตัดใบ แต่จะมีการเติบโตที่ช้า",
            price: "฿90/กิโลกรัม",
            img: "/product/taipe.jpg",
          },
          {
            name: "หญ้าพาสพาลัม",
            desc: "หญ้าใบนุ่ม เหมาะสมในที่พี่มีแสงแดดครับ และทนต่อน้ำกร่อยได้ดี และมีการเติบโตช้าไม่ต้องตัดใบบ่อย ใช้ในสนามฟุตบอลและสนามกอล์ฟ",
            price: "เริ่ม ฿16/ตร.ม.",
            img: "/product/plaspalum.jpg",
          },
          {
            name: "หญ้าญี่ปุ่น",
            desc: "หญ้าใบเล็ก เหมาะปลูกในพื้นที่ที่มีแสงแดดจัด ทนต่อการเหยียบย่ำ",
            price: "เริ่ม ฿15/ตร.ม.",
            img: "/product/japan.jpg",
          },
          {
            name: "หญ้าเบอร์มิวด้า",
            desc: "หญ้าใบแคบ เหมาะปลูกในที่ที่มีแสงแดดจัด น้ำที่กร่อยสามารถใช้รดได",
            price: "฿32/ตร.ม.",
            img: "/product/bermuda.jpg",
          },
        ].map((grass, index) => (
          <div
            key={index}
            className="w-80 shrink-0 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:transform hover:scale-105"
          >
            <div className={`relative h-60 bg-gradient-to-br `}>
              <Image src = {grass.img} fill />
            </div>
            <div className="p-6 h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{grass.name}</h3>
              <p className="text-gray-600 mb-4 text-lg">{grass.desc}</p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center">
                <span className="text-2xl font-bold text-green-800">{grass.price}</span>
                <button className="bg-gradient-to-r from-green-500 to-lime-400 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:brightness-105 transition-all duration-300 text-sm font-semibold">
                  สอบถาม
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="w-[500px]">dd</div>
      </div>
    </div>
  </div>
</section>


      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              บริการครบวงจร
            </h2>
            <p className="text-xl text-gray-600">
              นอกจากหญ้าแล้ว เรายังมีบริการจัดสวนและตกแต่งภูมิทัศน์แบบครบวงจร
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 h-full hover:shadow-xl transition-all group-hover:transform group-hover:scale-105">
                <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-700 transition-colors">
                  <span className="text-3xl text-white">🌿</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">จัดสวนบ้าน</h3>
                <p className="text-gray-600 mb-6">
                  ออกแบบและจัดสวนบ้านให้สวยงาม เหมาะกับไลฟ์สไตล์และงงบประมาณของคุณ
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• ปรึกษาออกแบบฟรี</li>
                  <li>• เลือกพันธุ์ไม้ที่เหมาะสม</li>
                  <li>• ติดตั้งระบบรดน้ำ</li>
                  <li>• รับประกัน 6 เดือน</li>
                </ul>
                <button className="w-full bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">
                  เริ่มต้น ฿15,000
                </button>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 h-full hover:shadow-xl transition-all group-hover:transform group-hover:scale-105">
                <div className="w-20 h-20 bg-gray-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-700 transition-colors">
                  <span className="text-3xl text-white">🪨</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">สวนหิน</h3>
                <p className="text-gray-600 mb-6">
                  สร้างสวนหินสไตล์ญี่ปุ่น หรือสไตล์โมเดิร์น ดูแลง่าย สวยงามตลอดปี
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• หินคุณภาพนำเข้า</li>
                  <li>• ออกแบบตามพื้นที่</li>
                  <li>• จัดวางอย่างมืออาชีพ</li>
                  <li>• พร้อมไฟประดับสวน</li>
                </ul>
                <button className="w-full bg-gray-600 text-white py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors">
                  เริ่มต้น ฿25,000
                </button>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 h-full hover:shadow-xl transition-all group-hover:transform group-hover:scale-105">
                <div className="w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-700 transition-colors">
                  <span className="text-3xl text-white">🌳</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">จัดหาต้นไม้</h3>
                <p className="text-gray-600 mb-6">
                  มีต้นไม้หลากหลายชนิด ทั้งต้นไม้ประดับ ต้นไม้ใหญ่ และไผ่สวน
                </p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• ต้นไม้สวยงาม คัดเลือกมาแล้ว</li>
                  <li>• ขนส่งและปลูกให้</li>
                  <li>• คำแนะนำการดูแล</li>
                  <li>• รับประกันต้นไม้</li>
                </ul>
                <button className="w-full bg-emerald-600 text-white py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors">
                  สอบถามราคา
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F3EB' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              ลูกค้าพอใจมากกว่า 500+ โครงการ
            </h2>
            <p className="text-xl text-gray-600">
              จากประสบการณ์ 10+ ปี เราได้รับความไว้วางใจจากลูกค้าทั่วประเทศ
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">โครงการสำเร็จ</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">10+</div>
              <div className="text-gray-600">ปีประสบการณ์</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">ลูกค้าพอใจ</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">บริการหลังการขาย</div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  ก
                </div>
                <div>
                  <div className="font-bold text-gray-800">คุณกรุง - โรงแรม 5 ดาว</div>
                  <div className="text-gray-600 text-sm">กรุงเทพมหานคร</div>
                </div>
              </div>
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-600">
                "หญ้าสวยมาก สดใหม่จริง ทีมงานมืออาชีพ ให้คำแนะนำดี ราคาสมเหตุสมผล 
                จัดสวนโรงแรมให้สวยงามมาก แขกชื่นชมเยอะ"
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  ส
                </div>
                <div>
                  <div className="font-bold text-gray-800">คุณสมชาย - สนามกอล์ฟ</div>
                  <div className="text-gray-600 text-sm">เชียงใหม่</div>
                </div>
              </div>
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-600">
                "ใช้บริการมา 3 ปีแล้ว หญ้าคุณภาพดี ทนทาน ส่งตรงเวลา 
                บริการหลังการขายดีมาก แนะนำเลยครับ"
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  ม
                </div>
                <div>
                  <div className="font-bold text-gray-800">คุณมาลี - บ้านพักตากอากาศ</div>
                  <div className="text-gray-600 text-sm">หัวหิน</div>
                </div>
              </div>
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-600">
                "จัดสวนบ้านให้สวยงามมาก เกินความคาดหมาย ทีมงานใส่ใจในรายละเอียด 
                สวนหินสไตล์ญี่ปุ่นสวยมาก แขกที่มาเที่ยวชอบถ่ายรูปกัน"
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">ความไว้วางใจจากพันธมิตร</h3>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">LOGO 1</div>
              <div className="text-2xl font-bold text-gray-400">LOGO 2</div>
              <div className="text-2xl font-bold text-gray-400">LOGO 3</div>
              <div className="text-2xl font-bold text-gray-400">LOGO 4</div>
            </div>
          </div>
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
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  🌱 หญ้าจะสดแค่ไหน? เก็บได้นานไหม?
                </h3>
                <p className="text-gray-600">
                  หญ้าของเราตัดจากไร่ในวันที่ส่ง รับประกันความสด ถ้าปลูกทันทีจะติดดินได้ 100% 
                  หากยังไม่ปลูกทันที สามารถเก็บไว้ในที่ร่มและรดน้ำได้ 3-5 วัน
                </p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  🚚 ส่งถึงไหนบ้าง? ค่าส่งเท่าไหร่?
                </h3>
                <p className="text-gray-600">
                  เราส่งทั่วประเทศไทย ค่าส่งขึ้นอยู่กับระยะทางและปริมาณ กรุงเทพและปริมณฑล เริ่มต้น 500 บาท 
                  ต่างจังหวัด เริ่มต้น 800 บาท สั่งมากๆ มีส่วนลดค่าขนส่ง
                </p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  💰 ราคาขั้นต่ำเท่าไหร่? มีส่วนลดไหม?
                </h3>
                <p className="text-gray-600">
                  สั่งขั้นต่ำ 50 ตารางเมตร สั่ง 100 ตร.ม. ขึ้นไป ลด 10% 
                  สั่ง 500 ตร.ม. ขึ้นไป ลด 15% และได้บริการปลูกให้ฟรี (ในพื้นที่กรุงเทพและปริมณฑล)
                </p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  🌿 หญ้าแต่ละชนิดต่างกันอย่างไร?
                </h3>
                <p className="text-gray-600">
                  นวลน้อย - ทนทาน เหมาะสนามกีฬา | มาเลเซีย - ใบเล็กสวย เหมาะสวนบ้าน | 
                  ไทเป - ทนแดดทนเหยียบ | พาสพาลัม - ทนเค็มทนแล้ง | ญี่ปุ่น - เกรดพรีเมี่ยม | 
                  เบอร์มิวด้า - โตเร็วฟื้นตัวดี
                </p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  🛠️ มีบริการปลูกให้ไหม? ราคาเท่าไหร่?
                </h3>
                <p className="text-gray-600">
                  มีครับ บริการปลูกหญ้า 15 บาท/ตร.ม. รวมถึงเตรียมดิน ปรับระดับ และรดน้ำเริ่มต้น 
                  หากสั่งหญ้ามากกว่า 500 ตร.ม. ปลูกให้ฟรี พร้อมรับประกัน 1 เดือน
                </p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  ⏰ ใช้เวลาจัดส่งนานแค่ไหน?
                </h3>
                <p className="text-gray-600">
                  กรุงเทพและปริมณฑล 24-48 ชั่วโมง | ต่างจังหวัด 2-4 วัน 
                  หากเป็นออเดอร์ด่วน สามารถจัดส่งในวันเดียวกันได้ (เสริมค่าบริการ)
                </p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  🎯 จะปลูกหญ้าให้สวยและทนทานต้องทำอย่างไร?
                </h3>
                <p className="text-gray-600">
                  1. เตรียมดินให้ร่วนซุย ผสมปุ่ยหมัก 2. ปรับระดับให้เรียบ 3. รดน้ำให้ชุ่ม 
                  4. วางหญ้าให้แนบสนิท 5. รดน้ำทุกวันสัปดาห์แรก 6. หลังจากนั้นรดน้ำวันเว้นวัน 
                  เราจะแนะนำการดูแลแบบละเอียดให้ทุกลูกค้า
                </p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  💳 ชำระเงินอย่างไร? มีเครดิตไหม?
                </h3>
                <p className="text-gray-600">
                  รับชำระเงินสด, โอนเงิน, เช็ค สำหรับลูกค้าองค์กรหรือโครงการใหญ่ 
                  สามารถเครดิต 30-60 วัน ได้ (ต้องผ่านการอนุมัติ) และออกใบกำกับภาษีได้
                </p>
              </div>
            </div>

            {/* CTA in FAQ */}
            <div className="text-center mt-12">
              <div className="bg-green-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  ยังมีคำถามอื่นๆ อีกไหม?
                </h3>
                <p className="text-gray-600 mb-6">
                  ทีมผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษาฟรี 24/7
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">
                    โทร 089-xxx-xxxx
                  </button>
                  <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-colors">
                    Line: @abunggarden
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F3EB' }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              พร้อมทำให้พื้นที่ของคุณสวยงามแล้วหรือยัง?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              เริ่มต้นด้วยการปรึกษาฟรี เราจะช่วยคุณเลือกหญ้าและวางแผนที่เหมาะสมที่สุด
            </p>
            
            <div className="bg-white rounded-3xl p-8 shadow-xl mb-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">📞</div>
                  <div className="font-bold text-gray-800">โทรปรึกษา</div>
                  <div className="text-green-600">089-xxx-xxxx</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">💬</div>
                  <div className="font-bold text-gray-800">Line Chat</div>
                  <div className="text-green-600">@abunggarden</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">📍</div>
                  <div className="font-bold text-gray-800">เข้าชมไร่</div>
                  <div className="text-green-600">นัดหมายล่วงหน้า</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-green-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-green-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                ปรึกษาฟรีเลย
              </button>
              <button className="border-3 border-green-600 text-green-600 px-12 py-4 rounded-full font-bold text-lg hover:bg-green-600 hover:text-white transition-all">
                ดูแคตตาล็อก
              </button>
            </div>

            <div className="mt-8 text-gray-500">
              <p>🎁 ปรึกษาฟรี • 🚚 ส่งทั่วประเทศ • 🛡️ รับประกันคุณภาพ • ⭐ บริการหลังการขาย</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">อ</span>
                </div>
                <span className="text-xl font-bold">อาบังการ์เด้น</span>
              </div>
              <p className="text-gray-400 mb-4">
                ไร่หญ้าคุณภาพ บริการครบวงจร เชื่อถือได้มากกว่า 10 ปี
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <span className="text-sm">FB</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <span className="text-sm">IG</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <span className="text-sm">LINE</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">สินค้า</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer">หญ้านวลน้อย</li>
                <li className="hover:text-white cursor-pointer">หญ้ามาเลเซีย</li>
                <li className="hover:text-white cursor-pointer">หญ้าไทเป</li>
                <li className="hover:text-white cursor-pointer">หญ้าพาสพาลัม</li>
                <li className="hover:text-white cursor-pointer">หญ้าญี่ปุ่น</li>
                <li className="hover:text-white cursor-pointer">หญ้าเบอร์มิวด้า</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">บริการ</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer">จัดสวนบ้าน</li>
                <li className="hover:text-white cursor-pointer">สวนหิน</li>
                <li className="hover:text-white cursor-pointer">จัดหาต้นไม้</li>
                <li className="hover:text-white cursor-pointer">ติดตั้งระบบรดน้ำ</li>
                <li className="hover:text-white cursor-pointer">บำรุงรักษาสวน</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">ติดต่อเรา</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <span>📞</span>
                  <span>089-xxx-xxxx</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📧</span>
                  <span>info@abunggarden.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>📍</span>
                  <span>123 หมู่ 5 ต.xxx อ.xxx จ.xxx 12345</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🕒</span>
                  <span>เปิด 6:00-18:00 ทุกวัน</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 อาบังการ์เด้น. สงวนลิขสิทธิ์.</p>
          </div>
        </div>
      </footer>
    

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
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
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