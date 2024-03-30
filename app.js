// let counter = document.querySelector('.counter');

// let count = 1;

// setInterval(() => {
//     if (count < 75) {
//         count++;
//         counter.innerText = count;
//     }
// }, 100)

let counters = document.querySelectorAll('.counter');

let time = 800;

counters.forEach(counter => {
    let updeteCount = () => {
        let target = +counter.getAttribute('data-target');
        let count = +counter.innerText;

        let increment = target / time;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updeteCount, 1);
        } else {
            counter.innerText = target;
        }
    };
    updeteCount();
});


let healthCondition = document.querySelector('.health');

setTimeout(() => {
    healthCondition.innerText = 'You are FIT!'
}, 1000);