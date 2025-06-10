  // app/page.js
  'use client'
  import { ArrowRight , Leaf ,Layers,  Scissors , TreePine , ChevronDown, ChevronUp } from "lucide-react";
  import { useState, useEffect } from 'react'
  import Image from 'next/image'
  import Link from 'next/link'

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
      const handleScroll = () => {
        setScrolled(window.scrollY > 50)
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
      <div className="min-h-screen "  style={{ backgroundColor: '#F5F3EB' }}>
        {/* Navbar */}
        <nav style={{ backgroundColor: '#F5F3EB' }} className={` fixed w-full z-50 transition-all duration-300 ${
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
                  <span className="text-gray-800">
                  เรื่องหญ้าไ<span className="tracking-widest">ว้</span>ใจบัง บริการครบวงจร
                  </span>
                  <br />
                </h1>
                <p className="text-base sm:text-xl text-gray-600 mb-8 max-w-2xl">
                  ไร่หญ้าอาบัง ขายหญ้านวลน้อย , ไทเป , อื่นๆ รับงานทั่วประเทศ ส่งเร็ว มีของตลอด <br /> และบริการจัดสวนครบวงจร
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="bg-gradient-to-r from-green-700 via-lime-600 to-amber-800 text-white px-8 py-4 h-[60px] rounded-full font-semibold text-lg hover:bg-green-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
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

        {/* Products Section */}
      <section id="products" className="py-20 relative" style={{ backgroundColor: '#FFFFFF' }}>
    <div className="container mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-green-900 mb-7"><span className="text-4xl">🌿</span><span className="ml-4">หญ้าคุณภาพ หลากหลายสายพันธุ์</span></h2>
        <p className="text-4xl font-bold text-black ">
          สไลด์ข้างเพื่อเลือกดูหญ้า
        </p>
      </div>

      {/* สไลด์แนวนอน */}
      <div className="absolute top-5/9 right-0 sm:right-9 -translate-y-1/2 z-10 pointer-events-none animate-bounce">
      <ArrowRight className="w-8 h-8 text-gray-500 z-10" />
    </div>
      <div className="overflow-x-auto overflow-y-hidden w-[90%] mx-auto relative ">
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
              img: "/product/thaipay.jpg",
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
              className="w-80 shrink-0 bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:transform hover:scale-105"
            >
              <div className={`relative h-60 bg-gradient-to-br `}>
                <Image src = {grass.img} fill className="object-cover" />
              </div>
              <div className="p-6 h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{grass.name}</h3>
                <p className="text-gray-600 mb-4 text-lg">{grass.desc}</p>
                <div className="flex flex-col sm:flex-row gap-10 sm:gap-5     items-start">
                  <span className="text-xl font-bold text-green-800 sm:mt-1  ">{grass.price}</span>
                  <button className="bg-white border border-green-900 text-green-900 px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:brightness-105 hover:bg-green-900 hover:text-white transition-all duration-300 text-sm font-semibold">
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
<section id="services" className="py-20 bg-white relative">
  <div className="container mx-auto px-4">
    <div className="text-center mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-7">
        <span className="text-4xl">🏡</span>
        <span className="ml-4">บริการครบวงจร</span>
      </h2>
      <p className="text-4xl font-bold text-black">
        สไลด์ข้างเพื่อเลือกดูบริการ
      </p>
    </div>

    {/* Arrow indicator */}
    <div className="absolute top-5/9 right-0 sm:right-9 -translate-y-1/2 z-10 pointer-events-none animate-bounce">
      <ArrowRight className="w-8 h-8 text-gray-500 z-10" />
    </div>

    {/* Horizontal scroll container */}
    <div className="overflow-x-auto overflow-y-hidden w-[90%] mx-auto relative">
      <div className="flex gap-10 w-full pt-8 pb-10">
        <div className="w-[20px]"></div>

        {[
          {
            name: "จัดสวน , ปูสนาม",
            desc: "ออกแบบและจัดสวนบ้านให้สวยงาม เหมาะกับไลฟ์สไตล์และงบประมาณของคุณ",
            price: "ปรึกษาเพื่อทราบราคา",
            icon: <Scissors className="w-7 h-7 inline-block mr-2" />,
            img: "/service/poograss.png",
            buttonBg: "bg-white text-black border border-black hover:text-white hover:bg-black",
            features: [
              "• แนะนำหญ้าให้เหมาะสมกับสถานที",
              "• รับติดตั้งสปริงเกอร์ pop up",
              "• แนะนำเกี่ยวกับดูแลหญ้า",
              "• ปรึกษาได้ตลอดเวลา"
            ]
          },
          {
            name: "สวนหิน",
            icon: <Layers className="w-7 h-7 inline-block mr-3" />,
            desc: "สร้างสวนหินสไตล์ญี่ปุ่น หรือสไตล์โมเดิร์น ดูแลง่าย สวยงามตลอดปี",
            price: "ปรึกษาเพื่อทราบราคา",
            img: "/service/rock.png",
            gradient: "from-gray-50 to-gray-100",
            iconBg: "bg-gray-600 group-hover:bg-gray-700",
            buttonBg: "bg-white text-black border border-black hover:text-white hover:bg-black",
            features: [
              "• หินคุณภาพนำเข้า",
              "• ออกแบบตามพื้นที่",
              "• จัดวางอย่างมืออาชีพ",
              "• พร้อมไฟประดับสวน"
            ]
          },
          {
            name: "จัดหาต้นไม้",
            icon: <TreePine className="w-8 h-8 inline-block mr-2" />,
            desc: "มีต้นไม้หลากหลายชนิด ทั้งต้นไม้ประดับ ต้นไม้ใหญ่ และไผ่สวน",
            price: "ปรึกษาเพื่อทราบราคา",
            img: "/service/findtree.png",
            gradient: "from-emerald-50 to-emerald-100",
            iconBg: "bg-emerald-600 group-hover:bg-emerald-700",
            buttonBg: "bg-white text-black border border-black hover:text-white hover:bg-black",
            features: [
              "• ต้นไม้สวยงาม คัดเลือกมาแล้ว",
              "• ขนส่งและปลูกให้",
              "• คำแนะนำการดูแล",
              "• รับประกันต้นไม้"
            ]
          },
          {
            name: "ขายหญ้า",
            desc: "จำหน่ายหญ้าหลากหลายพันธุ์ เช่น หญ้านวลน้อย หญ้ามาเลเซีย พร้อมจัดส่ง",
            price: "เริ่มต้น ฿14 ต่อ ตร.ม.",
            icon: <Leaf className="w-8 h-8 inline-block mr-3" />,
            img: "/service/sellgrass.png",
            gradient: "from-yellow-50 to-yellow-100",
            iconBg: "bg-yellow-600 group-hover:bg-yellow-700",
            buttonBg: "bg-white text-black border border-black hover:text-white hover:bg-black",
            features: [
              "• หญ้าคุณภาพจากแหล่งเพาะปลูกโดยตรง",
              "• คัดเกรดพรีเมียม ส่งตรงถึงหน้างาน",
              "• มีบริการจัดส่งทั่วประเทศ",
              "• ให้คำแนะนำการปูและดูแล"
            ]
          }

      
        ].map((service, index) => (
          <div
            key={index}
            className="w-80 shrink-0 group"
          >
            <div className={`bg-gradient-to-br bg-white  shadow-xl rounded-2xl p-8 h-full hover:shadow-2xl transition-all group-hover:transform group-hover:scale-105`}>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.icon}<span>{service.name}</span></h3>
               <div className={`w-full  h-30 ${service.iconBg} rounded-2xl relative mb-10`}>
                <Image alt="grass image" className="object-cover rounded-xl" src = {service.img} fill />
              </div>
              <p className="text-gray-600 mb-6 text-lg">{service.desc}</p>
              <ul className="text-gray-600 space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <span className="text-xl font-bold text-gray-800">{service.price}</span>
                <button className={` w-full ${service.buttonBg} py-3 rounded-full font-semibold transition-colors`}>
                  สอบถาม <ArrowRight className="w-5 h-5 inline-block"/>
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="w-[500px]">d</div>
      </div>
    </div>
  </div>
</section>
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
  <a data-aos="zoom-in"
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
  </a>
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
<section id="contact" className="relative py-20 bg-white">
  <div className="container mx-auto px-6 sm:px-12 lg:px-24">
    <div className="text-center mb-12">
      <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">ติดต่อเรา</h2>
      <p className="text-gray-600 text-lg">
        สอบถาม บริการสั่งซื้อ ปรึกษาจัดสวน ครบจบในที่เดียว
      </p>
    </div>

    <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
      {/* ปุ่มโทร */}
      <a
        href="tel:0801234567"
        className="bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transform transition-all"
      >
        📞 โทรหาเราเลย
      </a>

      {/* ปุ่มดูแผนที่ */}
      <a
        href="https://maps.google.com/?q=ร้านของคุณ" // เปลี่ยนลิงก์ให้เป็นพิกัดหรือชื่อร้านจริง
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 transition"
      >
        📍 ดูแผนที่ร้าน
      </a>

      {/* โซเชียลมีเดีย */}
      <div className="flex gap-4 items-center flex-wrap justify-center">
        {/* ใช้กล่องพื้นหลังให้ไอคอนเป็นปุ่ม */}
        {[
          { href: "https://line.me/ti/p/~yourlineid", src: "/img/1.webp", alt: "Line" },
          { href: "https://www.facebook.com/yourprofile", src: "/img/facebook.webp", alt: "Facebook" },
          { href: "https://www.tiktok.com/@yourprofile", src: "/img/tiktok.webp", alt: "TikTok" },
          { href: "https://www.instagram.com/yourprofile", src: "/img/ig.svg", alt: "Instagram" },
        ].map(({ href, src, alt }) => (
          <a
            key={alt}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-gray-100 rounded-full shadow-md flex items-center justify-center hover:scale-110 transition transform"
          >
            <Image
              src={src}
              alt={alt}
              width={32}
              height={32}
              className="object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  </div>
  <div className="h-[100px]"></div>
</section>


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