const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const imageminPngquant = require('imagemin-pngquant')

gulp.task('default', () => {
  gulp.src('src/**/*.png')
    .pipe(imagemin([
      imageminPngquant()
    ], {
      vrebose: true
    }))
    .pipe(gulp.dest(file => {
      return file.base
    }))
})
