const gulp = require('gulp');
const filter = require('gulp-filter');
const rev = require('gulp-rev');
const override = require('gulp-rev-css-url');

//alleen bestanden in static die css of js zijn worden hierin mee gestuurd
gulp.src([
    './static/**/*.{css,js}',
])
    .pipe(filter(file => !file.path.endsWith('/service-worker.js')))
    .pipe(rev())
    .pipe(override())
    .pipe(gulp.dest('./static/'))
    .pipe(rev.manifest('rev-manifest.json'))
    .pipe(gulp.dest('./static/'));