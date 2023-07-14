import { createTheme, ThemeProvider as MUIStylesProvider } from '@mui/material/styles';

import { ThemeProvider } from '@shopify/restyle';

const themeM = createTheme({
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    border: 0
                },
                focused: {
                    border: 0
                },
                input: {
                    border: 0
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                inputFocused: {
                    border: 0,
                    outline: 'none'
                },
                input: {
                    border: 0,
                    outline: 'none'
                }
            }
        }
    }
});

export function StylesProvider({ theme, children }) {
    return (
        <MUIStylesProvider
            theme={themeM}
        >
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </MUIStylesProvider>
    );
}