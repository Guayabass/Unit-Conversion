let number = 0
const unit = document.querySelector('#unit');

function ask(){
    number = prompt("What number do you wish to use?");
    unit.textContent = number;
}