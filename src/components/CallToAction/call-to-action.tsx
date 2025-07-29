import styles from "./cta.module.css"

export default function CTA() {
  return (
    <section id="contact" className={styles.ctaSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ready to Power Your Next Project?</h2>
        <p className={styles.subtitle}>
          Get in touch with our equipment specialists today for personalized recommendations and competitive pricing.
        </p>
        <div className={styles.buttonGroup}>
          <button className={styles.primaryButton}>Get Free Quote</button>
          <button className={styles.secondaryButton}>Call (706) 232-8962</button>
        </div>
      </div>
    </section>
  )
}
