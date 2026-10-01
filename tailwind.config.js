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
                // Finalized Color Palette
                bg: {
                    DEFAULT: '#FFFFFF',     // Main background
                    secondary: '#F0F0F0',   // Secondary background for section separation
                    card: '#FFFFFF',        // Card background
                },
                text: {
                    primary: '#333333',      // Primary text / charcoal
                    secondary: '#707070',    // Secondary text / gray
                },
                border: {
                    DEFAULT: '#D9D9D9',      // Subtle border
                },
                accent: {
                    DEFAULT: '#8F3D45',      // Signature burgundy accent
                    hover: '#733039',        // Burgundy hover
                },
                dark: {
                    bg: '#292124',           // Dark section background
                    secondary: '#231B1E',    // Secondary dark container
                    card: '#32282B',         // Dark section card background
                    text: '#FFFFFF',         // Light text in dark sections
                    muted: '#D9D9D9',        // Muted text in dark sections
                    border: '#42363A',       // Dark section border
                    accent: '#8F3D45',       // Burgundy accent
                    accentHover: '#733039',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                subtle: '0 2px 10px rgba(0, 0, 0, 0.04)',
            },
            borderRadius: {
                button: '6px',
                card: '8px',
            }
        },
    },
    plugins: [],
}
