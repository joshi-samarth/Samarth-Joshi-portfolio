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
                // Burgundy + Beige + Charcoal palette tokens
                bg: {
                    DEFAULT: '#F6F0E8',     // Warm beige / ivory
                    secondary: '#EFE8DD',   // Slightly deeper beige for cards/containers
                    card: '#FFFFFF',        // Clean contrast white or light beige
                },
                text: {
                    primary: '#252222',      // Dark charcoal
                    secondary: '#756D69',    // Muted warm gray
                },
                border: {
                    DEFAULT: '#DDD2C8',      // Soft beige-gray
                },
                accent: {
                    DEFAULT: '#8F3D45',      // Deep burgundy
                    hover: '#733039',        // Dark burgundy
                },
                dark: {
                    bg: '#292124',           // Charcoal with subtle burgundy undertone
                    secondary: '#231B1E',    // Darker section variant
                    card: '#32282B',         // Dark section card
                    text: '#F6F0E8',         // Light warm beige text
                    muted: '#DDD2C8',        // Secondary text in dark sections
                    border: '#42363A',       // Dark section border
                    accent: '#8F3D45',       // Burgundy accent
                    accentHover: '#733039',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                subtle: '0 4px 16px rgba(37, 34, 34, 0.04)',
            },
            borderRadius: {
                button: '8px',
                card: '10px',
            }
        },
    },
    plugins: [],
}
