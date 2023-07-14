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
            selectionColor={theme.colors[props.textColor ?? 'textInputColor']}
            iconColor={theme.colors.black}
            pointerEvents={props.pointerEvents as any}
            theme={{
                colors: {
                    placeholder: theme.colors.inputPlaceholderColor,
                    text: theme.colors[props.textColor ?? 'textInputColor']
                },
                fonts: {
                    regular: {
                        fontFamily: theme.textVariants.body.fontFamily
                    }
                }
            }}
            inputStyle={{
                fontSize: theme.textVariants.inputLabel.fontSize
            }}
            style={{
                backgroundColor: props.bg ? theme.colors[props.bg] : 'white',
                borderRadius: 15,
                height: 45,
                elevation: 5,
                ...props.style
            }}
            textAlign={undefined}
        />
    );
}
