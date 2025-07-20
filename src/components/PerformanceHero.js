import Image from "next/image";

export default function PerformanceHero() {
  return (
    <section className="relative w-full h-screen min-h-[400px] flex items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70 z-0"
        src="/Supreme Group assets/automotive.224e7418884105595114.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4 mt-[-3rem] md:mt-[-5rem]">
        <div className="text-lg md:text-2xl font-light text-white mb-6">Driven by performance</div>
        <div className="text-2xl md:text-4xl font-bold text-white mb-2">
          Soft trims and <span className="text-blue-400">NVH solutions</span>
        </div>
        <div className="text-2xl md:text-4xl font-normal text-white mb-2">
          for seamless rides
        </div>
      </div>
    </section>
  );
} 