type KeyDown = {
  active: boolean,
  repeat: boolean
}

type KeysObject = {
  [key: string]: KeyDown
}

export class Keyboard {
  private keysDown: KeysObject

  constructor() {
    this.keysDown = {}

    document.addEventListener('keydown', this.add.bind(this))
    document.addEventListener('keyup', this.remove.bind(this))
  }

  private getKey(key: string) {
    return this.keysDown[key] || {} as KeyDown
  }

  private add(event: KeyboardEvent) {
    const { code, repeat } = event

    this.keysDown[code] = {
      active: true,
      repeat: repeat
    }
  }

  private remove(event: KeyboardEvent) {
    const { code } = event

    delete this.keysDown[code]
  }

  public isDown(key: string) {
    return !!this.keysDown[key]
  }

  public isHeld(key: string) {
    const keyDown = this.getKey(key)
    const { active, repeat } = keyDown

    if (active) {
      keyDown.repeat = true
    }

    return active && !repeat
  }

  public onKeyPress(callback: (key: string) => void) {
    document.addEventListener('keypress', event => callback(event.code))
  }
}
