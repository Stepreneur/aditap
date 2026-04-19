"use client"
import 'aos/dist/aos.css';
import AOS from 'aos';
import React, { useState, useEffect } from 'react';
import { ChevronRight , Mountain } from 'lucide-react'
import {
  Phone, MessageCircle, Truck, Scissors, Package, TreePine, MapPin, Star, Leaf,
  Users, Award, Clock, CheckCircle, ArrowRight, Shield, Heart, Target, Camera
} from 'lucide-react';
import Image from 'next/image';
  import Product from "@/compo/Product/page";
  import Service from "@/compo/Service/page";
  import Navbar from "@/compo/Navbar/page"
import Line from '@/compo/Line/page';
import Contact from '@/compo/Contact/page';
  import Link from 'next/link'


const ServicesProductsDetail = () => {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('services');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({ duration: 800, easing: 'ease-in-out', once: true, mirror: false });
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

const detailedServices = [
    {
      id: 'grass',
      icon: <Leaf className="w-12 h-12" />,
      title: 'บริการขายหญ้าคุณภาพสูง',
      subtitle: 'หญ้าเกรดพรีเมี่ยม ส่งตรงจากแปลง',
      price: 'เริ่มต้น 14 บาท/ต.ร.ม.',
      description: 'จำหน่ายหญ้าคุณภาพสูงหลากหลายชนิด เหมาะกับทุกการใช้งาน ตั้งแต่สนามหญ้าทั่วไป จนถึงสนามกอล์ฟระดับมาตรฐาน',
      image: '/service/sellgrass.png',
      features: [
        'หญ้าคัดสรรคุณภาพสูง ตรวจสอบก่อนส่ง',
        'ส่งทั่วประเทศ มีเก็บปลายทาง',
        'ราคาโรงงาน ไม่ผ่านแม่ค้าคนกลาง',
        'มีบริการปรึกษาการเลือกหญ้าฟรี'
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
      id: 'garden',
      icon: <Scissors className="w-12 h-12" />,
      title: 'จัดและตัดแต่งสวน',
      price: 'เริ่มต้น 5000 บาท',
      subtitle: 'งานจัดสวนครบวงจร โดยช่างมืออาชีพ',
      description: 'บริการจัดสวนแบบครบวงจร ตั้งแต่การออกแบบ ปลูกหญ้า ตัดแต่ง จนถึงการดูแลรักษา โดยทีมช่างที่มีประสบการณ์มากกว่า 10 ปี',
      image: '/service/poograss.png',
      features: [
        'ออกแบบสวนตามความต้องการลูกค้า',
        'ช่างมืออาชีพ ประสบการณ์กว่า 10 ปี',
        'ใช้อุปกรณ์และเครื่องมือครบครัน',
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
      id: 'tree',
      icon: <TreePine className="w-12 h-12" />,
      title: 'จัดหาต้นไม้',
      price: 'เริ่มต้น 1000 บาท',
      subtitle: 'คัดสรรต้นไม้คุณภาพ ทุกชนิด ทุกขนาด',
      description: 'บริการจัดหาต้นไม้หายาก ต้นไม้มงคล และต้นไม้ตัดแต่งทุกชนิด จากแหล่งที่เชื่อถือได้ พร้อมการดูแลขนส่งอย่างปลอดภัย',
      image: '/service/findtree.png',
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
    },
    {
    id: 'rock',
    price: 'เริ่มต้น 5000 บาท',
    icon: <Mountain className="w-12 h-12" />,
    title: 'จัดสวนหิน',
    subtitle: 'สวนหินสไตล์ญี่ปุ่นและโมเดิร์น',
    description:'บริการจัดสวนหินสำหรับบ้านและสำนักงาน ออกแบบโดยผู้เชี่ยวชาญ  พร้อมจัดวางหิน พืชพรรณ และองค์ประกอบตกแต่งอย่างลงตัว',
    image: '/service/rock.png', // อย่าลืมใส่รูปหรือสร้างรูปนี้
    features: [
      'ออกแบบสวนหินตามพื้นที่และงบประมาณ',
      'เลือกใช้หินแท้และพืชที่ดูแลง่าย',
      'สไตล์หลากหลาย เช่น ญี่ปุ่น มินิมอล โมเดิร์น',
      'ทีมช่างมืออาชีพ จัดวางอย่างปราณีต',
      'ดูแลความสะอาดและความเรียบร้อยหลังจบงาน',
      'ให้คำแนะนำการดูแลรักษาหลังติดตั้ง'
    ],
    process: [
      { step: '1', title: 'รับฟังความต้องการ', desc: 'สอบถามแนวทางหรือสไตล์ที่ลูกค้าชอบ' },
      { step: '2', title: 'สำรวจพื้นที่', desc: 'เข้าดูหน้างานเพื่อประเมินการออกแบบ' },
      { step: '3', title: 'ออกแบบสวน', desc: 'นำเสนอแบบจำลองก่อนเริ่มงานจริง' },
      { step: '4', title: 'จัดวางหินและองค์ประกอบ', desc: 'ลงพื้นที่จัดสวนตามแบบที่ตกลง' },
      { step: '5', title: 'ตรวจรับและแนะนำดูแล', desc: 'ส่งมอบงานพร้อมคำแนะนำ' }
    ],
    contact: 'สอบถามจัดสวนหิน'
  }
  ];

  const grassProducts = [
    {
      id: 'nuannoy',
      name: 'หญ้านวลน้อย',
      scientificName: 'Zoysia matrella',
      description: 'หญ้าคุณภาพสูงที่ได้รับความนิยมมากที่สุดในประเทศไทย เหมาะสำหรับสนามหญ้าทั่วไป ทนแล้ง ทนเหยียบย่ำ และดูแลง่าย',
      image: '/product/nuannoy.jpg',
      price: 'เริ่มต้น 14 บาท/ตร.ม.',
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
      id: 'japan',
      name: 'หญ้าญี่ปุ่น',
      scientificName: 'Zoysia japonica',
      description: 'หญ้าเกรดพรีเมี่ยมที่มีความนุ่มและสีเขียวสวยงาม เหมาะสำหรับสนามกอล์ฟและพื้นที่ที่ต้องการความสวยงามสูง',
      image: '/product/japan.jpg',
      price: 'เริ่มต้น 15 บาท/ตร.ม.',
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
      id: 'malaysia',
      name: 'หญ้ามาเลเซีย',
      scientificName: 'Axonopus compressus',
      description: 'หญ้าใบหนาที่ทนร้อนและทนแล้งได้ดีเยี่ยม เหมาะสำหรับภูมิอากาศเมืองไทย สามารถปลูกในแดดจัดได้ดี',
      image: '/product/malaysia.jpg',
      price: 'เริ่มต้น 17 บาท/ตร.ม.',
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
      id: 'paspalum',
      name: 'หญ้าพลาสพาลั่ม',
      scientificName: 'Paspalum vaginatum',
      description: 'หญ้าใบแคบที่ทนแล้งได้ดีมาก เหมาะสำหรับพื้นที่ที่มีน้ำน้อย หรือพื้นที่แห้งแล้ง ดูแลรักษาง่าย',
      image: '/product/plaspalum.jpg',
      price: 'เริ่มต้น 16 บาท/ตร.ม.',
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
      id: 'bermuda',
      name: 'หญ้าเมอร์บิวด้า',
      scientificName: 'Cynodon dactylon',
      description: 'หญ้าที่ทนทานและเจริญเติบโตเร็วที่สุด เหมาะสำหรับสนามกีฬาที่ต้องการการฟื้นตัวเร็วหลังการใช้งานหนัก',
      image: '/product/bermuda.jpg',
      price: 'เริ่มต้น 32 บาท/ตร.ม.',
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
      id: 'thaipay',
      name: 'หญ้าไทเปย์',
      scientificName: 'Zoysia tenuifolia',
      description: 'หญ้าใบเล็กที่มีสีเขียวเข้มสวยงาม เหมาะสำหรับการตกแต่งและงานแลนด์สเคป ให้ความรู้สึกหรูหราและเป็นธรรมชาติ',
      image: '/product/thaipay.jpg',
      price: 'เริ่มต้น 90 บาท/กิโลกรัม',
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

 
  return (
    <div className="min-h-screen bg-white text-black overflow-y-hidden">
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
      <ChevronRight
        className="transform rotate-90 text-green-800"
        size={32}
        strokeWidth={2.5}
      />
    </div>
        <Navbar />

        

  
<div className='pt-10 relative'>

 <Product />
      <Service />
</div>

      <section id="detailed_services" className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-black">รายการบริการของเราอย่างละเอียด</h2>
        <div className="space-y-20">
          {detailedServices.map(service => (
            <div id={service.id} key={service.id} className="grid md:grid-cols-2 gap-10 items-center" data-aos="fade-up">
              <Image src={service.image} alt={service.title} width={600} height={400} className="rounded-2xl shadow-lg" />
              <div>
                <div className="flex items-center gap-4 mb-2">{service.icon}<h3 className="text-2xl font-bold">{service.title}</h3></div>
                <p className="text-green-700 italic mb-2">{service.subtitle}</p>
                <p className="mb-4 ">{service.description}</p>
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
                      <p className="font-semibold text-xl text-green-900  mt-2">💰 {service.price}</p>
                 <button className="w-full bg-green-800 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-green-700 transition-all duration-300 text-sm font-semibold mt-5">
                      <Link target="_blank" href="https://line.me/ti/p/guAbCz7twh" className="block">
                        สอบถาม
                      </Link>
                    </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="detailed_products" className=" py-12 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-black">ประเภทหญ้าที่จำหน่าย</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {grassProducts.map(grass => (
            <div id={grass.id} key={grass.id} className="bg-white shadow-md rounded-2xl p-4" data-aos="zoom-in">
              <Image src={grass.image} alt={grass.name} width={400} height={300} className="rounded-xl mb-4" />
              <h3 className="text-xl font-bold text-black">{grass.name}</h3>
              <p className="italic text-sm text-green-600 mb-1">{grass.scientificName}</p>
              <p className="mb-2 text-sm text-gray-700">{grass.description}</p>
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
               <p className="font-semibold text-xl text-green-900 mt-4">💰 {grass.price}</p>
               <button className="w-full bg-green-800 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-green-700 transition-all duration-300 text-sm font-semibold mt-3">
                      <Link target="_blank" href="https://line.me/ti/p/guAbCz7twh" className="block">
                        สอบถาม
                      </Link>
                    </button>
            </div>
            
          ))}
        </div>
      </section>

     <Contact />
      
      {/* Floating Contact Button */}
      <Line />

      
    </div>
  );
};

export default ServicesProductsDetail;