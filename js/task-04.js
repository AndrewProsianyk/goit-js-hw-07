const counterValue = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

const buttonsEl = document.querySelectorAll('button');
const valueEl = document.querySelector('span');
const decreaseBtn = buttonsEl[0];
const increaseBtn = buttonsEl[1];

decreaseBtn.addEventListener('click', () => {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
})

increaseBtn.addEventListener('click', () => {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
})
