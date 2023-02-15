const { on } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function style(){
      return gulp.src('./ama/scss/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./ama/css'))
            .pipe(browserSync.stream());
}
function watch(){
      browserSync.init({
            server:{
                  baseDir: './ama'
            }
      })
      gulp.watch('./ama/scss/**/*.scss', style);
      gulp.watch('./ama/*.html').on('change', browserSync.reload);
      gulp.watch('./ama/js/**/*.js', style).on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;