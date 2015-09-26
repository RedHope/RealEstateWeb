var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var watch = require('gulp-watch');
var sass = require('gulp-sass');

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  });

  gulp.watch(['*.html', 'css/*.css', 'js/*.js', 'fonts/*.*', 'images/*.*'], {cwd: 'app'}, reload);
});