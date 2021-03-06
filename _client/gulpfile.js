// Barebone Dependancies
var gulp        = require('gulp')
,   refresh     = require('gulp-livereload')

// preprocessing
,   stylus      = require('gulp-stylus')
,   jade        = require('gulp-jade')
,   nib         = require('nib')

// utils
,   termstyle   = require('jshint-stylish')
,   jshint      = require('gulp-jshint');


// I/O Script Paths
var paths = {
  stylus: ['./stylus/style.styl'],
  js: ['./js/**/*.js']
};

/**
*   Tasks
**/

// CSS
gulp.task('stylus', function(){  
  gulp.src(paths.stylus)
    .pipe(stylus({ use:[nib()] }))
    .pipe(gulp.dest('./public/css'))
    .pipe(refresh())
});

// HTML
gulp.task('jade',function() {
  gulp.src(paths.jade)
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('../'))
    .pipe(refresh())
})

// JAVASCRIPT
gulp.task('js', function() {
  gulp.src('./js/app.js')
    .pipe(gulp.dest('./public/js'))
    .pipe(refresh())
})

/**
*   Utils & Tests
**/

// Console debugging
gulp.task('lint', function() {
  gulp.src(paths.js)
    .pipe(jshint('./.jshintrc'))
    .pipe(jshint.reporter(termstyle))
})

/**
*   Process
**/

gulp.task('default', function(){

  refresh.listen();
  
  gulp.watch('./stylus/*.styl', ['stylus']);
  gulp.watch('./js/**/*.js',['js']);

});