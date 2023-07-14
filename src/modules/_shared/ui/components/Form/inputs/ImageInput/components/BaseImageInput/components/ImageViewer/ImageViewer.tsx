import { Box } from '@main-components/Base/Box';
import { Button } from '@main-components/Base/Button';
import TouchableOpacity from '@main-components/Utilities/TouchableOpacity';
import React, { useState } from 'react';
import { Image } from 'react-native';
import { ImageViewerProps } from './ImageViewerProps';
import {
    ImageCropper
} from '@main-components/Form/inputs/ImageInput/components/BaseImageInput/components/ImageCropper/ImageCropper';

export function ImageViewer(props: ImageViewerProps) {
    const {
        fullWidth = true,
        image,
        isDefaultImage,
        onChange,
        onRemove,
        canCrop,
        cropperOptions
    } = props;

    const [scale, setScale] = useState({ x: 0, y: 0 });
    const [renderedSize, setRenderedSize] = useState({ width: 0, height: 0 });
    const DefaultImageOptions = (
        <Box
            flexDirection='row'
            mt='s'
            justifyContent='center'
        >
            <Button
                backgroundColor='dangerMain'
                onPress={onRemove}
                title='Eliminar'
                size='s'
                flat
                style={{ marginRight: 5 }}
            />

            <Button
                backgroundColor='successMain'
                onPress={onChange}
                title='Cambiar'
                size='s'
                flat
            />

        </Box>
    );

    if (isDefaultImage) {
        return (
            <Box flex={1}>
                <TouchableOpacity onPress={onChange}>
                    <Image
                        source={image}
                        style={{
                            resizeMode: 'contain',
                            alignSelf: 'center',
                            width: fullWidth ? '100%' : 200,
                            height: 300,
                            ...props.imageProps ?? {}
                        }}
                    />
                </TouchableOpacity>
            </Box>
        );
    }


    return (
        <Box flex={1}>
            {
                canCrop && cropperOptions ? (
                    <ImageCropper
                        {...cropperOptions}
                        scale={scale}
                        renderedSize={renderedSize}
                    >
                        <img
                            src={image}
                            style={{ transform: `scale(${1}) rotate(${0}deg)` }}
                            onLoad={(e) => {
                                const { width, height, naturalWidth, naturalHeight } = e.currentTarget;
                                setScale({
                                    x: naturalWidth / width,
                                    y: naturalHeight / height
                                });
                                setRenderedSize({
                                    width,
                                    height
                                });
                            }}
                        />
                    </ImageCropper>

                ) : (
                    <Image
                        source={{ uri: image }}
                        style={{ width: '100%', height: 300, ...props.imageProps ?? {} }}
                    />
                )
            }

            {
                props.renderImageOptions ? props.renderImageOptions({
                    onRemove: onRemove as any,
                    onChange: onRemove as any
                }) : DefaultImageOptions
            }

        </Box>
    );
}
