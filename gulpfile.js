var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-ruby-sass');
var imagemin = require('gulp-imagemin');
var livereload = require('gulp-livereload');

//Var de configuração de pasta para reload
var html = './index.php';
var javaScript = 'jquery/*.js';
var css = 'sass/*.sass';

//gulp watch para pegar mudanças nos arquivos
gulp.task('watch', function(){
	livereload.listen();
	gulp.watch('sass/**/*.{sass, scss}' , ['sass']);
	
	gulp.watch( html , function(){
		gulp.src( html ).pipe(livereload());
	});

	gulp.watch( javaScript , function(){
		gulp.src( javaScript ).pipe(livereload());
	});
});


gulp.task('img', () =>
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
);
//task para o sass
gulp.task('sass', () =>
    sass(css)
        .on('error', sass.logError)
        .pipe(gulp.dest('css'))
        .pipe(livereload())
);

//task default 
gulp.task('default', function(){
	console.log('Gulp-Funcionando Utilize uma outra task \n (watch) - LiveReload e Sass Pasta pre-processador sass e não se esqueça do plugin google livereload \n (img) - minificando imagens irão para a pasta dist/images\n Caso queira configurar o caminho do liveRead entara em gulpfile.js');
});
