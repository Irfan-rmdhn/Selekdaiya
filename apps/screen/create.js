class Create {
    constructor(screen) {
        this.el = document.querySelector('.screen.create-new')
    }
    mount() {
        this.el.classList.add('active')
        const formCreateNew = document.querySelector('.preset-detail')
        const kertas = document.querySelector('.kertas')
        formCreateNew.addEventListener('submit', (e) => {
            e.preventDefault()
            const value = Object.fromEntries(new FormData(e.target))
            useScreen.changeScreen('workspace')
            // kertas.style.display = 'flex'
            kertas.style.width = value.width + "px"
            kertas.style.height = value.height + "px"
            kertas.querySelector('span').value = value.name
        })


    }
    unmount() {
        this.el.classList.remove('active')
    }

}