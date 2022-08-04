import { createTheme, adaptV4Theme } from '@mui/material';

export const UPDATE_THEME = 'UPDATE_THEME';
export const INITIAL_THEME = createTheme(
    adaptV4Theme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#201e45',
                light: '#95CBF7',
            },
            secondary: {
                main: '#000',
            },
            error: {
                main: '#f17b7b',
            },
        },
    }),
);
