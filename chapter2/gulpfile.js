const gulp = require('gulp');
const babel = require('gulp-babel');


// dist 디렉터리에 es5로 변환된 파일 안생김.
// 이유는 모르겠음.
gulp.task('default', function() {
    //노드 소스
    gulp.src("es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));

    //브라우저 소스
    gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest("public/dist"));
});