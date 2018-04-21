/* ---- Import Gulp Modules -------- */
import gulp      from 'gulp';
import newer     from 'gulp-newer';

/* ---- Import Configs ------------ */
import {baseDir} from './configs';
import {size}    from './utils';

// Define File Paths
const source = `${baseDir.static}/**/*.*`;
const dest   = baseDir.dist;

export default function copy(){
  return gulp.src(source)
    .pipe(newer(dest))
    .pipe(size())
    .pipe(gulp.dest(dest));
}
