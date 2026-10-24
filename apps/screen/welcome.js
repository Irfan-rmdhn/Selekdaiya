class Welcome {
    constructor(screen) {
        this.el = document.querySelector('.screen.welcome')
    }
    mount() {
        this.el.classList.add('active')
        const welcomeImg = document.querySelector('#welcomeImg')
        const welcomeText = document.querySelector('.kata-kata')
        
        const createNew = document.querySelector('.create-new')
        const workspace = document.querySelector('.workspace')
        setTimeout(() => {
            welcomeImg.style.display = 'none'
            welcomeText.style.display = 'none'
            useScreen.changeScreen('create')
            createNew.style.display = 'block'
            workspace.style.display = 'block'
        }, 4000);
    }
    unmount() {
        this.el.classList.remove('active')
    }

}