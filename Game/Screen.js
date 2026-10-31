class Screen {
    constructor(screen) {
        this.game = new Game()
        this.welcome = new Welcome()
        this.count = new Count()
        this.anu = this[screen]
        this.changeScreen(screen)
    }
    changeScreen(screen) {
        if (this.anu) this.anu.unmount()
        this.anu = this[screen]
        this.anu.mount()
    }
}
const useScreen = new Screen('game')