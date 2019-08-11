import Game from "./game";

export default class Input {
  constructor(player, game) {
    document.addEventListener("keydown", event => {
      let key = event.keyCode || event.key;

      switch (key) {
        case 37:
          player.left();
          break;
        case 39:
          player.right();
          break;
        case 32:
          console.log("pressed space");
          game.start();
          break;
      }
    });

    document.addEventListener("keyup", event => {
      let key = event.keyCode || event.key;

      switch (key) {
        case 37:
          player.stop();
          break;
        case 39:
          player.stop();
          break;
      }
    });
  }
}
