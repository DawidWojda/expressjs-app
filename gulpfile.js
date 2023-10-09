var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('buildjs', function(cb){
	gulp.src('source/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist'));
	cb();
});
