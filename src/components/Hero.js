

export default function Hero() {
  return (
    <>
      {/* Mobile Only */}
      <div className="block md:hidden w-full bg-black">
        <div className="relative w-full h-[160px] overflow-hidden">
          <video
            className="w-full h-full object-cover opacity-30"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/Supreme%20Group%20assets/automotive.224e7418884105595114.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="z-10 text-center max-w-3xl mx-auto pt-4 pb-8">
          <div className="text-lg font-light mb-2">Driven by performance</div>
          <div className="text-2xl font-bold mb-1">
            Soft trims and <span className="text-blue-400 font-bold">NVH solutions</span>
          </div>
          <div className="text-xl font-light mb-4">for seamless rides</div>
        </div>
      </div>
      {/* Desktop Only */}
      <section className="hidden md:flex w-full bg-black text-white flex-col items-center justify-center py-16 px-4 min-h-[60vh] relative overflow-hidden">
        <div className="z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Evolving the drive with <span className="text-blue-400">360-degree</span> comprehensive solutions
          </h1>
          <div className="mb-8">
            <div className="text-2xl font-light">Driven by performance</div>
            <div className="text-2xl font-light">
              Soft trims and <span className="text-blue-400">NVH solutions</span>
            </div>
            <div className="text-2xl font-light">for seamless rides</div>
          </div>
          <div className="flex flex-row justify-between w-full max-w-4xl mx-auto mb-8">
            <div className="text-left w-1/2 mb-0">
              <div className="text-white text-xl font-semibold mb-2">Passenger vehicles</div>
              <div className="text-white/80 text-base">Revving up innovation from interior to exterior.</div>
            </div>
            <div className="text-left w-1/2 opacity-60">
              <div className="text-white text-xl font-semibold mb-2">Commercial vehicles</div>
              <div className="text-white/60 text-base">Advancing engineering for heavy-duty vehicles.</div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            className="w-full h-full object-cover opacity-30 z-0"
            src="/Supreme Group assets/automotive.224e7418884105595114.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </section>
    </>
  );
} 