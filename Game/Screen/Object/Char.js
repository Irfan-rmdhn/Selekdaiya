class Char {
  constructor(region, bot, pause) {
    this.el = document.createElement("div");
    this.container = document.querySelector(".game-main");
    this.region = region;
    this.bot = bot;
    this.game = pause;
    this.gerakan = 0;
    this.idleInterval = null;
    this.state = "Idle";
    this.TampilKan();
    this.Char();
    this.gerak();
    this.anu();
    this.getItem()
  }
  anu() {
    clearInterval(this.intervalLeft);
    this.intervalLeft = null;
    this.intervalLeft = setInterval(() => {
      if (this.game.pause) return;
      this.gerakan = (this.gerakan + 1) % 17;
      this.el.style.backgroundImage = `url("GAME_MEDIA/Sprites/Characters/${this.region}/${this.state}/${this.state}_0${this.gerakan < 10 ? 0 : ""}${this.gerakan}.png")`;
    }, 30);
  }
  Char() {
    this.el.style.width = "150px";
    this.el.style.height = "150px";
    // this.el.style.border = '1px solid black'
    this.el.style.position = "absolute";
    this.el.style.bottom = "20%";
    this.el.style.right = "50%";
    this.el.style.backgroundSize = "100% 100%";
    if (this.bot) {
      this.el.style.left = "50%";
      this.el.style.transform = "scaleX(-1)";
    }
    this.el.style.zIndex = 2;
    this.container.append(this.el);
  }
  changeState(state) {
    if (this.state !== state) {
      this.state = state;
      this.gerakan = 0;
    }
  }
  gerak() {
    if (this.game.pause) return;
    if (!this.bot) {
      window.onkeydown = (e) => {
        if (this.game.pause) return;
        switch (e.code) {
          case "KeyW":
            this.top();
            break;
          case "KeyA":
            this.left();
            break;
          case "KeyD":
            this.right();
            break;
          case "Space":
            if (e.repeat) return;
            e.preventDefault();
            this.kickBall();
        }
      };
      window.onkeyup = (e) => {
        switch (e.code) {
          case "KeyW":
          case "KeyA":
          case "KeyD":
          case "Space":
            this.changeState("Idle");
            break;
        }
      };
    }
    return;
  }
  kickBall() {
    this.changeState("Kick");
    const ball = this.game.balls;
    this.jarak = ball.el.offsetLeft - this.el.offsetLeft;
    console.log(this.jarak);
    if (this.jarak < 100) {
      ball.el.style.left = ball.el.offsetLeft + 50 + "px";
    }
  }

  getItem() {
    this.itemInterval = null;
    this.itemInterval = setInterval(() => {
      const items = this.game.items;
      items.forEach((item) => {
        console.log(item.el.offsetTop);
        if(item.el.offsetTop == this.el.offsetTop){
            item.el.remove()
            console.log('anjing');
            
        }
      });
    }, 100);
  }
  left() {
    this.el.style.left = this.el.offsetLeft - 20 + "px";
    this.intervalLeft = null;
    this.changeState("Move Backward");
    this.gerakan = 0;
  }
  right() {
    this.el.style.left = this.el.offsetLeft + 20 + "px";
    this.changeState("Move Forward");
    this.gerakan = 0;
  }
  top() {
    this.state = "Jump";
    this.gerakan = 0;
    this.changeState("Jump");
  }
  TampilKan() {}
}
