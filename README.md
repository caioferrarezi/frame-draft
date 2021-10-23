# Frame Draft 🖼

![version shield](https://img.shields.io/github/package-json/v/caioferrarezi/frame-draft)
![license shield](https://img.shields.io/github/license/caioferrarezi/frame-draft)

Frame Draft is a very minimal engine library to bootstrap your game idea!

Just install it in your project

```bash
$ npm install frame-draft
```

And you are ready to use a game loop, a html canvas and a keyboard helper that it packs.

Frame Draft is super easy to use just like the example below:

```js
import {
  Engine,
  Canvas,
  Keyboard
} from 'frame-draft'

const engine = new Engine()
const canvas = new Canvas(1280, 720)
const keyboard = new Keyboard()

const update = () => {
  // Put your game logic

  if (keyboard.isDown('ArrowUp')) {
    // Do some control actions
  }
}

const render = () => {
  canvas.context.fillStyle = '#ffffff'
  canvas.context.fillRect(0, 0, 1280, 720)

  // Draw your game
}

keyboard.onKeyPress(key => {
  // Do anything on key press
})

engine.start(() => {
  update()
  render()
})
```

## About

Frame Draft is built with [Typescript](https://www.typescriptlang.org/) using [Rollup](https://rollupjs.org/) as its bundler.

---

Made with 🧑‍🚀 by @caioferrarezi
