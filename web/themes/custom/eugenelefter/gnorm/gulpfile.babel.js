/*
gulpfile.js
===========
Rather than manage one giant configuration file responsible
for creating multiple tasks, each task has been broken out into
its own file in gulp/tasks.
*/

import { task, series, parallel } from 'gulp'

// import tasks
task('browserSync', require('./gnorm/tasks/browserSync').init)
task('clean', require('./gnorm/tasks/clean').cleanBuild)
task('copy:rootFiles', require('./gnorm/tasks/copy').copyRootFiles)
task('copy:fonts', require('./gnorm/tasks/copy').copyFonts)
task('copy:images', require('./gnorm/tasks/copy').copyImages)
task('create-module', require('./gnorm/tasks/createModule').createModule)
task('styles:build', require('./gnorm/tasks/styles').buildStyles)
task('styles:dev', require('./gnorm/tasks/styles').devStyles)
task('twig:build', require('./gnorm/tasks/twig').buildProd)
task('twig:dev', require('./gnorm/tasks/twig').buildDev)
task('webpack:build', require('./gnorm/tasks/webpack').buildProd)
task('webpack:dev', require('./gnorm/tasks/webpack').buildDev)

task(
  'build',
  series(
    'clean',
    parallel(
      'webpack:build',
      'styles:build'
    ),
    parallel(
      'twig:build',
      'copy:rootFiles',
      'copy:images',
      'copy:fonts'
    )
  )
)
task('build').description = 'Builds project from the app folder into the build, uglifies the JS, and minifies the CSS'

task(
  'watch',
  series(
    parallel(
      'webpack:dev',
      'styles:dev'
    ),
    parallel(
      'twig:dev',
      'copy:rootFiles',
      'copy:images',
      'copy:fonts'
    ),
    'browserSync'
  )
)
task('watch').description = 'Builds assets in development mode, then watches for file changes.'

exports.default = series('watch')