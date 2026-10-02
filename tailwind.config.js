/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Light mode:
                // Background: #FAFAF9, Sections: #F2F2F1, Headings: #2F2F2F, Body: #666666, Muted: #999999, Borders: #DDDDDD, Buttons: #222222, Button hover: #000000
                // Dark mode:
                // Background: #181818, Sections: #222222, Headings: #F5F5F5, Body: #B5B5B5, Muted: #888888, Borders: #333333, Buttons: #F5F5F5, Button text: #181818
                bg: {
                    DEFAULT: '#FAFAF9',     // Light Background
                    secondary: '#F2F2F1',   // Light Sections / Cards
                    card: '#F2F2F1',
                },
                text: {
                    primary: '#2F2F2F',      // Light Headings
                    secondary: '#666666',    // Light Body
                    muted: '#999999',        // Light Muted
                },
                border: {
                    DEFAULT: '#DDDDDD',      // Light Borders
                    dark: '#333333',        // Dark Borders
                },
                btn: {
                    DEFAULT: '#222222',      // Light Buttons
                    hover: '#000000',        // Light Button Hover
                },
                dark: {
                    bg: '#181818',           // Dark Background
                    secondary: '#222222',    // Dark Sections / Cards
                    card: '#222222',
                    cardHover: '#2A2A2A',
                    text: '#F5F5F5',         // Dark Headings
                    body: '#B5B5B5',         // Dark Body
                    muted: '#888888',        // Dark Muted
                    border: '#333333',       // Dark Borders
                    btn: '#F5F5F5',          // Dark Buttons
                    btnText: '#181818',      // Dark Button Text
                    btnHover: '#FFFFFF',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                subtle: '0 2px 10px rgba(0, 0, 0, 0.04)',
                card: '0 4px 20px rgba(0, 0, 0, 0.05)',
                darkCard: '0 4px 20px rgba(0, 0, 0, 0.4)',
            },
            borderRadius: {
                button: '6px',
                card: '8px',
            }
        },
    },
    plugins: [],
}
