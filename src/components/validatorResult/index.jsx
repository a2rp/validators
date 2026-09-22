import { FiAlertCircle, FiCheckCircle, FiInfo } from "react-icons/fi";

import { VALIDATION_STATUS } from "../../utils/validateValue";

import styles from "./styles.module.scss";

const ValidatorResult = ({ result }) => {
    const status = result?.status || VALIDATION_STATUS.NEUTRAL;

    const message = result?.message || "Enter a value to begin validation.";

    let icon = <FiInfo aria-hidden="true" />;

    let title = "Ready to validate";

    if (status === VALIDATION_STATUS.VALID) {
        icon = <FiCheckCircle aria-hidden="true" />;

        title = "Valid value";
    }

    if (status === VALIDATION_STATUS.INVALID) {
        icon = <FiAlertCircle aria-hidden="true" />;

        title = "Invalid value";
    }

    return (
        <section
            className={`${styles.wrapper} ${styles[status]}`}
            aria-live="polite"
            aria-atomic="true"
        >
            <div className={styles.iconBox}>{icon}</div>

            <div>
                <span className={styles.label}>Validation Result</span>

                <h3 className={styles.title}>{title}</h3>

                <p className={styles.message}>{message}</p>
            </div>
        </section>
    );
};

export default ValidatorResult;
