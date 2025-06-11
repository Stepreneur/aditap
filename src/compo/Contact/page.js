  import Image from 'next/image'


export default function Contact (){
    return <div>
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
              <Link
                href="tel:0806746678"
                className="bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transform transition-all"
              >
                📞 โทรหาเราเลย
              </Link>
        
        
              {/* ปุ่มดูแผนที่ */}
              <Link
                href="https://maps.app.goo.gl/JpjG5kaiViVzvfCe7" // เปลี่ยนลิงก์ให้เป็นพิกัดหรือชื่อร้านจริง
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 transition"
              >
                📍 ดูแผนที่ร้าน
              </Link>
        
              {/* โซเชียลมีเดีย */}
              <div className="flex gap-4 items-center flex-wrap justify-center">
                {/* ใช้กล่องพื้นหลังให้ไอคอนเป็นปุ่ม */}
                {[
                  { href: "https://line.me/ti/p/guAbCz7twh", src: "/img/1.webp", alt: "Line" , w:"32" , h:"32"},
                  { href: "https://www.facebook.com/profile.php?id=100076232173926&mibextid=ZbWKwL", src: "/img/facebook.webp", alt: "Facebook", w:"32" , h:"32" },
                  { href: "https://www.tiktok.com/@mlui3?_t=ZS-8x1Yh7q5FrB&_r=1", src: "/img/tiktok.webp", alt: "TikTok" , w:"50",h:"50" },
                  { href: "https://www.instagram.com/sirmal_6678?igsh=ZWp3ZTdsMXR3Z25n", src: "/img/ig.svg", alt: "Instagram", w:"32" , h:"32" },
                ].map(({ href, src, alt , w , h }) => (
                  <Link
                    key={alt}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-gray-100 rounded-full shadow-md flex items-center justify-center hover:scale-110 transition transform"
                  >
                    <Image
                      src={src}
                      alt={alt}
                      width={w}
                      height={h}
                      className="object-contain"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="h-[100px]"></div>
        </section>
        
    </div>
}