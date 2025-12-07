"use client";

import TabletCanvas from "@/components/section-tablet/3d-tablet/TabletCanvas";
import Tablet1 from "./Tablet1";
import Tablet2 from "./Tablet2";
import Tablet3 from "./Tablet3";
import Tablet4 from "./Tablet4";

export default function TabletBlock() {
  return (
    <section
      id="tablet"
      className="
        relative
        top-0
        left-0
        z-20
        h-[400vh]      /* 4 telas: 1,2,3,4 */
        w-full 
        text-white
      "
    >
      {/* CANVAS 3D: fica grudado na viewport enquanto as 4 telas passam */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="sticky top-0 h-screen">
          <TabletCanvas />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="sticky top-0 h-screen">
          <Tablet1 />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="sticky top-0 h-screen">
          <Tablet2 />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="sticky top-0 h-screen">
          <Tablet3 />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="sticky top-0 h-screen">
          <Tablet4 />
        </div>
      </div>

        {/* <Tablet2 />
        <Tablet3 />
        <Tablet4 /> */}
    </section>
  );
}
