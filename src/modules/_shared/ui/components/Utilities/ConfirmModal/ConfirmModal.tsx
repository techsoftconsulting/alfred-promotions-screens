import { Box } from '@main-components/Base/Box';
import { Button } from '@main-components/Base/Button';
import { Modal, ModalProps } from '@main-components/Base/Modal';
import Text from '@main-components/Typography/Text';
import { useTheme } from '@modules/_shared/ui/theme/AppTheme';
import React from 'react';
import { Platform } from 'react-native';

interface ConfirmModalProps extends Omit<ModalProps, 'children'> {
    onConfirm: () => void;
    onClose?: () => void;
    showCancel?: boolean;
    title: string | JSX.Element;
    content: string | JSX.Element;
    cancelText?: string;
    confirmText?: string;
}

export default function ConfirmModal({
    showCancel = true,
    ...props
}: ConfirmModalProps) {
    const theme = useTheme();
    return (
            <Modal
                    {...props}
                    onDismiss={props.onClose}
                    contentContainerStyle={{
                        width: Platform.select({
                            web: '35%',
                            default: '90%'
                        }),
                        flex: Platform.select({
                            web: undefined,
                            default: 0
                        }),
                        top: '30%',
                        alignSelf: 'center',
                        padding: 0
                    }}
            >
                <Box style={{ paddingBottom: 0 }}>
                    <Box
                            padding='m'
                            style={{ paddingBottom: 0 }}
                            justifyContent='center'
                            mb='s'
                    >
                        <Box>
                            {typeof props.title !== 'string' ? (
                                    props.title
                            ) : (
                                    <Text
                                            color='black'
                                            variant='heading3'
                                    >
                                        {props.title}
                                    </Text>
                            )}
                        </Box>
                        <Box></Box>
                    </Box>
                    <Box padding='m'>
                        {typeof props.content !== 'string' ? (
                                props.content
                        ) : (
                                <Text
                                        color='greyMain'
                                        variant='body'
                                >
                                    {props.content}
                                </Text>
                        )}
                    </Box>
                    <Box
                            width='100%'
                            flexDirection='row'
                            justifyContent='center'
                            paddingVertical={'m'}
                    >
                        <Box
                                flex={0.4}
                                mr={'m'}
                        >
                            {showCancel && (
                                    <Button
                                            title={props.cancelText || 'Cancelar'}
                                            titleColor={'greyDark'}
                                            compact
                                            flat
                                            block
                                            backgroundColor={'greyLight'}
                                            onPress={() => {
                                                props.onClose && props.onClose();
                                            }}
                                    />
                            )}
                        </Box>
                        <Box flex={0.4}>
                            <Button
                                    title={props.confirmText || 'Aceptar'}
                                    mode='contained'
                                    titleColor='white'
                                    backgroundColor={'primaryMain'}
                                    compact
                                    flat
                                    block
                                    onPress={() => {
                                        props.onConfirm();
                                    }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Modal>
    );
}
