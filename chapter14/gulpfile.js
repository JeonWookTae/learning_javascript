gulp = require('gulp');
babel = require('gulp-babel');

gulp.task('defualt', function(){
   gulp.src('*.js')
       .pipe(babel())
       .pipe(gulp.dest('dist'))
});