import { FiCheckCircle, FiRotateCcw } from "react-icons/fi";

import styles from "./styles.module.scss";

const ValidatorInput = ({
    validatorConfig,
    value,
    onChange,
    onUseExample,
    onClear,
}) => {
    if (!validatorConfig) {
        return null;
    }

    const exampleText =
        validatorConfig.example === ""
            ? "(empty string)"
            : validatorConfig.example;

    return (
        <section
            className={styles.wrapper}
            aria-labelledby="validator-input-title"
        >
            <div className={styles.header}>
                <div>
                    <p className={styles.label}>Selected Validator</p>

                    <h2 id="validator-input-title" className={styles.title}>
                        {validatorConfig.label}
                    </h2>
                </div>

                <span className={styles.validatorId}>{validatorConfig.id}</span>
            </div>

            <p className={styles.description}>{validatorConfig.description}</p>

            <div className={styles.exampleBox}>
                <div>
                    <span className={styles.exampleLabel}>Example</span>

                    <code className={styles.exampleValue}>{exampleText}</code>
                </div>

                <button
                    className={styles.exampleButton}
                    type="button"
                    onClick={onUseExample}
                >
                    <FiCheckCircle aria-hidden="true" />
                    <span>Use Example</span>
                </button>
            </div>

            <div className={styles.inputGroup}>
                <label className={styles.inputLabel} htmlFor="validator-value">
                    Value to validate
                </label>

                <textarea
                    id="validator-value"
                    className={styles.input}
                    value={value}
                    onChange={(event) => onChange(event.target.value)}
                    placeholder={`Enter a value for ${validatorConfig.label}`}
                    spellCheck="false"
                    rows="5"
                    autoComplete="off"
                />
            </div>

            <div className={styles.actions}>
                <span className={styles.characterCount}>
                    {value.length} characters
                </span>

                <button
                    className={styles.clearButton}
                    type="button"
                    onClick={onClear}
                    disabled={
                        value.length === 0 && !validatorConfig.allowEmptyInput
                    }
                >
                    <FiRotateCcw aria-hidden="true" />
                    <span>Clear</span>
                </button>
            </div>
        </section>
    );
};

export default ValidatorInput;
