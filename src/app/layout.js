import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ไร่หญ้าสมสมัยการ์เด้น | จำหน่ายหญ้า จัดสวน ปูสนามหญ้า",
  description: "ไร่หญ้าสมสมัยการ์เด้น - จำหน่ายหญ้าสดคุณภาพ จัดสวน ปูหญ้าทุกพื้นที่ บริการทั่วประเทศ",
  keywords: [
    "หญ้าสด", "ขายหญ้า", "จัดสวน", "ไร่หญ้า",
    "สนามหญ้า", "ปูหญ้า", "ไร่หญ้าสมสมัย", 
    "หญ้านวลน้อย", "หญ้ามาเลเซีย", "รับจัดสวน"
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  openGraph: {
    title: "ไร่หญ้าสมสมัยการ์เด้น | จำหน่ายหญ้า จัดสวน ปูสนามหญ้า",
    description: "หญ้าสดคุณภาพ ส่งตรงจากไร่ จัดสวน ปูหญ้าทั่วประเทศ บริการมืออาชีพ",
    url: "https://www.xn--12cxwu1bahef9dbi7fjh9t1b2dvam4d.com/",
    siteName: "ไร่หญ้าสมสมัยการ์เด้น",
    images: [
      {
        url: "/img/allgrass.png",
        width: 1200,
        height: 630,
        alt: "ไร่หญ้าสมสมัยการ์เด้น - ภาพตัวอย่าง",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
