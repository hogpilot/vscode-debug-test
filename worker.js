const { parentPort } = require('worker_threads');

// listen for messages from main thread
parentPort.on('message', async function(task) {
  parentPort.postMessage('message received');
});