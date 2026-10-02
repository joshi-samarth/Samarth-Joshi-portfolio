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
                // Final Visual Color System: Warm Beige + Brown + Dark Espresso
                cream: {
                    DEFAULT: '#F7F3ED',
                    secondary: '#EDE6DA',
                },
                espresso: {
                    DEFAULT: '#291C0E',
                    dark: '#1C1309',
                    card: '#23170B',
                },
                brown: {
                    DEFAULT: '#6E473B',
                    hover: '#4F3028',
                    muted: '#8D6456',
                },
                sand: {
                    DEFAULT: '#D8CEC2',
                    dark: '#4F3028',
                },
                bg: {
                    DEFAULT: '#F7F3ED',     // Light Background
                    secondary: '#EDE6DA',   // Light Sections / Cards
                    card: '#F7F3ED',
                },
                text: {
                    primary: '#291C0E',      // Light Headings
                    secondary: '#6E473B',    // Light Body / Secondary Accent
                    muted: '#6E473B',
                    light: '#F7F3ED',
                },
                border: {
                    DEFAULT: '#D8CEC2',      // Light Borders
                    dark: '#4F3028',        // Dark Borders
                },
                btn: {
                    DEFAULT: '#6E473B',      // Primary Button
                    hover: '#4F3028',        // Primary Button Hover
                },
                dark: {
                    bg: '#171412',           // Dark Main Background
                    secondary: '#211C19',    // Dark Secondary Section
                    card: '#28211D',         // Dark Card Background
                    cardHover: '#322924',
                    text: '#F5EFE8',         // Dark Primary Text
                    body: '#C8BBB0',         // Dark Secondary Text
                    muted: '#96877D',        // Dark Muted Text
                    border: '#40352E',       // Dark Border
                    btn: '#A66B57',          // Dark Accent / Button
                    btnText: '#F5EFE8',      // Dark Button Text
                    btnHover: '#C0836B',     // Dark Accent Hover
                    darkest: '#100E0C',      // Darkest Section (Footer / Contact)
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                subtle: '0 2px 10px rgba(41, 28, 14, 0.04)',
                card: '0 4px 20px rgba(41, 28, 14, 0.06)',
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
