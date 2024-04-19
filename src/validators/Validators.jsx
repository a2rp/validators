import React, { useEffect, useState } from "react"
import styles from "./styles.module.scss";
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import validator from "validator";

const Validators = () => {
    const [selectedValue, setSelectedValue] = useState("isAlpha");
    const [inputValue, setInputValue] = useState("");
    const [info, setInfo] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        setInfo("");
        setError("");

        if (selectedValue === "isAlpha") {
            if (validator.isAlpha(inputValue.trim())) {
                setInfo("Input string contains only letters (a-zA-Z).");
            } else {
                setError("Input string does not contain only letters (a-zA-Z)");
            }
        } else if (selectedValue === "isAlphanumeric") {
            if (validator.isAlphanumeric(inputValue.trim())) {
                setInfo("Input string contains only letters and numbers (a-zA-Z0-9).");
            } else {
                setError("Input string does not contain only letters and numbers (a-zA-Z0-9).");
            }
        } else if (selectedValue === "isAscii") {
            if (validator.isAscii(inputValue.trim())) {
                setInfo("Input string contains ASCII chars only.");
            } else {
                setError("Invalid ASCII chars [e.g. é].");
            }
        } else if (selectedValue === "isBase32") {
            if (validator.isBase32(inputValue.trim())) {
                setInfo("Input string is base32 encoded.");
            } else {
                setError("Invalid base32 encoded [e.g. MFZWQ===].");
            }
        } else if (selectedValue === "isCreditCard") {
            if (validator.isCreditCard(inputValue.trim())) {
                setInfo("Input string is a credit card number.");
            } else {
                setError("Invalid credit card number [e.g. 5555555555554444].");
            }
        } else if (selectedValue === "isEAN") {
            if (validator.isEAN(inputValue.trim())) {
                setInfo("Input string is an EAN (European Article Number).");
            } else {
                setError("Invalid EAN (European Article Number) [e.g. 0799439112766].");
            }
        } else if (selectedValue === "isEmail") {
            if (validator.isEmail(inputValue.trim())) {
                setInfo("Input string is an email.");
            } else {
                setError("Invalid email address [e.g. ashish@ranjan.com].");
            }
        } else if (selectedValue === "isEmpty") {
            if (validator.isEmpty(inputValue.trim())) {
                setInfo("Input string has length zer0.");
            } else {
                setError("Input is not empty.");
            }
        } else if (selectedValue === "isFloat") {
            if (validator.isFloat(inputValue.trim())) {
                setInfo("Input string is a float.");
            } else {
                setError("Invalid float number [e.g. 12.34].");
            }
        } else if (selectedValue === "isFQDN") {
            if (validator.isFQDN(inputValue.trim())) {
                setInfo("Input string is fully qualified domain name.");
            } else {
                setError("Invalid fully qualified domain name [e.g.  www.ashishranjan.net].");
            }
        } else if (selectedValue === "isFreightContainerID") {
            if (validator.isFreightContainerID(inputValue.trim())) {
                setInfo("Input string is a valid ISO 6346 shipping container identification..");
            } else {
                setError("Invalid ISO 6346 shipping container identification [e.g. MSCU5285725].");
            }
        } else if (selectedValue === "isHexadecimal") {
            if (validator.isHexadecimal(inputValue.trim())) {
                setInfo("Input string is a hexadecimal number.");
            } else {
                setError("Invalid hexadecimal number [e.g. 7B316].");
            }
        } else if (selectedValue === "isHexColor") {
            if (validator.isHexColor(inputValue.trim())) {
                setInfo("Input string is a hexadecimal color.");
            } else {
                setError("Invalid hexadecimal color [e.g. #ff0000].");
            }
        } else if (selectedValue === "isHSL") {
            if (validator.isHSL(inputValue.trim())) {
                setInfo("Input string is  an HSL (hue, saturation, lightness, optional alpha) color based on CSS Colors Level 4 specification.");
            } else {
                setError("Invalid HSL [e.g. hsl(39, 100%, 50%)].");
            }
        } else if (selectedValue === "isIBAN") {
            if (validator.isIBAN(inputValue.trim())) {
                setInfo("Input string is an IBAN (International Bank Account Number)");
            } else {
                setError("Invalid IBAN [e.g. NO93 8601 1117 947].");
            }
        } else if (selectedValue === "isIMEI") {
            if (validator.isIMEI(inputValue.trim())) {
                setInfo("Input string is a valid IMEI number");
            } else {
                setError("Invalid IMEI number [e.g. 352099001761481].");
            }
        } else if (selectedValue === "isInt") {
            if (validator.isInt(inputValue.trim())) {
                setInfo("Input string is an integer");
            } else {
                setError("Invalid integer [e.g. 2024].");
            }
        } else if (selectedValue === "isIP") {
            if (validator.isIP(inputValue.trim())) {
                setInfo("Input string is an IP (version 4 or 6)");
            } else {
                setError("Invalid IP (version 4 or 6). [e.g. 127.0.0.1]");
            }
        } else if (selectedValue === "isISBN") {
            if (validator.isISBN(inputValue.trim())) {
                setInfo("Input string is an ISBN");
            } else {
                setError("Invalid ISBN. [e.g. 0-061-96436-0]");
            }
        } else if (selectedValue === "isJSON") {
            if (validator.isJSON(inputValue.trim())) {
                setInfo("Input string is valid JSON (note: uses JSON.parse)");
            } else {
                setError(`Invalid JSON [e.g. { "name": "Ashish Ranjan" }].`);
            }
        } else if (selectedValue === "isJWT") {
            if (validator.isJWT(inputValue.trim())) {
                setInfo("Input string is valid JWT token");
            } else {
                setError("Invalid JWT token [e.g. eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c].");
            }
        } else if (selectedValue === "isLatLong") {
            if (validator.isLatLong(inputValue.trim())) {
                setInfo("Input string is a valid latitude-longitude coordinate.");
            } else {
                setError("Invalid latitude-longitude coordinate [e.g. 28.614247286847714, 77.20820168563155].");
            }
        } else if (selectedValue === "isMACAddress") {
            if (validator.isMACAddress(inputValue.trim())) {
                setInfo("Input string is a MAC address.");
            } else {
                setError("Invalid MAC address [e.g. 00-B0-D0-63-C2-26].");
            }
        } else if (selectedValue === "isMD5") {
            if (validator.isMD5(inputValue.trim())) {
                setInfo("Input string is a MD5 hash.");
            } else {
                setError("Invalid MD5 hash [e.g. 938c2cc0dcc05f2b68c4287040cfcf71].");
            }
        } else if (selectedValue === "isMimeType") {
            if (validator.isMimeType(inputValue.trim())) {
                setInfo("Input string is matches to a valid MIME type format.");
            } else {
                setError("Invalid MIME type format [e.g. application/pdf].");
            }
        } else if (selectedValue === "isMobilePhone") {
            if (validator.isMobilePhone(inputValue.trim())) {
                setInfo("Input string is a mobile phone number.");
            } else {
                setError("Invalid phone number [e.g. +918123747965].");
            }
        } else if (selectedValue === "isNumeric") {
            if (validator.isNumeric(inputValue.trim())) {
                setInfo("Input string is contains only numbers.");
            } else {
                setError("Invalid number [e.g. 234].");
            }
        } else if (selectedValue === "isOctal") {
            if (validator.isOctal(inputValue.trim())) {
                setInfo("Input string is a valid octal number.");
            } else {
                setError("Invalid octal number [234].");
            }
        } else if (selectedValue === "isPort") {
            if (validator.isPort(inputValue.trim())) {
                setInfo("Input string is a valid port number.");
            } else {
                setError("Invalid port number [e.g. 1198].");
            }
        } else if (selectedValue === "isRgbColor") {
            if (validator.isRgbColor(inputValue.trim())) {
                setInfo("Input string is a rgb or rgba color.");
            } else {
                setError("Invalid rgb color [e.g. rgb(0,0,0)].");
            }
        } else if (selectedValue === "isSlug") {
            if (validator.isSlug(inputValue.trim())) {
                setInfo("Input string is of type slug.");
            } else {
                setError("Invalid slug [e.g. /product-name].");
            }
        } else if (selectedValue === "isStrongPassword") {
            if (validator.isStrongPassword(inputValue.trim())) {
                setInfo("Input string is can be considered a strong password or not.");
            } else {
                setError("Input string is not a strong password [e.g. P@$$w0rd].");
            }
        } else if (selectedValue === "isURL") {
            if (validator.isURL(inputValue.trim())) {
                setInfo("Input string is a URL.");
            } else {
                setError("Input string is not a URL [e.g. ashishranjan.net].");
            }
        } else if (selectedValue === "isUUID") {
            if (validator.isUUID(inputValue.trim())) {
                setInfo("Input string is a UUID.");
            } else {
                setError("Input string is not a UUID [e.g. 550e8400-e29b-41d4-a716-446655440000].");
            }
        }
    }, [selectedValue, inputValue]);

    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>Validators</h3>

            <div className={styles.validatorsContainer}>
                <FormControl>
                    <FormLabel id="validators-buttons-group-label">Validators</FormLabel>
                    <RadioGroup
                        aria-labelledby="validators-buttons-group-label"
                        defaultValue="isAlpha"
                        name="radio-buttons-group"
                        value={selectedValue}
                        onChange={event => setSelectedValue(event.target.value)}
                    >
                        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                            <FormControlLabel value="isAlpha" control={<Radio />} label="isAlpha" />
                            <FormControlLabel value="isAlphanumeric" control={<Radio />} label="isAlphanumeric" />
                            <FormControlLabel value="isAscii" control={<Radio />} label="isAscii" />
                            <FormControlLabel value="isBase32" control={<Radio />} label="isBase32" />
                            <FormControlLabel value="isCreditCard" control={<Radio />} label="isCreditCard" />
                            <FormControlLabel value="isEAN" control={<Radio />} label="isEAN" />
                            <FormControlLabel value="isEmail" control={<Radio />} label="isEmail" />
                            <FormControlLabel value="isEmpty" control={<Radio />} label="isEmpty" />
                            <FormControlLabel value="isFloat" control={<Radio />} label="isFloat" />
                            <FormControlLabel value="isFQDN" control={<Radio />} label="isFQDN" />
                            <FormControlLabel value="isFreightContainerID" control={<Radio />} label="isFreightContainerID" />
                            <FormControlLabel value="isHexadecimal" control={<Radio />} label="isHexadecimal" />
                            <FormControlLabel value="isHexColor" control={<Radio />} label="isHexColor" />
                            <FormControlLabel value="isHSL" control={<Radio />} label="isHSL" />
                            <FormControlLabel value="isIBAN" control={<Radio />} label="isIBAN" />
                            <FormControlLabel value="isIMEI" control={<Radio />} label="isIMEI" />
                            <FormControlLabel value="isInt" control={<Radio />} label="isInt" />
                            <FormControlLabel value="isIP" control={<Radio />} label="isIP" />
                            <FormControlLabel value="isISBN" control={<Radio />} label="isISBN" />
                            <FormControlLabel value="isJSON" control={<Radio />} label="isJSON" />
                            <FormControlLabel value="isJWT" control={<Radio />} label="isJWT" />
                            <FormControlLabel value="isLatLong" control={<Radio />} label="isLatLong" />
                            <FormControlLabel value="isMACAddress" control={<Radio />} label="isMACAddress" />
                            <FormControlLabel value="isMD5" control={<Radio />} label="isMD5" />
                            <FormControlLabel value="isMimeType" control={<Radio />} label="isMimeType" />
                            <FormControlLabel value="isMobilePhone" control={<Radio />} label="isMobilePhone" />
                            <FormControlLabel value="isNumeric" control={<Radio />} label="isNumeric" />
                            <FormControlLabel value="isOctal" control={<Radio />} label="isOctal" />
                            <FormControlLabel value="isPort" control={<Radio />} label="isPort" />
                            <FormControlLabel value="isRgbColor" control={<Radio />} label="isRgbColor" />
                            <FormControlLabel value="isSlug" control={<Radio />} label="isSlug" />
                            <FormControlLabel value="isStrongPassword" control={<Radio />} label="isStrongPassword" />
                            <FormControlLabel value="isURL" control={<Radio />} label="isURL" />
                            <FormControlLabel value="isUUID" control={<Radio />} label="isUUID" />
                        </Box>
                    </RadioGroup>
                </FormControl>
            </div>

            <div className={styles.inputContainer}>
                <TextField
                    value={inputValue}
                    onChange={event => setInputValue(event.target.value)}
                    className={styles.inputValue}
                    error={error.length > 0}
                    helperText={error.length > 0 ? error : ""}
                    fullWidth
                    label={"Write here something"}
                    placeholder={"write here something"}
                />
                <div className={styles.info}>{info}</div>
            </div>
        </div>
    )
}

export default Validators

