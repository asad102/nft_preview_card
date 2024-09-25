/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
  ],
  theme: {
    fontFamily : {
      'Outfit' : ['Outfit', 'sans'],
    },
    fontSize : {
      'heading' : [
        '22px', {
          lineHeight : 'auto',
          letterSpacing : '0px',
          fontWeight : '600'
        }
      ],
      'body' :[
        '18px', {
          lineHeight : '26px',
          letterSpacing : '0px',
          fontWeight : '300'
        }
      ],
      'caption' : [
        '16px', {
          lineHeight : 'auto',
          letterSpacing : '0px',
          fontWeight : '400'
        }
      ],
      'caption-bold' : [
        '16px', {
          lineHeight : 'auto',
          letterSpacing : '0px',
          fontWeight : '600'
        }
      ],
    },
    colors : {
      blue : {
        soft : '#8BACD9',
        darkmain : '#0D192C',
        darkcard : '#15263F',
        darkline : '#2E405A'
      },
      Cyan : '#00FFF8',
      White : '#FFF',
    },
    screens : {
      sc : '350px'
    },
    spacing : {
      600 : '6px',
      650 : '8px',
      700 : '16px',
      800 : '24px',
      890 : '32px',
      900 : '33px'
    },
    borderWidth : {
      1 : '1px',
    },
    borderRadius : {
      1500 : '15px',
      800 : '8px',
      full : '9999px;'
    },
    // width : {
    //   avw : '33px',
    // },
    // height : {
    //   avh : '33px',
    //   auto : 'auto'
    // },
    dropShadow : {
      cardshadow : '0 25px 50px 0, rgba(0,0,0,9.53%)',
    },
    extend: {},
  },
  plugins: [],
}

