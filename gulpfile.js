var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minify = require('gulp-minify');
var expect = require('gulp-expect-file');

// Concatenate & Minify JS
gulp.task('scripts', function() {

var files = [
    'public_html/components/version/modernizr/modernizr.js',
    'public_html/components/version/jquery.bxslider/jquery.bxslider.min.js',
    'public_html/components/version/jquery.colorbox/jquery.colorbox.js',
    'public_html/components/version/jquery.themepunch/jquery.themepunch.tools.js',
    'public_html/components/version/jquery.themepunch/jquery.themepunch.revolution.js',
    'public_html/components/version/waypoints/waypoints.js',
    'public_html/components/version/wow/wow.js',
    'public_html/components/version/Animo/Animo.js',
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
        .pipe(minify({
          mangle : false

        }))
        .pipe(gulp.dest('public_html/build'))

});

gulp.task('css', function() {

var files = [
    'public_html/css/*.css'
    ];
    return gulp.src(files)
        .pipe(expect(files))
        .pipe(concat('all.min.css'))
        .pipe(minify())
        .pipe(gulp.dest('public_html/build'));
});

gulp.task('default', ['scripts']);

