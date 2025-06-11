  import { ArrowRight , Leaf ,Layers,  Scissors , TreePine , ChevronDown, ChevronUp } from "lucide-react";
  import { useState, useEffect } from 'react'
  import Image from 'next/image'
  import Link from 'next/link'

export default function Service() {
  return <div>
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
            id : "service#garden",
            name: "จัดสวน , ปูสนาม",
            desc: "ออกแบบและจัดสวนบ้านให้สวยงาม เหมาะกับไลฟ์สไตล์และงบประมาณของคุณ",
            price: "เริ่มต้น 5000 บาท",
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
            id : "service#rock",
            name: "สวนหิน",
            icon: <Layers className="w-7 h-7 inline-block mr-3" />,
            desc: "สร้างสวนหินสไตล์ญี่ปุ่น หรือสไตล์โมเดิร์น ดูแลง่าย สวยงามตลอดปี",
            price: "เริ่มต้น 5000 บาท",
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
            id : "service#tree",
            name: "จัดหาต้นไม้",
            icon: <TreePine className="w-8 h-8 inline-block mr-2" />,
            desc: "มีต้นไม้หลากหลายชนิด ทั้งต้นไม้ประดับ ต้นไม้ใหญ่ และไผ่สวน",
            price: "เริ่มต้น 1000 บาท",
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
            id : "service#grass",
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
                 <button className="w-full bg-green-800 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-green-700 transition-all duration-300 text-sm font-semibold">
                      <a target="_blank" href="https://line.me/ti/p/guAbCz7twh" className="block">
                        สอบถาม
                      </a>
                    </button>

                    <a
                      href={service.id}
                      className="bg-white border w-full text-center border-green-900 text-green-900 px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:brightness-105 hover:bg-green-900 hover:text-white transition-all duration-300 text-sm font-semibold"
                    >
                      ดูรายละเอียด
                    </a>
              </div>
            </div>
          </div>
        ))}
        <div className="w-[500px]">d</div>
      </div>
    </div>
  </div>
</section>

  </div>
}
