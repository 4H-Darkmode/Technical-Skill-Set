import style from './page.module.css';
import Terminal
    from '@/components/terminal';
export default function AboutPage() {
    return (
        <div className={style.defaultdiv}>
            <section className={style.mainpart}>
                <section className={style.image}>
                    <Terminal title="kakhi — -zsh — 100×40" width='70%' height='70%' minWidth='25%' minHeight='25%'>
                        <img
                            src="/kakhi.jpg"
                            alt="kakhi"
                            className={style.kakhiimage}
                            loading="eager"
                            fetchPriority="high"
                        />
                    </Terminal>
                </section>
                <section className={style.info}>
                    <h1 className={`${style.welcometext} ${style['wave-text']}`}>
                        <span>W</span>
                        <span>e</span>
                        <span>l</span>
                        <span>c</span>
                        <span>o</span>
                        <span>m</span>
                        <span>e</span>
                        <span> </span>

                        <span>t</span>
                        <span>o</span>
                        <span> </span>
                        <span>m</span>
                        <span>y</span>
                        <br />
                        <span>p</span>
                        <span>o</span>
                        <span>r</span>
                        <span>t</span>
                        <span>f</span>
                        <span>o</span>
                        <span>l</span>
                        <span>i</span>
                        <span>o</span>
                    </h1>

                    <h1 className={style.infotext}>feel free to check out my projects</h1>
                </section>
                <section className={style.footer}></section>
            </section>
        </div>
    );
}