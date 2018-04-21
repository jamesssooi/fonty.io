/* ---- Import NPM Modules --------- */
import ftp from 'vinyl-ftp';

/* ---- Import Gulp Modules -------- */
import gulp from 'gulp';

/* ---- Import Configs ------------ */
import {baseDir, configs} from './configs';
import {log, path}     from './utils';

const config = configs.ftp;

const options = {
  parallel: 10,
  log: log.print
};

// merge options
for(const opt in config){
  options[opt] = config[opt];
}

const source = path.join(baseDir.dist, '/**/*.*');

export default function deploy(){
  const conn = ftp.create(configs.ftp);

  return gulp.src(source, {buffer: false})
    .pipe(conn.newer(options.directory))
    .pipe(conn.dest(options.directory));
}
