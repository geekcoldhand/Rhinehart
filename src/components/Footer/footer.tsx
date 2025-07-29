import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.brandSection}>
            <div className={styles.brandName}>RHINEHART</div>
            <p className={styles.brandDescription}>
              Your trusted partner for premium construction & argucultural equipment with exceptional service.
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
              <li>(706) 232-8962</li>
              <li>sales@rhinehartequipment.com</li>
              <li>13556 Martha Berry Hwy</li>
              <li>Rome, GA 30165</li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2025 Rhinehart Equipment. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
