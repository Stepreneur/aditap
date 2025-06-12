import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ไร่หญ้าอาบังการ์เด้น",
  description: "ขายหญ้านวลน้อย และจัดสวนครบวงจร",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
         <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17193440069"
        />
        {/* สคริปต์แบบ inline */}
        <Script id="google-ads">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17193440069');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
