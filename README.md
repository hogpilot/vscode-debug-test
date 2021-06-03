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

## The issue

After 3 seconds, the `setTimeout` will launch a `new Worker` and the debugger will pause on the worker's thread.

## License
[MIT](https://choosealicense.com/licenses/mit/)