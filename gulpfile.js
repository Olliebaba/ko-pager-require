var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    run = require('gulp-run');

// sets watchers for project
gulp.task('default', ['sass'], function() {
  browserSync.init({
    server: "app/"
  });
  gulp.watch('app/styles/**/*.scss', ['sass']);
  gulp.watch("app/**/*").on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src('./app/styles/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano())
    .pipe(gulp.dest('./app/styles'))
    .pipe(browserSync.stream());
});

gulp.task('bundle', function() {
  return run('node r.js -o build.js');
});

// sets watchers for project
gulp.task('prod', function() {
  return run('node r.js -o build.js').exec([], function() {
    browserSync.init({
      server: "dist/"
    });

  });
});
