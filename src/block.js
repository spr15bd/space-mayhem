import Sprite from "./sprite.js";
export default class Block {
  constructor(xPos, yPos, width, height, blockType, imageSrc) {
    // declare bullet properties
    //this.type = bulletType;
    //this.bulletDelay = 100;
    this.width = width;
    this.height = height;
    this.blockType = blockType;
    this.position = {
      x: xPos,
      y: yPos
    };
    this.speed = {
      x: 30,
      y: 0
    };
    this.image = new Image();
    this.image.src = imageSrc;
    // if the block is a moving (forcefield) block, make the source width smaller than the whole 8x8 block - this is to prevent flickering in the animation
    this.sourceWidth = this.blockType === 0 ? 4 : 8;
    this.sourceHeight = 8;

    this.blockSprite = new Sprite(
      this.image,
      this.sourceWidth,
      this.sourceHeight,
      this.blockType * 8,
      0,
      this.position,
      this.width,
      this.height,
      1
    );
    this.startX = this.position.x;
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(
      this.position.x + this.width / 2,
      this.position.y + this.height / 2
    );

    ctx.rotate((this.angle * Math.PI) / 180);
    this.blockSprite.draw(ctx);

    ctx.restore();
  }
  update(delta) {
    // every delta milliSeconds
    if (!delta) return;
    if (this.blockType === 0) {
      this.position.x += 16; // pixels per milliSecond
      if (this.position.x > 572) {
        this.position.x = 204;
      }
    }

    //this.bulletSprite.update(delta);
  }
}
