import Sprite from "./sprite.js";
export default class Bullet {
  constructor(xPos, yPos, speed, image) {
    // declare bullet properties
    //this.type = bulletType;
    //this.bulletDelay = 100;
    this.width = 4;
    this.height = 8;
    this.position = {
      x: xPos,
      y: yPos
    };
    this.speed = {
      x: 0,
      y: speed
    };
    this.image = image;
    //this.image.src = imageSrc;
    this.sourceWidth = 2;
    this.sourceHeight = 4;

    this.bulletSprite = new Sprite(
      this.image,
      this.sourceWidth,
      this.sourceHeight,
      0,
      0,
      this.position,
      this.width,
      this.height,
      1
    );
  }
  collidesWith(entity) {
    if (
      this.position.x >= entity.position.x &&
      this.position.x <= entity.position.x + entity.width &&
      this.position.y >= entity.position.y &&
      this.position.y <= entity.position.y + entity.height
    ) {
      //console.log(entity);
      return true;
    }
  }
  draw(ctx) {
    ctx.save();
    ctx.translate(
      this.position.x + this.width / 2,
      this.position.y + this.height / 2
    );

    ctx.rotate((this.angle * Math.PI) / 180);
    this.bulletSprite.draw(ctx);

    ctx.restore();
  }
  update(delta) {
    // every delta milliSeconds
    if (!delta) return;
    this.position.y += this.speed.y / delta; // pixels per milliSecond
    //this.bulletSprite.update(delta);
  }
}
