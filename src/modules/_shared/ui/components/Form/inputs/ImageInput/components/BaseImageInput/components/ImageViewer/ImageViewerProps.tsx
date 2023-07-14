import {
    ImageCropperProps
} from '@main-components/Form/inputs/ImageInput/components/BaseImageInput/components/ImageCropper/ImageCropper';

export interface ImageViewerProps {
    fullWidth?: boolean;
    image: any;
    isDefaultImage?: boolean;
    onChange?: any;
    onRemove?: any;
    imageProps?: any,
    renderImageOptions?: (props: { onRemove: (props?: any) => any, onChange: (props?: any) => any }) => any;
    canCrop?: boolean,
    cropperOptions?: Omit<ImageCropperProps, 'children' | 'scale' | 'renderedSize'>
}
