import styles from "./service.module.css"
import { Wrench, Clock, Shield, Phone } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>
            Comprehensive support services to keep your equipment running at peak performance.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.iconContainer}>
              <Wrench className={styles.serviceIcon} />
            </div>
            <h3 className={styles.serviceTitle}>Maintenance & Repairs</h3>
            <p className={styles.serviceDescription}>
              Expert maintenance and repair services to maximize equipment uptime and extend operational life.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.iconContainer}>
              <Clock className={styles.serviceIcon} />
            </div>
            <h3 className={styles.serviceTitle}>24/7 Emergency Support</h3>
            <p className={styles.serviceDescription}>
              Round-the-clock emergency support to minimize downtime and keep your projects on schedule.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.iconContainer}>
              <Shield className={styles.serviceIcon} />
            </div>
            <h3 className={styles.serviceTitle}>Extended Warranties</h3>
            <p className={styles.serviceDescription}>
              Comprehensive warranty programs to protect your investment and provide peace of mind.
            </p>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.iconContainer}>
              <Phone className={styles.serviceIcon} />
            </div>
            <h3 className={styles.serviceTitle}>Technical Support</h3>
            <p className={styles.serviceDescription}>
              Expert technical guidance and troubleshooting support from our experienced team.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
