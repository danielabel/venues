var gulp = require('gulp');
var del = require('del');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var bases = {
    build: 'build/',
    source: 'source/'
};

gulp.task('default', ['build', 'copy-html']);

gulp.task('build', ['clean'], function () {
    return browserify(bases.source + '/app.js')
        .transform(babelify)
        .bundle()
        .pipe(source('venues.js'))
        .pipe(gulp.dest('./build/'));
});

gulp.task('clean', function () {
    return del([
        bases.build + '**/*',
    ]);
});

gulp.task('copy-html', ['clean'],  function() {
    gulp.src('index.html', {cwd: bases.source})
        .pipe(gulp.dest(bases.build));
});