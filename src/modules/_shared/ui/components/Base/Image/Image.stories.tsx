import React from 'react';
import { Image } from '.';

export default {
    title: 'Global/Base/Image',
    component: null,
    argTypes: {
        source: {
            description: 'Image url',
            defaultValue:
                'https://png.pngtree.com/element_origin_min_pic/17/01/06/b98ad3bd084736c30cced2dd516b5af2.jpg',
            control: {
                type: 'text'
            }
        },
        style: {
            defaultValue: {
                resizeMode: 'contain',
                width: 400,
                height: 400
            },
            control: {
                type: 'object'
            }
        }
    }
};

export const Basic = (args) => <Image {...args} />;

Basic.args = {};
