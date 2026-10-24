class Workspace{
    constructor(screen){
        this.el = document.querySelector('.screen.workspace')
    }
    mount(){
        this.el.classList.add('active')
    }
    unmount(){
        this.el.classList.remove('active')
    }

}