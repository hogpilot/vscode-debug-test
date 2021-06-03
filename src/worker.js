import { parentPort } from 'worker_threads';

// listen for messages from main thread
parentPort.on('message', async function(task) {
  console.log("WORKER: " + task);
  const msg = 'reply sent';
  console.log("WORKER: " + msg);
  parentPort.postMessage(msg);
});