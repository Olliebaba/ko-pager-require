var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

// sets watchers for project
gulp.task('default', function() {
  browserSync.init({
    server: "app/"
  });

  gulp.watch("app/**/*").on('change', browserSync.reload);
});
