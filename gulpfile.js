/*eslint-env node */
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var eslint = require('gulp-eslint');

gulp.task('default',['styles', 'lint'], function(){
	gulp.watch('sass/**/*.scss', ['styles']);
	gulp.watch('js/**/*.js', ['lint']);
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
			// 在css生成之前，进行添加前缀处理，并指定浏览器
			.pipe(autoprefixer({
				browsers: ['last 2 versions']
			}))
			// 再使用gulp.dest()把生成的文件放到./css目录
	    .pipe(gulp.dest('./css'));
});

/**
 * 添加代码检查
 */
gulp.task('lint', () => {
	return gulp.src(['js/**/*.js'])
		// eslint() attaches the lint output to the "eslint" property
		// of the file object so it can be used by other modules.
		.pipe(eslint())
		// eslint.format() outputs the lint results to the console.
		// Alternatively use eslint.formatEach() (see Docs).
		.pipe(eslint.format())
		// To have the process exit with an error code (1) on
		// lint error, return the stream and pipe to failAfterError last.
		.pipe(eslint.failAfterError());
});