const prev = document.getElementById('prev')
const next = document.getElementById('next')
const boxes = document.querySelectorAll('.box')

let currentActive = 0;

prev.addEventListener('click', () => {
    if (currentActive > 0) {
        currentActive --
        console.log(currentActive)
        let active = boxes[currentActive]
        let priorActive = boxes[currentActive + 1]
        active.classList.add('active')
        priorActive.classList.remove('active')
        buttonDisable()
    }
})

next.addEventListener('click', () => {
    if (currentActive < 5) {
        currentActive ++
        console.log(currentActive)
        let active = boxes[currentActive]
        let prevActive = boxes[currentActive - 1]
        active.classList.add('active')
        prevActive.classList.remove('active')
        buttonDisable()

    } 
})

function buttonDisable() {
    if (currentActive === 0) {
        prev.disabled = true;
    } else if (currentActive === 5) {
        next.disabled = true;
    } else {
        prev.disabled = false
        next.disabled = false
    }
}