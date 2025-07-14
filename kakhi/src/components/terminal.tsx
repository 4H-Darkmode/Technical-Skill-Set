import React from 'react';
import { FaHome } from "react-icons/fa";
import styles from './Terminal.module.css';

interface TerminalProps {
  title?: string;
  children?: React.ReactNode;
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
}

export default function Terminal({ 
  title = "Terminal — -zsh — 100×40",
  children,
  width = "30%",
  height = "30%",
  minWidth = "25%",
  minHeight = "25%"
}: TerminalProps) {
  return (
    <>
      <div 
        className={styles.terminalheader}
        style={{ 
          width, 
          minWidth 
        }}
      >
        <section className={styles.bashtrafficlight}>
          <div className={styles.trafficlightred}></div>
          <div className={styles.trafficlightorange}></div>
          <div className={styles.trafficlightgreen}></div>
        </section>
        <section className={styles.bashheader}>
          <FaHome />
          <h1 className={styles.bashtext}>{title}</h1>
        </section>
      </div>
      <section 
        className={styles.terminal}
        style={{ 
          width, 
          height, 
          minWidth, 
          minHeight 
        }}
      >
        {children}
      </section>
    </>
  );
}