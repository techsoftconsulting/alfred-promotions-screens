import React from 'react';
import { CardList } from '.';
import { Box } from '../Box';

export default {
    title: 'Global/Base/CardList',
    component: CardList,
    argTypes: {
        renderFooter: {
            table: {
                disable: true
            }
        },
        title: {
            defaultValue: 'This is a title'
        },
        items: {
            defaultValue: [
                {
                    title: 'Item 1',
                    description: 'My description',
                    disabled: false,
                    titleNumberOfLines: 1,
                    descriptionNumberOfLine: 1
                },
                {
                    title: 'Item 2',
                    description: 'My description',
                    disabled: false,
                    titleNumberOfLines: 1,
                    descriptionNumberOfLine: 1
                },
                {
                    title: 'Item 3',
                    description: 'My description',
                    disabled: false,
                    titleNumberOfLines: 1,
                    descriptionNumberOfLine: 1
                },
                {
                    title: 'Item 4',
                    description: 'My description',
                    disabled: false,
                    titleNumberOfLines: 1,
                    descriptionNumberOfLine: 1
                },
                {
                    title: 'Item 5',
                    description: 'My description',
                    disabled: false,
                    titleNumberOfLines: 1,
                    descriptionNumberOfLine: 1
                }
            ],
            description:
                'List elements in format  {title: "Item 1", description: "My description", disabled: false,titleNumberOfLines: 1,descriptionNumberOfLine: 1}'
        }
    }
};

export const Basic = (args) => {
    return (
        <Box width={500}>
            <CardList {...args} />
        </Box>
    );
};

Basic.args = {};
