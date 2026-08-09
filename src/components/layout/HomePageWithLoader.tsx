"use client";

import { useEffect, useState } from "react";

import { PageLoader } from "./PageLoader";

interface HomePageWithLoaderProps {
  children: React.ReactNode;
}

export function HomePageWithLoader({ children }: HomePageWithLoaderProps) {
  const [loaded, setLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("noeris_intro_seen") === "true") {
      setShowLoader(false);
      setLoaded(true);
    }
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem("noeris_intro_seen", "true");
    setLoaded(true);
  };

  return (
    <>
      {showLoader ? <PageLoader onComplete={handleComplete} /> : null}
      <div
        className="min-w-0 overflow-x-clip"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      >
        {children}
      </div>
    </>
  );
}
