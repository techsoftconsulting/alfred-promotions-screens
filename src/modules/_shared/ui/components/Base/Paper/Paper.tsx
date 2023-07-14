import {Box} from '@main-components/Base/Box';
import React from 'react';
import {Platform} from 'react-native';
import {PaperProps} from './PaperProps';

export function Paper(props: PaperProps) {
    return (
        <Box
            {...props}
            style={
                [
                    props.style ?? {},
                    {
                        ...Platform.select({
                            web: {
                                boxShadow: '-2px 5px 10px #eceff1'
                            }
                        })
                    }
                ]
            }
        />
    );
}
