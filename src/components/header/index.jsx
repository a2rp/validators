import { useEffect, useRef, useState } from "react";

import { FiGithub, FiMenu, FiX } from "react-icons/fi";

import styles from "./styles.module.scss";

const Header = () => {
    const lastScrollRef = useRef(0);

    const [isHidden, setIsHidden] = useState(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll <= 20) {
                setIsHidden(false);
            } else if (
                currentScroll > lastScrollRef.current &&
                currentScroll > 120
            ) {
                setIsHidden(true);
                setIsMenuOpen(false);
            } else if (currentScroll < lastScrollRef.current) {
                setIsHidden(false);
            }

            lastScrollRef.current = currentScroll;
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsHidden(false);
    };

    return (
        <header className={`${styles.header} ${isHidden ? styles.hidden : ""}`}>
            <div className={styles.container}>
                <a
                    className={styles.brand}
                    href="#home"
                    onClick={closeMenu}
                    aria-label="Validators home"
                >
                    <img
                        className={styles.logo}
                        src={`${import.meta.env.BASE_URL}logo.png`}
                        alt="Validators logo"
                    />

                    <div className={styles.brandContent}>
                        <strong className={styles.brandName}>Validators</strong>

                        <span className={styles.brandText}>
                            String Validation Toolkit
                        </span>
                    </div>
                </a>

                <nav className={styles.navigation} aria-label="Main navigation">
                    <a href="#validators">Validators</a>

                    <a href="#about">About</a>

                    <a
                        href="https://github.com/a2rp/validators"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </nav>

                <a
                    className={styles.githubButton}
                    href="https://github.com/a2rp/validators"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open Validators repository on GitHub"
                    title="GitHub repository"
                >
                    <FiGithub aria-hidden="true" />
                </a>

                <button
                    className={styles.menuButton}
                    type="button"
                    onClick={() => setIsMenuOpen((current) => !current)}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    aria-label={
                        isMenuOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    title={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? (
                        <FiX aria-hidden="true" />
                    ) : (
                        <FiMenu aria-hidden="true" />
                    )}
                </button>
            </div>

            {isMenuOpen && (
                <nav
                    id="mobile-navigation"
                    className={styles.mobileNavigation}
                    aria-label="Mobile navigation"
                >
                    <div className={styles.mobileInner}>
                        <a href="#validators" onClick={closeMenu}>
                            Validators
                        </a>

                        <a href="#about" onClick={closeMenu}>
                            About
                        </a>

                        <a
                            href="https://github.com/a2rp/validators"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMenu}
                        >
                            <FiGithub aria-hidden="true" />
                            GitHub
                        </a>
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;
