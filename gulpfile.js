const gulp = require('gulp')
const purgecss = require('gulp-purgecss')
const autoprefixer = require("gulp-autoprefixer");

// Run `gulp css` to remove unused CSS with purgecss.
gulp.task('css', () => {
  return gulp
    .src('_site/**/*.css')
    .pipe(
      purgecss({
        content: ['_site/**/*.html']
      })
    )
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(gulp.dest('_site/'))
})