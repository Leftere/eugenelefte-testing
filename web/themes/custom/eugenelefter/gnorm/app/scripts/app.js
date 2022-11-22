/* eslint-disable no-undef */
if (typeof asset_path !== 'undefined') {
  __webpack_public_path__ = asset_path
}
/* eslint-enable no-undef */

document.documentElement.classList.remove('no-js')

import './utils/polyfills'

// JS-based image lazyloading library
// Use if you need to lazyload background-images or require more complex loading animations.
// Otherwise, just use `loading="lazy"`.
// import 'lazysizes'

// JS Module loader
import init from './modules/loader'

init()
