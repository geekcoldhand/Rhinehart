"use client";
import logo from "../../../public/logo.png";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, Search, X } from "lucide-react";
import "../../styles/global-styles.css";
import styles from "./nav.module.css";

export default function TopNavigation() {
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const handleLinkClick = () => {
		setIsMobileMenuOpen(false);
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			setIsScrolled(scrollPosition > 100);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// useEffect(() => {
	// 	if (isMobileMenuOpen) {
	// 		document.body.style.overflow = "hidden";
	// 	} else {
	// 		document.body.style.overflow = "unset";
	// 	}

	// 	return () => {
	// 		document.body.style.overflow = "unset";
	// 	};
	// }, [isMobileMenuOpen]);

	return (
		<>
			{/* Announcement Bar */}
			<div className={styles.announcementBar}>
				New 2024 Excavator Models Now Available
			</div>

			{/* Sticky Navigation */}
			<header
				className={`${styles.header} ${
					isScrolled ? styles.headerScrolled : styles.headerDefault
				} ${
					isScrolled
						? styles.headerPositionScrolled
						: styles.headerPositionDefault
				}`}
			>
				<div className={styles.navContainer}>
					{/* Mobile Menu */}
					<button
						className={styles.mobileMenuButton}
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					>
						<Menu size={24} />
					</button>

					{isMobileMenuOpen && (
						<div className={styles.mobileMenu}>
							<nav className={styles.mobileNavLink}>
								<a href="#equipment" onClick={handleLinkClick}>
									Equipment
								</a>
								<a href="#services" onClick={handleLinkClick}>
									Services
								</a>
								<a href="#parts" onClick={handleLinkClick}>
									Parts
								</a>
								<a href="#support" onClick={handleLinkClick}>
									Support
								</a>
								<a href="#about" onClick={handleLinkClick}>
									About
								</a>
								<a href="#contact" onClick={handleLinkClick}>
									Contact
								</a>
								<a href="/login" onClick={handleLinkClick}>
									Login
								</a>
							</nav>
						</div>
					)}

					{/* Logo */}
					<div>
						<Image src={logo} alt="" className={styles.logo} />
					</div>

					{/* Desktop Navigation */}
					<nav className={styles.desktopNav}>
						<a href="#equipment" className={styles.navLink}>
							Equipment
						</a>
						<a href="#services" className={styles.navLink}>
							Services
						</a>
						<a href="#parts" className={styles.navLink}>
							Parts
						</a>
						<a href="#support" className={styles.navLink}>
							Support
						</a>
						<a href="#about" className={styles.navLink}>
							About
						</a>
						<a href="#contact" className={styles.navLink}>
							Contact
						</a>
					</nav>

					{/* Search Toggle */}
					<button
						className={styles.searchButton}
						onClick={() => setIsSearchOpen(!isSearchOpen)}
					>
						{isSearchOpen ? <X /> : <Search />}
					</button>
				</div>

				{/* Search Bar */}
				{isSearchOpen && (
					<div className={styles.searchContainer}>
						<div className={styles.searchWrapper}>
							<input
								type="search"
								placeholder="Search excavators, parts, or services..."
								className={styles.searchInput}
							/>
							<button className={styles.searchSubmitButton}>
								<Search />
							</button>
						</div>
					</div>
				)}
			</header>
		</>
	);
}
