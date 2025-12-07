"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import FeatureCanvas from "@/components/features/3d-features/featureCanvas";
import Feature1 from "./feature1";
import Feature2 from "./feature2";
import Feature3 from "./feature3";
import Feature4 from "./feature4";
import Feature5 from "./feature5";

export default function FeatureBlock() {
  return (
    <section
    className="
        relative 
        z-20
        h-[400vh]      /* 4 telas: 1,2,3,4 */
        w-full 
        text-white
      ">

      

        <div className="pointer-events-none absolute inset-0 z-10">
          <div className="sticky top-0 h-screen">
            <FeatureCanvas />
          </div>
        </div>

    <div className="relative z-30">
       <div
        className="absolute inset-0 z-20 opacity-60 bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.06)_0_1px,transparent_1px_240px)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-20 opacity-60 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.06)_0_1px,transparent_1px_240px)]"
        aria-hidden="true"
      />
    </div>
     
     

      <div className="relative z-20">
        <Feature1/>
        <Feature2/>
        <Feature3/>
        <Feature4/>
        </div>
        
  
    </section>
  );
}
