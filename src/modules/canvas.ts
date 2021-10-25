const style = `
  * {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  canvas {
    display: block;
    image-rendering: {{ quality }};
  }
`

type CSSImageRenderingProperty = 'auto' | 'smooth' | 'high-quality' | 'pixelated'

export class Canvas {
  private quality: CSSImageRenderingProperty
  private canvas: HTMLCanvasElement
  public context: CanvasRenderingContext2D

  constructor(width: number, height: number, quality: CSSImageRenderingProperty) {
    const deviceRatio = window.devicePixelRatio || 1

    this.canvas = document.createElement('canvas')
    this.context = this.canvas.getContext('2d')

    this.quality = quality || 'auto'

    this.canvas.width = width * deviceRatio
    this.canvas.height = height * deviceRatio

    this.context.scale(deviceRatio, deviceRatio)

    this.setup()
    this.style()
    this.resize()
  }

  private setup() {
    document.body.insertAdjacentElement('afterbegin', this.canvas)

    window.addEventListener('resize', () => this.resize())
  }

  private style() {
    const styleElement = document.createElement('style')

    styleElement.innerText = style.replace('{{ quality }}', this.quality)

    document.head.insertAdjacentElement('beforeend', styleElement)
  }

  private resize() {
    const width = window.innerWidth
    const height = window.innerHeight

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
