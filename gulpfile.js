var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function(){
    browserSync.init({
        server:  "./"
    });
    gulp.watch("*").on('change', browserSync.reload);
});