/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors(theme) {
                return {
                    primary: {
                        DEFAULT: '#54be96',
                        dark: '#36a379',
                    },

                    gray: {
                        ...theme.colors.gray,
                        100: '#fbfbfb',
                    },

                    black: {
                        ...theme.colors.black,
                        100: '#191a15',
                    },
                };
            },
            screens: {
                xs: '320px',
                md: '768px',
                xl: '1440px',
            },
        },
    },
    plugins: [],
};
