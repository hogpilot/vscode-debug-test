import { parentPort } from 'worker_threads';

// listen for messages from main thread
parentPort.on('message', async function(msg) {
  console.log("WORKER received: " + msg);
  const reply = 'Hello main!';
  console.log("WORKER sent: " + reply);
  parentPort.postMessage(reply);
});