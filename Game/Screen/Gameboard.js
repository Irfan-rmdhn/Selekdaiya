class Game {
  constructor() {
    this.el = document.querySelector(".main");
    this.username = "John doe";
    this.usernameEl = document.querySelector("#username");
    this.level = "medium";
    this.ball = "Ball 01";
    this.enemyFlag = "Spain";
    this.myFlag = "Italy";
    this.myFlagEl = document.querySelectorAll("#flagMy");
    this.enemyFlagEl = document.querySelectorAll("#flagEnemy");
    this.timer = document.querySelector(".timer strong");
    this.pause = false;
    this.items = [];
  }
  mount() {
    this.PauseFunc();
    this.timeGame =
      this.level == "easy" ? 30 : this.level == "medium" ? 20 : 15;
    this.el.classList.add("active");
    this.usernameEl.textContent = this.username;
    this.timer.textContent = this.timeGame;
    this.FlagTop();
    this.GameTimer();
    this.myFlagEl.forEach((item) => {
      item.src = `GAME_MEDIA/Sprites/Flag/${this.myFlag}.png`;
    });
    this.enemyFlagEl.forEach((item) => {
      item.src = `GAME_MEDIA/Sprites/Flag/${this.enemyFlag}.png`;
    });
    this.random = Math.floor(Math.random() * 3);
    switch (this.random) {
      case 0:
        this.initDecrease();
        break;
      case 1:
        this.initDiamond();
        break;
      case 2:
        this.initIncrease();
        break;
    }
    this.initMyChar();
    this.initEnemyChar();
    this.initBall();
    this.SpawnItem();
    this.initGawangDua();
    this.initGawangSatu();
  }
  GameTimer() {
    this.timerr = null;
    this.timerr = setInterval(() => {
      if (this.pause) return;
      this.timeGame--;
      this.timer.textContent = this.timeGame;
      if (this.timeGame == 0) {
      }
    }, 1000);
  }
  FlagTop() {
    this.enemyFlagTopImg = document.querySelector(".enemy-flag-game img");
    this.enemyFlagTopText = document.querySelector(".enemy-flag-game strong");
    this.myFlagTopImg = document.querySelector(".my-flag-game img");
    this.myFlagTopText = document.querySelector(".my-flag-game strong");

    this.enemyFlagTopImg.src = `GAME_MEDIA/Sprites/Flag/${this.enemyFlag}.png`;
    this.myFlagTopImg.src = `GAME_MEDIA/Sprites/Flag/${this.myFlag}.png`;

    this.enemyFlagTopText.textContent = this.enemyFlag;
    this.myFlagTopText.textContent = this.myFlag;
  }
  initMyChar() {
    const char = new Char(this.myFlag, false, this);
  }
  initEnemyChar() {
    const char = new Char(this.enemyFlag, true, this);
  }
  initBall() {
    const ball = new Ball(this.ball, this);
    this.balls = ball;
  }
  initDecrease() {
    const decrease = new Item(true, this);
    decrease.initDecrease();
    this.items.push(decrease);
  }
  initDiamond() {
    const diamond = new Item(true, this);
    diamond.initDiamon();
    this.items.push(diamond);
  }
  initIncrease() {
    const Increase = new Item(true, this);
    Increase.initIncrease();
    this.items.push(Increase);
  }
  initGawangSatu() {
    const Gawangs = new Gawang(false);
  }
  initGawangDua() {
    const Gawangs = new Gawang(true);
  }
  SpawnItem() {
    this.spawnInterval = null;
    this.spawnInterval = setInterval(() => {
      this.random = Math.floor(Math.random() * 3);
      if (this.pause) return;
      switch (this.random) {
        case 0:
          this.initDecrease();
          break;
        case 1:
          this.initDiamond();
          break;
        case 2:
          this.initIncrease();
          break;
      }
    }, 5000);
  }
  PauseFunc() {
    this.pauseEl = document.querySelector(".pause-modal");
    this.pauseEl.style.display = "none";
    window.addEventListener("keydown", (e) => {
      if (e.code == "Escape") {
        if (!this.pause) {
          this.pauseEl.style.display = "flex";
          this.pause = true;
        } else {
          this.pauseEl.style.display = "none";
          this.pause = false;
        }
      }
    });
  }
  unmount() {
    this.el.classList.remove("active");
  }
}
