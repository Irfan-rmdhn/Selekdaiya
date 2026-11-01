class Ball {
  constructor(varian, game) {
    this.el = document.createElement("div");
    this.container = document.querySelector(".game-main");
    this.varian = varian;
    this.game = game;
    this.intervalTurun = null;
    this.bounceInterval = null;
    this.timeTurun = 300;
    this.balls();
  }
  balls() {
    this.el.style.bottom = this.timeTurun + "px";
    this.el.style.position = "absolute";
    this.intervalTurun = setInterval(() => {
      if (this.game.pause) return;
      this.timeTurun -= 10;
      this.el.style.bottom = this.timeTurun + "px";
      if (this.timeTurun == 40) {
        clearInterval(this.intervalTurun);
        this.intervalTurun = null;
      }
    }, 50);
    this.el.style.left = "47%";
    this.el.style.right = "50%";
    this.el.style.width = "50px";
    this.el.style.height = "50px";
    this.el.style.backgroundImage = `url("GAME_MEDIA/Sprites/${this.varian}.png")`;
    this.el.style.backgroundSize = "contain";
    this.el.style.backgroundRepeat = "none";
    this.container.append(this.el);
  }
  mantul() {
    this.posY = 400;
    this.y = 10
    this.bounceInterval = setInterval(() => {
        this.posY += this.y 
        if(this.posY <= 20){
            this.posY = 20
            this.y
        }
      this.el.style.top = this.el.offsetTop;
    }, 16);
  }
}
