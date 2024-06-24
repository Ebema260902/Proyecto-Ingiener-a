/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'selector',
    theme: {
        extend: {
            colors: {
                primary: '#966BDD', //Purple
                'secondary-purple': '#B895FC',
                dark: '#1D1D1D',
                'dark-secondary': '#353535',
                gray: '#8A8A8A',
            },
            fontFamily: {
                primary: ['Montserrat', 'sans-serif'],
                secondary: ['Arial', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-light':
                    'linear-gradient(270deg, rgba(226,215,246,1) 0%, rgba(185,156,232,1) 100%)',
                'gradient-dark':
                    'linear-gradient(270deg, rgba(69,41,117,1) 0%, rgba(114,70,187,1) 100%)',
                'gradient-light-li':
                    'linear-gradient(270deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.2) 100%)',
            },
            boxShadow: {
                main: '10px 5px 30px 0px rgba(0,0,0,0.20)',
            },
            height: {
                screen: ['100vh', '100dvh'],
            },
        },
    },
    plugins: [],
}
