import {createTheme} from "@mui/material";

export const mainTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#6E8051',
        },
        secondary: {
            main: '#D36135',
        },
        background: {
            default: '#EEEEEE',
        },
        white: {
            main: '#FFFFFF',
            contrastText: '#000000',
        },
        black: {
            main: '#000000',
            contrastText: '#FFFFFF',
        }
    },
});
