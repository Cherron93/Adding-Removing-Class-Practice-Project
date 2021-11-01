// const prev = document.getElementById('prev');
// const next = document.getElementById('next');
// const steps = document.querySelectorAll('steps')
// const step1 = document.getElementById('step1');
// const step2 = document.getElementById('step2');
// const step3 = document.getElementById('step3');
// const step4 = document.getElementById('step4');

// // next.addEventListener('click', function () {
// //     step2.classList.remove('inactive');
// // })

// // next.addEventListener('click', function () {
// //     step3.classList.remove('inactive');
// // })

// // next.addEventListener('click', function () {
// //     step4.classList.remove('inactive');
// // })

// for (let i = 0; i <5; i++){
//     next.addEventListener('click', function () {
//         steps[i].classList.remove('inactive');
//     })
// }

const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    console.log(currentActive)

    update()

})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    console.log(currentActive)
    
    update()

})

function update() {
    circles.forEach ((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = ((actives.length - 1)/ (circles.length - 1)) * 100 + '%'

    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false
        next.disabled = false
    }
}