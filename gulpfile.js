var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minify = require('gulp-minify');
var expect = require('gulp-expect-file');

// Concatenate & Minify JS
gulp.task('scripts', function() {

var files = [
    'public_html/components/version/scripts/*.js',
    'public_html/components/version/angular/angular.js',
    'public_html/components/version/angular-route/angular-route.min.js',
    'public_html/app.js',
    'public_html/services/*.js',
    'public_html/controllers/*.js',
    'public_html/components/version/directives/ng-scroll.js',
    ];

    return gulp.src(files)
        .pipe(expect(files))
        .pipe(concat('app-min.js'))
        //.pipe(minify())
        .pipe(gulp.dest('public_html/build'))

});

gulp.task('css', function() {

var files = [
    'public_html/css/mdb.min.css',
    'public_html/css/font-awesome.min.css'
    ];
    return gulp.src(files)
        .pipe(expect(files))
        .pipe(concat('all.min.css'))
        .pipe(minify())
        .pipe(gulp.dest('public_html/build'));
});

gulp.task('default', ['scripts']);

