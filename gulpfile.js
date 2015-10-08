var gulp = require('gulp-param')(require('gulp'), process.argv);
var run = require('gulp-run');

gulp.task('default', function() {
  console.log('test');
});

gulp.task('lambda', function(event) {
  run('node_modules/lambda-local/bin/lambda-local -l index.js -e ' + event)
    .exec()
    .pipe(gulp.dest('output'));
});
