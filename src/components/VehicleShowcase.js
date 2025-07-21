"use client";
import { useState, useRef, useEffect } from "react";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from 'next/image';

const passengerVideos = [
  {
    name: "Complete Body",
    icon: "/Supreme Group assets/Complete Body.png",
    video: "/Supreme Group assets/Passenger Alpha.bc06b347f5b526ad9a60.mp4",
  },
  {
    name: "Front",
    icon: "/Supreme Group assets/Front.png",
    video: "/Supreme Group assets/Front.8f5fda304d3095ab6b02.mp4",
  },
  {
    name: "Cabin",
    icon: "/Supreme Group assets/Cabin.png",
    video: "/Supreme Group assets/Cabin.3260d3e4f52b3804dae5.mp4",
  },
  {
    name: "Trunk",
    icon: "/Supreme Group assets/Trunk.png",
    video: "/Supreme Group assets/Trunk.54bfaa734c0395172c08.mp4",
  },
  {
    name: "Exterior",
    icon: "/Supreme Group assets/Exterior.png",
    video: "/Supreme Group assets/Exterior.a127ebb308e655c7e32c.mp4",
  },
];

const commercialVideos = [
  {
    name: "Complete Body",
    icon: "/Supreme Group assets/Complete Body (2).png",
    video: "/Supreme Group assets/Commercial Alpha.92c92d40f9116c837d1d.mp4",
  },
  {
    name: "Engine",
    icon: "/Supreme Group assets/Engine.png",
    video: "/Supreme Group assets/Commercial-Engine.d8957f7c027ca396858e.mp4",
  },
  {
    name: "Cabin",
    icon: "/Supreme Group assets/Cabin (2).png",
    video: "/Supreme Group assets/Commercial-Cabin.69adf15a8021267cbe8c.mp4",
  },
];

