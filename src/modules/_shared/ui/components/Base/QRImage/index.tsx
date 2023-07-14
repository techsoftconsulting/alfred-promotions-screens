import QRCode from 'react-native-qrcode-svg';
import SizingUtils from '@utils/misc/sizing-utils';

interface QRImageProps {
    value: any,
    size: number
}

export default function QRImage(props: QRImageProps) {
    return (
        <QRCode
            value={props.value}
            size={SizingUtils.scale(props.size)}
        />
    );
}