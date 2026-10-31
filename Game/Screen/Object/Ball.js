class Ball {
    constructor(varian) {
        this.el = document.createElement('div')
        this.container = document.querySelector('.game-main')
        this.varian = varian
        this.intervalTurun = null
        this.timeTurun = 300
        this.balls()
    }
    balls() {
        this.el.style.bottom = this.timeTurun + 'px'
        this.el.style.position = 'absolute'
        this.intervalTurun = setInterval(() => {
            this.timeTurun -= 10
            this.el.style.bottom = (this.timeTurun) + 'px'
            if(this.timeTurun == 30){
                clearInterval(this.intervalTurun)   
                this.intervalTurun = null
            }
        }, 50 );
        this.el.style.left = '47%'
        this.el.style.right = '50%'
        this.el.style.width = '50px'
        this.el.style.height = '50px'
        this.el.style.backgroundImage = `url("GAME_MEDIA/Sprites/${this.varian}.png")`
        this.el.style.backgroundSize = 'contain'
        this.el.style.backgroundRepeat = 'none'
        this.container.append(this.el)
    }
}