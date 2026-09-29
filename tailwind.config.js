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
                // Light theme exact tokens
                bg: {
                    DEFAULT: '#FAFAF8',
                    secondary: '#F3F4F1',
                    card: '#FFFFFF',
                },
                text: {
                    primary: '#171717',
                    secondary: '#666666',
                },
                border: {
                    DEFAULT: '#E5E5E0',
                },
                accent: {
                    DEFAULT: '#2563EB',
                    hover: '#1D4ED8',
                },
                // Dark theme exact tokens
                dark: {
                    bg: '#111111',
                    secondary: '#181818',
                    card: '#1C1C1C',
                    text: '#F5F5F5',
                    muted: '#A3A3A3',
                    border: '#2A2A2A',
                    accent: '#60A5FA',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                subtle: '0 4px 16px rgba(0, 0, 0, 0.04)',
            },
            borderRadius: {
                button: '8px',
                card: '10px',
            }
        },
    },
    plugins: [],
}
