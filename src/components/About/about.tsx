import styles from "./about.module.css";

export default function About() {
	return (
		<section id="about" className={styles.aboutSection}>
			<div className={styles.container}>
				<div className={styles.content}>
					<h2 className={styles.title}>Built for Your Success</h2>
					<p className={styles.paragraph}>
						For over 75 years, Rhinehart Equipment has proudly served Georgia,
						Alabama, and Tennessee. As a family-owned business, we believe in
						building lasting relationships with our customers. From the moment
						you walk through our doors, you’re more than a client — you’re part
						of the Rhinehart family.
					</p>
					<p className={styles.lastParagraph}>
						From compact excavators for tight spaces to heavy-duty machines for
						major projects, our comprehensive inventory and expert team ensure
						you have the right equipment to get the job done efficiently and
						profitably.
					</p>
					<div className={styles.statsGrid}>
						<div className={styles.statItem}>
							<div className={styles.statNumber}>75+</div>
							<div className={styles.statLabel}>Years of Experience</div>
						</div>
						<div className={styles.statItem}>
							<div className={styles.statNumber}>300+</div>
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
	);
}
