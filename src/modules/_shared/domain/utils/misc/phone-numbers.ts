import parsePhoneNumber from 'libphonenumber-js';

export default function parsePhone(phone: string) {
    const phoneNumber = parsePhoneNumber(phone);

    return {
        countryCallingCode: phoneNumber?.countryCallingCode,
        number: phoneNumber?.nationalNumber,
        country: phoneNumber?.country
    };
}

export function isValidPhone(phone: string) {
    const phoneNumber = parsePhoneNumber(phone);
    return phoneNumber?.isValid();
}
