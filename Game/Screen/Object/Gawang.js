class Gawang{
    constructor(gawangdua){
        this.el = document.createElement('div')
        this.main = document.querySelector('.game-main')
        this.gawangdua = gawangdua
        this.mount()
    }
    mount(){
        console.log(this.gawangdua);
        this.el.style.width = '100px'
        this.el.style.height = '200px'
        this.el.style.backgroundSize = '100% 100%'
        this.el.style.position = 'absolute'
        this.el.style.backgroundImage = 'url("GAME_MEDIA/Sprites/Goal - Side.png")'
        this.el.style.backgroundRepeat = 'none'
        this.el.style.bottom = '40px'
        if(this.gawangdua){
            this.el.style.left = '845px'
            this.el.style.transform = 'ScaleX(-1)'
        }else{
            this.el.style.left = '50px'
        }
        this.main.append(this.el)
    }
}