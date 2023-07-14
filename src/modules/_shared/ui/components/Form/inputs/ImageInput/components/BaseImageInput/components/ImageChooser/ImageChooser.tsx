import { ActivityIndicator } from '@main-components/Base/ActivityIndicator';
import { Box } from '@main-components/Base/Box';
import { Icon } from '@main-components/Base/Icon';
import { List, ListItem } from '@main-components/Base/List';
import Text from '@main-components/Typography/Text';
import * as Picker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import React, { useState } from 'react';
import { ImageChooserProps } from './ImageChooserProps';
import useDimensions from '@utils/hooks/useDimensions';
import { useTheme } from '@modules/_shared/ui/theme/AppTheme';
import { Modal } from '@main-components/Base/Modal';

export function ImageChooser(props: ImageChooserProps) {
    const { isVisible = false, onClose, onImageSelected } = props;

    const handleOnClose = () => onClose();

    const { pickImage, takePhoto, loading } = useImageChooserOptions();

    const dimensions = useDimensions();
    const theme = useTheme();

    return (
            <Modal
                    onDismiss={handleOnClose}
                    visible={isVisible}
                    contentContainerStyle={{
                        maxHeight: 150,
                        marginHorizontal: theme.spacing.m,
                        top: dimensions.height / 2 - 150
                    }}
                    dismissable={true}
            >
                <Box
                        justifyContent='center'
                        height={150}
                >
                    {loading ? (
                            <Box
                                    flex={1}
                                    justifyContent='center'
                                    alignItems={'center'}
                            >
                                <ActivityIndicator size='large' />
                            </Box>
                    ) : (
                            <List style={{ width: '100%' }}>
                                <ListItem
                                        left={() => (
                                                <Box
                                                        alignItems='center'
                                                        justifyContent='center'
                                                >
                                                    <Icon
                                                            type='font-awesome-5'
                                                            name='image'
                                                            color='secondaryMain'
                                                    />
                                                </Box>
                                        )}
                                        title={
                                            <Text color='secondaryMain'>
                                                Pick an image from camera roll
                                            </Text>
                                        }
                                        onPress={async () => {
                                            await pickImage(onImageSelected);
                                        }}
                                />
                                <ListItem
                                        left={() => (
                                                <Box
                                                        alignItems='center'
                                                        justifyContent='center'
                                                >
                                                    <Icon
                                                            type='font-awesome-5'
                                                            name='camera'
                                                            color='secondaryMain'
                                                    />
                                                </Box>
                                        )}
                                        title={
                                            <Text color='secondaryMain'>Take a photo</Text>
                                        }
                                        onPress={async () => {
                                            await takePhoto(onImageSelected);
                                        }}
                                />
                            </List>
                    )}
                </Box>
            </Modal>
    );
}

export function useImageChooserOptions(props?: { allowMultiple?: boolean }) {
    const allowMultiple = props?.allowMultiple ?? false;

    const [loading, setLoading] = useState(false);

    const hasPermissions = () =>
            Promise.all([
                Permissions.askAsync(Permissions.CAMERA),
                Permissions.askAsync(Permissions.CAMERA_ROLL)
            ])
            .then((r) => r.filter((o) => o.status === 'granted'))
            .then((permissions) => {
                if (permissions.length !== 2) {
                    return new Error(
                            'Camera & Camera Roll Permissions Required'
                    );
                }

                return true;
            });

    const pickImage = async (onImageSelected) => {
        try {
            setLoading(true);

            const result = await Picker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [4, 3],
                base64: true,
                mediaTypes: Picker.MediaTypeOptions.Images,
                quality: 1,
                allowsMultipleSelection: allowMultiple ?? false
            });

            setLoading(false);
            if (!result.cancelled) {

                if (result.selected) {
                    onImageSelected({
                        selected: result.selected.map(e => {
                            return {
                                image: e.uri,
                                base64: e.base64
                            };
                        })
                    });
                    return;
                }

                onImageSelected({
                    image: result.uri,
                    base64: result.base64
                });
            }
        } catch (e) {
            setLoading(false);
        }

    };

    const takePhoto = async (onImageSelected) => {
        if (await hasPermissions()) {
            try {
                setLoading(true);
                const result = await Picker.launchCameraAsync({
                    mediaTypes: Picker.MediaTypeOptions.Images,
                    base64: true,
                    allowsEditing: true,
                    allowsMultipleSelection: false
                });
                setLoading(false);

                if (!result.cancelled) {
                    onImageSelected({
                        image: result.uri,
                        base64: result.base64
                    });
                }
            } catch (error) {
                setLoading(false);

            }
        }
    };


    return {
        loading,
        pickImage,
        takePhoto
    };
}