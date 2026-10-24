class Workspace{
    constructor(screen){
        this.el = document.querySelector('.screen.workspace')
        this.canvas = document.querySelector('canvas')
        this.ctx = this.canvas.getContext('2d')
        
        this.nameFile = 'iya'
        this.width = 500
        this.height = 500
    }
    mount(){
        this.el.classList.add('active')
        this.initCanvas()
        this.gambarCanvas()
    }
    gambarCanvas(){
        this.ctx.beginPath()
        this.canvas.addEventListener('mousemove',(e)=>{
            this.ctx.fillRect(e.offsetX,e.offsetY,5,5)
        })
    }
    initCanvas(){
        this.canvas.width = this.width
        this.canvas.height = this.height
    }
    unmount(){
        this.el.classList.remove('active')
    }

}