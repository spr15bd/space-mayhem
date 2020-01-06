import Block from "./block.js";
import Enemy from "./enemy.js";
export default class Level {
  constructor(level, width, height) {
    this.startEnemyWaveCycle = Date.now();
    this.enemies = [];
    this.blocks = [];
    if (level === 1) {
      this.enemies.push(
        new Enemy(width / 2 - 230, -230, 45, 1, "./enemies.png"),
        new Enemy(width / 2 - 200, -200, 45, 1, "./enemies.png"),
        new Enemy(width / 2 - 170, -170, 45, 1, "./enemies.png"),
        new Enemy(width / 2 - 140, -140, 45, 1, "./enemies.png"),
        new Enemy(width / 2 - 110, -110, 45, 1, "./enemies.png"),
        new Enemy(width / 2 - 80, -80, 45, 1, "./enemies.png"),
        new Enemy(width / 2 - 50, -50, 45, 1, "./enemies.png"),
        new Enemy(width / 2 + 198, -230, 135, 0, "./enemies.png"),
        new Enemy(width / 2 + 168, -200, 135, 0, "./enemies.png"),
        new Enemy(width / 2 + 138, -170, 135, 0, "./enemies.png"),
        new Enemy(width / 2 + 108, -140, 135, 0, "./enemies.png"),
        new Enemy(width / 2 + 78, -110, 135, 0, "./enemies.png"),
        new Enemy(width / 2 + 48, -80, 135, 0, "./enemies.png"),
        new Enemy(width / 2 + 18, -50, 135, 0, "./enemies.png"),
        new Enemy(width / 2 - 16, -430, 90, 0, "./enemies.png"),
        new Enemy(width / 2 - 16, -390, 90, 0, "./enemies.png"),
        new Enemy(width / 2 - 16, -350, 90, 0, "./enemies.png"),
        new Enemy(width / 2 - 16, -310, 90, 0, "./enemies.png"),
        new Enemy(width / 2 - 16, -270, 90, 0, "./enemies.png"),
        new Enemy(width / 2 - 16, -230, 90, 0, "./enemies.png")
      );
      //console.log(this.enemies.length);
      /*this.enemies.push(
        new Enemy(244, -320, 45, 0, "./enemies.png"),
        new Enemy(246, -290, 46, 0, "./enemies.png"),
        new Enemy(248, -260, 47, 0, "./enemies.png"),
        new Enemy(250, -230, 48, 0, "./enemies.png"),
        new Enemy(252, -200, 49, 1, "./enemies.png"),
        new Enemy(254, -170, 50, 0, "./enemies.png"),
        new Enemy(256, -140, 51, 1, "./enemies.png"),
        new Enemy(256, -110, 52, 0, "./enemies.png"),
        new Enemy(256, -80, 53, 1, "./enemies.png")
      );*/
      /*this.blocks.push(
        new Block(300, 300, "./block.png"),
        new Block(308, 300, "./block.png"),
        new Block(316, 300, "./block.png"),
        new Block(324, 300, "./block.png"),
        new Block(332, 300, "./block.png"),
        new Block(340, 300, "./block.png"),
        new Block(348, 300, "./block.png"),
        new Block(356, 300, "./block.png")
      );*/
    } else if (level === 2) {
      this.enemies.push(
        new Enemy(240, -500, 270, 2, "./enemies.png"),
        new Enemy(300, -500, 270, 2, "./enemies.png"),
        new Enemy(360, -500, 270, 2, "./enemies.png"),
        new Enemy(420, -500, 270, 2, "./enemies.png"),
        new Enemy(480, -500, 270, 2, "./enemies.png"),
        new Enemy(540, -500, 270, 2, "./enemies.png"),

        new Enemy(180, -400, 270, 2, "./enemies.png"),
        new Enemy(240, -400, 270, 2, "./enemies.png"),
        new Enemy(300, -400, 270, 2, "./enemies.png"),
        new Enemy(360, -400, 270, 2, "./enemies.png"),
        new Enemy(420, -400, 270, 2, "./enemies.png"),
        new Enemy(480, -400, 270, 2, "./enemies.png"),
        new Enemy(540, -400, 270, 2, "./enemies.png"),
        new Enemy(600, -400, 270, 2, "./enemies.png"),

        new Enemy(240, -300, 270, 3, "./enemies.png"),
        new Enemy(300, -300, 270, 3, "./enemies.png"),
        new Enemy(360, -300, 270, 3, "./enemies.png"),
        new Enemy(420, -300, 270, 3, "./enemies.png"),
        new Enemy(480, -300, 270, 3, "./enemies.png"),
        new Enemy(540, -300, 270, 3, "./enemies.png"),

        new Enemy(width - 130, -300, 180, 0, "./enemies.png"),
        new Enemy(width - 160, -300, 180, 0, "./enemies.png"),
        new Enemy(width - 190, -300, 180, 0, "./enemies.png"),
        new Enemy(width - 220, -300, 180, 0, "./enemies.png"),
        new Enemy(width - 250, -300, 180, 0, "./enemies.png")
        //new Enemy(140, 315, 0, 0, "./enemies.png"),
        //new Enemy(140, 345, 0, 0, "./enemies.png")
      );
    } else if (level === 4) {
    } else {
      this.blocks.push(
        new Block(204, -374, 384, 64, 7, "./block.png"),

        new Block(236, -276, 16, 16, 2, "./block.png"),
        new Block(252, -276, 16, 16, 1, "./block.png"),
        new Block(268, -276, 16, 16, 2, "./block.png"),
        new Block(284, -276, 16, 16, 2, "./block.png"),
        new Block(300, -276, 16, 16, 1, "./block.png"),
        new Block(316, -276, 16, 16, 4, "./block.png"),
        new Block(332, -276, 16, 16, 2, "./block.png"),
        new Block(348, -276, 16, 16, 2, "./block.png"),
        new Block(364, -276, 16, 16, 3, "./block.png"),
        new Block(380, -276, 16, 16, 1, "./block.png"),
        new Block(396, -276, 16, 16, 2, "./block.png"),
        new Block(412, -276, 16, 16, 1, "./block.png"),
        new Block(428, -276, 16, 16, 3, "./block.png"),
        new Block(444, -276, 16, 16, 2, "./block.png"),
        new Block(460, -276, 16, 16, 1, "./block.png"),
        new Block(476, -276, 16, 16, 1, "./block.png"),
        new Block(492, -276, 16, 16, 3, "./block.png"),
        new Block(508, -276, 16, 16, 2, "./block.png"),
        new Block(524, -276, 16, 16, 1, "./block.png"),
        new Block(540, -276, 16, 16, 2, "./block.png"),

        new Block(268, -260, 16, 16, 2, "./block.png"),
        new Block(284, -260, 16, 16, 2, "./block.png"),
        new Block(300, -260, 16, 16, 1, "./block.png"),
        new Block(316, -260, 16, 16, 4, "./block.png"),
        new Block(332, -260, 16, 16, 2, "./block.png"),
        new Block(348, -260, 16, 16, 2, "./block.png"),
        new Block(364, -260, 16, 16, 3, "./block.png"),
        new Block(380, -260, 16, 16, 1, "./block.png"),
        new Block(396, -260, 16, 16, 2, "./block.png"),
        new Block(412, -260, 16, 16, 1, "./block.png"),
        new Block(428, -260, 16, 16, 3, "./block.png"),
        new Block(444, -260, 16, 16, 2, "./block.png"),
        new Block(460, -260, 16, 16, 1, "./block.png"),
        new Block(476, -260, 16, 16, 1, "./block.png"),
        new Block(492, -260, 16, 16, 3, "./block.png"),
        new Block(508, -260, 16, 16, 2, "./block.png"),

        new Block(316, -244, 16, 16, 4, "./block.png"),
        new Block(332, -244, 16, 16, 2, "./block.png"),
        new Block(348, -244, 16, 16, 2, "./block.png"),
        new Block(364, -244, 16, 16, 3, "./block.png"),
        new Block(380, -244, 16, 16, 1, "./block.png"),
        new Block(396, -244, 16, 16, 2, "./block.png"),
        new Block(412, -244, 16, 16, 1, "./block.png"),
        new Block(428, -244, 16, 16, 3, "./block.png"),
        new Block(444, -244, 16, 16, 2, "./block.png"),
        new Block(460, -244, 16, 16, 1, "./block.png"),

        new Block(204, -308, 8, 8, 0, "./block.png"),
        new Block(212, -308, 8, 8, 0, "./block.png"),
        new Block(220, -308, 8, 8, 0, "./block.png"),
        new Block(228, -308, 8, 8, 0, "./block.png"),
        new Block(236, -308, 8, 8, 0, "./block.png"),
        new Block(244, -308, 8, 8, 0, "./block.png"),
        new Block(252, -308, 8, 8, 0, "./block.png"),
        new Block(260, -308, 8, 8, 0, "./block.png"),
        new Block(268, -308, 8, 8, 0, "./block.png"),
        new Block(276, -308, 8, 8, 0, "./block.png"),
        new Block(284, -308, 8, 8, 0, "./block.png"),
        new Block(292, -308, 8, 8, 0, "./block.png"),
        new Block(300, -308, 8, 8, 0, "./block.png"),
        new Block(308, -308, 8, 8, 0, "./block.png"),
        new Block(316, -308, 8, 8, 0, "./block.png"),
        new Block(324, -308, 8, 8, 0, "./block.png"),
        new Block(332, -308, 8, 8, 0, "./block.png"),
        new Block(340, -308, 8, 8, 0, "./block.png"),
        new Block(348, -308, 8, 8, 0, "./block.png"),
        new Block(356, -308, 8, 8, 0, "./block.png"),
        new Block(364, -308, 8, 8, 0, "./block.png"),
        new Block(372, -308, 8, 8, 0, "./block.png"),
        new Block(380, -308, 8, 8, 0, "./block.png"),
        new Block(388, -308, 8, 8, 0, "./block.png"),
        new Block(396, -308, 8, 8, 0, "./block.png"),
        new Block(404, -308, 8, 8, 0, "./block.png"),
        new Block(412, -308, 8, 8, 0, "./block.png"),
        new Block(420, -308, 8, 8, 0, "./block.png"),
        new Block(428, -308, 8, 8, 0, "./block.png"),
        new Block(436, -308, 8, 8, 0, "./block.png"),
        new Block(444, -308, 8, 8, 0, "./block.png"),
        new Block(452, -308, 8, 8, 0, "./block.png"),
        new Block(460, -308, 8, 8, 0, "./block.png"),
        new Block(468, -308, 8, 8, 0, "./block.png"),
        new Block(476, -308, 8, 8, 0, "./block.png"),
        new Block(484, -308, 8, 8, 0, "./block.png"),
        new Block(492, -308, 8, 8, 0, "./block.png"),
        new Block(500, -308, 8, 8, 0, "./block.png"),
        new Block(508, -308, 8, 8, 0, "./block.png"),
        new Block(516, -308, 8, 8, 0, "./block.png"),
        new Block(524, -308, 8, 8, 0, "./block.png"),
        new Block(532, -308, 8, 8, 0, "./block.png"),
        new Block(540, -308, 8, 8, 0, "./block.png"),
        new Block(548, -308, 8, 8, 0, "./block.png"),
        new Block(556, -308, 8, 8, 0, "./block.png"),
        new Block(564, -308, 8, 8, 0, "./block.png"),
        new Block(572, -308, 8, 8, 0, "./block.png"),
        new Block(580, -308, 8, 8, 0, "./block.png"),

        new Block(204, -300, 8, 8, 0, "./block.png"),
        new Block(212, -300, 8, 8, 0, "./block.png"),
        new Block(220, -300, 8, 8, 0, "./block.png"),
        new Block(228, -300, 8, 8, 0, "./block.png"),
        new Block(236, -300, 8, 8, 0, "./block.png"),
        new Block(244, -300, 8, 8, 0, "./block.png"),
        new Block(252, -300, 8, 8, 0, "./block.png"),
        new Block(260, -300, 8, 8, 0, "./block.png"),
        new Block(268, -300, 8, 8, 0, "./block.png"),
        new Block(276, -300, 8, 8, 0, "./block.png"),
        new Block(284, -300, 8, 8, 0, "./block.png"),
        new Block(292, -300, 8, 8, 0, "./block.png"),
        new Block(300, -300, 8, 8, 0, "./block.png"),
        new Block(308, -300, 8, 8, 0, "./block.png"),
        new Block(316, -300, 8, 8, 0, "./block.png"),
        new Block(324, -300, 8, 8, 0, "./block.png"),
        new Block(332, -300, 8, 8, 0, "./block.png"),
        new Block(340, -300, 8, 8, 0, "./block.png"),
        new Block(348, -300, 8, 8, 0, "./block.png"),
        new Block(356, -300, 8, 8, 0, "./block.png"),
        new Block(364, -300, 8, 8, 0, "./block.png"),
        new Block(372, -300, 8, 8, 0, "./block.png"),
        new Block(380, -300, 8, 8, 0, "./block.png"),
        new Block(388, -300, 8, 8, 0, "./block.png"),
        new Block(396, -300, 8, 8, 0, "./block.png"),
        new Block(404, -300, 8, 8, 0, "./block.png"),
        new Block(412, -300, 8, 8, 0, "./block.png"),
        new Block(420, -300, 8, 8, 0, "./block.png"),
        new Block(428, -300, 8, 8, 0, "./block.png"),
        new Block(436, -300, 8, 8, 0, "./block.png"),
        new Block(444, -300, 8, 8, 0, "./block.png"),
        new Block(452, -300, 8, 8, 0, "./block.png"),
        new Block(460, -300, 8, 8, 0, "./block.png"),
        new Block(468, -300, 8, 8, 0, "./block.png"),
        new Block(476, -300, 8, 8, 0, "./block.png"),
        new Block(484, -300, 8, 8, 0, "./block.png"),
        new Block(492, -300, 8, 8, 0, "./block.png"),
        new Block(500, -300, 8, 8, 0, "./block.png"),
        new Block(508, -300, 8, 8, 0, "./block.png"),
        new Block(516, -300, 8, 8, 0, "./block.png"),
        new Block(524, -300, 8, 8, 0, "./block.png"),
        new Block(532, -300, 8, 8, 0, "./block.png"),
        new Block(540, -300, 8, 8, 0, "./block.png"),
        new Block(548, -300, 8, 8, 0, "./block.png"),
        new Block(556, -300, 8, 8, 0, "./block.png"),
        new Block(564, -300, 8, 8, 0, "./block.png"),
        new Block(572, -300, 8, 8, 0, "./block.png"),
        new Block(580, -300, 8, 8, 0, "./block.png"),
        new Block(204, -292, 16, 16, 2, "./block.png"),
        new Block(220, -292, 16, 16, 2, "./block.png"),
        new Block(236, -292, 16, 16, 3, "./block.png"),
        new Block(252, -292, 16, 16, 4, "./block.png"),
        new Block(268, -292, 16, 16, 3, "./block.png"),
        new Block(284, -292, 16, 16, 2, "./block.png"),
        new Block(300, -292, 16, 16, 1, "./block.png"),
        new Block(316, -292, 16, 16, 2, "./block.png"),
        new Block(332, -292, 16, 16, 3, "./block.png"),
        new Block(348, -292, 16, 16, 4, "./block.png"),
        new Block(364, -292, 16, 16, 3, "./block.png"),
        new Block(380, -292, 16, 16, 3, "./block.png"),
        new Block(396, -292, 16, 16, 2, "./block.png"),
        new Block(412, -292, 16, 16, 1, "./block.png"),
        new Block(428, -292, 16, 16, 1, "./block.png"),
        new Block(444, -292, 16, 16, 4, "./block.png"),
        new Block(460, -292, 16, 16, 2, "./block.png"),
        new Block(476, -292, 16, 16, 3, "./block.png"),
        new Block(492, -292, 16, 16, 1, "./block.png"),
        new Block(508, -292, 16, 16, 4, "./block.png"),
        new Block(524, -292, 16, 16, 4, "./block.png"),
        new Block(540, -292, 16, 16, 2, "./block.png"),
        new Block(556, -292, 16, 16, 1, "./block.png"),
        new Block(572, -292, 16, 16, 2, "./block.png")

        /*new Block(204, -356, 16, 16, 1, "./block.png"),
        new Block(220, -356, 16, 16, 1, "./block.png"),
        new Block(236, -356, 16, 16, 2, "./block.png"),
        new Block(252, -356, 16, 16, 1, "./block.png"),
        new Block(268, -356, 16, 16, 3, "./block.png"),
        new Block(284, -356, 16, 16, 1, "./block.png"),
        new Block(300, -356, 16, 16, 2, "./block.png"),
        new Block(316, -356, 16, 16, 1, "./block.png"),
        new Block(332, -356, 16, 16, 3, "./block.png"),
        new Block(348, -356, 16, 16, 1, "./block.png"),
        new Block(364, -356, 16, 16, 4, "./block.png"),
        new Block(380, -356, 16, 16, 2, "./block.png"),
        new Block(396, -356, 16, 16, 1, "./block.png"),
        new Block(412, -356, 16, 16, 2, "./block.png"),
        new Block(428, -356, 16, 16, 2, "./block.png"),
        new Block(444, -356, 16, 16, 1, "./block.png"),
        new Block(460, -356, 16, 16, 3, "./block.png"),
        new Block(476, -356, 16, 16, 1, "./block.png"),
        new Block(492, -356, 16, 16, 2, "./block.png"),
        new Block(508, -356, 16, 16, 1, "./block.png"),
        new Block(524, -356, 16, 16, 3, "./block.png"),
        new Block(540, -356, 16, 16, 1, "./block.png"),
        new Block(556, -356, 16, 16, 1, "./block.png"),
        new Block(572, -356, 16, 16, 1, "./block.png"),

        new Block(204, -340, 16, 16, 3, "./block.png"),
        new Block(220, -340, 16, 16, 2, "./block.png"),
        new Block(236, -340, 16, 16, 4, "./block.png"),
        new Block(252, -340, 16, 16, 3, "./block.png"),
        new Block(268, -340, 16, 16, 2, "./block.png"),
        new Block(284, -340, 16, 16, 4, "./block.png"),
        new Block(300, -340, 16, 16, 1, "./block.png"),
        new Block(316, -340, 16, 16, 1, "./block.png"),
        new Block(332, -340, 16, 16, 4, "./block.png"),
        new Block(348, -340, 16, 16, 2, "./block.png"),
        new Block(364, -340, 16, 16, 1, "./block.png"),
        new Block(380, -340, 16, 16, 3, "./block.png"),
        new Block(396, -340, 16, 16, 1, "./block.png"),
        new Block(412, -340, 16, 16, 4, "./block.png"),
        new Block(428, -340, 16, 16, 3, "./block.png"),
        new Block(444, -340, 16, 16, 2, "./block.png"),
        new Block(460, -340, 16, 16, 4, "./block.png"),
        new Block(476, -340, 16, 16, 2, "./block.png"),
        new Block(492, -340, 16, 16, 3, "./block.png"),
        new Block(508, -340, 16, 16, 2, "./block.png"),
        new Block(524, -340, 16, 16, 1, "./block.png"),
        new Block(540, -340, 16, 16, 2, "./block.png"),
        new Block(556, -340, 16, 16, 3, "./block.png"),
        new Block(572, -340, 16, 16, 4, "./block.png"),

        new Block(204, -324, 16, 16, 4, "./block.png"),
        new Block(220, -324, 16, 16, 1, "./block.png"),
        new Block(236, -324, 16, 16, 2, "./block.png"),
        new Block(252, -324, 16, 16, 1, "./block.png"),
        new Block(268, -324, 16, 16, 3, "./block.png"),
        new Block(284, -324, 16, 16, 4, "./block.png"),
        new Block(300, -324, 16, 16, 2, "./block.png"),
        new Block(316, -324, 16, 16, 4, "./block.png"),
        new Block(332, -324, 16, 16, 3, "./block.png"),
        new Block(348, -324, 16, 16, 4, "./block.png"),
        new Block(364, -324, 16, 16, 2, "./block.png"),
        new Block(380, -324, 16, 16, 3, "./block.png"),
        new Block(396, -324, 16, 16, 3, "./block.png"),
        new Block(412, -324, 16, 16, 2, "./block.png"),
        new Block(428, -324, 16, 16, 1, "./block.png"),
        new Block(444, -324, 16, 16, 4, "./block.png"),
        new Block(460, -324, 16, 16, 2, "./block.png"),
        new Block(476, -324, 16, 16, 3, "./block.png"),
        new Block(492, -324, 16, 16, 1, "./block.png"),
        new Block(508, -324, 16, 16, 2, "./block.png"),
        new Block(524, -324, 16, 16, 4, "./block.png"),
        new Block(540, -324, 16, 16, 2, "./block.png"),
        new Block(556, -324, 16, 16, 4, "./block.png"),
        new Block(572, -324, 16, 16, 1, "./block.png")
        */
      );
      this.enemies.push(
        new Enemy(400, -400, 90, 4, "./enemies.png"),
        new Enemy(400, -400, 0, 4, "./enemies.png"),
        new Enemy(400, -400, 180, 4, "./enemies.png"),
        new Enemy(400, -400, 270, 4, "./enemies.png"),
        new Enemy(width / 2 - 16, -352, 270, 5, "./enemies.png")
      );
    }
  }
  getBlocks() {
    return this.blocks;
  }
  getEnemies() {
    return this.enemies;
  }

  getStartTime() {
    return this.start;
  }
}
