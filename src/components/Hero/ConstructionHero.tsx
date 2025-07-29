import { ArrowRight, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import styles from "./hero.module.css";
// import tractor from "../../../public/tractor_hero.png";
import tractor from "../../../public/hero_cover.jpg";

export default function ConstructionHero(): JSX.Element {
	return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.heroBackground}>
        <Image
          src={tractor.src}
          alt="Rhinehart excavator at work"
          fill
          className={styles.heroImage}
          priority
        />
        <div className={styles.heroOverlay} />
      </div>

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Power Your Projects with
          <span className={styles.heroTitleAccent}>Premium Excavators</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Industry-leading construction equipment built for performance, reliability, and your success.
        </p>
        <div className={styles.heroButtons}>
          <button className={styles.primaryButton}>Shop Excavators</button>
          <button className={styles.secondaryButton}>Request Quote</button>
        </div>
      </div>
    </section>
  )
		
}
