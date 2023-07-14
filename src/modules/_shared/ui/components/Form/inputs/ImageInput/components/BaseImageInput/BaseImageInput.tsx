import { Box } from '@main-components/Base/Box';
import React, { useState } from 'react';
import { BaseImageInputProps } from './BaseImageInputProps';
import { ImageChooser } from './components/ImageChooser';
import { ImageViewer } from './components/ImageViewer';
import { Platform } from 'react-native';
import {
    useImageChooserOptions
} from '@main-components/Form/inputs/ImageInput/components/BaseImageInput/components/ImageChooser/ImageChooser';
import uuid from 'react-native-uuid';

export default function BaseImageInput(props: BaseImageInputProps) {
    const { onChange, initialImage, defaultImage, fullWidth = true } = props;

    const [image, setImage] = useState(null);
    const [showImageChooser, setShowImageChooser] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);

    const { pickImage, loading } = useImageChooserOptions();

    const toggleImageChooser = async () => {

        if (Platform.OS == 'web') {
            await pickImage(onImageSelected);
            return;
        }
        setShowImageChooser(!showImageChooser);
    };

    const onImageSelected = ({ image: selectedImage, base64 }: any) => {
        setShowImageChooser(false);
        setIsDeleted(false);
        setImage(selectedImage);

        fetch(selectedImage)
        .then((res) => res.blob())
        .then((blob) => {
            const ext = getExtension(selectedImage);
            const fileName = uuid.v4().toString() + '.' + ext;
            onChange && onChange({ base64, blob, fileName, image: selectedImage });
        });
    };

    const getExtension = (url: string) => {

        if (Platform.OS == 'web') {
            return url.split('/')[1].split(';').shift();
        }

        return url.split('/').pop();
    };

    const onRemoveImage = () => {
        setImage(null);
        setIsDeleted(true);
        onChange && onChange(null);
    };

    const imageToShow = isDeleted
            ? defaultImage
            : image || initialImage || defaultImage;
    const isDefaultImage = isDeleted ? true : !image && !initialImage;

    const InputImageViewer = props.ImageViewer ?? ImageViewer;

    const isLoading = loading || props.loading;

    return (
            <Box>
                {
                    React.useMemo(
                            () => (
                                    <Box
                                            flexDirection='column'
                                            justifyContent='center'
                                    >
                                        <InputImageViewer
                                                loading={isLoading}
                                                isDefaultImage={isDefaultImage}
                                                image={imageToShow}
                                                onChange={toggleImageChooser}
                                                onRemove={onRemoveImage}
                                                fullWidth={fullWidth}
                                        />

                                        <ImageChooser
                                                isVisible={showImageChooser}
                                                onImageSelected={onImageSelected}
                                                onClose={toggleImageChooser}
                                        />
                                    </Box>
                            ),
                            [imageToShow, isDefaultImage, showImageChooser, isLoading, Platform.OS]
                    )

                }
            </Box>
    );
}
