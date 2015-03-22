/* load plugins */
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    browsersync  = require('browser-sync'),
    reload = browsersync.reload;


/*
*  define tasks
*/

gulp.task('sass', function() {
    return sass('assets/sass/main.sass', { sourcemap : true })
	.pipe(gulp.dest('assets/css'))
	.pipe(reload({stream : true})) ;
}) ;


/*
*  browsersync conf
*/

gulp.task('browser-sync', function() {
    browsersync({
	proxy: 'neat',
	port: '3000'
    });
});

gulp.task('browsersync-reload', function () {
    browsersync.reload();
});

gulp.task('watch', ['browser-sync'], function () {
  gulp.watch('assets/sass/**/*', ['sass']);
});


/* Default task */
gulp.task('default', ['sass'], function() {
    gulp.watch("assets/sass/**.*", ['sass']);
});
