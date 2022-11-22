// This particular flavor also includes a tiny Promise shim for cross-browser compatibility
const FontFaceObserver = require('fontfaceobserver/fontfaceobserver.js')
const html = document.documentElement

// Replace these with your project web fonts
const bodyFont = new FontFaceObserver('OpenSans')

// Should reference any and all custom Font Families being used in our so we
// don't hide any text during the intial page load.

if (!html.classList.contains('fonts-loaded')) {
  html.classList.add('fonts-loading')

  Promise.all([
    bodyFont.load()
  ]).then(() => {
    html.classList.remove('fonts-loading')
    html.classList.add('fonts-loaded')
    sessionStorage.fontsLoaded = true
  }).catch((error) => {
    console.warn(`Font-loader error: ${error}`)

    html.classList.remove('fonts-loading')
    html.classList.add('fonts-failed')
  })
}
