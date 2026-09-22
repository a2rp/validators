import { FiCheckCircle, FiCode, FiSearch, FiZap } from "react-icons/fi";

import BackToTop from "./components/backToTop";
import Footer from "./components/footer";
import Header from "./components/header";
import ValidatorTool from "./components/validatorTool";

import styles from "./App.module.scss";

const App = () => {
    return (
        <div className={styles.app}>
            <Header />

            <main>
                <section id="home" className={styles.hero}>
                    <div className={styles.heroContainer}>
                        <div className={styles.heroContent}>
                            <p className={styles.label}>
                                String Validation Toolkit
                            </p>

                            <h1 className={styles.title}>
                                Validate strings
                                <span>instantly.</span>
                            </h1>

                            <p className={styles.description}>
                                Test common string formats with a focused
                                browser-based validation toolkit powered by
                                validator.js.
                            </p>

                            <div className={styles.heroActions}>
                                <a
                                    className={styles.primaryButton}
                                    href="#validators"
                                >
                                    <FiCheckCircle aria-hidden="true" />

                                    <span>Start Validating</span>
                                </a>

                                <a
                                    className={styles.secondaryButton}
                                    href="#about"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>

                        <div
                            className={styles.heroStats}
                            aria-label="Application highlights"
                        >
                            <article className={styles.statCard}>
                                <div className={styles.statIcon}>
                                    <FiCheckCircle aria-hidden="true" />
                                </div>

                                <div>
                                    <strong>34</strong>

                                    <span>Validators</span>
                                </div>
                            </article>

                            <article className={styles.statCard}>
                                <div className={styles.statIcon}>
                                    <FiZap aria-hidden="true" />
                                </div>

                                <div>
                                    <strong>Live</strong>

                                    <span>Feedback</span>
                                </div>
                            </article>

                            <article className={styles.statCard}>
                                <div className={styles.statIcon}>
                                    <FiSearch aria-hidden="true" />
                                </div>

                                <div>
                                    <strong>Fast</strong>

                                    <span>Search</span>
                                </div>
                            </article>

                            <article className={styles.statCard}>
                                <div className={styles.statIcon}>
                                    <FiCode aria-hidden="true" />
                                </div>

                                <div>
                                    <strong>100%</strong>

                                    <span>Browser Based</span>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                <ValidatorTool />

                <section id="about" className={styles.about}>
                    <div className={styles.aboutContainer}>
                        <div>
                            <p className={styles.label}>About the Toolkit</p>

                            <h2 className={styles.aboutTitle}>
                                One place for common string validation.
                            </h2>
                        </div>

                        <div className={styles.aboutContent}>
                            <p>
                                Validators provides a searchable collection of
                                common validation utilities for emails, URLs, IP
                                addresses, JSON, UUIDs, passwords, colors,
                                identifiers, numbers, and more.
                            </p>

                            <p>
                                Each validator includes a short description, a
                                usable example, and immediate valid or invalid
                                feedback without sending the entered value to a
                                backend service.
                            </p>

                            <p>
                                The interface is intentionally simple so
                                individual validators can be tested quickly
                                during development, debugging, and learning.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <BackToTop />
        </div>
    );
};

export default App;
