import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.brandSection}>
            <div className={styles.brandName}>RHINEHART</div>
            <p className={styles.brandDescription}>
              Your trusted partner for premium construction equipment and exceptional service.
            </p>
          </div>
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Equipment</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <a href="#" className={styles.footerLink}>
                  Excavators
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#" className={styles.footerLink}>
                  Bulldozers
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#" className={styles.footerLink}>
                  Loaders
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#" className={styles.footerLink}>
                  Used Equipment
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Services</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <a href="#" className={styles.footerLink}>
                  Maintenance
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#" className={styles.footerLink}>
                  Repairs
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#" className={styles.footerLink}>
                  Parts
                </a>
              </li>
              <li className={styles.linkItem}>
                <a href="#" className={styles.footerLink}>
                  Financing
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Contact</h3>
            <ul className={styles.contactList}>
              <li>(555) 123-4567</li>
              <li>info@rhinehart.com</li>
              <li>123 Industrial Blvd</li>
              <li>Construction City, ST 12345</li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 Rhinehart Construction Equipment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
