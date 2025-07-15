"use client";

import style from "./page.module.css";
import ParticlesBackground from "@/components/particles";
import { useState } from "react";

export default function kakhi() {
  const [project, setProject] = useState("LiveChatApp");
  return (
    <>
      <div className={style.defaultdiv}>
        <ParticlesBackground />
        <section className={style.hero}>
          <div className={style.herocontent}>
            <h1>
              def developer ( ) <span className={style.cursor}></span>
              <p>
                Full-Stack Developer being made | Problem Sovler | Code
                Enthusiast
              </p>
              <div className={style.glitchcontainer}>
                <div className={style.glitch} data-text="Follow my journey">Follow my journey</div>
                <div className={style.glow}>Follow my journey</div>
              </div>
            </h1>
          </div>
        </section>
      </div>
    </>
  );
}
