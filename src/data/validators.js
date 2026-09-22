import validator from "validator";

export const VALIDATORS = [
    {
        id: "isAlpha",
        label: "Alpha",
        description: "Checks whether the value contains letters only.",
        example: "Ashish",
        validate: (value) => validator.isAlpha(value),
    },
    {
        id: "isAlphanumeric",
        label: "Alphanumeric",
        description:
            "Checks whether the value contains letters and numbers only.",
        example: "Ashish1198",
        validate: (value) => validator.isAlphanumeric(value),
    },
    {
        id: "isAscii",
        label: "ASCII",
        description: "Checks whether the value contains ASCII characters only.",
        example: "Hello123",
        validate: (value) => validator.isAscii(value),
    },
    {
        id: "isBase32",
        label: "Base32",
        description: "Checks whether the value is a valid Base32 string.",
        example: "JBSWY3DPEBLW64TMMQ======",
        validate: (value) => validator.isBase32(value),
    },
    {
        id: "isCreditCard",
        label: "Credit Card",
        description: "Checks whether the value is a valid credit card number.",
        example: "4111111111111111",
        validate: (value) => validator.isCreditCard(value),
    },
    {
        id: "isEAN",
        label: "EAN",
        description: "Checks whether the value is a valid EAN barcode number.",
        example: "4006381333931",
        validate: (value) => validator.isEAN(value),
    },
    {
        id: "isEmail",
        label: "Email",
        description: "Checks whether the value is a valid email address.",
        example: "ashish@example.com",
        validate: (value) => validator.isEmail(value),
    },
    {
        id: "isEmpty",
        label: "Empty",
        description: "Checks whether the value has zero length.",
        example: "",
        allowEmptyInput: true,
        validate: (value) => validator.isEmpty(value),
    },
    {
        id: "isFloat",
        label: "Float",
        description:
            "Checks whether the value is a valid floating-point number.",
        example: "1198.25",
        validate: (value) => validator.isFloat(value),
    },
    {
        id: "isFQDN",
        label: "FQDN",
        description:
            "Checks whether the value is a fully qualified domain name.",
        example: "www.example.com",
        validate: (value) => validator.isFQDN(value),
    },
    {
        id: "isFreightContainerID",
        label: "Freight Container ID",
        description:
            "Checks whether the value is a valid freight container identification number.",
        example: "CSQU3054383",
        validate: (value) => validator.isFreightContainerID(value),
    },
    {
        id: "isHexadecimal",
        label: "Hexadecimal",
        description:
            "Checks whether the value contains hexadecimal characters.",
        example: "A1B2C3",
        validate: (value) => validator.isHexadecimal(value),
    },
    {
        id: "isHexColor",
        label: "Hex Color",
        description: "Checks whether the value is a valid hexadecimal color.",
        example: "#fe4500",
        validate: (value) => validator.isHexColor(value),
    },
    {
        id: "isHSL",
        label: "HSL",
        description: "Checks whether the value is a valid HSL or HSLA color.",
        example: "hsl(120, 100%, 50%)",
        validate: (value) => validator.isHSL(value),
    },
    {
        id: "isIBAN",
        label: "IBAN",
        description:
            "Checks whether the value is a valid international bank account number.",
        example: "GB82WEST12345698765432",
        validate: (value) => validator.isIBAN(value),
    },
    {
        id: "isIMEI",
        label: "IMEI",
        description: "Checks whether the value is a valid IMEI number.",
        example: "490154203237518",
        validate: (value) => validator.isIMEI(value),
    },
    {
        id: "isInt",
        label: "Integer",
        description: "Checks whether the value is a valid integer.",
        example: "1198",
        validate: (value) => validator.isInt(value),
    },
    {
        id: "isIP",
        label: "IP Address",
        description:
            "Checks whether the value is a valid IPv4 or IPv6 address.",
        example: "192.168.0.1",
        validate: (value) => validator.isIP(value),
    },
    {
        id: "isISBN",
        label: "ISBN",
        description:
            "Checks whether the value is a valid ISBN-10 or ISBN-13 number.",
        example: "9780306406157",
        validate: (value) => validator.isISBN(value),
    },
    {
        id: "isJSON",
        label: "JSON",
        description: "Checks whether the value is valid JSON.",
        example: '{"name":"Ashish"}',
        validate: (value) => validator.isJSON(value),
    },
    {
        id: "isJWT",
        label: "JWT",
        description: "Checks whether the value is a valid JSON Web Token.",
        example:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMTk4In0.signature",
        validate: (value) => validator.isJWT(value),
    },
    {
        id: "isLatLong",
        label: "Latitude / Longitude",
        description:
            "Checks whether the value is a valid latitude and longitude pair.",
        example: "12.9716,77.5946",
        validate: (value) => validator.isLatLong(value),
    },
    {
        id: "isMACAddress",
        label: "MAC Address",
        description: "Checks whether the value is a valid MAC address.",
        example: "00:1B:44:11:3A:B7",
        validate: (value) => validator.isMACAddress(value),
    },
    {
        id: "isMD5",
        label: "MD5",
        description: "Checks whether the value is a valid MD5 hash.",
        example: "098f6bcd4621d373cade4e832627b4f6",
        validate: (value) => validator.isMD5(value),
    },
    {
        id: "isMimeType",
        label: "MIME Type",
        description: "Checks whether the value is a valid MIME type.",
        example: "application/json",
        validate: (value) => validator.isMimeType(value),
    },
    {
        id: "isMobilePhone",
        label: "Mobile Phone",
        description: "Checks whether the value is a valid mobile phone number.",
        example: "+919876543210",
        validate: (value) => validator.isMobilePhone(value, "any"),
    },
    {
        id: "isNumeric",
        label: "Numeric",
        description:
            "Checks whether the value contains numeric characters only.",
        example: "1198",
        validate: (value) => validator.isNumeric(value),
    },
    {
        id: "isOctal",
        label: "Octal",
        description: "Checks whether the value is a valid octal number.",
        example: "755",
        validate: (value) => validator.isOctal(value),
    },
    {
        id: "isPort",
        label: "Port",
        description:
            "Checks whether the value is a valid TCP or UDP port number.",
        example: "1198",
        validate: (value) => validator.isPort(value),
    },
    {
        id: "isRgbColor",
        label: "RGB Color",
        description: "Checks whether the value is a valid RGB or RGBA color.",
        example: "rgb(254, 69, 0)",
        validate: (value) => validator.isRgbColor(value),
    },
    {
        id: "isSlug",
        label: "Slug",
        description: "Checks whether the value is a valid URL-friendly slug.",
        example: "validator-tool",
        validate: (value) => validator.isSlug(value),
    },
    {
        id: "isStrongPassword",
        label: "Strong Password",
        description:
            "Checks whether the value meets strong password requirements.",
        example: "Validator@1198",
        validate: (value) => validator.isStrongPassword(value),
    },
    {
        id: "isURL",
        label: "URL",
        description: "Checks whether the value is a valid URL.",
        example: "https://www.ashishranjan.net",
        validate: (value) => validator.isURL(value),
    },
    {
        id: "isUUID",
        label: "UUID",
        description: "Checks whether the value is a valid UUID.",
        example: "550e8400-e29b-41d4-a716-446655440000",
        validate: (value) => validator.isUUID(value),
    },
];

export const DEFAULT_VALIDATOR_ID = "isEmail";

export const getValidatorById = (id) =>
    VALIDATORS.find((item) => item.id === id) || VALIDATORS[0];
