type KeysObject = {
  [key: string]: boolean
}

export class Keyboard {
  private keysDown: KeysObject

  constructor() {
    this.keysDown = {}
  }

  add(key: string): void {
    this.keysDown[key] = true
  }

  remove(key: string): void {
    delete this.keysDown[key]
  }

  isDown(key: string): boolean {
    return !!this.keysDown[key]
  }
}
