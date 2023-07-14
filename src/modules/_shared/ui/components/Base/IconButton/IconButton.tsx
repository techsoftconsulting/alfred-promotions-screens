import { useTheme } from '@modules/_shared/ui/theme/AppTheme';
import React from 'react';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { IconButtonProps } from './IconButtonProps';
import TouchableOpacity from '@main-components/Utilities/TouchableOpacity';
import AppIcon from '@main-components/Base/AppIcon';
import { ActivityIndicator } from '@main-components/Base/ActivityIndicator';

export function IconButton({
    onPress,
    borderRadius = 6,
    iconSize,
    iconName,
    iconType,
    backgroundColor,
    iconColor,
    containerSize,
    containerPadding = 's',
    loading,
    disabled
}: IconButtonProps) {
    const theme = useTheme();

    return (
            <TouchableOpacity
                    onPress={onPress}
                    disabled={disabled}
            >
                <Box
                        padding={containerPadding == null ? null : containerPadding}
                        justifyContent='center'
                        alignItems='center'
                        width={containerSize}
                        height={containerSize}
                        style={{
                            opacity: disabled ? 0.5 : 1
                        }}
                        borderRadius={borderRadius}
                        backgroundColor={backgroundColor}
                >
                    {loading ? (

                            <ActivityIndicator
                                    size={iconSize + 5}
                                    color={iconColor}

                            />
                    ) : (<>
                        {
                            iconType === 'app' ?
                                    <AppIcon
                                            name={iconName}
                                            color={iconColor}
                                            type={iconType}
                                            size={iconSize}
                                    />
                                    : (
                                            <Icon
                                                    name={iconName}
                                                    color={iconColor}
                                                    type={iconType}
                                                    numberSize={iconSize}
                                            />
                                    )
                        }
                    </>)


                    }

                </Box>
            </TouchableOpacity>
    );
}
