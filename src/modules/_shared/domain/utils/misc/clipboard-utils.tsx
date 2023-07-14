import * as Clipboard from 'expo-clipboard';

const ClipboardUtils = {
    copyToClipboard(text: string) {
        Clipboard.setString(text);
    },
    async fetchCopiedText() {
        const text = await Clipboard.getStringAsync();
        return text;
    }
};

export default ClipboardUtils;
