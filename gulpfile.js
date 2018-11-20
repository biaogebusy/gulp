var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function(){
	console.log('hi gulp!') 
});

gulp.task('styles', function(){
	gulp.src('sass/**/*/scss')
	    .pipe(sass())
	    .pipe(gulp.dest('./css'));
});