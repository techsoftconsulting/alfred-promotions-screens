import React from 'react';
import { SearchBar } from '.';
import { Box } from '../Box';

export default {
    title: 'Global/Base/SearchBar',
    component: null,
    argTypes: {
        placeholder: {
            defaultValue: 'Search here',
            control: {
                type: 'text'
            }
        }
    }
};

export const Basic = (args) => {
    return (
        <Box backgroundColor="greyLight" p="xl" height={'100vh'}>
            <Box width={250}>
                <SearchBar {...args} />
            </Box>
        </Box>
    );
};

Basic.args = {};
