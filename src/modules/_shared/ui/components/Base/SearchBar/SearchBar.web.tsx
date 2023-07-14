import { useTheme } from '@modules/_shared/ui/theme/AppTheme';
import React, { useEffect } from 'react';
import { Searchbar as BaseSearchBar } from 'react-native-paper';
import { SearchBarProps } from './SearchBarProps';

export function SearchBar({
    placeholder = 'Busca...',
    value,
    ...props
}: SearchBarProps) {
    const [searchQuery, setSearchQuery] = React.useState('');
    const theme = useTheme();

    const onChangeSearch = (q) => {
        setSearchQuery(q);
        props.onChange && props.onChange(q);
    };

    useEffect(() => {
        setSearchQuery(value ?? '');
    }, [value]);

    return (
        <BaseSearchBar
            autoFocus={props.autoFocus}
            placeholder={placeholder}
            onChangeText={onChangeSearch}
            onSubmitEditing={(query) => {
                setSearchQuery(searchQuery);
                props.onSubmit && props.onSubmit(searchQuery);
            }}
            value={searchQuery}
            selectionColor={theme.colors.textInputColor}
            iconColor={theme.colors.black}
            pointerEvents={props.pointerEvents as any}
            theme={{
                colors: {
                    placeholder: theme.colors.inputPlaceholderColor,
                    text: theme.colors.textInputColor
                },
                fonts: {
                    regular: theme.textVariants.body
                }
            }}
            inputStyle={{
                fontSize: theme.textVariants.inputLabel.fontSize
            }}
            style={{
                backgroundColor: props.bg ? theme.colors[props.bg] : 'white',
                borderRadius: 15,
                height: 45,
                outline: 'none',
                boxShadow: 'none',
                elevation: 5,
                ...props.style
            }}
            textAlign={undefined}
        />
    );
}
