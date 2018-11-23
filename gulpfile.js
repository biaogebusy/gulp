var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function(){
	console.log('hi gulp!');
});

/**
 * 新建一个styles的任务，并执行第二个参数的匿名函数
 */
gulp.task('styles', function(){
	// 获取源文件
	gulp.src('sass/**/*.scss')
			// 有了这些文件就可以加入管道，使用sass进行处理，并转换成css
			// 当sass源文件写法错误时，监听错误并输出，并不冲断构建，体验更好
			.pipe(sass().on('error', sass.logError))
			// 再使用gulp.dest()把生成的文件放到./css目录
	    .pipe(gulp.dest('./css'));
});