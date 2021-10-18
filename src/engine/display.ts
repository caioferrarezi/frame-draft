export class Display {
  private context: CanvasRenderingContext2D
  private buffer: CanvasRenderingContext2D

  constructor(width: number, height: number) {
    this.context = document.createElement('canvas').getContext('2d')
    this.buffer = document.createElement('canvas').getContext('2d')

    this.buffer.canvas.width = width
    this.buffer.canvas.height = height

    document.body.insertAdjacentElement('afterbegin', this.context.canvas)
  }

  render() {
    this.context.drawImage(
      this.buffer.canvas,
      0, 0, this.buffer.canvas.width, this.buffer.canvas.height,
      0, 0, this.context.canvas.width, this.context.canvas.height
    )
  }
}
