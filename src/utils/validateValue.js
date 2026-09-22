export const VALIDATION_STATUS = {
    NEUTRAL: "neutral",
    VALID: "valid",
    INVALID: "invalid",
};

export const validateValue = (validatorConfig, value) => {
    if (!validatorConfig) {
        return {
            status: VALIDATION_STATUS.NEUTRAL,
            message: "Select a validator to begin.",
        };
    }

    const inputValue = String(value ?? "");

    if (inputValue.length === 0 && !validatorConfig.allowEmptyInput) {
        return {
            status: VALIDATION_STATUS.NEUTRAL,
            message: `Enter a value to validate as ${validatorConfig.label}.`,
        };
    }

    try {
        const isValid = Boolean(validatorConfig.validate(inputValue));

        if (isValid) {
            return {
                status: VALIDATION_STATUS.VALID,
                message: `Valid ${validatorConfig.label} value.`,
            };
        }

        return {
            status: VALIDATION_STATUS.INVALID,
            message: `Invalid ${validatorConfig.label} value.`,
        };
    } catch {
        return {
            status: VALIDATION_STATUS.INVALID,
            message: `Unable to validate this value as ${validatorConfig.label}.`,
        };
    }
};
