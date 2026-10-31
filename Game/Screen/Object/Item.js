class Item {
    constructor(decrease, diamond, increase) {
        this.el = document.createElement('div')
        this.main = document.querySelector('.game-main')
        this.acak = 10
        this.min = 100
        
        this.max = this.main.clientWidth - 150
        this.intervalItem = null
        this.initItem()
    }
    initItem() {
        this.acak = Math.random() * (this.max - this.min) + this.min
        console.log(this.acak);
        this.el.style.width = '50px'
        this.el.style.height = '50px'
        this.el.style.position = 'absolute'
        this.el.style.right = this.acak + 'px'
        this.el.style.bottom = 330+ '%'
        this.el.style.backgroundSize = 'contain'
        this.main.style.paddingLeft = '100px'
        this.main.style.paddingRight = '100px'
        this.main.append(this.el)
    }
    turun() {
        this.intervalItem = setInterval(() => {

        }, 100);
    }
    initIncrease() {
        this.el.style.backgroundImage = `url("GAME_MEDIA/Sprites/Increase Ball.png")`
    }
    initDecrease() {
        this.el.style.backgroundImage = `url("GAME_MEDIA/Sprites/Decrease Ball.png")`
    }
    initDiamon() {
        this.el.style.backgroundImage = `url("GAME_MEDIA/Sprites/Diamond Ice.png")`
    }
}