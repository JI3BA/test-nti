////// DropDown
const toogleDropDown = document.querySelector('.drop-down__change')
const dropDown = document.querySelector('.drop-down')
const windowAcount = document.querySelector('.personal')

toogleDropDown.addEventListener('mouseover', () => {
    dropDown.classList.add('drop-down--active')
})

windowAcount.addEventListener('mouseleave', () => {
    dropDown.classList.remove('drop-down--active')
})

////// Validation Contacts Form
function validationForm(form){
    let result = true
    let amountValue = 0

    form.querySelectorAll('.input').forEach(input => {
        if(input.value.trim() === '' || input.value.trim().length < 6){
            result = false
            input.classList.add('input-box__input--invalid')
            input.nextElementSibling.classList.add('input-box__name--invalid')
        }else{
            input.classList.remove('input-box__input--invalid')
            input.nextElementSibling.classList.remove('input-box__name--invalid')
            result = true
            amountValue += 1
        }

    })

    if(amountValue === 2){
        form.querySelectorAll('.input').forEach(input => {
            input.value = ''
        })
        return result
    }
}

document.querySelector('.request__button').addEventListener('click', function(e){
    e.preventDefault()

    if(validationForm(document) === true){
        alert('Данные отправлены')
    }
})

