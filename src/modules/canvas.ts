export class Canvas {
  private canvas: HTMLCanvasElement
  public context: CanvasRenderingContext2D

  constructor(width: number, height: number) {
    const deviceRatio = window.devicePixelRatio || 1

    this.canvas = document.createElement('canvas')
    this.context = this.canvas.getContext('2d')

    this.canvas.width = width * deviceRatio
    this.canvas.height = height * deviceRatio

    this.context.scale(deviceRatio, deviceRatio)

    this.resize()

    document.body.insertAdjacentElement('afterbegin', this.canvas)

    window.addEventListener('resize', () => this.resize())
  }

  private resize() {
    const width = document.body.clientWidth
    const height = document.body.clientHeight

    const aspectRatio = this.canvas.height / this.canvas.width

    if (aspectRatio < height / width) {
      this.canvas.style.width = `${width}px`
      this.canvas.style.height = `${width * aspectRatio}px`
    } else {
      this.canvas.style.width = `${height/ aspectRatio}px`
      this.canvas.style.height = `${height}px`
    }
  }
}
