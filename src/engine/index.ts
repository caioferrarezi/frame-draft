import { Display } from './display'
import { Keyboard } from './keyboard'

export abstract class Engine {
  private elapsedTime: number
  private oldTimestamp: number

  protected display: Display
  protected keyboard: Keyboard

  constructor(width: number, height: number) {
    this.elapsedTime = 0
    this.oldTimestamp = 0

    this.display = new Display(width, height)
    this.keyboard = new Keyboard()

    this.setup()
    this.setupListeners()

    requestAnimationFrame(this.loop.bind(this))
  }

  abstract setup(): void

  abstract keyPressed(key: string): void

  abstract update(delta: number): void

  abstract render(): void

  private setupListeners() {
    window.addEventListener('keydown', event => this.keyboard.add(event.code))
    window.addEventListener('keyup', event => this.keyboard.remove(event.code))

    window.addEventListener('keypress', event => this.keyPressed(event.code))
  }

  private loop(timestamp: number): void {
    this.elapsedTime = (timestamp - this.oldTimestamp) / 1000
    this.oldTimestamp = this.elapsedTime

    this.update(+this.elapsedTime.toFixed(3))

    this.render()
    this.display.render()

    requestAnimationFrame(this.loop.bind(this))
  }
}
