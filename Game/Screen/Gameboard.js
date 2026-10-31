class Game {
    constructor() {
        this.el = document.querySelector('.main')
        this.username = 'John doe'
        this.usernameEl = document.querySelector('#username')
        this.level = 'medium'
        this.ball = 'Ball 01'
        this.enemyFlag = 'Spain'
        this.myFlag = 'Italy'
        this.myFlagEl = document.querySelectorAll('#flagMy')
        this.enemyFlagEl = document.querySelectorAll('#flagEnemy')
        this.timer = document.querySelector('.timer strong')
    }
    mount() {
        this.timeGame = this.level == 'easy' ? 30 : this.level == 'medium' ? 20 : 15;
        this.el.classList.add('active')
        this.usernameEl.textContent = this.username
        this.timer.textContent = this.timeGame
        this.FlagTop()
        this.GameTimer()
        this.myFlagEl.forEach((item) => {
            item.src = `GAME_MEDIA/Sprites/Flag/${this.myFlag}.png`
        })
        this.enemyFlagEl.forEach((item) => {
            item.src = `GAME_MEDIA/Sprites/Flag/${this.enemyFlag}.png`
        })
        this.initMyChar()
        this.initEnemyChar()
        this.initBall()
        this.initDecrease()
        this.initIncrease()
        this.initDiamond()
    }
    GameTimer() {
        this.timerr = null
        this.timerr = setInterval(() => {
            this.timeGame--
            this.timer.textContent = this.timeGame
            if (this.timeGame == 0) {

            }
        }, 1000);
    }
    FlagTop() {
        this.enemyFlagTopImg = document.querySelector('.enemy-flag-game img')
        this.enemyFlagTopText = document.querySelector('.enemy-flag-game strong')
        this.myFlagTopImg = document.querySelector('.my-flag-game img')
        this.myFlagTopText = document.querySelector('.my-flag-game strong')

        this.enemyFlagTopImg.src = `GAME_MEDIA/Sprites/Flag/${this.enemyFlag}.png`
        this.myFlagTopImg.src = `GAME_MEDIA/Sprites/Flag/${this.myFlag}.png`

        this.enemyFlagTopText.textContent = this.enemyFlag
        this.myFlagTopText.textContent = this.myFlag
    }
    initMyChar() {
        const char = new Char(this.myFlag)
    }
    initEnemyChar() {
        const char = new Char(this.enemyFlag, true)
    }
    initBall() {
        const ball = new Ball(this.ball)
    }
    initDecrease(){
        const decrease = new Item(true)
        decrease.initDecrease()  
     }
    initDiamond(){
        const diamond = new Item(true)
        // diamond.initDiamon()
     }
    initIncrease(){
        const Increase = new Item(true)
        // Increase.initIncrease()
     }
    unmount() {
        this.el.classList.remove('active')
    }
}