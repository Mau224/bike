const gulp = require('gulp');
const uglify = require('gulp-uglify');
const argv = require('yargs').argv;
const gulpif = require('gulp-if');
const concat = require('gulp-concat');

// Работа со скриптами

module.exports = function script() {
  return gulp.src('dev/static/js/*.js')
    .pipe(gulpif(argv.prod, uglify()))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('build/js/'));
};
