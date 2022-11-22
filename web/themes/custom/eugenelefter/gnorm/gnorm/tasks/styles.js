import { src, dest } from 'gulp'
import { styles } from '../config'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import postcssCustomProperties from 'postcss-custom-properties'
import postcss from 'gulp-postcss'
import sassGlob from 'gulp-sass-glob'
import sourcemaps from 'gulp-sourcemaps'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
const sass = gulpSass(dartSass)

const postCssPlugins = [
  autoprefixer({
    grid: 'autoplace',
  }),
  postcssCustomProperties(),
  cssnano({ preset: ['default', {}] }),
]

// styles:build does not output sourcemaps
function buildStyles() {
  return src(styles.src)
    .pipe(sassGlob())
    .pipe(
      sass({
        includePaths: ['./node_modules']
      }).on('error', sass.logError)
    )
    .pipe(postcss(postCssPlugins))
    .pipe(dest(styles.dest))
}

// styles:dev generates sourcemaps
function devStyles() {
  return src(styles.src)
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(
      sass({
        includePaths: ['./node_modules']
      })
    )
    .pipe(postcss(postCssPlugins))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(styles.dest))
}

module.exports = {
  buildStyles: buildStyles,
  devStyles: devStyles,
}
