export const onlyLetters = (text: string) => {
    let str = text.replace(/[ ](?=[ ])|[^A-Za-z ]+/g, '');
    return str;
};

export const onlyNumbers = (text: string) => {
    let str = text.replace(/\D/g, '');
    return str;
};

export const onlyLettersAndNumbers = (text: string) => {
    let str = text.replace(/[^a-z0-9]/gi, '');
    return str;
};

export const onlyLettersAndNoSpaces = (text: string) => {
    let str = text.replace(/[ ](?=[ ])|[^A-Za-z]+/g, '');
    return str;
};

export const maxLengthFilter = (text: string, max: number) => {
    let str = text.slice(0, max);
    return str;
};

export const onlyDecimals = (text: string, places?: number) => {
    let str = text.replace(/[^\d.]/g, '');


    if (places) {
        const dotIndex = str.indexOf('.');

        str = str.substr(0, dotIndex + places + 1);
    }

    return str;
};

export const onlyDecimalsAndSigns = (text: string, places?: number) => {
    let str = text.replace(/[^\d.-]/g, '').replaceAll('..', '.').replaceAll('--', '-');


    if (places) {
        const dotIndex = str.indexOf('.');

        str = str.substr(0, dotIndex + places + 1);
    }

    return str;
};