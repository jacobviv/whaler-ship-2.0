class Rock {

    constructor(ctx, canvasSize) {

        this.ctx = ctx
        this.canvasSize = canvasSize

        this.image = new Image()
        this.image.src = './img/rock.png'

        this.rockSize = { w: 60, h: 55 }
        this.rockPos = {
            x: this.canvasSize.w + this.rockSize.w,
            y: Math.random() * (this.canvasSize.h - this.rockSize.h * 2) + this.rockSize.h
        }

        this.vel = .5

    }

    draw() {
        this.ctx.drawImage(
            this.image,
            this.rockPos.x,
            this.rockPos.y,
            this.rockSize.w,
            this.rockSize.h)
    }
    move() {
        this.rockPos.x -= this.vel
    }


}