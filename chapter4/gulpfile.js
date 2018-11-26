const gulf = require('gulp');
const babel = require('gulp-babel');

gulf.task('default', function(){
    gulf.src('es6/**/*.js')
        .pipe(babel())
        .pipe(gulf.dest('dist'))
});