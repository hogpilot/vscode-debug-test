import { Worker } from 'worker_threads';


setTimeout(() => {
  const worker = new Worker(new URL('./worker.js', import.meta.url), {

    // ISSUE: Debug pauses arbitrarily when `env` object is empty
    env: {},

    // Workaround Scenario: Debug works when `env` has a `NODE_OPTIONS` property
    // env: {NODE_OPTIONS: process.env.NODE_OPTIONS},  

  });
  worker.on('message', (msg) => {
    console.log('MAIN received: ' + msg);
    process.exit();
  });
  worker.on('error', (err) => {
    console.error('MAIN error: ' + err)
  });
  const msg = 'Howdy worker.'
  worker.postMessage(msg);
  console.log('MAIN sent: ' + msg);
}, 1000);
