// ===================================================
// Total.js start script
// https://www.totaljs.com
// ===================================================

require('total5');
const options = {};

// options.ip = '127.0.0.1';
options.port = parseInt(process.argv[2]) || 8000;
// options.unixsocket = require('path').join(require('os').tmpdir(), 'app_name');
// options.unixsocket777 = true;
// options.config = { name: 'Total.js' };
// options.sleep = 3000;
// options.inspector = 9229;
// options.watch = ['private'];
// options.livereload = 'https://yourhostname';
// options.https = { key: Fs.readFileSync('keys/agent2-key.pem'), cert: Fs.readFileSync('keys/agent2-cert.pem')};
// options.watcher = true; // enables watcher for the release mode only controlled by the app `F.restart()`
// options.edit = 'wss://www.yourcodeinstance.com/?id=projectname'

// Service mode:
options.servicemode = process.argv.includes('--servicemode');
// options.servicemode = 'definitions,modules,config';

// Enables cluster:
// options.cluster = 'auto';
// options.cluster_limit = 10; // max 10. threads (works only with "auto" scaling)

// Enables threads:
// options.cluster = 'auto';
// options.cluster_limit = 10; // max 10. threads (works only with "auto" scaling)
// options.timeout = 5000;
// options.threads = '/api/';
// options.logs = 'isolated';

options.release = process.argv.includes('--release');

F.run(options);
