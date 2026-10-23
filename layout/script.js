const nav = document.querySelector('nav')
console.log(nav);
nav.onclick = (e) => {
    console.log(e.clientY);
}
const gerakKiri = document.querySelector('.kiri-gerak')
const gerakKanan = document.querySelector('.kanan-gerak')
gerakKanan.style.cursor = 'pointer'
gerakKiri.style.cursor = 'pointer'
const headSect1 = document.querySelector('.head-sect1')
console.log(headSect1);
let klikKanan = 0
let klikKiri = 0
gerakKanan.addEventListener('click', (e) => {
    if (klikKanan == 0) {
        headSect1.style.backgroundImage = "url('asset/images (2).jpg')"
        klikKanan += 1
    } else if (klikKanan == 1) {
        headSect1.style.backgroundImage = "url('asset/images (4).webp')"
        klikKanan = 0
    }
})

gerakKiri.addEventListener('click', (e) => {
    if (klikKiri == 0) {
        headSect1.style.backgroundImage = "url('asset/images (1).jpg')"
        klikKiri++
    } else if (klikKiri == 1) {
        headSect1.style.backgroundImage = "url('asset/images (7).jpg')"
        klikKiri = 0
    }
})