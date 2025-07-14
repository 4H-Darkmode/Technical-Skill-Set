import Image from "next/image";
import styles from "./page.module.css";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.defaultdiv}>
      <div className={styles.terminalheader}>
        <section className={styles.bashtrafficlight}>
            <div className={styles.trafficlightred}></div>
            <div className={styles.trafficlightorange}></div>
            <div className={styles.trafficlightgreen}></div>
        </section>
        <section className={styles.bashheader}>
            <FaHome></FaHome>
            <h1 className={styles.bashtext}>coder-x — -zsh — 100×40</h1>
        </section>
      </div>
      <section className={styles.terminal}>
          <h1>
            hallo
          </h1>
      </section>
    </div>
  );
}
