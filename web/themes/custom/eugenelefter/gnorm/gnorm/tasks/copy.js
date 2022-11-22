const gulp = require('gulp')
const config = require('../config')
const changed = require('gulp-changed')

function copyRootFiles() {
  return gulp
    .src(config.rootFiles.src)
    .pipe(changed(config.rootFiles.dest))
    .pipe(gulp.dest(config.rootFiles.dest))
}

function copyFonts() {
  return gulp
    .src(config.fonts.src)
    .pipe(changed(config.fonts.dest))
    .pipe(gulp.dest(config.fonts.dest))
}

function copyImages() {
  return gulp
    .src(config.images.src)
    .pipe(changed(config.images.dest))
    .pipe(gulp.dest(config.images.dest))
}

module.exports = {
  copyRootFiles: copyRootFiles,
  copyFonts: copyFonts,
  copyImages: copyImages
}
