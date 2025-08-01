import Image from "next/image"
import styles from "./partners.module.css"

export default function Partners() {
  return (
    <section id="partners" className={styles.partnersSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Trusted Brand Partners</h2>
          <p className={styles.subtitle}>
            We partner with the world's leading manufacturers to bring you the highest quality construction equipment.
          </p>
        </div>

        <div className={styles.partnersGrid}>
          <div className={styles.partnerLogo}>
            <Image
              src="/kubota_logo.png?height=80&width=120"
              alt="Kubota"
              width={120}
              height={80}
              className={styles.logoImage}
            />
          </div>
          <div className={styles.partnerLogo}>
            <Image
              src="/bobcat_logo.png?height=80&width=120"
              alt="Bobcat"
              width={120}
              height={80}
              className={styles.logoImage}
            />
          </div>
          <div className={styles.partnerLogo}>
            <Image
              src="/exmark_logo.png?height=80&width=120"
              alt="Exmark"
              width={120}
              height={80}
              className={styles.logoImage}
            />
          </div>
          {/* <div className={styles.partnerLogo}>
            <Image
              src="/placeholder.svg?height=80&width=120"
              alt="John Deere"
              width={120}
              height={80}
              className={styles.logoImage}
            />
          </div> */}
        </div>
      </div>
    </section>
  )
}
