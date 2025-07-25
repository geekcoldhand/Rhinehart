import { ArrowRight, Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import "../styles/construction-hero.css";
import tractor from "../../public/tractor_hero.png";

export default function ConstructionHero(): JSX.Element {
	return (
		<div className="hero-card">
			{/* Main Content */}
			<div className="hero-content">
				<div className="hero-text-section">
					<h1 className="hero-title">
						Trusted Since 1947
					</h1>

					<div className="hero-image-section">
            <div className="hero-image-container">
              
							<div className="hero-image-shadow"></div>
							<Image
								src={tractor}
								alt="Construction Tractor"
								width={400}
								height={300}
								className="hero-image"
								priority
							/>
						</div>
					</div>

					<p className="hero-description">
						For over 75 years, Rhinehart Equipment has proudly served Georgia,
						Alabama, and Tennessee. As a family-owned business, we believe in
						building lasting relationships with our customers. From the moment
						you walk through our doors, you’re more than a client — you’re part
						of the Rhinehart family.
					</p>

					<button className="hero-button" type="button">
						View Equipment Now
						<ArrowRight size={18} />
					</button>
				</div>
			</div>

			{/* Footer */}
			<div className="hero-footer">
				<div className="social-buttons">
					<button className="social-button" type="button" aria-label="Facebook">
						<Facebook size={14} />
					</button>
					<button
						className="social-button"
						type="button"
						aria-label="Instagram"
					>
						<Instagram size={14} />
					</button>
					<button className="social-button" type="button" aria-label="Twitter">
						<Twitter size={14} />
					</button>
				</div>
			</div>
		</div>
	);
}
