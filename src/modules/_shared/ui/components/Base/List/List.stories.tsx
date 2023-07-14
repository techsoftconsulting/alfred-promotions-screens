import React from 'react';
import { List, ListItem } from '.';
import Text from '../../Typography/Text';
import { Box } from '../Box';
import { Icon } from '../Icon';

export default {
    title: 'Global/Base/List',
    component: List,
    argTypes: {}
};

export const Basic = (args) => {
    return (
        <Box width={200}>
            <List {...args} style={{ width: '100%' }}>
                <ListItem
                    left={() => (
                        <Box alignItems="center" justifyContent="center">
                            <Icon
                                type="font-awesome-5"
                                name="image"
                                color="secondaryMain"
                            />
                        </Box>
                    )}
                    title={<Text color="secondaryMain">Option 1</Text>}
                    onPress={() => {}}
                ></ListItem>
                <ListItem
                    left={() => (
                        <Box alignItems="center" justifyContent="center">
                            <Icon
                                type="font-awesome-5"
                                name="camera"
                                color="secondaryMain"
                            />
                        </Box>
                    )}
                    title={<Text color="secondaryMain">Option 2</Text>}
                    onPress={() => {}}
                ></ListItem>
                <ListItem
                    left={() => (
                        <Box alignItems="center" justifyContent="center">
                            <Icon
                                type="font-awesome-5"
                                name="camera"
                                color="secondaryMain"
                            />
                        </Box>
                    )}
                    title={<Text color="secondaryMain">Option 3</Text>}
                    onPress={() => {}}
                ></ListItem>
                <ListItem
                    left={() => (
                        <Box alignItems="center" justifyContent="center">
                            <Icon
                                type="font-awesome-5"
                                name="camera"
                                color="secondaryMain"
                            />
                        </Box>
                    )}
                    title={<Text color="secondaryMain">Option 4</Text>}
                    onPress={() => {}}
                ></ListItem>
            </List>
        </Box>
    );
};

Basic.args = {};
