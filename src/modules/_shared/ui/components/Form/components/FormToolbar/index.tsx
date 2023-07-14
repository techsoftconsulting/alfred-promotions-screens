import { Box } from '@main-components/Base/Box';
import React, { Children, cloneElement, ReactElement } from 'react';

export function FormToolbar(props: {
    onSubmit?: any;
    children: any;
    saving?: boolean;
}) {
    const { children, onSubmit, saving } = props;

    return (
            <Box alignItems='center'>
                {Children.map(
                        children,
                        (child: ReactElement) =>
                                child && cloneElement(child, { onSubmit, loading: saving })
                )}
            </Box>
    );
}
