let number = 0
const unit = document.querySelector('#unit');
const length = document.querySelector('.sub-para-length');
const volume = document.querySelector('.sub-para-volume');
const mass = document.querySelector('.sub-para-mass');

function ask(){
    number = prompt("What number do you wish to use?");
    //console.log("Si paso")
    unit.textContent = number;
    let mf = Number(number * 3.281).toFixed(3);
    let fm = Number(number / 3.281).toFixed(3);
    length.textContent = number + " meters = " + mf + " feet | " + number + " feet = " + fm + " meters";
    let lg = Number(number / 3.785).toFixed(3);
    let gl = Number(number * 3.785).toFixed(3);
    volume.textContent = number + " liters = " + lg + " gallons | " + number + " gallons = " + gl + " liters";
    let kp = Number(number * 2.205).toFixed(3);
    let pk = Number(number / 2.205).toFixed(3);
    mass.textContent = number + " kilograms = " + kp + " pounds | " + number + " pounds = " + pk + " kilograms";
}