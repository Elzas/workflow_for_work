var gulp = require('gulp'),
    compass = require('gulp-compass'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync');

gulp.task('server', function () {  
  browserSync.init({
    port: 9000,
    server: {
      baseDir: 'app/'
    }
  });
});

gulp.task('compass', function() {
  gulp.src('app/sass/*.scss')
    .pipe(compass({
      config_file: 'config.rb',
      css: 'app/css',
      sass: 'app/sass',
      image: 'app/img'
    }))
    .pipe(gulp.dest('app/css'));
});

gulp.task('watch', function () {
  gulp.watch('app/sass/*.scss', ['compass']);
  gulp.watch(['app/*.html', 'app/css/*.css', 'app/js/*.js']).on('change', browserSync.reload);
});

gulp.task('default', ['compass', 'server', 'watch']);
  