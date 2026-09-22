import { useMemo, useState } from "react";

import { FiActivity, FiShield } from "react-icons/fi";

import {
    DEFAULT_VALIDATOR_ID,
    getValidatorById,
    VALIDATORS,
} from "../../data/validators";

import { validateValue } from "../../utils/validateValue";

import ValidatorInput from "../validatorInput";
import ValidatorList from "../validatorList";
import ValidatorResult from "../validatorResult";

import styles from "./styles.module.scss";

const ValidatorTool = () => {
    const [selectedValidatorId, setSelectedValidatorId] =
        useState(DEFAULT_VALIDATOR_ID);

    const [inputValue, setInputValue] = useState("");

    const [searchValue, setSearchValue] = useState("");

    const selectedValidator = useMemo(
        () => getValidatorById(selectedValidatorId),
        [selectedValidatorId],
    );

    const validationResult = useMemo(
        () => validateValue(selectedValidator, inputValue),
        [selectedValidator, inputValue],
    );

    const handleSelectValidator = (validatorId) => {
        if (validatorId === selectedValidatorId) {
            return;
        }

        setSelectedValidatorId(validatorId);

        setInputValue("");
    };

    const handleUseExample = () => {
        setInputValue(selectedValidator.example);
    };

    const handleClear = () => {
        setInputValue("");
    };

    return (
        <section
            id="validators"
            className={styles.section}
            aria-labelledby="validator-tool-title"
        >
            <div className={styles.container}>
                <div className={styles.heading}>
                    <div>
                        <div className={styles.label}>
                            <FiShield aria-hidden="true" />
                            <span>Validation Toolkit</span>
                        </div>

                        <h2 id="validator-tool-title" className={styles.title}>
                            Validate strings instantly
                        </h2>

                        <p className={styles.text}>
                            Search the validator library, choose a validation
                            rule, and test values with immediate feedback.
                        </p>
                    </div>

                    <div className={styles.stat}>
                        <FiActivity aria-hidden="true" />

                        <div>
                            <strong>{VALIDATORS.length}</strong>

                            <span>Validators</span>
                        </div>
                    </div>
                </div>

                <div className={styles.grid}>
                    <ValidatorList
                        validators={VALIDATORS}
                        selectedId={selectedValidatorId}
                        searchValue={searchValue}
                        onSearchChange={setSearchValue}
                        onSelect={handleSelectValidator}
                    />

                    <div className={styles.validationArea}>
                        <ValidatorInput
                            validatorConfig={selectedValidator}
                            value={inputValue}
                            onChange={setInputValue}
                            onUseExample={handleUseExample}
                            onClear={handleClear}
                        />

                        <ValidatorResult result={validationResult} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValidatorTool;
