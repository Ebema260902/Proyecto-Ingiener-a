import 'cally'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useContext } from 'react'
import { modalContext } from '../context/modalContext'

export function Calendar() {
    const { theme } = useContext(modalContext)

    const componentTheme = createTheme({
        components: {
            MuiDateCalendar: {
                styleOverrides: {
                    root: {
                        '@media (min-width:1919px)': {
                            width: 'auto',
                        },
                        '@media (min-width:1366px)': {
                            width: 'fit-content',
                        },
                        '@media (max-width:768px)': {
                            margin: 'auto',
                        },
                    },
                },
            },
            MuiPickersFadeTransitionGroup:{
                styleOverrides: {
                    root: {
                        fontWeight: 'bold',
                        color: theme === 'light' ? 'black' : 'white',
                    },
                },
            },
            MuiPickersCalendarHeader:{
                styleOverrides: {
                    switchViewIcon: {
                        display: 'none',
                    },
                },
            },
            MuiYearCalendar: {
                styleOverrides: {
                    root: {
                        fontWeight: 'bold',
                        color: theme === 'light' ? 'black' : 'white',
                        with: '1rem',
                    },
                },
            },
            MuiDayCalendar: {
                styleOverrides: {
                    weekDayLabel: {
                        fontWeight: 'bold',
                        color: theme === 'light' ? 'black' : 'white',
                    },
                    header:{
                        '@media (min-width:1366px)': {
                            width: '15rem',
                        },
                        '@media (min-width:1535px)': {
                            width: 'fit-content',
                        },
                    }
                },
            },
            MuiPickersDay: {
                styleOverrides: {
                    root: {
                        color: theme === 'light' ? 'black' : 'white',
                    },
                    today:{
                        borderColor: theme === 'light' ? '1px solid black' : '1px solid white',
                    },
                },
            },
            MuiSvgIcon: {
                styleOverrides: {
                    root: {
                        color: theme === 'light' ? 'black' : 'white',
                    },
                },
            },
        },
    })

    return (
        <div className="shadow-main rounded-xl dark:bg-dark-secondary dark:text-white w">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <ThemeProvider theme={componentTheme}>
                    <DateCalendar view={'day'}/>
                </ThemeProvider>
            </LocalizationProvider>
        </div>
    )
}
