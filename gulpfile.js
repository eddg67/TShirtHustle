var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minify = require('gulp-minify-css');
var expect = require('gulp-expect-file');

// Concatenate & Minify JS
gulp.task('scripts', function() {

var files = ['public_html/controllers/*.js'];
    return gulp.src(files)
        .pipe(expect(files))

        .pipe(concat('all.min2.js'))
        .pipe(minify())
        .pipe(gulp.dest('public_html/build'))
        //.pipe(rename('all.min.js'))
        //.pipe(uglify())
       // .pipe(gulp.dest('public_html/build'));
});

gulp.task('css', function() {

var files = ['public_html/css/*.css'];
    return gulp.src(files)
        .pipe(expect(files))
        .pipe(concat('all.min.css'))
        .pipe(minify())
        .pipe(gulp.dest('public_html/build'));
});

gulp.task('default', ['scripts']);

