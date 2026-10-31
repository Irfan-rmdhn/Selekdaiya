class Char {
    constructor(region, bot) {
        this.el = document.createElement('div')
        this.container = document.querySelector('.game-main')
        this.region = region
        this.bot = bot
        this.gerakan = 0
        this.idleInterval = null
        this.state = 'Idle'
        this.TampilKan()
        this.Char()
        this.gerak()
        this.anu()
    }
    anu() {
        clearInterval(this.intervalLeft)
        this.intervalLeft = null
        this.intervalLeft = setInterval(() => {
            this.gerakan = (this.gerakan + 1) % 17;
            this.el.style.backgroundImage =
                `url("GAME_MEDIA/Sprites/Characters/${this.region}/${this.state}/${this.state}_0${this.gerakan < 10 ? 0 : ''}${this.gerakan}.png")`;
        }, 50);
    }
    Char() {
        this.el.style.width = '150px'
        this.el.style.height = '150px'
        // this.el.style.border = '1px solid black'
        this.el.style.position = 'absolute'
        this.el.style.bottom = '20%'
        this.el.style.right = '50%'
        this.el.style.backgroundSize = '100% 100%'
        if (this.bot) {
            this.el.style.left = '50%'
            this.el.style.transform = 'scaleX(-1)'
        }
        this.el.style.zIndex = 2
        this.container.append(this.el)
        console.log(this.el.offsetLeft);
    } changeState(state) {
        if (this.state !== state) {
            this.state = state;
            this.gerakan = 0;
        }
    }
    gerak() {
        if (!this.bot) {
            window.onkeydown = (e) => {
                switch (e.code) {
                    case 'KeyW':
                        this.top()
                        break;
                    case 'KeyA':
                        this.left()
                        break;
                    case 'KeyD':
                        this.right()
                        break;
                }
            }
            window.onkeyup = (e) => {
                switch (e.code) {
                    case 'KeyW':
                        this.changeState('Idle')
                        break;
                    case 'KeyA':
                        this.changeState('Idle')
                        break;
                    case 'KeyD':
                        this.changeState('Idle')
                        break;
                }
            }
        } return;
    }
    left() {
        this.el.style.left = this.el.offsetLeft - 20 + 'px'
        this.intervalLeft = null
        this.changeState('Move Backward')
        this.gerakan = 0
    }
    right() {
        this.el.style.left = this.el.offsetLeft + 20 + 'px'
        this.changeState('Move Forward')
        this.gerakan = 0
    }
    top() {
        this.state = 'Jump'
        this.gerakan = 0
        this.changeState('Jump')
    }
    TampilKan() {
    }
}