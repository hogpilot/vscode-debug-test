import { Worker } from 'worker_threads';


setTimeout(() => {
  const worker = new Worker(new URL('./worker.js', import.meta.url), {
    // Scenario 1: Debug breaks arbitrarily when the following line is uncommented
    // env: {},

    // Scenario 2: Debug works with the following line uncommented
    env: {NODE_OPTIONS: process.env.NODE_OPTIONS},  
  });
  worker.on('message', (result) => {
    console.log('MAIN: ' + result);
  });
  worker.on('error', (err) => {
    console.error('MAIN: ' + err)
  });
  
  const msg = 'message sent'
  worker.postMessage(msg);
  console.log('MAIN: ' + msg);
}, 1000);
