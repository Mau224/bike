const gulp = require('gulp');
const concat = require('gulp-concat');

const vendorsScripts = [
  'node_modules/jquery/dist/jquery.min.js',
  'node_modules/jquery-mask-plugin/dist/jquery.mask.min.js'
];

module.exports = function vendors(cb) {
  return vendorsScripts.length
    ? gulp.src(vendorsScripts)
      .pipe(concat('vendors.js'))
      .pipe(gulp.dest('build/static/js/'))
    : cb();
};
