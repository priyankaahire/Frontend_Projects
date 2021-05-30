const BMI_HEADS = document.querySelectorAll('.bmi-head');
const BMI_USC = document.getElementById('bmi-usc');
const BMI_SI =document.getElementById('bmi-si');
const CALC_BIN = document.getElementById('calc-btn');
const CLR_BTN = document.getElementById('clr-btn');

let activeForm;

// event listeners

window.addEventListener('DOMContentLoaded', ()=>{
    BMI_USC.classList.add('show-bmi');
    activeForm = "bmi-usc";

})

BMI_HEADS.forEach(bmiHead => {
    bmiHead.addEventListener('click', () => {
        if(bmiHead.id == 'bmi-usc-head') {
            removeActiveClass();
            bmiHead.classList.add('active-head');
            BMI_SI.classList.remove('show-bmi');
            BMI_USC.classList.add('show-bmi');
            activeForm = 'bmi-usc';
        }
        if(bmiHead.id == 'bmi-si-head') {
            removeActiveClass();
            bmiHead.classList.add('active-head');
            BMI_USC.classList.remove('show-bmi');
            BMI_SI.classList.add('show-bmi');
            activeForm = 'bmi-si';
        }
    });
});

function removeActiveClass() {
BMI_HEADS.forEach(bmiHead => {
    bmiHead.classList.remove('active-head');
});
}

CALC_BIN.addEventListener('click', performBMICalc);
CLR_BTN.addEventListener('click', () =>{
    let forms = [...document.forms];
    forms.forEach(form => form.reset());
    document.getElementById('bmi-value').innerHTML = "";
    document.getElementById('bmi-category').innerHTML = "";
    document.getElementById('bmi-gender').innerHTML = "";

})


/**
 * Bmi calculation
 */
function performBMICalc() {
    let BMIINFO  = getUserInput(); 
    if(BMIINFO) {
          printBMIResult(BMIINFO);
    }
   
  
}
/**
 * Get Input values from form for both view
 * @returns 
 */
function getUserInput() {
    //get input values from Us unit
    if(activeForm === 'bmi-usc') {
        let age = document.getElementById('age1').value,
        gender = document.querySelector('#bmi-usc input[name = "gender"]:checked').value,
        heightFeet = document.getElementById('feet').value,
        heightIinche = document.getElementById('inches').value,
        weightPounds = document.getElementById('weight').value;

        status = checkInputStatus([age, heightFeet, heightIinche, weightPounds]);
        
        if(status == "true") {
            return calculateBMI({
                gender:gender, 
                age:age, 
                height:(parseFloat(heightFeet) * 12 * parseFloat(heightIinche)),
                weight: parseFloat(weightPounds)

            })
        }
   
    }
    // get input values from metric units
    if(activeForm === 'bmi-si') {
        let age = document.getElementById('age2').value,
        gender = document.querySelector('#bmi-si input[name = "gender"]:checked').value,
        heightCM = document.getElementById('cm').value,
        weightKG = document.getElementById('kg').value;
        status = checkInputStatus([age, heightCM, weightKG]);
   
        if(status == "true") {
            return calculateBMI({
                gender:gender, 
                age:age, 
                height:(parseFloat(heightCM) / 100),
                weight: parseFloat(weightKG)

            });
        }
    }

    document.querySelector('.alert-error').style.display = 'block';

    setTimeout(() => {
        document.querySelector('.alert-error').style.display = 'none';
    }, 1000)
}

/**
 * Validation of Inputs
 * @param {*} inputs 
 * @returns 
 */
function checkInputStatus(inputs) {
    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].trim() == "" || isNaN(inputs[i])) return false;
    }
    return true;
}


/**
 * calculate BMI value
 * @param {*} values 
 * @returns 
 */
function calculateBMI(values) {
    let BMI;
    if(activeForm == 'bmi-usc') {
         BMI = (703 * (values.weight / Math.pow(values.height, 2))).toFixed(2);
    } else {
        BMI = (values.weight / Math.pow(values.height, 2)).toFixed(2);
    }
    return {gender: values.gender, BMI}
}


/**
 * print BMI result information
 * @param {*} info 
 */
function printBMIResult(info) {

    document.getElementById('bmi-value').innerHTML = `${info.BMI} kg/m<sup>2</sup>`;
    let bmiCategory;

    if(info.BMI < 18.5) {
        bmiCategory = 'Underweight';
    } else if(info.BMI >= 18.5 && info.BMI <= 24.9) {
        bmiCategory = 'Normal Weight';
    } else if(info.BMI >= 25 && info.BMI <= 29.9) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'obesity';
    }
    document.getElementById('bmi-category').innerHTML = `${bmiCategory}`;
    document.getElementById('bmi-gender').innerHTML = `${info.gender}`;
}