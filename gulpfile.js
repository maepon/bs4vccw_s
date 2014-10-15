var gulp = require('gulp'),
  browserSync = require('browser-sync'),
  $ = require('gulp-load-plugins')();

var paths = {
  "vhost": "wordpress.local",
  "themes": "../www/wordpress/wp-content/themes/_s/**",
  "sassDir": "../www/wordpress/wp-content/themes/_s/**/*.scss",
  "sass": "../www/wordpress/wp-content/themes/_s/sass/style.scss",
  "style": "../www/wordpress/wp-content/themes/_s/"
}

gulp.task('bs-init', function() {
  browserSync.init(null, {
    proxy: paths.vhost,
    notify: true
  });
});

gulp.task('bs-reload', function() {
  browserSync.reload()
});

gulp.task('styles', function() {
  return gulp.src([paths.sass])
    .pipe($.rubySass({
      style: 'nested',
      precision: 10
    }))
    .pipe(gulp.dest(paths.style))
});

gulp.task('watch', function() {
  gulp.watch([paths.sassDir], ['styles','bs-reload']);
  gulp.watch([paths.themes], ['bs-reload']);
});

gulp.task('default', ['bs-init', 'bs-reload', 'watch']);
