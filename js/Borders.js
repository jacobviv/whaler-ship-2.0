class Borders {

    constructor(ctx, canvasSize) {

        this.ctx = ctx
        this.canvasSize = canvasSize

        this.image = new Image()
        this.image.src = './img/border-lines.png'

        this.pos = { x: 0, y: 0 }

    }

    draw() {

        this.ctx.drawImage(this.image, this.pos.x, this.pos.y, this.canvasSize.w, this.canvasSize.h)

    }

}