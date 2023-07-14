export default interface Translator {
    translate(key: string, locale: string, options?: any): string;
}
