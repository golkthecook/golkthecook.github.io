const { dest, src, watch } = require('gulp');

function sass() {
    const sass = require('gulp-sass');
    const sourcemaps = require('gulp-sourcemaps');
    const autoprefixer = require('gulp-autoprefixer');

    return src('_styles/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version', 'ie 10', 'ie 11'))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('css/'));
}

exports.sass = sass;
exports.default = function() {
    sass();
    watch('_styles/**/*.scss', sass);
};