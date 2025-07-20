import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-[#eaf3fa] to-white text-black pb-8 md:pb-20 px-4" style={{minHeight: '520px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
      <div className="max-w-6xl mx-auto w-full ml-2 md:ml-48 mt-8 md:mt-16">
        {/* Logo at the very top left, bigger size */}
        <div className="flex items-start">
          <Image 
            src="/Supreme Group assets/supreme logo.png" 
            alt="Supreme Group Logo" 
            width={160} height={50} 
            className="mb-3 md:mb-6 ml-0 md:ml-2 w-[120px] h-[40px] md:w-[160px] md:h-[50px]"
          />
        </div>
        {/* Columns in a single row, black text, below the logo */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 md:gap-y-0 gap-x-8 mt-2">
          {/* Applications */}
          <div className="flex flex-col items-start mt-2 md:mt-0">
            <div className="font-medium tracking-wide mb-3 md:mb-6">APPLICATIONS</div>
            <ul className="space-y-3 md:space-y-5 text-base text-[#55565B]">
              <li><Link href="/404-demo" className="cursor-pointer hover:text-black">Apparel</Link></li>
              <li><Link href="/404-demo" className="cursor-pointer hover:text-black">Automotive</Link></li>
              <li><Link href="/404-demo" className="cursor-pointer hover:text-black">Filtration</Link></li>
              <li><Link href="/404-demo" className="cursor-pointer hover:text-black">Customised Nonwoven</Link></li>
            </ul>
          </div>
          {/* Company */}
          <div className="flex flex-col items-start mt-2 md:mt-0">
            <div className="font-medium tracking-wide mb-3 md:mb-6">COMPANY</div>
            <ul className="space-y-3 md:space-y-5 text-base text-[#55565B]">
              <li><Link href="/404-demo" className="cursor-pointer hover:text-black">Who We Are</Link></li>
              <li><Link href="/404-demo" className="cursor-pointer hover:text-black">Global Competency</Link></li>
              <li><Link href="/404-demo" className="cursor-pointer hover:text-black">Innovation</Link></li>
              <li><Link href="/404-demo" className="cursor-pointer hover:text-black">ESG Impact</Link></li>
            </ul>
          </div>
          {/* More */}
          <div className="flex flex-col items-start mt-4 md:mt-0">
            <div className="font-medium tracking-wide mb-3 md:mb-6">MORE</div>
            <ul className="space-y-3 md:space-y-5 text-base text-[#55565B]">
              <li><Link href="/404-demo" className="cursor-pointer hover:text-black">Contact Us</Link></li>
              <li><Link href="/404-demo" className="cursor-pointer hover:text-black">Careers</Link></li>
            </ul>
          </div>
          {/* Follow Us */}
          <div className="flex flex-col items-start mt-4 md:mt-0">
            <div className="font-medium tracking-wide mb-3 md:mb-6">FOLLOW US</div>
            <ul className="space-y-3 md:space-y-5 text-base text-[#55565B]">
              <li><Link href="/404-demo" className="cursor-pointer hover:text-black">LinkedIn</Link></li>
            </ul>
          </div>
        </div>
        {/* Copyright and address in a new row below columns */}
        <div className="grid grid-cols-2 mt-10 md:mt-20 text-black w-full" style={{fontSize: '15px'}}>
          <div className="col-span-2 text-center md:col-span-1 md:text-left mb-2 md:mb-0">©2024. All Rights Reserved.</div>
          <div className="mb-2 md:mb-0 ml-0 md:ml-2 hidden md:block">Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.</div>
        </div>
      </div>
    </footer>
  );
} 