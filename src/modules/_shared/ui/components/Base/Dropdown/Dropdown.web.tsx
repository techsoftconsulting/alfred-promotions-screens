import BaseMenuItem from '@mui/material/MenuItem';
import React, { useEffect } from 'react';
import { DropdownProps } from './DropdownProps';
import BaseMenu from '@mui/material/Menu';

export const DropdownMenu = React.forwardRef((props: DropdownProps, ref) => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedIndex, setSelectedIndex] = React.useState<number | undefined>();

    useEffect(() => {
        setSelectedIndex(props.options.findIndex(o => o.value == props.selected));
    }, [props.selected, props.options]);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div>
            {React.cloneElement(props.AnchorComponent, {
                'aria-haspopup': true,
                onPress: handleClick,
                onClick: handleClick
            })}

            <BaseMenu
                disableScrollLock={true}
                // id="simple-menu"
                ref={ref}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={props.anchorOrigin}
                classes={
                    {
                        paper: props.className
                    }
                }
            >
                {props.options.map((o, idx) => {
                    return (
                        <DropdownItem
                            key={idx}
                            selected={idx === selectedIndex}
                            onClick={() => {
                                handleClose();
                                o.onClick && o.onClick();
                            }}
                            style={{ ...props.itemStyle ?? {}, ...o.itemStyle }}
                        >
                            {o.label}
                        </DropdownItem>
                    );
                })}
            </BaseMenu>
        </div>
    );
});


export const DropdownItem = React.forwardRef((props, ref) => {
    return (
        <BaseMenuItem
            ref={ref}
            {...props}
            onClick={() => {
                props.onClick && props.onClick();
            }}
        />
    );
});
