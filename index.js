import { delay } from '.lib/scripts/delay'

// For some reason the bun debugger will not connect
// correctly unless you wait for a few milliseconds.
await delay(100)

console.log('Hello.')
