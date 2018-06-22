const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const imageminPngquant = require('imagemin-pngquant')

gulp.task('default', () => {
  gulp.src(['src/**/*.png', 'static/**/*.png'])
    .pipe(imagemin([
      imageminPngquant()
    ], {
      verbose: true
    }))
    .pipe(gulp.dest(file => {
      return file.base
    }))
})
