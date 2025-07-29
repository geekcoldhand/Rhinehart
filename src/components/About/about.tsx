import styles from "./about.module.css"

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Built for Your Success</h2>
          <p className={styles.paragraph}>
            For over three decades, Rhinehart has been the trusted partner for construction professionals across the
            nation. We understand that your equipment isn't just machinery—it's the foundation of your business success.
            That's why we offer only the highest quality excavators, backed by unmatched service and support.
          </p>
          <p className={styles.lastParagraph}>
            From compact excavators for tight spaces to heavy-duty machines for major projects, our comprehensive
            inventory and expert team ensure you have the right equipment to get the job done efficiently and
            profitably.
          </p>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>30+</div>
              <div className={styles.statLabel}>Years of Experience</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Equipment Units</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Service Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
