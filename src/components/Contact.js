import React, { forwardRef } from "react";

const Contact = forwardRef(function Contact(props, ref) {
  return (
    <section id="contact" ref={ref} className="w-full bg-[#1172c4] text-white py-6 px-2 md:px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 items-start">
        {/* Mobile: Form first, Info at bottom; Desktop: Info left, Form right */}
        <div className="block md:hidden">
          <h2 className="text-2xl font-semibold mb-2 px-2">Get in touch</h2>
          <div className="w-12 h-0.5 bg-white mb-4 mt-2 ml-2" />
          <form className="flex flex-col gap-2 px-2 py-6 bg-[#1172c4]">
            <div className="grid grid-cols-1 gap-3">
              <label htmlFor="fullname" className="sr-only">Full name</label>
              <input id="fullname" type="text" placeholder="Full name" className="w-full bg-transparent border-0 border-b-2 border-white/60 focus:border-white focus:ring-0 text-white placeholder-white/80 text-base py-2 transition focus:outline-none" />
              <label htmlFor="email" className="sr-only">Email</label>
              <input id="email" type="email" placeholder="Email" className="w-full bg-transparent border-0 border-b-2 border-white/60 focus:border-white focus:ring-0 text-white placeholder-white/80 text-base py-2 transition focus:outline-none" />
              <label htmlFor="company" className="sr-only">Company</label>
              <input id="company" type="text" placeholder="Company" className="w-full bg-transparent border-0 border-b-2 border-white/60 focus:border-white focus:ring-0 text-white placeholder-white/80 text-base py-2 transition focus:outline-none" />
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" placeholder="Message" rows={3} className="w-full bg-transparent border-0 border-b-2 border-white/60 focus:border-white focus:ring-0 text-white placeholder-white/80 text-base py-2 transition resize-none focus:outline-none" />
            </div>
            <button type="submit" className="mt-6 w-full py-3 border-2 border-white rounded-full text-white hover:bg-white hover:text-blue-900 transition font-semibold text-base tracking-wide cursor-pointer">Send</button>
          </form>
          <div className="mt-8 px-2">
            <p className="mb-4 text-white/90 font-normal text-base">For general enquiries</p>
            <div className="mb-4">
              <div className="font-normal mb-1 text-base">Address :</div>
              <div className="text-white/90 text-base">110, 16th Road, Chembur,<br/>Mumbai - 400071</div>
            </div>
            <div className="mb-4">
              <div className="font-normal mb-1 text-base">Phone :</div>
              <a href="tel:+912225208822" className="text-white/90 text-base cursor-pointer hover:underline hover:decoration-[1px]">+91 22 25208822</a>
            </div>
            <div className="mb-4">
              <div className="font-normal mb-1 text-base">Email :</div>
              <a href="mailto:info@supremegroup.co.in" className="text-white/90 text-base cursor-pointer hover:underline hover:decoration-[1px]">info@supremegroup.co.in</a>
            </div>
          </div>
        </div>
        {/* Desktop: Info left, Form right */}
        <div className="hidden md:flex flex-col justify-center px-8 py-16 bg-[#1172c4] ml-12 text-xl font-normal">
          <h2 className="text-3xl font-semibold mb-2">Get in touch</h2>
          <div className="w-12 h-0.5 bg-white mb-6 mt-2" />
          <p className="mb-8 text-white/90 font-normal">For general enquiries</p>
          <div className="mb-6">
            <div className="font-normal mb-1">Address :</div>
            <div className="text-white/90 text-base">110, 16th Road, Chembur,<br/>Mumbai - 400071</div>
          </div>
          <div className="mb-6">
            <div className="font-normal mb-1">Phone :</div>
            <a href="tel:+912225208822" className="text-white/90 text-base cursor-pointer hover:underline hover:decoration-[1px]">+91 22 25208822</a>
          </div>
          <div className="mb-6">
            <div className="font-normal mb-1">Email :</div>
            <a href="mailto:info@supremegroup.co.in" className="text-white/90 text-base cursor-pointer hover:underline hover:decoration-[1px]">info@supremegroup.co.in</a>
          </div>
        </div>
        <form className="hidden md:flex flex-col gap-4 px-8 py-16 bg-[#1172c4]">
          <div className="grid grid-cols-1 gap-4">
            <label htmlFor="fullname-desktop" className="sr-only">Full name</label>
            <input id="fullname-desktop" type="text" placeholder="Full name" className="w-full bg-transparent border-0 border-b-2 border-white/60 focus:border-white focus:ring-0 text-white placeholder-white/80 text-lg py-2.5 transition focus:outline-none" />
            <label htmlFor="email-desktop" className="sr-only">Email</label>
            <input id="email-desktop" type="email" placeholder="Email" className="w-full bg-transparent border-0 border-b-2 border-white/60 focus:border-white focus:ring-0 text-white placeholder-white/80 text-lg py-2.5 transition focus:outline-none" />
            <label htmlFor="company-desktop" className="sr-only">Company</label>
            <input id="company-desktop" type="text" placeholder="Company" className="w-full bg-transparent border-0 border-b-2 border-white/60 focus:border-white focus:ring-0 text-white placeholder-white/80 text-lg py-2.5 transition focus:outline-none" />
            <label htmlFor="message-desktop" className="sr-only">Message</label>
            <textarea id="message-desktop" placeholder="Message" rows={3} className="w-full bg-transparent border-0 border-b-2 border-white/60 focus:border-white focus:ring-0 text-white placeholder-white/80 text-lg py-2.5 transition resize-none focus:outline-none" />
          </div>
          <button type="submit" className="mt-8 px-10 py-2 border border-white rounded-full text-white hover:bg-white hover:text-blue-900 transition font-semibold self-start text-lg cursor-pointer">Send</button>
        </form>
      </div>
    </section>
  );
});

export default Contact; 