var gulp = require('gulp'),
  watch = require('gulp-watch'),
  browserSync = require('browser-sync').create(),
  reload = browserSync.reload;



gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/**/*.html').on("change", reload);
  watch('./app/assets/styles/**/*.css', gulp.series('manageCSS'));
  watch('./app/assets/scripts/**/*.js', gulp.series('scriptsRefresh'));

});

gulp.task('cssInject', function() {
  return gulp.src('./app/temp/styles/styles.css')
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(browserSync.stream());
});
gulp.task('reloadBrowser', function() {
  browserSync.reload();
});

gulp.task('manageCSS', gulp.series('styles', 'cssInject'));
gulp.task('scriptsRefresh', gulp.series('scripts', 'reloadBrowser'));