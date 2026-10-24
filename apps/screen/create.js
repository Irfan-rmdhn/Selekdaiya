class Create {
    constructor(screen) {
        this.el = document.querySelector('.screen.create-new')
        this.formCreateNew = document.querySelector('.preset-detail')
    }
    mount() {
        this.el.classList.add('active')
        this.formCreateNew.addEventListener('submit', (e) => {
            e.preventDefault()
            const value = Object.fromEntries(new FormData(e.target))
            useScreen.workspace.nameFile = value.name
            useScreen.workspace.width = value.width
            useScreen.workspace.height = value.height
            useScreen.changeScreen('workspace')
        })
    }
    unmount() {
        this.el.classList.remove('active')
    }

}