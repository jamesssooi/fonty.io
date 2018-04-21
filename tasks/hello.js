/* ---- Import NPM Modules --------- */
const pck = require('./../package.json');

/* ---- Import Configs ------------- */
import {env} from './configs';
import {log} from './utils';

const title = String.raw`
  ____        _ _
 |  _ \      (_) |
 | |_) | ___  _| |_ __
 |  _ < / _ \| | | '__|
 | |_) | (_) | | | |
 |____/ \___/|_|_|_|  v${pck.version}

`;

const msg = log.string(`
  ${log.string('----------------------------', 'gray')}
  ${log.string('-----------------------', 'gray')}
  ${title}
  Environment: '${log.string(env.toUpperCase(), 'yellow')}'
  ${log.string('-----------------------', 'gray')}
  ${log.string('----------------------------', 'gray')}
  `, 'green');

  console.log(msg);
