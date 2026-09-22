import { FiSearch, FiX } from "react-icons/fi";

import styles from "./styles.module.scss";

const ValidatorList = ({
    validators,
    selectedId,
    searchValue,
    onSearchChange,
    onSelect,
}) => {
    const normalizedSearch = searchValue.trim().toLowerCase();

    const filteredValidators = validators.filter((validatorConfig) => {
        if (!normalizedSearch) {
            return true;
        }

        return [
            validatorConfig.id,
            validatorConfig.label,
            validatorConfig.description,
        ].some((value) => value.toLowerCase().includes(normalizedSearch));
    });

    const clearSearch = () => {
        onSearchChange("");
    };

    return (
        <section
            className={styles.wrapper}
            aria-labelledby="validator-list-title"
        >
            <div className={styles.header}>
                <div>
                    <p className={styles.label}>Validator Library</p>

                    <h2 id="validator-list-title" className={styles.title}>
                        Choose a Validator
                    </h2>
                </div>

                <span className={styles.count}>
                    {filteredValidators.length} of {validators.length}
                </span>
            </div>

            <label className={styles.search}>
                <FiSearch aria-hidden="true" />

                <span className={styles.visuallyHidden}>Search validators</span>

                <input
                    type="search"
                    value={searchValue}
                    onChange={(event) => onSearchChange(event.target.value)}
                    placeholder="Search validators..."
                    autoComplete="off"
                />

                {searchValue && (
                    <button
                        type="button"
                        onClick={clearSearch}
                        aria-label="Clear validator search"
                        title="Clear search"
                    >
                        <FiX aria-hidden="true" />
                    </button>
                )}
            </label>

            {filteredValidators.length > 0 ? (
                <div className={styles.list}>
                    {filteredValidators.map((validatorConfig) => {
                        const isSelected = selectedId === validatorConfig.id;

                        return (
                            <button
                                key={validatorConfig.id}
                                className={`${styles.item} ${
                                    isSelected ? styles.selected : ""
                                }`}
                                type="button"
                                onClick={() => onSelect(validatorConfig.id)}
                                aria-pressed={isSelected}
                            >
                                <span className={styles.itemLabel}>
                                    {validatorConfig.label}
                                </span>

                                <span className={styles.itemId}>
                                    {validatorConfig.id}
                                </span>
                            </button>
                        );
                    })}
                </div>
            ) : (
                <div className={styles.empty}>
                    <FiSearch aria-hidden="true" />

                    <div>
                        <strong>No validators found</strong>

                        <p>Try another name or validator function.</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ValidatorList;
