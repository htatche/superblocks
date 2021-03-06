/*global require*/

var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var eslint = require('gulp-eslint');
var browserSync = require('browser-sync').create();
var browserify = require('browserify');
var babelify = require('babelify');
// var concat = require('gulp-concat');

gulp.task('images', function () {
    return gulp
    .src('images/*')
    .pipe(plumber())
    .pipe(gulp.dest('dist/images'));
});

gulp.task('es6-lint', function () {
    return gulp
    .src('src/**/*.es6')
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('libs', function () {
    browserify({
        entries: [
            'bower_components/when/es6-shim/Promise.browserify-es6.js'
        ],
        debug: true
    })
    .transform(babelify)
    .bundle().pipe(plumber())
    .pipe(source('Promise.browserify-es6.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/libs'));
});

gulp.task('browserify', ['es6-lint'], function() {
    browserify({
        entries: [
            'src/superblocks.es6'
        ],
        debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(plumber())
    .pipe(source('superblocks.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch-es6', ['browserify'], function() {
    browserSync.reload();
});

gulp.task('watch-images', ['images'], function() {
    browserSync.reload();
});

gulp.task('serve', ['browserify', 'images', 'libs'], function () {

    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('src/**/*.es6', ['watch-es6']);
    gulp.watch('images/*', ['watch-images']);
});
