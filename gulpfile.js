// Instantiate gulp plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    uglify = require('gulp-uglify');

// SCSS > Concatenated + Minified CSS
gulp.task('sass', function () {
    return gulp.src('./assets/sass/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(concat('app.min.css'))
        .pipe(minifyCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./assets/css'))
        .pipe(livereload());
});

// JS minify + concat
gulp.task('scripts', function() {
    // Array of JS
    var scripts = [
        // Vendor JS
        './assets/vendor/jquery/dist/jquery.min.js',
        // Our JS
        './assets/js/responsive.js',
        './assets/js/main.js'
    ];

    return gulp.src(scripts)
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./assets/js'))
        .pipe(livereload());
});

// Templates updated
gulp.task('templates', function() {
    return gulp.src('./*.html').pipe(livereload());
});

// Run all tasks
gulp.task('all', ['sass', 'scripts']);

// Default task to run
gulp.task('default', function() {
    livereload.listen();
    gulp.watch('./assets/sass/**/*.scss', ['sass']);
    gulp.watch(['*.html', 'templates/*.html'], ['templates']);
    gulp.watch(['./assets/js/main.js', 'assets/js/responsive.js'], ['scripts'])
});
