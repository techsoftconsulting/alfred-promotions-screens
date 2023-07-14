const TextUtils = {
    truncate(text: string, max: number) {
        if (!text) return '';

        if (text.length <= max) return text;

        return text.slice(0, max) + '...';
    },
    insertAt(str = '', sub, pos) {
        return `${str.slice(0, pos)}${sub}${str.slice(pos)}`;
    },
    capitalize(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
};

export default TextUtils;
