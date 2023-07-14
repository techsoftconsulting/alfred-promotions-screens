import { Box } from '@main-components/Base/Box';
import { Image } from '@main-components/Base/Image';
import Text from '@main-components/Typography/Text';
import React from 'react';
import styled from 'styled-components/native';
import { Platform } from 'react-native';
import SizingUtils from '@utils/misc/sizing-utils';

const Container = styled.View`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: ${Platform.OS === 'web' ? '100%' : 'undefined'};
`;

const Wrapper = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export interface NoItemsProps {
    image?: any;
    icon?: any;
    title: string;
    actions?: JSX.Element | undefined;
    containerStyle?: any;
}

export default function NoItems({ icon, image, title, actions, containerStyle }: NoItemsProps) {
    return (
            <Container style={containerStyle ?? {}}>
                <Wrapper>
                    {image && (
                            <Image
                                    source={image}
                                    style={{
                                        resizeMode: 'contain',
                                        opacity: 0.7,
                                        filter: 'grayscale(100%)',
                                        width: SizingUtils.mscale(150),
                                        height: SizingUtils.mscale(150)
                                    }}
                            />
                    )}
                    {icon && !image && icon}
                    <Box mt='m'>
                        <Text
                                variant={'body1'}
                                note
                                align='center'
                                style={{ paddingHorizontal: 20 }}
                        >
                            {title}
                        </Text>
                    </Box>

                    {actions && <Box mt='m'>{actions}</Box>}
                </Wrapper>
            </Container>
    );
}
