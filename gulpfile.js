const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

gulp.task('default', () => {
    gulp.src('src/**/*.png')
        .pipe(imagemin({ optimizationLevel: 5 }))
        .pipe(gulp.dest(file => {
            return file.base
        }))
})
