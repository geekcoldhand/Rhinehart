"use client";
import logo from "../../public/logo.png";
import { useState } from "react";
import Image from "next/image"
import { User } from "lucide-react";
import "../styles/navigation.css";

export function TopNavigation(): JSX.Element {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

	const toggleMobileMenu = (): void => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const handleMenuLinkClick = (): void => {
		setIsMobileMenuOpen(false);
	};

	return (
		<nav className="top-nav" style={{ position: "relative" }}>
			<div className="nav-container">
				{/* Mobile hamburger button - left side */}
				<div className="nav-actions-mobile">
					<button
						className="nav-button mobile-menu-button"
						onClick={toggleMobileMenu}
						aria-label="Toggle mobile menu"
						type="button"
					>
						<div className="hamburger-lines">
							<div
								className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`}
							></div>
							<div
								className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`}
							></div>
							<div
								className={`hamburger-line ${isMobileMenuOpen ? "open" : ""}`}
							></div>
						</div>
					</button>
				</div>

				{/* Logo and Company Name - center on mobile, left on desktop */}
				<div className="nav-logo-section">
					<Image
						src={logo}
						alt="Rhinehart Equipment Company"
						className="nav-logo-image"
						width={50}
						height={50}
						priority
					/>
				</div>

				{/* Navigation Links - Hidden on mobile, shown on desktop */}
				<div className="nav-links">
					<a href="#" className="nav-link">
						Home
					</a>
					<a href="#" className="nav-link">
						Services
					</a>
					<a href="#" className="nav-link">
						Equipment
					</a>
					<a href="#" className="nav-link">
						Contact
					</a>
				</div>

				{/* User button - right side on mobile, far right on desktop */}
				<div className="nav-actions-desktop">
					<button
						className="nav-button"
						type="button"
						aria-label="User account"
					>
						<User size={18} />
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
				<div className="mobile-menu-content">
					<a
						href="#"
						className="mobile-menu-link"
						onClick={handleMenuLinkClick}
					>
						Home
					</a>
					<a
						href="#"
						className="mobile-menu-link"
						onClick={handleMenuLinkClick}
					>
						Services
					</a>
					<a
						href="#"
						className="mobile-menu-link"
						onClick={handleMenuLinkClick}
					>
						Equipment
					</a>
					<a
						href="#"
						className="mobile-menu-link"
						onClick={handleMenuLinkClick}
					>
						Contact
					</a>
					<div className="mobile-menu-divider"></div>
					<a
						href="#"
						className="mobile-menu-link mobile-menu-login"
						onClick={handleMenuLinkClick}
					>
						<User size={16} />
						Login
					</a>
				</div>
			</div>
		</nav>
	);
}
