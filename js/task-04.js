const counterValue = document.querySelector("#value")
const decrementValue = document.querySelector("[data-action='decrement']")
const incrementValue = document.querySelector("[data-action='increment']")

let currentValue = 0;

decrementValue.addEventListener("click", () => {
    currentValue = currentValue - 1;
updateCounterValue()
})
incrementValue.addEventListener("click", () => {
    currentValue = currentValue + 1;
    updateCounterValue();
});

function updateCounterValue() {
    counterValue.textContent = currentValue;
}