var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-ruby-sass'),
    webserver = require('gulp-webserver'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    return sass('sass/style.scss', {
      sourcemap: true,
      style: 'expanded'
    })
    .on('error', function (err) {
        console.error('Error!', err.message);
    })
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
  gulp.watch(['sass/*'], ['sass']);
});

gulp.task('webserver', function() {
  gulp.src('public')
    .pipe(webserver({
    livereload: true,
    open: true
    }));
});

gulp.task('default', ['watch', 'sass', 'webserver']);

