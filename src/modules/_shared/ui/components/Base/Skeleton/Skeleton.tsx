import React from 'react';
import { View } from 'react-native';
import theme from '@modules/_shared/ui/theme/AppTheme';
import { SkeletonProps } from '@main-components/Base/Skeleton/SkeletonProps';

const defaultRows = 1;
const defaultColor = '#dfdfdf';
const defaultHighlightColor = theme.colors.greyMedium;
const defaultCircleSize = 100;
const defaultSquareSize = 100;
const defaultRectangleHeight = 15;
const defaultRectangleWidth = 200;


export function Skeleton(props: SkeletonProps) {
    let {
        type,
        size,
        color,
        highlightColor,
        height,
        rows,
        loading,
        width,
        children,
        style
    } = props;


    const otherStyles = style;

    if (type === 'square') {
        return (
                <Square
                        loading={loading}
                        children={children}
                        color={color ? color : defaultColor}
                        highlightColor={
                            highlightColor ? highlightColor : defaultHighlightColor
                        }
                        size={size ? size : defaultSquareSize}
                        otherStyles={otherStyles}
                />
        );
    }

    if (type === 'circle') {
        return (
                <Circle
                        loading={loading}
                        children={children}
                        color={color ? color : defaultColor}
                        highlightColor={
                            highlightColor ? highlightColor : defaultHighlightColor
                        }
                        size={size ? size : defaultCircleSize}
                        otherStyles={otherStyles}
                />
        );
    }

    if (type === 'rectangle') {
        let rowCount = defaultRows;

        if (rows > 0) {
            rowCount = parseInt(rows);
        }

        return (
                <Rectangle
                        loading={loading}
                        children={children}
                        rows={rowCount}
                        color={color ? color : defaultColor}
                        highlightColor={
                            highlightColor ? highlightColor : defaultHighlightColor
                        }
                        height={height ? height : defaultRectangleHeight}
                        width={width ? width : undefined}
                        otherStyles={otherStyles}
                />
        );
    }

    return null;
}

function Square(props) {
    if (props.loading) {
        return (
                <View
                        style={{
                            backgroundColor: props.color,
                            height: props.size,
                            width: props.size,
                            ...props.otherStyles
                        }}
                >
                    <View style={{ ...props.style }}>
                        <View
                                style={{
                                    backgroundColor: props.highlightColor,
                                    height: props.size,
                                    width: props.size,
                                    ...props.otherStyles
                                }}
                        />
                    </View>
                </View>
        );
    }

    return props.children ? props.children : null;
}

function Rectangle(props) {
    if (props.loading) {
        return (
                <View
                        style={{
                            backgroundColor: props.color,
                            /* marginLeft: 5,*/
                            /* marginBottom: 10,*/
                            width: '100%',
                            ...(props.otherStyles || {})
                        }}
                >
                    <View style={{ ...props.style }}>
                        <View
                                style={{
                                    backgroundColor: props.highlightColor,
                                    height: props.height,
                                    width: props.width ? props.width : '100%',
                                    ...(props.otherStyles || {})
                                }}
                        />
                    </View>
                </View>
        );
    }

    return props.children ? props.children : null;
}

function Circle(props) {
    if (props.loading) {
        return (
                <View
                        style={{
                            backgroundColor: props.color,
                            height: props.size,
                            width: props.size,
                            borderRadius: parseInt(props.size, 10) / 2
                        }}
                >
                    <View style={{ ...props.style }}>
                        <View
                                style={{
                                    backgroundColor: props.highlightColor,
                                    height: props.size,
                                    width: props.size,
                                    borderRadius: parseInt(props.size, 10) / 2
                                }}
                        />
                    </View>
                </View>
        );
    }

    return props.children ? props.children : null;
}