export default function VehicleShowcase({ blueSectionRef }) {
  const [activeType, setActiveType] = useState("passenger");
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoLoading, setVideoLoading] = useState(false);
  const videoTimeoutRef = useRef();
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const videos = activeType === "passenger" ? passengerVideos : commercialVideos;

  // Mobile video slider state
  const [mobilePassengerIndex, setMobilePassengerIndex] = useState(0);
  const [mobileCommercialIndex, setMobileCommercialIndex] = useState(0);

  // Refs for mobile video elements
  const mobilePassengerVideoRef = useRef();
  const mobileCommercialVideoRef = useRef();

  // Add these states for touch handling (after other useState declarations)
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  // Helper for swipe detection
  const minSwipeDistance = 50; // px

  // Passenger swipe handlers
  const onPassengerTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };
  const onPassengerTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };
  const onPassengerTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    if (distance > minSwipeDistance && mobilePassengerIndex < passengerVideos.length - 1) {
      setMobilePassengerIndex(mobilePassengerIndex + 1);
    } else if (distance < -minSwipeDistance && mobilePassengerIndex > 0) {
      setMobilePassengerIndex(mobilePassengerIndex - 1);
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // Commercial swipe handlers
  const onCommercialTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };
  const onCommercialTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };
  const onCommercialTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    if (distance > minSwipeDistance && mobileCommercialIndex < commercialVideos.length - 1) {
      setMobileCommercialIndex(mobileCommercialIndex + 1);
    } else if (distance < -minSwipeDistance && mobileCommercialIndex > 0) {
      setMobileCommercialIndex(mobileCommercialIndex - 1);
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // Play video safely on index change (Passenger)
  useEffect(() => {
    const video = mobilePassengerVideoRef.current;
    if (video) {
      video.load();
      video.play().catch(() => {});
    }
  }, [mobilePassengerIndex]);

  // Play video safely on index change (Commercial)
  useEffect(() => {
    const video = mobileCommercialVideoRef.current;
    if (video) {
      video.load();
      video.play().catch(() => {});
    }
  }, [mobileCommercialIndex]);

  // Ref for scroll animations
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const vehicleTypesRef = useRef(null);
  const iconsRef = useRef(null);

  // Scroll progress for the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform values for different elements based on scroll progress
  // Heading moves up slowly (lazy drag) and stays fixed
  const headingY = useTransform(scrollYProgress, [0, 0.18, 0.22, 1], [500, 0, 0, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.12, 0.18, 1], [0, 1, 1, 1]);

  // Other sections start after heading is fixed
  const vehicleTypesY = useTransform(scrollYProgress, [0.22, 0.4], [100, 0]);
  const vehicleTypesOpacity = useTransform(scrollYProgress, [0.22, 0.35], [0, 1]);

  const videoY = useTransform(scrollYProgress, [0.3, 0.55], [100, 0]);
  const videoOpacity = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);

  const iconsY = useTransform(scrollYProgress, [0.45, 0.5], [100, 0]);
  const iconsOpacity = useTransform(scrollYProgress, [0.45, 0.48], [0, 1]);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // When video changes, always play
  React.useEffect(() => {
    setIsPlaying(true);
    if (videoRef.current) videoRef.current.play();
  }, [activeIndex, activeType]);

  // Update progress as video plays
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const { currentTime, duration } = videoRef.current;
    setProgress(duration ? currentTime / duration : 0);
  };

  // Remove loop from video and handle end
  const handleEnded = () => {
    setIsPlaying(false);
  };

  // Intersection Observer for blue section
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveType('commercial');
        } else {
          setActiveType('passenger');
        }
      },
      { threshold: 0.01 }
    );
    const refValue = blueSectionRef.current;
    if (refValue) {
      observer.observe(refValue);
    }
    return () => {
      if (refValue) observer.unobserve(refValue);
    };
  }, [blueSectionRef]);
  // Snap scroll to section on click
  const handleSectionClick = (type) => {
    setActiveType(type);
    if (containerRef.current) {
      const section = containerRef.current;
      const rect = section.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      const offset = rect.top + scrollTop;
      // Snap to top for passenger, bottom for commercial
      const scrollTo = type === 'passenger' ? offset : offset + rect.height - window.innerHeight;
      window.scrollTo({ top: scrollTo, behavior: 'smooth' });
    }
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (videoTimeoutRef.current) clearTimeout(videoTimeoutRef.current);
    };
  }, []);

  // Mobile-only layout
  // Only render on mobile
  const mobilePassengerVideos = passengerVideos;
  const mobileCommercialVideos = commercialVideos;

  return (
    <>
      {/* Mobile Only */}
      <div className="md:hidden w-full min-h-screen bg-black text-white flex flex-col items-center justify-start px-2 pt-8">
        <div className="text-2xl font-normal text-center mt-8 mb-8 px-2">
          Evolving the drive with <span className="font-bold">360-degree</span> comprehensive solutions
        </div>
        {/* Passenger vehicles */}
        <div className="w-full flex flex-col items-center mb-10">
          <div className="text-xl font-semibold text-[#00aaff] mb-1">Passenger vehicles</div>
          <div className="text-sm md:text-base text-center mb-4 font-normal">Revving up innovation<br/>from interior to exterior.</div>
          <div
            className="w-full max-w-xs rounded-lg mb-2"
            onTouchStart={onPassengerTouchStart}
            onTouchMove={onPassengerTouchMove}
            onTouchEnd={onPassengerTouchEnd}
          >
            <video
              ref={mobilePassengerVideoRef}
              key={mobilePassengerVideos[mobilePassengerIndex].video}
              src={mobilePassengerVideos[mobilePassengerIndex].video}
              autoPlay
              muted
              loop
              className="w-full rounded-lg"
            />
          </div>
          <div className="text-lg text-center mb-3">{mobilePassengerVideos[mobilePassengerIndex].name}</div>
          {/* Dots */}
          <div className="flex flex-row items-center justify-center gap-2 mb-4">
            {mobilePassengerVideos.map((_, idx) => (
              <button
                key={idx}
                style={{ outline: 'none', border: 'none', padding: 0, background: 'transparent' }}
                onClick={() => setMobilePassengerIndex(idx)}
                aria-label={`Show video ${idx + 1}`}
              >
                {mobilePassengerIndex === idx ? (
                  <div className="w-8 h-2 rounded-full bg-[#00cfff] transition-all duration-200" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-[#003344] transition-all duration-200" />
                )}
              </button>
            ))}
          </div>
        </div>
        {/* Commercial vehicles */}
        <div className="w-full flex flex-col items-center mb-10">
          <div className="text-xl font-semibold text-[#00aaff] mb-1">Commercial vehicles</div>
          <div className="text-sm md:text-base text-center mb-4 font-normal">Advancing engineering<br/>for heavy-duty vehicles.</div>
          <div
            className="w-full max-w-xs rounded-lg mb-2"
            onTouchStart={onCommercialTouchStart}
            onTouchMove={onCommercialTouchMove}
            onTouchEnd={onCommercialTouchEnd}
          >
            <video
              ref={mobileCommercialVideoRef}
              key={mobileCommercialVideos[mobileCommercialIndex].video}
              src={mobileCommercialVideos[mobileCommercialIndex].video}
              autoPlay
              muted
              loop
              className="w-full rounded-lg"
            />
          </div>
          <div className="text-lg text-center mb-3">{mobileCommercialVideos[mobileCommercialIndex].name}</div>
          {/* Dots */}
          <div className="flex flex-row items-center justify-center gap-2 mb-4">
            {mobileCommercialVideos.map((_, idx) => (
              <button
                key={idx}
                style={{ outline: 'none', border: 'none', padding: 0, background: 'transparent' }}
                onClick={() => setMobileCommercialIndex(idx)}
                aria-label={`Show video ${idx + 1}`}
              >
                {mobileCommercialIndex === idx ? (
                  <div className="w-8 h-2 rounded-full bg-[#00cfff] transition-all duration-200" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-[#003344] transition-all duration-200" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Desktop Only (existing code) */}
      <section ref={containerRef} className="w-full bg-black text-white min-h-screen flex-col items-center justify-center px-4 py-16 hidden md:flex">
        <motion.h2 
          ref={headingRef}
          style={{ 
            y: headingY,
            opacity: headingOpacity
          }}
          className="text-2xl md:text-4xl font-normal text-center mt-10 mb-28"
        >
        Evolving the drive with <span className="text-blue-200 md:text-white font-normal">360-degree</span><br className="hidden md:block" /> comprehensive solutions
        </motion.h2>
      <div className="flex w-full max-w-7xl min-h-[540px] items-start">
        {/* Left: Vertical line and vehicle type selector */}
          <motion.div 
            ref={vehicleTypesRef}
            style={{ 
              y: vehicleTypesY,
              opacity: vehicleTypesOpacity,
              marginTop: 0
            }}
            className="flex flex-row items-start w-1/3 pr-6 relative"
          >
          {/* Vertical line */}
          <div className="flex flex-col items-center mx-8 h-72 min-h-[200px]">
            <div className={`w-[2px] h-1/2 ${activeType === "passenger" ? "bg-white" : "bg-white/30"} transition-all duration-300`} />
            <div className={`w-[2px] h-1/2 ${activeType === "commercial" ? "bg-white" : "bg-white/30"} transition-all duration-300`} />
          </div>
          {/* Vehicle type selector */}
          <div className="flex flex-col justify-center items-start select-none w-full ml-4 md:ml-8">
            <button
              className={`block w-full text-left mb-2 transition ${activeType === "passenger" ? "text-white" : "text-white/30"} cursor-pointer`}
              style={{background: 'none', border: 'none', padding: 0}}
              onClick={() => { setActiveType("passenger"); setActiveIndex(0); }}
            >
              <span className="text-2xl md:text-3xl font-medium mb-3 block">Passenger vehicles</span>
              <div className={`mb-14 text-base md:text-base font-normal leading-snug ${activeType === "passenger" ? "text-white" : "text-white/30"}`}>Revving up innovation from<br />interior to exterior.</div>
            </button>
            <button
              className={`block w-full text-left mb-2 transition ${activeType === "commercial" ? "text-white" : "text-white/30"} cursor-pointer`}
              style={{background: 'none', border: 'none', padding: 0}}
              onClick={() => { setActiveType("commercial"); setActiveIndex(0); }}
            >
              <span className="text-2xl md:text-3xl font-medium mb-3 block">Commercial vehicles</span>
              <div className={`mb-14 text-base md:text-base font-normal leading-snug ${activeType === "commercial" ? "text-white" : "text-white/30"}`}>Advancing engineering<br />for heavy-duty vehicles.</div>
            </button>
          </div>
          </motion.div>
        {/* Right: Video and icons */}
          <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden">
            {activeType === 'passenger' ? (
              <motion.div
                key="passenger-section"
                style={{ y: videoY }}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '100%' }}
                transition={{ type: 'spring', stiffness: 80, damping: 24 }}
                className="relative w-full flex justify-center mb-8 overflow-hidden"
              >
                <motion.video
                  ref={videoRef}
                  key={passengerVideos[activeIndex].video}
                  src={passengerVideos[activeIndex].video}
                  autoPlay={isPlaying}
                  muted
                  className="max-h-56 max-w-full rounded-lg"
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={handleEnded}
                  animate={{ opacity: videoLoading ? 0 : 1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ) : (
              <motion.div
                key="commercial-video"
                style={{ y: videoY, opacity: videoOpacity }}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '100%', opacity: 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 24 }}
                className="relative w-full flex justify-center mb-8 overflow-hidden"
              >
            <video
              ref={videoRef}
                  key={commercialVideos[activeIndex % commercialVideos.length].video}
                  src={commercialVideos[activeIndex % commercialVideos.length].video}
              autoPlay={isPlaying}
              muted
              className="max-h-56 max-w-full rounded-lg"
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleEnded}
            />
              </motion.div>
            )}
            {activeType === 'passenger' ? (
              <motion.div
                key="passenger-section-icons"
                ref={iconsRef}
                style={{ y: iconsY, opacity: iconsOpacity, maxWidth: 850 }}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '100%', opacity: 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 24 }}
                className="relative w-full flex flex-row justify-between items-center mt-8 md:mt-12 overflow-hidden"
              >
                <div className={`flex flex-row justify-center items-center flex-1 gap-9`}>
                  {passengerVideos.map((item, idx) => (
                    <button
                      key={item.name}
                      className={`flex flex-col items-center group focus:outline-none ${activeIndex === idx ? '' : 'opacity-60'} cursor-pointer`}
                      onClick={() => {
                        if (videoTimeoutRef.current) clearTimeout(videoTimeoutRef.current);
                        setVideoLoading(true);
                        videoTimeoutRef.current = setTimeout(() => {
                          setActiveIndex(idx);
                          setVideoLoading(false);
                        }, 1000);
                      }}
                    >
                      <Image src={item.icon} alt={item.name + ' icon'} className="w-16 h-16 mb-2 object-contain" width={64} height={64} />
                      <span className={`text-sm ${activeIndex === idx ? 'text-white' : 'text-white/60'}`}>{item.name}</span>
                    </button>
                  ))}
                </div>
                {/* Playback button with circular progress */}
                <div className="relative flex items-center justify-center mr-24" style={{marginBottom: '0.5rem', width: 59, height: 59}}>
                  <svg width="59" height="59" viewBox="0 0 59 59" className="absolute top-0 left-0" style={{zIndex: 1}}>
                    <circle cx="29.5" cy="29.5" r="24.5" stroke="#444" strokeWidth="3" fill="none" />
                    <circle
                      cx="29.5"
                      cy="29.5"
                      r="24.5"
                      stroke="#fff"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray={2 * Math.PI * 24.5}
                      strokeDashoffset={2 * Math.PI * 24.5 * (1 - progress)}
                      strokeLinecap="round"
                      style={{transition: 'stroke-dashoffset 0.2s linear', transform: 'rotate(-90deg)', transformOrigin: '50% 50%'}}
                    />
                  </svg>
                  <button
                    onClick={handlePlayPause}
                    className="w-11 h-11 flex items-center justify-center rounded-full bg-black transition focus:outline-none relative z-10"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                    style={{position: 'relative'}}
                  >
                    {isPlaying ? (
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="6" y="6" width="5" height="16" rx="2" fill="white" />
                        <rect x="17" y="6" width="5" height="16" rx="2" fill="white" />
                      </svg>
                    ) : (
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 6V22L22 14L8 6Z" fill="white" />
                      </svg>
                    )}
                  </button>
          </div>
              </motion.div>
            ) : (
              <motion.div
                key="commercial-section-icons"
                ref={iconsRef}
                style={{ y: iconsY, opacity: iconsOpacity, maxWidth: 850 }}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '100%', opacity: 0 }}
                transition={{ type: 'spring', stiffness: 80, damping: 24 }}
                className="relative w-full flex flex-row justify-between items-center mt-8 md:mt-12 overflow-hidden"
              >
                <div className={`flex flex-row justify-center items-center flex-1 gap-16`}>
                  {commercialVideos.map((item, idx) => (
                <button
                  key={item.name}
                      className={`flex flex-col items-center group focus:outline-none ${activeIndex % commercialVideos.length === idx ? '' : 'opacity-60'} cursor-pointer`}
                      onClick={() => {
                        if (videoTimeoutRef.current) clearTimeout(videoTimeoutRef.current);
                        setVideoLoading(true);
                        videoTimeoutRef.current = setTimeout(() => {
                          setActiveIndex(idx);
                          setVideoLoading(false);
                        }, 1000);
                      }}
                >
                      <Image src={item.icon} alt={item.name + ' icon'} className="w-16 h-16 mb-2 object-contain" width={64} height={64} />
                      <span className={`text-sm ${activeIndex % commercialVideos.length === idx ? 'text-white' : 'text-white/60'}`}>{item.name}</span>
                </button>
              ))}
            </div>
            {/* Playback button with circular progress */}
            <div className="relative flex items-center justify-center mr-24" style={{marginBottom: '0.5rem', width: 59, height: 59}}>
              <svg width="59" height="59" viewBox="0 0 59 59" className="absolute top-0 left-0" style={{zIndex: 1}}>
                <circle cx="29.5" cy="29.5" r="24.5" stroke="#444" strokeWidth="3" fill="none" />
                <circle
                  cx="29.5"
                  cy="29.5"
                  r="24.5"
                  stroke="#fff"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray={2 * Math.PI * 24.5}
                  strokeDashoffset={2 * Math.PI * 24.5 * (1 - progress)}
                  strokeLinecap="round"
                  style={{transition: 'stroke-dashoffset 0.2s linear', transform: 'rotate(-90deg)', transformOrigin: '50% 50%'}}
                />
              </svg>
              <button
                onClick={handlePlayPause}
                className="w-11 h-11 flex items-center justify-center rounded-full bg-black transition focus:outline-none relative z-10"
                aria-label={isPlaying ? "Pause video" : "Play video"}
                style={{position: 'relative'}}
              >
                {isPlaying ? (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="6" width="5" height="16" rx="2" fill="white" />
                    <rect x="17" y="6" width="5" height="16" rx="2" fill="white" />
                  </svg>
                ) : (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 6V22L22 14L8 6Z" fill="white" />
                  </svg>
                )}
              </button>
            </div>
              </motion.div>
            )}
        </div>
      </div>
    </section>
    </>
  );
} 