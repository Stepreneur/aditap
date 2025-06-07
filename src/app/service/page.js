"use client"
import 'aos/dist/aos.css';
import AOS from 'aos';
import React, { useState, useEffect } from 'react';
import {
  Phone, MessageCircle, Truck, Scissors, Package, TreePine, MapPin, Star, Leaf,
  Users, Award, Clock, CheckCircle, ArrowRight, Shield, Heart, Target, Camera
} from 'lucide-react';
import Image from 'next/image';

const ServicesProductsDetail = () => {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('services');

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true, mirror: false });
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const detailedServices = [
    {
      id: 'grass-selling',
      icon: <Leaf className="w-12 h-12" />,
      title: 'บริการขายหญ้าคุณภาพสูง',
      subtitle: 'หญ้าเกรดพรีเมี่ยม ส่งตรงจากแปลง',
      description: 'จำหน่ายหญ้าคุณภาพสูงหลากหลายชนิด เหมาะกับทุกการใช้งาน ตั้งแต่สนามหญ้าทั่วไป จนถึงสนามกอล์ฟระดับมาตรฐาน',
      image: '/img/allgrass.png',
      features: [
        'หญ้าคัดสรรคุณภาพสูง ตรวจสอบก่อนส่ง',
        'ส่งทั่วประเทศ มีเก็บปลายทาง',
        'ราคาโรงงาน ไม่ผ่านแม่ค้าคนกลาง',
        'รับประกันคุณภาพ หากไม่พอใจยินดีเปลี่ยน',
        'มีบริการปรึกษาการเลือกหญ้าฟรี',
        'จัดส่งเร็ว ภายใน 2-3 วันทั่วประเทศ'
      ],
      process: [
        { step: '1', title: 'สอบถามความต้องการ', desc: 'ปรึกษาประเภทหญ้าที่เหมาะสม' },
        { step: '2', title: 'คำนวณจำนวน', desc: 'วัดพื้นที่และคำนวณจำนวนที่ต้องใช้' },
        { step: '3', title: 'เสนอราคา', desc: 'เสนอราคาชัดเจน รวมค่าขนส่ง' },
        { step: '4', title: 'เตรียมสินค้า', desc: 'คัดสรรหญ้าคุณภาพก่อนจัดส่ง' },
        { step: '5', title: 'จัดส่ง', desc: 'ส่งถึงหน้าบ้าน พร้อมคำแนะนำการปลูก' }
      ],
      contact: 'สอบถามราคาและรายละเอียด'
    },
    {
      id: 'garden-design',
      icon: <Scissors className="w-12 h-12" />,
      title: 'จัดและตัดแต่งสวน',
      subtitle: 'งานจัดสวนครบวงจร โดยช่างมืออาชีพ',
      description: 'บริการจัดสวนแบบครบวงจร ตั้งแต่การออกแบบ ปลูกหญ้า ตัดแต่ง จนถึงการดูแลรักษา โดยทีมช่างที่มีประสบการณ์มากกว่า 10 ปี',
      image: '/img/garden.png',
      features: [
        'ออกแบบสวนตามความต้องการลูกค้า',
        'ช่างมืออาชีพ ประสบการณ์กว่า 10 ปี',
        'ใช้อุปกรณ์และเครื่องมือครบครัน',
        'รับประกันงาน 6 เดือน',
        'บริการหลังการขาย ดูแลต่อเนื่อง',
        'ราคาเป็นกันเอง เจรจาได้'
      ],
      process: [
        { step: '1', title: 'สำรวจพื้นที่', desc: 'นัดหมายไปดูพื้นที่จริงฟรี' },
        { step: '2', title: 'วางแผนออกแบบ', desc: 'เสนอแบบและแผนการจัดสวน' },
        { step: '3', title: 'เสนอราคา', desc: 'ใบเสนอราคาชัดเจน แยกรายการ' },
        { step: '4', title: 'เริ่มงาน', desc: 'ทำงานตามแผนที่กำหนด' },
        { step: '5', title: 'ส่งมอบงาน', desc: 'ตรวจสอบงานให้สมบูรณ์' }
      ],
      contact: 'ปรึกษาการจัดสวนฟรี'
    },
    {
      id: 'tree-sourcing',
      icon: <TreePine className="w-12 h-12" />,
      title: 'จัดหาต้นไม้',
      subtitle: 'คัดสรรต้นไม้คุณภาพ ทุกชนิด ทุกขนาด',
      description: 'บริการจัดหาต้นไม้หายาก ต้นไม้มงคล และต้นไม้ตัดแต่งทุกชนิด จากแหล่งที่เชื่อถือได้ พร้อมการดูแลขนส่งอย่างปลอดภัย',
      image: '/img/tree.png',
      features: [
        'จัดหาต้นไม้ทุกชนิด รวมถึงต้นไม้หายาก',
        'คัดสรรจากแปลงที่มีคุณภาพ',
        'มีต้นไม้มงคล ช้อนเงินช้อนทอง',
        'บริการขนย้ายและปลูกต้นไม้',
        'ให้คำปรึกษาการดูแลรักษา',
        'รับประกันต้นไม้มีชีวิต 1 เดือน'
      ],
      process: [
        { step: '1', title: 'รับคำสั่ง', desc: 'บอกประเภทและขนาดต้นไม้ที่ต้องการ' },
        { step: '2', title: 'ค้นหาต้นไม้', desc: 'หาต้นไม้ที่ตรงตามความต้องการ' },
        { step: '3', title: 'ส่งภาพยืนยัน', desc: 'ส่งภาพต้นไม้ให้ดูก่อนซื้อ' },
        { step: '4', title: 'ขนส่ง', desc: 'ขนส่งอย่างปลอดภัย' },
        { step: '5', title: 'บริการปลูก', desc: 'ปลูกและดูแลเบื้องต้น' }
      ],
      contact: 'สั่งจองต้นไม้'
    }
  ];

  const grassProducts = [
    {
      id: 'nuan-noy',
      name: 'หญ้านวลน้อย',
      scientificName: 'Zoysia matrella',
      description: 'หญ้าคุณภาพสูงที่ได้รับความนิยมมากที่สุดในประเทศไทย เหมาะสำหรับสนามหญ้าทั่วไป ทนแล้ง ทนเหยียบย่ำ และดูแลง่าย',
      image: '/product/nuannoy.jpg',
      price: 'เริ่มต้น 8-12 บาท/ตร.ม.',
      features: [
        'ทนแล้งและทนร้อนได้ดีเยี่ยม',
        'ทนการเหยียบย่ำและการใช้งานหนัก',
        'เจริญเติบโตช้า ตัดแต่งไม่บ่อย',
        'ใบหญ้าเล็กและนุ่ม สีเขียวสวย',
        'ปรับตัวได้ดีกับดินทุกประเภท',
        'ต้องการน้ำน้อย ประหยัดค่าน้ำ'
      ],
      suitableFor: [
        'สนามหญ้าหน้าบ้าน',
        'สวนสาธารณะ',
        'สนามเด็กเล่น',
        'รีสอร์ท โรงแรม',
        'อาคารสำนักงาน'
      ],
      maintenance: [
        'รดน้ำ 2-3 ครั้งต่อสัปดาห์',
        'ตัดหญ้า 2-3 สัปดาห์ครั้ง',
        'ใส่ปุ่ย 2-3 เดือนครั้ง',
        'กำจัดวัชพืชเป็นระยะ'
      ]
    },
    {
      id: 'japanese-grass',
      name: 'หญ้าญี่ปุ่น',
      scientificName: 'Zoysia japonica',
      description: 'หญ้าเกรดพรีเมี่ยมที่มีความนุ่มและสีเขียวสวยงาม เหมาะสำหรับสนามกอล์ฟและพื้นที่ที่ต้องการความสวยงามสูง',
      image: '/product/japan.jpg',
      price: 'เริ่มต้น 15-20 บาท/ตร.ม.',
      features: [
        'ใบหญ้านุ่มและละเอียด เกรดพรีเมี่ยม',
        'สีเขียวสวยงาม ดูหรูหรา',
        'ทนการเหยียบย่ำปานกลาง',
        'เจริญเติบโตช้า รูปทรงสวย',
        'ต้องการการดูแลพิเศษ',
        'ให้ความรู้สึกนุ่มสบายเท้า'
      ],
      suitableFor: [
        'สนามกอล์ฟ',
        'บ้านหรู วิลล่า',
        'โรงแรม 5 ดาว',
        'คลับเฮาส์',
        'งานแต่งงาน งานเลี้ยง'
      ],
      maintenance: [
        'รดน้ำสม่ำเสมอ ไม่ให้แห้ง',
        'ตัดหญ้าสัปดาห์ละครั้ง',
        'ใส่ปุ่ยเดือนละครั้ง',
        'ดูแลป้องกันโรคพืช'
      ]
    },
    {
      id: 'malaysian-grass',
      name: 'หญ้ามาเลเซีย',
      scientificName: 'Axonopus compressus',
      description: 'หญ้าใบหนาที่ทนร้อนและทนแล้งได้ดีเยี่ยม เหมาะสำหรับภูมิอากาศเมืองไทย สามารถปลูกในแดดจัดได้ดี',
      image: '/product/malaysia.jpg',
      price: 'เริ่มต้น 10-15 บาท/ตร.ม.',
      features: [
        'ทนร้อนและแล้งได้ดีที่สุด',
        'ใบหญ้าหนา ทนทานแข็งแรง',
        'ปลูกในแดดจัดได้ไม่เป็นไร',
        'เจริญเติบโตเร็ว คลุมดินเร็ว',
        'ต้องการน้ำน้อย ประหยัด',
        'เหมาะกับพื้นที่กว้าง'
      ],
      suitableFor: [
        'สนามฟุตบอล',
        'สนามกีฬา',
        'พื้นที่โล่ง ลานจอดรถ',
        'โรงงาน อุตสาหกรรม',
        'พื้นที่ริมถนน'
      ],
      maintenance: [
        'รดน้ำ 1-2 ครั้งต่อสัปดาห์',
        'ตัดหญ้าสัปดาห์ละครั้ง',
        'ใส่ปุ่ย 3-4 เดือนครั้ง',
        'กำจัดวัชพืชตามต้องการ'
      ]
    },
    {
      id: 'paspalum-grass',
      name: 'หญ้าพลาสพาลั่ม',
      scientificName: 'Paspalum vaginatum',
      description: 'หญ้าใบแคบที่ทนแล้งได้ดีมาก เหมาะสำหรับพื้นที่ที่มีน้ำน้อย หรือพื้นที่แห้งแล้ง ดูแลรักษาง่าย',
      image: '/product/plaspalum.jpg',
      price: 'เริ่มต้น 12-18 บาท/ตร.ม.',
      features: [
        'ทนแล้งสุดขั้ว อยู่ได้โดยไม่ต้องรดน้ำนาน',
        'ใบหญ้าแคบ ดูเป็นธรรมชาติ',
        'ทนเค็มได้ ปลูกใกล้ทะเลได้',
        'เจริญเติบโตปานกลาง',
        'ต้องการการดูแลน้อยที่สุด',
        'ประหยัดค่าใช้จ่ายในการดูแล'
      ],
      suitableFor: [
        'พื้นที่แห้งแล้ง',
        'ชายฝั่งทะเล',
        'สนามกอล์ฟชายทะเล',
        'ที่พักตากอากาศ',
        'พื้นที่ประหยัดน้ำ'
      ],
      maintenance: [
        'รดน้ำเป็นครั้งคราว หรือพึ่งน้ำฝน',
        'ตัดหญ้า 2-3 สัปดาห์ครั้ง',
        'ใส่ปุ่ย 4-6 เดือนครั้ง',
        'เพียงกำจัดวัชพืช'
      ]
    },
    {
      id: 'bermuda-grass',
      name: 'หญ้าเมอร์บิวด้า',
      scientificName: 'Cynodon dactylon',
      description: 'หญ้าที่ทนทานและเจริญเติบโตเร็วที่สุด เหมาะสำหรับสนามกีฬาที่ต้องการการฟื้นตัวเร็วหลังการใช้งานหนัก',
      image: '/product/bermuda.jpg',
      price: 'เริ่มต้น 10-16 บาท/ตร.ม.',
      features: [
        'เจริญเติบโตและฟื้นตัวเร็วที่สุด',
        'ทนการเหยียบย่ำหนักมาก',
        'แพร่กระจายเร็ว คลุมดินเร็ว',
        'ทนทานต่อสภาพอากาศแปรปรวน',
        'ต้องการแสงแดดเต็มที่',
        'เหมาะกับการใช้งานหนัก'
      ],
      suitableFor: [
        'สนามฟุตบอลมืออาชีพ',
        'สนามเทนนิส',
        'สนามกีฬาทุกประเภท',
        'สวนสาธารณะที่มีคนใช้เยอะ',
        'พื้นที่สันทนาการ'
      ],
      maintenance: [
        'รดน้ำทุกวันในช่วงแรก',
        'ตัดหญ้าสัปดาห์ละ 1-2 ครั้ง',
        'ใส่ปุ่ยเดือนละครั้ง',
        'ดูแลการแพร่กระจาย'
      ]
    },
    {
      id: 'taipei-grass',
      name: 'หญ้าไทเปย์',
      scientificName: 'Zoysia tenuifolia',
      description: 'หญ้าใบเล็กที่มีสีเขียวเข้มสวยงาม เหมาะสำหรับการตกแต่งและงานแลนด์สเคป ให้ความรู้สึกหรูหราและเป็นธรรมชาติ',
      image: '/product/thaipay.jpg',
      price: 'เริ่มต้น 18-25 บาท/ตร.ม.',
      features: [
        'ใบหญ้าเล็กและละเอียดที่สุด',
        'สีเขียวเข้มสวยงามตลอดปี',
        'เหมาะสำหรับงานตกแต่ง',
        'ทนร่มได้ดีกว่าหญ้าชนิดอื่น',
        'เจริญเติบโตช้า รูปทรงสม่ำเสมอ',
        'ให้ความรู้สึกหรูหราและเป็นธรรมชาติ'
      ],
      suitableFor: [
        'สวนญี่ปุ่น',
        'งานแลนด์สเคป',
        'การตกแต่งรอบสระน้ำ',
        'สวนหย่อมในบ้าน',
        'พื้นที่ร่มๆ ใต้ต้นไม้'
      ],
      maintenance: [
        'รดน้ำสม่ำเสมอ ไม่ให้แห้ง',
        'ตัดหญ้า 2-3 สัปดาห์ครั้ง',
        'ใส่ปุ่ยเดือนละครั้ง',
        'ดูแลรูปทรงให้สวยงาม'
      ]
    }
  ];

  const additionalServices = [
    {
      title: 'บริการส่งและติดตั้ง',
      icon: <Truck className="w-8 h-8" />,
      details: [
        'จัดส่งทั่วประเทศ ภายใน 2-3 วัน',
        'มีบริการเก็บปลายทาง',
        'ทีมช่างติดตั้งมืออาชีพ',
        'รับประกันการติดตั้ง'
      ]
    },
    {
      title: 'การรับประกัน',
      icon: <Shield className="w-8 h-8" />,
      details: [
        'รับประกันคุณภาพหญ้า 30 วัน',
        'รับประกันงานติดตั้ง 6 เดือน',
        'บริการเปลี่ยนหญ้าหากไม่พอใจ',
        'ดูแลหลังการขายตลอดชีพ'
      ]
    },
    {
      title: 'คำปรึกษาฟรี',
      icon: <Heart className="w-8 h-8" />,
      details: [
        'ปรึกษาการเลือกหญ้าฟรี',
        'คำนวณจำนวนหญ้าที่ต้องใช้',
        'แนะนำการดูแลรักษา',
        'ติดตามผลหลังการปลูก'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-green-900">
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

      <header className="pt-28 pb-16 bg-black/90 text-white text-center relative">
          <div 
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{ backgroundImage: "url('/img/revhero.jpg')" }}
        />
        <h1 className="text-4xl font-bold mb-2">บริการและสินค้าของเรา</h1>
        <p className="text-lg">ครบจบในที่เดียว เพื่อสวนสวยของคุณ</p>
      </header>

      <section id="services" className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">บริการของเรา</h2>
        <div className="space-y-20">
          {detailedServices.map(service => (
            <div key={service.id} className="grid md:grid-cols-2 gap-10 items-center" data-aos="fade-up">
              <Image src={service.image} alt={service.title} width={600} height={400} className="rounded-2xl shadow-lg" />
              <div>
                <div className="flex items-center gap-4 mb-2">{service.icon}<h3 className="text-2xl font-bold">{service.title}</h3></div>
                <p className="text-green-700 italic mb-2">{service.subtitle}</p>
                <p className="mb-4">{service.description}</p>
                <ul className="list-disc list-inside space-y-1 text-green-800">
                  {service.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">ขั้นตอนบริการ:</h4>
                  <ol className="list-decimal list-inside space-y-1">
                    {service.process.map((p, i) => (
                      <li key={i}><span className="font-semibold">{p.title}</span>: {p.desc}</li>
                    ))}
                  </ol>
                </div>
                <div className="mt-4 text-green-900 font-bold">📞 {service.contact}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="bg-green-50 py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-green-900">ประเภทหญ้าที่จำหน่าย</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {grassProducts.map(grass => (
            <div key={grass.id} className="bg-white shadow-md rounded-2xl p-4" data-aos="zoom-in">
              <Image src={grass.image} alt={grass.name} width={400} height={300} className="rounded-xl mb-4" />
              <h3 className="text-xl font-bold text-green-800">{grass.name}</h3>
              <p className="italic text-sm text-green-600 mb-1">{grass.scientificName}</p>
              <p className="mb-2 text-sm text-gray-700">{grass.description}</p>
              <p className="font-semibold text-green-900 mb-2">💰 {grass.price}</p>
              <ul className="text-sm list-disc list-inside mb-2">
                {grass.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              <div className="mt-2">
                <p className="font-semibold">เหมาะสำหรับ:</p>
                <ul className="list-disc list-inside text-sm text-green-700">
                  {grass.suitableFor.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
              <div className="mt-2">
                <p className="font-semibold">วิธีดูแล:</p>
                <ul className="list-disc list-inside text-sm text-green-700">
                  {grass.maintenance.map((m, i) => <li key={i}>{m}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-900">บริการเพิ่มเติม</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {additionalServices.map((service, i) => (
            <div key={i} className="bg-green-100 rounded-xl p-6 shadow" data-aos="fade-up">
              <div className="flex items-center gap-3 mb-2 text-green-800">{service.icon}<h3 className="font-semibold text-lg">{service.title}</h3></div>
              <ul className="list-disc list-inside text-sm text-green-700">
                {service.details.map((d, idx) => <li key={idx}>{d}</li>)}
              </ul>
            </div>
          ))}
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

      <footer className="bg-green-950 text-white text-center py-6 mt-10">
        <p>© {new Date().getFullYear()} ไร่หญ้าอะดิแท็ป. สงวนลิขสิทธิ์.</p>
      </footer>
    </div>
  );
};

export default ServicesProductsDetail;