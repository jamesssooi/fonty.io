/* ---- Import NPM Modules --------- */
import autoprefixer from 'autoprefixer';
import cssnano      from 'cssnano';

/* ---- Import Gulp Modules -------- */
import gulp         from 'gulp';
import newer        from 'gulp-newer';
import plumber      from 'gulp-plumber';

import sass         from 'gulp-sass';
import postcss      from 'gulp-postcss';
import sourcemaps   from 'gulp-sourcemaps';

/* ---- Import Configs ------------ */
import {production, baseDir, configs} from './configs';
import {size, path, log} from './utils';

// Define File Paths
const config = configs.styles;
const source = path.generate(baseDir.src, baseDir.styles.src);
const dest   = path.join(baseDir.dist, baseDir.styles.dest);

// Define Plugins
const pluginsDevolop = [
  autoprefixer(config.autoprefixer),
];

const pluginsProduction = [
  cssnano(config.cssnano),
  autoprefixer(config.autoprefixer)
];

// Toggle Plugins
const plugins = production ? pluginsProduction : pluginsDevolop;

// Main Exported Task
export default function styles() {
  return gulp.src(source)
    .pipe(newer(dest))
    .pipe(plumber(function(error) {
      log.print(`\n \n ${error.formatted}`, 'red');
      this.emit('end');
    }))
    .pipe(sourcemaps.init())
      .pipe(sass(config.sass))
      .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(size())
    .pipe(plumber.stop())
    .pipe(gulp.dest(dest));
}
