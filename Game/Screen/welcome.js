class Welcome {
    constructor() {
        this.el = document.querySelector('.welcome')
        this.insBtn = document.querySelector('.instruction')
        this.insEl = document.querySelector('.ins')
        this.form = document.querySelector('.form-game')
        this.playBtn = document.querySelector('.play')
        this.usernameInput = document.querySelector('.username')
        this.randomBtn = document.querySelector('#random-enemy')
        this.enemyFlag = document.querySelector('#enemy-flag')
        this.myFlag = document.querySelector('#my-flag')
        this.balls = document.querySelectorAll('.balls img')
        this.ballAct = 'Ball 01'
    }
    mount() {
        this.insBtn.addEventListener('click', (e) => {
            this.insEl.style.display = 'flex'
        })
        this.playBtn.disabled = this.usernameInput.value.trim() === ''
        this.usernameInput.addEventListener('input', (e) => {
            this.playBtn.disabled = this.usernameInput.value.trim() === ''
        })
        this.insEl.querySelector('span').onclick = ((e) => {
            this.insEl.style.display = 'none'
        })
        this.el.classList.add('active')
        this.form.addEventListener('submit', (e) => {
            e.preventDefault()
            this.data = Object.fromEntries(new FormData(e.target))
            console.log(this.data);
            useScreen.game.username = this.data.usn
            useScreen.game.level = this.data.level
            useScreen.game.enemyFlag = this.data.enemyflag
            useScreen.game.myFlag = this.data.myflag
            useScreen.game.ball = this.ballAct
            useScreen.changeScreen('count')
        })
        this.randomBtn.addEventListener('click', (e) => {
            e.preventDefault()
            const enemyFlag = document.querySelector('#enemy-flag')
            enemyFlag.selectedIndex = Math.floor(Math.random() * (enemyFlag.options.length - 1)) + 1
            console.log(enemyFlag);

        })
        this.myFlag.addEventListener('change', (e) => {
            [...this.enemyFlag.options].forEach(element => {
                element.disabled = element.value == this.myFlag.value
            });
        })
        this.balls.forEach((ball) => {
            ball.addEventListener('click', (e) => {
                if (this.ballAct == '') {
                    ball.classList.add('ball-pick')
                    this.ballAct = ball.dataset.ball
                } else {
                    this.balls.forEach((item) => {
                        item.classList.remove('ball-pick')
                    })
                    ball.classList.add('ball-pick')
                    this.ballAct = ball.dataset.ball
                }
            })
        })
    }
    unmount() {
        this.el.classList.remove('active')
    }
}