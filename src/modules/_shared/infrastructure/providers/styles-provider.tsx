import {ThemeProvider} from '@shopify/restyle';

export function StylesProvider({theme, children}) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}