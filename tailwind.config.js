/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   basictext: ['Montserrat', sans-serif],
      //   fancy: ['Josefin Sans', sans-serif],
      // },
    // fontFamily: {
    //   // 'cursive' : ['Berkshire Swash', cursive],
    //   // 'tabCursive': ['Poiret One', cursive],
    //   // 'tabText': ['Raleway', sans-serif],
    //   // 'sacramento': ['Sacramento', cursive],
    //   // 'sans': ['Josefin Sans', sans-serif, defaultTheme.fontFamily.sans],
    //   // 'bodyText': ['Montserrat', sans-serif],
    //   // 'title': ['Sail', cursive],
    // },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
