import { Worker } from 'worker_threads';


setTimeout(() => {
  const worker = new Worker(new URL('./worker.js', import.meta.url), {
    env: { SOME_KEY: true },
  });
  worker.on('message', (result) => {
    console.log('MAIN: ' + result);
    process.exit();
  });
  worker.on('error', (err) => {
    console.error('MAIN: ' + err)
  });
  
  const msg = 'message sent'
  worker.postMessage(msg);
  console.log('MAIN: ' + msg);
}, 3000);
