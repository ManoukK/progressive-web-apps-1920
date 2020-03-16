const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

return gulp.src([
 './public/css/*.css',
])

//voegt css bestanden samen tot 1 bestand
    .pipe(concat('index.css'))
//maakt het css bestand "kleiner"
    .pipe(cleanCSS())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest('./public/static/'));