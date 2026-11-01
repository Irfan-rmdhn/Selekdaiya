class Item {
  constructor(decrease, game) {
    this.el = document.createElement("div");
    this.main = document.querySelector(".game-main");
    this.acak = 10;
    this.min = 100;
    this.game = game;
    this.max = this.main.clientWidth - 150;
    this.intervalItem = null;
    this.initItem();
    this.turun();
  }
  initItem() {
    this.acak = Math.random() * (this.max - this.min) + this.min;
    this.el.style.width = "50px";
    this.el.style.height = "50px";
    this.el.style.position = "absolute";
    this.el.style.right = this.acak + "px";
    this.el.style.bottom = 350 + "%";
    this.el.style.backgroundSize = "contain";
    this.main.style.paddingLeft = "100px";
    this.main.style.paddingRight = "100px";
    this.main.append(this.el);
  }
  turun() {
    this.topWidth = 330;
    this.intervalItem = setInterval(() => {
      if (this.game.pause) return;
      this.topWidth -= 5;
      this.el.style.bottom = this.topWidth + "px";
      if(this.el.style.bottom == '0px'){
        this.hapus()
      }
    }, 50);
  }
  initIncrease() {
    this.el.style.backgroundImage = `url("GAME_MEDIA/Sprites/Increase Ball.png")`;
  }
  hapus(){
    this.el.remove()
    clearInterval(this.intervalItem)
    this.intervalItem = null
  }
  initDecrease() {
    this.el.style.backgroundImage = `url("GAME_MEDIA/Sprites/Decrease Ball.png")`;
  }
  initDiamon() {
    this.el.style.backgroundImage = `url("GAME_MEDIA/Sprites/Diamond Ice.png")`;
  }
}
