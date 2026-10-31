class Count{
    constructor(){
        this.el = document.querySelector('.screen.count')
        this.anu = null
        this.time = 3

    }
    mount(){
        this.el.classList.add('active')
        this.el.textContent = this.time
        this.anu = setInterval(() => {
            this.time --
            this.el.textContent = this.time
            if(this.time == 0){
                useScreen.changeScreen('game')
                clearInterval(this.anu)
                this.anu = null
            }
        }, 1000);
    }
    unmount(){
        clearInterval(this.anu)
        this.anu = null
        this.el.classList.remove('active')
    }
}