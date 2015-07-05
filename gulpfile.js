var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var eslint = require('gulp-eslint');
var browserSync = require('browser-sync').create();
var browserify = require('browserify');
var babelify = require('babelify');

gulp.task("es6-lint", function () {
    return gulp
    .src('src/**/*.es6')
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format());    
});

gulp.task('browserify', ['es6-lint'], function() {
    browserify({
        entries: 'src/superblocks.es6',
        debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('superblocks.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))        
    .pipe(gulp.dest('dist'));     
});

gulp.task('browserify-watch', ['browserify'], function() {
    browserSync.reload();
});

gulp.task('serve', ['browserify'], function () {

    browserSync.init({
        server: {
            baseDir: "./"
        }        
    });

    gulp.watch('src/**/*.es6', ['browserify-watch']);
});