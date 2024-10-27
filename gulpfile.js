var gulp = require('gulp');
var watch = require('gulp-watch');
// Requires the gulp-sass plugin
var sass = require('gulp-sass')(require('sass'));

gulp.task('hello', async function() {
    console.log('Hello Zell');
});

gulp.task('sass', async function(){
    return watch(['./scss/**/*.scss'], function () {
        gulp.src('./scss/index.scss')
            .pipe(sass()) // Using gulp-sass
            .pipe(gulp.dest('css'))
    })
});