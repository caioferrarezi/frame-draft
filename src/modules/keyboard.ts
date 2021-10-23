type KeysObject = {
  [key: string]: boolean
}

export class Keyboard {
  private keysDown: KeysObject

  constructor() {
    this.keysDown = {}

    document.addEventListener('keydown', event => this.add(event.code))
    document.addEventListener('keyup', event => this.remove(event.code))
  }

  private add(key: string): void {
    this.keysDown[key] = true
  }

  private remove(key: string): void {
    delete this.keysDown[key]
  }

  public isDown(key: string): boolean {
    return !!this.keysDown[key]
  }

  public onKeyPress(callback: (key: string) => void) {
    document.addEventListener('keypress', event => callback(event.code))
  }
}
