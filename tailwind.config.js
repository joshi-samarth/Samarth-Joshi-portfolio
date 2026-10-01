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
                // Monochrome Palette: #000000, #333333, #666666, #999999, #CCCCCC
                palette: {
                    black: '#000000',
                    charcoal: '#333333',
                    midgrey: '#666666',
                    lightgrey: '#999999',
                    silver: '#CCCCCC',
                },
                bg: {
                    DEFAULT: '#FFFFFF',     // Main background (Light)
                    secondary: '#FAFAFA',   // Secondary light section background
                    card: '#FFFFFF',        // Light card background
                },
                text: {
                    primary: '#000000',      // Light primary text
                    secondary: '#666666',    // Light secondary text
                    muted: '#999999',        // Light muted text
                },
                border: {
                    DEFAULT: '#CCCCCC',      // Light border
                    dark: '#333333',        // Dark border
                },
                accent: {
                    DEFAULT: '#000000',      // Signature black accent (Light mode)
                    hover: '#333333',        // Black hover
                },
                dark: {
                    bg: '#000000',           // Dark mode background (#000000)
                    secondary: '#121212',    // Dark secondary background
                    card: '#1A1A1A',         // Dark section card background
                    cardHover: '#262626',    // Dark card hover
                    text: '#FFFFFF',         // Light text in dark sections
                    muted: '#999999',        // Muted text in dark sections
                    silver: '#CCCCCC',       // Silver text/details in dark sections
                    border: '#333333',       // Dark section border
                    borderHover: '#666666',  // Dark border hover
                    accent: '#FFFFFF',       // Crisp white accent in dark mode
                    accentHover: '#CCCCCC',  // White hover in dark mode
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                subtle: '0 2px 10px rgba(0, 0, 0, 0.05)',
                card: '0 4px 20px rgba(0, 0, 0, 0.06)',
                darkCard: '0 4px 20px rgba(0, 0, 0, 0.6)',
            },
            borderRadius: {
                button: '6px',
                card: '8px',
            }
        },
    },
    plugins: [],
}
