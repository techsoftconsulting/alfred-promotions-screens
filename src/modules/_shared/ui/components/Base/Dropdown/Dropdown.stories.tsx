import { Image } from '@main-components/Base';
import images from '@modules/_shared/ui/images/images';
import React from 'react';
import { DropdownMenu } from '.';
import Text from '../../Typography/Text';
import { Box } from '../Box';
export default {
    title: 'Global/Base/Dropdown',
    component: DropdownMenu,
    argTypes: {
        AnchorComponent: {
            control: null,
            description: 'Placeholder press component'
        },
        options: {
            type: { name: 'object', required: false },
            control: {
                options: 'object'
            },
            description: 'Placeholder press component',
            defaultValue: [
                {
                    label: 'Profile'
                },
                {
                    label: 'Subscription'
                },
                {
                    label: 'Settings'
                },
                {
                    label: 'Email settings'
                },
                {
                    label: 'Pricing'
                }
            ]
        }
    }
};

export const Basic = (args) => {
    return (
        <Box width={500}>
            <DropdownMenu
                {...args}
                AnchorComponent={
                    <Box style={{ cursor: 'pointer' }}>
                        <Box flexDirection="row" alignItems="center">
                            <Box
                                borderRadius={40 / 2}
                                borderWidth={1}
                                borderColor="greyMedium"
                                width={40}
                                height={40}
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Image
                                    source={images.USER_DEFAULT_PICTURE}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        resizeMode: 'cover'
                                    }}
                                />
                            </Box>
                            <Box ml="s">
                                <Text>Eduardo Carvallo</Text>
                            </Box>
                        </Box>
                    </Box>
                }
            />
        </Box>
    );
};

Basic.args = {};
