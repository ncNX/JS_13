

const p = document.getElementById('count')
const span = document.getElementById('step')
const incBtn = document.getElementById('inc')
const decrBtn = document.getElementById('decr')
const incStepBtn = document.getElementById('incStep')
const decrStepBtn = document.getElementById('decrStep')
const modalInput = document.getElementById('modalInput')
const modalBtn = document.getElementById('modalBtn')
const modal = document.getElementById('modal')
const userName = document.getElementById('user')
const closeIcon = document.getElementById('closeIcon')

let count = JSON.parse(localStorage.getItem('count')) || 0;
let step = JSON.parse(localStorage.getItem('step')) || 1;
let user = JSON.parse(localStorage.getItem('user'))

p.innerText = count
span.innerText = step

const changeCount = (option) => {
    count = option === 'inc' ? count += step : count -= step
    p.innerText = count

    localStorage.setItem('count', count)
}

incBtn.addEventListener('click', () => {
    changeCount('inc')
})

decrBtn.addEventListener('click', changeCount)

const changeStep = (option) => {
    if(step === 1 && option !== 'inc') return alert('positive')
    step = option === 'inc' ? step += 1 : step -= 1
    span.innerText = step

    localStorage.setItem('step', step)

}

incStepBtn.addEventListener('click', () => {
    changeStep('inc')
})

decrStepBtn.addEventListener('click', changeStep)

const renderPage = () => {
    let user = JSON.parse(localStorage.getItem('user'))
    if(user) {
        modal.classList.remove('showModal')
        userName.innerText = user
        return;
    }
    modal.classList.add('showModal') 
    userName.innerText = '' 
    span.innerText = 1
    p.innerText = 0
}

renderPage()

const addUser = () => {
    localStorage.setItem('user', JSON.stringify(modalInput.value))
    modalInput.value = ''
    renderPage()
}

modalBtn.addEventListener('click', addUser)

const reset = () => {
    localStorage.clear()
    renderPage()
}

const enterGuest = () => {
	modal.classList.remove('showModal')
	userName.innerText = 'Guest'
	localStorage.setItem('user', JSON.stringify('Guest'))

}

closeIcon.addEventListener('click', enterGuest)