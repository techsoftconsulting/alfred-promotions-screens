
import React from 'react';
import {
    ImageViewerProps
} from '@main-components/Form/inputs/ImageInput/components/BaseImageInput/components/ImageViewer/ImageViewerProps';

export interface BaseImageInputProps {
    onChange?: any;
    defaultImage: any;
    initialImage?: any;
    fullWidth?: boolean;
    error?: string;
    label?: any;
    helperText?: string;
    ImageViewer?: React.FC<ImageViewerProps>;
    loading?: boolean;
}
