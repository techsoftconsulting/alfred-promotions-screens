import ReactCrop, { centerCrop, Crop } from 'react-image-crop';
import React, { useEffect, useState } from 'react';
import { Box } from '@main-components/Base/Box';
import { Button } from '@main-components/Base/Button';

export interface ImageCropperProps {
    onCrop: any,
    children: any,
    width?: number,
    height?: number
    scale: {
        x: number,
        y: number
    },
    renderedSize: {
        width: number,
        height: number
    }
}

export function ImageCropper(props: ImageCropperProps) {
    const [crop, setCrop] = useState<Crop>();

    function centerAspectCrop(
            mediaWidth: number,
            mediaHeight: number,
            aspect: number
    ) {

        return centerCrop(
                {
                    width: props.width,
                    height: props.height,
                    unit: 'px'
                },
                mediaWidth,
                mediaHeight
        );
    }

    useEffect(() => {
        if (props.renderedSize.width == 0 || props.renderedSize.height == 0) return;
        if (props.width == 0 || props.height == 0) return;
        setCrop(centerAspectCrop(props.renderedSize.width, props.renderedSize.height, 1));
    }, [props.renderedSize]);

    return (
            <Box>
                <ReactCrop
                        crop={crop}
                        onChange={c => {
                            setCrop(c);
                        }}
                        minHeight={props.height}
                        minWidth={props.width}
                        maxHeight={props.height}
                        maxWidth={props.width}
                >
                    {props.children}
                </ReactCrop>

                <Box
                        mt={'s'}
                        justifyContent={'center'}
                        alignItems={'center'}
                >
                    <Button
                            backgroundColor='greyMain'
                            onPress={() => {
                                props.onCrop({
                                    ...crop,
                                    scale: props.scale
                                });
                            }}
                            title='Aplicar recorte'
                            size='s'
                            flat
                    />
                </Box>
            </Box>
    );
}