var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('start', function () {
  var called = false;
  nodemon({
    script: 'index.js',
    env: {'NODE_ENV': 'development'}
  })
})