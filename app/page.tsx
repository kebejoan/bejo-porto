"use client";

import { useEffect, useRef, useState } from "react";
import GroundHero from "@/components/0_GroundHero";
import SkyContent from "@/components/SkyContent";
import HeaderPorto from "@/components/HeaderPorto";

export default function Home() {
  const [isReady, setIsReady] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollTop = container.scrollHeight;
    }

    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        flex flex-col items-center min-h-screen transition-opacity duration-1200 cursor-default
        ${isReady ? "opacity-100" : "opacity-0"}
      `}
    >
      <main
        ref={scrollContainerRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar"
      >
        <div className={isReady ? "block" : "hidden"}>
          <SkyContent />
        </div>
        <section className="h-screen w-screen snap-start shrink-0 overflow-hidden">
          <GroundHero />
        </section>
      </main>
      <HeaderPorto />
    </div>
  );
}
