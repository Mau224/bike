const gulp = require('gulp');
var webp = require("gulp-webp");

module.exports = function web() {
    return gulp.src("dev/static/images/content/**/*.{png,jpg}")
        .pipe(webp({quality: 60}))
        .pipe(gulp.dest("dev/static/images/content"))
        // .pipe(gulp.dest("build/static/images/content"));
};
