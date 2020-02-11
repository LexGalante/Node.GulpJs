var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('pack-js', function () {
    return gulp.src(['assets/js/*.js'])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('public/build/js'));
});

gulp.task('pack-css', function () {
    return gulp.src(['assets/css/*.css'])
        .pipe(concat('stylesheet.css'))
        .pipe(gulp.dest('public/build/css'));
});

gulp.task('default', ['pack-js', 'pack-css']);