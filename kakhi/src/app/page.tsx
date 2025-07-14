'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { FaHome } from "react-icons/fa";
import { getTerminalDate } from "../utils/terminal-date";
import { useRouter } from "next/navigation";

export default function Home() {
  
  const router = useRouter();

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
        <h1 className={styles.terminaldate}>
          latest login: {getTerminalDate()}
        </h1>
        <h1 className={styles.terminaltextcoder}>
          coder x ThinkPad:~ coder-x — -zsh$
        </h1>
        <h1 className={styles.terminaltextcdir}>
          coder x ThinkPad:~ coder-x — -zsh$ : cd kakhi
        </h1>
        <h1 className={styles.terminaltextnpm}>
          coder x ThinkPad:~/kakhi coder-x — -zsh$ : npm run dev
        </h1>
        <br />
        <h1 className={styles.terminaltextrouting1}>
          my-project@1.0.0 dev
        </h1>
        <h1 className={styles.terminaltextrouting2}>
          next dev
        </h1>
        <h1 className={styles.terminaltextrouting3}>
          ready - started server on 0.0.0.0:3000, url: 
          <span
            className={styles.link}
            onClick={() => router.push("/kakhi")}
          >
            http://localhost:3000/kakhi
          </span>
        </h1>
      </section>
    </div>
  );
}
