# VS Code - Debugging Workers

The purpose of this repo is to provide a simple reproducible case to demonstrate an issue I'm experiencing with VS Code debugging of a nodejs app.

The scenario

## Installation

Clone this repo, then run:

```bash
npm i
npm run build
```

## Usage

From VS Code's debug options, choose `Launch Program`

## The symptoms

After 1 second, the `setTimeout` will launch a `new Worker` and the debugger will pause on the worker's thread.

## The issue

Passing an empty `env` option to the `new Worker` seems to be the root cause.  The specific key that seems to be the root cause is the `NODE_OPTIONS` key.  By adding that into the environment object in the worker's options, it seems to fix the experience and the debugger doesn't pause unintentionally.

## License
[MIT](https://choosealicense.com/licenses/mit/)