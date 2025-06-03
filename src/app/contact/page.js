'use client';
import { useState, useEffect } from 'react';
import { Phone, Clock4, MapPin } from 'lucide-react';
import Image from 'next/image';

const ContactSection = () => {
     const [scrollY, setScrollY] = useState(0);
      const [activeSection, setActiveSection] = useState('home');
    
      useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
  const contactChannels = [
    {
      platform: 'โทรศัพท์',
      icon: <Phone className="w-8 h-8 text-green-600" />, // ปรับสีให้ contrast
      contact: '080-173-8530',
      link: 'tel:0801738530',
    },
    {
      platform: 'LINE',
      icon: <img src="/img/line.webp" alt="Line" className="w-8 h-8" />,
      contact: 'ID : jirayut6812',
      link: 'https://line.me/ti/p/zSV34qgq4u',
    },
    {
    platform: 'Google Maps',
    icon: <MapPin className="w-8 h-8 text-green-600" />,
    contact: 'ไร่หญ้าสมสมัยการ์เด้น',
    link: 'https://maps.app.goo.gl/EdEMJGsuBW4GNTQS6', // เปลี่ยนพิกัดตามจริงได้เลย
    },
    {
      platform: 'Facebook',
      icon: <img src="/img/facebook.webp" alt="Facebook" className="w-8 h-8" />,
      contact: 'ไร่หญ้าสมสมัยการ์เด้น.com ',
      link: 'https://www.facebook.com/share/15yK1jepgU/',
    },
    {
      platform: 'TikTok',
      icon: <img src="/img/tiktok.webp" alt="TikTok" className="w-8 h-8" />,
      contact: 'jirayut6112546',
      link: 'https://www.tiktok.com/@jirayut6112546?_t=ZS-8wrp3jqXqUb&_r=1',
    },
  ];

  const businessHours = [
    {
      day: 'จันทร์ – อาทิตย์',
      hours: '24 ชม.',
    }
  ];

  const serviceAreas = [
    'ทั่วประเทศ'
  ];

  return (
    <section className="relative bg-black text-gray-100 overflow-hidden">
        <nav
  className={`fixed w-full z-50 transition-all duration-300 ${
    scrollY > 680
      ? 'bg-green-950/90 backdrop-blur-sm shadow-md border-b border-green-700'
      : 'bg-transparent'
  }`}
>
 <div className="max-w-6xl mx-auto px-4 py-4 flex justify-items-center">
  <div className="flex justify-between items-center mx-auto">
    <div className="flex space-x-8">
      {[
        { label: 'หน้าแรก', href: '/home' },
        { label: '|', isDivider: true },
        { label: 'บริการ', href: '/home#services' },
        { label: '|', isDivider: true },
        { label: 'สินค้า', href: '/home#products' },
        { label: '|', isDivider: true },
        { label: 'ผลงาน', href: '/portfolio' },
        { label: '|', isDivider: true },
        { label: 'ติดต่อ', href: '/contact' },
      ].map((item, index) =>
        item.isDivider ? (
          <span key={index} className="text-white select-none pointer-events-none">|</span>
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
  </div>
</div>

</nav>
      {/* Background Image */}
      <Image
        src="/img/contacthero.jpg"
        alt="ภาพหลัก"
        fill
        className="object-cover opacity-30"
        quality={100}
        priority
      />

      <div className="relative container mx-auto px-6 lg:px-12 max-w-7xl mt-40 mb-30">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-white">ติดต่อเรา</h2>

        {/* ช่องทางการติดต่อ */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {contactChannels.map((channel, index) => (
            <a
              key={index}
              href={channel.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-white bg-black/20 "
            >
              <div>{channel.icon}</div>
              <div>
                <div className="font-bold text-white">{channel.platform}</div>
                <div className="text-green-400">{channel.contact}</div>
              </div>
            </a>
          ))}
        </div>

        {/* เวลาทำการ และพื้นที่ให้บริการ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold flex items-center gap-2 mb-4 text-white">
              <Clock4 className="w-6 h-6 text-green-400" />
              เวลาทำการ
            </h3>
            <ul>
              {businessHours.map((time, index) => (
                <li key={index} className="mb-2 flex justify-between border-b pb-2 border-gray-600">
                  <span>{time.day}</span>
                  <span className="text-green-400">{time.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold flex items-center gap-2 mb-4 text-white">
              <MapPin className="w-6 h-6 text-green-400" />
              พื้นที่ให้บริการ
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {serviceAreas.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="tel:0801738530"
            className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="w-5 h-5 mr-2" />
            โทรเลย
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
