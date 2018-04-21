/* ---- Import Gulp Modules -------- */
import gulp from 'gulp';

import strip from 'gulp-strip-comments';

/* ---- Import Configs ------------ */
import {baseDir}    from './configs';
import {path, size} from './utils';

const source = path.generate(baseDir.src, baseDir.pages.src);
const dest   = path.join(baseDir.dist, baseDir.pages.dest);

export default function pages(){
  return gulp.src(source, {since: gulp.lastRun(pages)})
    .pipe(strip())
    .pipe(size())
    .pipe(gulp.dest(dest));
}
