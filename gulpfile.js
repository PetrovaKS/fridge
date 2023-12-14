const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


gulp.task('makeCss', function() {
    return gulp.src('scss/*.scss').pipe(sass()).pipe(gulp.dest('css/'));
})


gulp.task('default', function () {
    return gulp.watch('scss/**/*', gulp.series('makeCss'))
})