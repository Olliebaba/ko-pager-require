var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    run = require('gulp-run');

// sets watchers for project
gulp.task('default', function() {
  browserSync.init({
    server: "app/"
  });
  gulp.watch("app/**/*").on('change', browserSync.reload);
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
