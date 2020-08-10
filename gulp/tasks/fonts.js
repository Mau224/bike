const gulp = require('gulp');

// Копируем все шрифты из папки dev в build

module.exports = function fonts() {
  return gulp.src('dev/static/fonts/**/*.{woff2,woff}')
    .pipe(gulp.dest('build/static/fonts'))
};
