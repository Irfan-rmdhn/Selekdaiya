class Screen {
    constructor(screen) {
        this.welcome = new Welcome()
        this.workspace = new Workspace()
        this.create = new Create()
        this.anu = this[screen]
        this.changeScreen(screen)
    }
    changeScreen(screen){
        if(this.anu) this.anu.unmount()
        this.anu = this[screen]
        this.anu.mount()
    }
}
const useScreen = new Screen('welcome')