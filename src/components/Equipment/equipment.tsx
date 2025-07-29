import styles from "./equipment.module.css";
import Image from "next/image"

export default function Equipment() {
  return (
    <section id="equipment" className={styles.equipmentSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Equipment</h2>
          <p className={styles.subtitle}>
            Discover our comprehensive range of construction equipment designed to meet every project need.
          </p>
        </div>

        <div className={styles.equipmentGrid}>
          <div className={styles.equipmentCard}>
            <div className={styles.imageContainer}>
              <Image
                src="/Excavator.png?height=300&width=400"
                alt="Excavators"
                width={400}
                height={300}
                className={styles.equipmentImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Excavators</h3>
              <p className={styles.cardDescription}>
                From compact mini excavators to heavy-duty machines, find the perfect excavator for your project.
              </p>
              <button className={styles.cardButton}>View Excavators</button>
            </div>
          </div>

          <div className={styles.equipmentCard}>
            <div className={styles.imageContainer}>
              <Image
                src="/mower.png?height=300&width=400"
                alt="Bulldozers"
                width={400}
                height={300}
                className={styles.equipmentImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Mowers</h3>
              <p className={styles.cardDescription}>
                Powerful speeds for comercial grade lawns, and heavy landscaping applications.
              </p>
              <button className={styles.cardButton}>View Bulldozers</button>
            </div>
          </div>

          <div className={styles.equipmentCard}>
            <div className={styles.imageContainer}>
              <Image
                src="/RTV.png?height=300&width=400"
                alt="Loaders"
                width={400}
                height={300}
                className={styles.equipmentImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>RTV</h3>
              <p className={styles.cardDescription}>
                Versatile wheel and track loaders for material handling and construction tasks.
              </p>
              <button className={styles.cardButton}>View Loaders</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
