export class Canvas {
  public context: CanvasRenderingContext2D
  private display: CanvasRenderingContext2D

  constructor(width: number, height: number) {
    const deviceRatio = window.devicePixelRatio || 1

    this.context = document.createElement('canvas').getContext('2d')
    this.display = document.createElement('canvas').getContext('2d')

    this.context.canvas.width = width * deviceRatio
    this.context.canvas.height = height * deviceRatio

    this.context.scale(deviceRatio, deviceRatio)

    this.resize()

    document.body.insertAdjacentElement('afterbegin', this.display.canvas)

    window.addEventListener('resize', () => this.resize())
  }

  private resize() {
    const width = document.body.clientWidth
    const height = document.body.clientHeight

    const aspectRatio = this.context.canvas.height / this.context.canvas.width

    if (aspectRatio < height / width) {
      this.display.canvas.width = width
      this.display.canvas.height = width * aspectRatio
    } else {
      this.display.canvas.width = height / aspectRatio
      this.display.canvas.height = height
    }
  }

  public render() {
    this.display.drawImage(
      this.context.canvas,
      0, 0, this.context.canvas.width, this.context.canvas.height,
      0, 0, this.display.canvas.width, this.display.canvas.height
    )
  }
}
