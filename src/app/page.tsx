"use client";

import { JSX } from "react";

import { About } from "@/components/About";
import { CallToAction } from "@/components/CallToAction"; 
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";

export default function Home(): JSX.Element {
  return (
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <About />
     
        <CallToAction />
      </main>
  );
} 