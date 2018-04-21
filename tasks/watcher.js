/* ---- Import Gulp Modules -------- */
import gulp        from 'gulp';

/* ---- Import Tasks --------------- */
import copy        from './copy';
import clean       from './clean';
import styles      from './styles';
import images      from './images';
import pages       from './pages';

/* ---- Import Configs ------------- */
import {baseDir}   from './configs';
import {path, log} from './utils';

export default function watcher(){
  const watchers = {
    styles:  gulp.watch(path.generate(baseDir.src, baseDir.styles.src), styles),
    images:  gulp.watch(path.generate(baseDir.src, baseDir.images.src), images),
    pages:   gulp.watch(path.generate(baseDir.src, baseDir.pages.src), pages),
    static:  gulp.watch(path.join(baseDir.static), copy)
  };


  for(const watch in watchers)  watchHandler(watchers[watch]);
}

function watchHandler(watcher){
  watcher.on('all', (event, file) =>{
    log.print(`Detected '${log.string(event, 'cyan')}' on '${log.string(file, 'green')}'.`, 'yellow');
  });

  watcher.on('unlink', file => {
    // check if file is from 'static' or 'source' folder
    const regexp = file.indexOf('static') !== -1 ?
                   new RegExp(baseDir.static.split('/').pop()) :
                   new RegExp(baseDir.src.split('/').pop())
                  ;

    // switch path to 'dist' folder
    let distPath = file.replace(regexp, baseDir.dist);
    let toDelete = path.native().posix.normalize(distPath);

    // check if its a scss file
    if(file.indexOf('scss') !== -1){
      distPath = distPath.replace(/scss|sass/g, 'css');
      toDelete = [distPath, distPath.replace('.css', '.css.map')];
      toDelete.forEach((t, i) => toDelete[i] = path.native().posix.normalize(t));
    }

    // check if its a css file
    else if(file.indexOf('css') !== -1){
      toDelete = [distPath, distPath.replace('.css', '.css.map')];
      toDelete.forEach((t, i) => toDelete[i] = path.native().posix.normalize(t));
    }

    clean.delete(toDelete);
  });
}
