const toogleDropDown = document.querySelector('.drop-down__change')
const dropDown = document.querySelector('.drop-down')
const windowAcount = document.querySelector('.personal')

toogleDropDown.addEventListener('mouseover', () => {
    dropDown.classList.add('drop-down--active')
})

windowAcount.addEventListener('mouseleave', () => {
    dropDown.classList.remove('drop-down--active')
})