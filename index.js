const { Worker } = require('worker_threads');

// const worker = new Worker(new URL('./workers/taskProcessor.js', import.meta.url), { env: {} } );
// TODO: find a better way to specify the path of the static worker script
const worker = new Worker('./worker.js', {
  env: {},
});
worker.on('message', (result) => {
  console.log('worker msg: ' + result)
});
worker.on('error', (err) => {
  console.error('worker err: ' + err)
});
const msg = 'message sent'

worker.postMessage(msg);
console.log('main msg: ' + msg);
