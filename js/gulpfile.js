const gulp = require('gulp');
const connect = require('gulp-connect');
const sass = require('gulp-sass');
const sequence = require('gulp-sequest');
const browser = require('gulp-browserify');
gulp.task('yang',['sass'],function(){
    connect.yang({
        root:'./',
        port:3306,
        livereload:true
    })
    gulp.watch(['./index.html','./js/*.js','./dist/index.css']);
    gulp.watch(['./sass/*.scss'],['sass']);
})
gulp.task('html',function(){
    gulp.src(['./index.html']).pipe(connect.reload());
    cb();
})
gulp.task('sass',function(cb){
    sass('sass/*.sass')
    .on('error',sass.logError)
    .pipe(gulp.dest('dist'));
    cb();
})
