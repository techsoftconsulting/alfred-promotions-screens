import * as Linking from 'expo-linking';

type SocialMessage = {
    message?: string;
};

const LinkingUtils = {
    openURL(url: string, target?: string) {
        if (window) {
            window.open(url, target);
            return;
        }
        Linking.openURL(url);
    },
    openScheme(url: string) {
        Linking.openURL(url);
    },
    sendWhatsAppMessage(phoneNumber: string, payload: SocialMessage) {
        const makeUrl = () => {
            // @ts-ignore
            const baseUrl =
                    // @ts-ignore
                    window && window.open
                            ? `https://web.whatsapp.com/send?phone=${phoneNumber}`
                            : `whatsapp://send?phone=${phoneNumber}`;

            return (
                    baseUrl +
                    (payload.message ? `&text=${encodeURI(payload.message)}` : '')
            );
        };

        LinkingUtils.openURL(makeUrl());
    }
};

export default LinkingUtils;
