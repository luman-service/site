const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

gulp.task('default', () => {
  gulp.src('src/**/*.png')
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 6}),
    ]))
    .pipe(gulp.dest(file => {
      return file.base
    }))
})
