import gulp    from 'gulp';

import './tasks/hello';
import styles  from './tasks/styles';
import images  from './tasks/images';
import scripts from './tasks/scripts';
import pages   from './tasks/pages';
import server  from './tasks/server';
import copy    from './tasks/copy';
import clean   from './tasks/clean';
import deploy  from './tasks/deploy';
import watcher from './tasks/watcher';

/* ---- Import Configs ------------ */

/* ---- Private Tasks ------------- */
gulp.task('clean:all', clean.all);
gulp.task('clean:images', clean.images);
gulp.task('clean:pages', clean.pages);
gulp.task('clean:css', clean.css);
gulp.task('clean:js', clean.js);

gulp.task(scripts);
gulp.task(deploy);
gulp.task(styles);
gulp.task(clean);
gulp.task(copy);
gulp.task('images', gulp.series('clean:images', images));
gulp.task('pages', gulp.series('clean:pages', pages));

/* ---- Sub Tasks ----------------- */
gulp.task('styles', gulp.series('clean:css', styles));
gulp.task('pages', gulp.series('clean:pages', pages));

gulp.task('build', gulp.series('clean:all', gulp.parallel(pages, styles, images, copy)));
gulp.task('watcher', gulp.series('build', gulp.parallel(watcher, scripts)));

/* ---- Main Tasks ---------------- */
gulp.task('dev', gulp.series('build', gulp.parallel(watcher, scripts, server)));
