const welcomeImg = document.querySelector('#welcomeImg')
const welcomeText = document.querySelector('.kata-kata')
const welcome = document.querySelector('.welcome')

const createNew = document.querySelector('.create-new')
const formCreateNew = document.querySelector('.preset-detail')

const workspace = document.querySelector('.workspace')
const kertas = document.querySelector('.kertas')
setTimeout(() => {
    welcomeImg.style.display = 'none'
    welcomeText.style.display = 'none'
    welcome.remove()
    createNew.style.display = 'block'
    workspace.style.display = 'block'
}, 1000);
console.log(welcomeText);

formCreateNew.addEventListener('submit', (e) => {
    e.preventDefault()
    dataFile = {}
    const value = Object.fromEntries(new FormData(e.target))
    createNew.remove()
    workspace.style.display = 'flex'
    kertas.style.display = 'flex'
    console.log(dataFile.width);
    kertas.style.width = value.width + "px"
    kertas.style.height = value.height + "px"
    kertas.querySelector('span').value = value.name
})
