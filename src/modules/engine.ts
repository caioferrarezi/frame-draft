type EngineCallback = (elapsedTime: number) => void

export class Engine {
  private elapsedTime: number
  private oldTimestamp: number

  private requestedFrame: number

  private callback: EngineCallback

  constructor() {
    this.elapsedTime = 0
    this.oldTimestamp = 0

    this.requestedFrame = 0
  }

  public start(callback: EngineCallback) {
    this.callback = callback

    this.requestedFrame = requestAnimationFrame(this.loop.bind(this))
  }

  public stop() {
    cancelAnimationFrame(this.requestedFrame)
  }

  private loop(timestamp: number) {
    this.elapsedTime = timestamp - this.oldTimestamp
    this.oldTimestamp = timestamp

    this.callback(this.elapsedTime / 1000)

    this.requestedFrame = requestAnimationFrame(this.loop.bind(this))
  }
}
