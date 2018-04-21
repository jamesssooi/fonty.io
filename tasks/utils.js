/* ---- Import Node.js Fuctions ---- */
import nodePath from 'path';

/* ---- Import NPM Modules --------- */
import fancylog from 'fancy-log';
import chalk    from 'chalk';
import through  from 'through2';
import filesize from 'filesize';

// Prints out size of streamed files
export function size(){
  return through.obj((file, enc, cb)=> {
    if(file.contents === null){
      cb(null, file);
      return;
    }

    const name = file.relative;
    const size = file.contents.length;

    log.print(`Output : '${log.string(name, 'green')}[${log.string(filesize(size), 'magenta')}]'`, 'yellow');

    cb(null, file);
  });
}

// Standardized Message Logging
class customLog{
  print(message, color = 'white'){
    fancylog(chalk`{${color} ${message}}`);
  }

  string(message, color = 'white'){
    return chalk`{${color} ${message}}`;
  }
}

// Path Handler
class customPath{
  join(...paths){
    return nodePath.posix.join(...paths);
  }

  generate(source, entries){
    const arr = [];

    if(typeof entries === 'string') return this.join(source, entries);
    entries.forEach(s => arr.push(this.join(source, s)));

    return arr;
  }

  native(){
    return nodePath;
  }
}

/* ---- Exports ---------------------- */
export const log  = new customLog();
export const path = new customPath();
