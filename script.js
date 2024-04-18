const tips = document.querySelectorAll('.tip');
const billInput = document.querySelector('#bill-input');
const numberOfPeopleInput = document.querySelector('#number-people');
const tipAmount = document.querySelector('#tipAmount');
const totalPerPerson = document.querySelector('#totalPerPerson');
const tipCustomInput = document.querySelector('.tip-custom');
const resetBtn = document.querySelector('#reset');
const errorMsg = document.querySelector('.errorMsg');
let tipCalculatedValue;
let billInputValue;
let numberOfPeopleValue;

function calculateTipAmount(bill, tip, numberOfPeople){
    let tipAmountCalculated = (bill * tip) / numberOfPeople;
    tipAmount.textContent = '$' + tipAmountCalculated.toFixed(2);
}

function calculateTotalPerPerson(bill, tip, numberOfPeople){
    let totalPerPersonCalculated = (bill +(bill * tip)) / numberOfPeople;
    totalPerPerson.textContent = '$' + totalPerPersonCalculated.toFixed(2);
}

function validateInput(){
  errorMsg.classList.add('active');
  numberOfPeopleInput.style.outline = '2px solid red';
}

billInput.addEventListener(('input'), ()=>{
    billInputValue = parseFloat(billInput.value);
    calculateTipAmount(billInputValue, tipCalculatedValue, numberOfPeopleValue);
    calculateTotalPerPerson(billInputValue, tipCalculatedValue, numberOfPeopleValue);
})

numberOfPeopleInput.addEventListener(('input'),()=>{
    numberOfPeopleValue = parseInt(numberOfPeopleInput.value);
    if(numberOfPeopleValue == 0){
        validateInput();
    }
    else{
        errorMsg.classList.remove('active');
        numberOfPeopleInput.style.outline = '1.5px solid var(--Strong-cyan)';
        calculateTipAmount(billInputValue, tipCalculatedValue, numberOfPeopleValue);
        calculateTotalPerPerson(billInputValue, tipCalculatedValue, numberOfPeopleValue);
    }
})

tips.forEach((item)=>{
    item.addEventListener(('click'), ()=>{
        let tipValue = item.textContent;
        tipCalculatedValue = parseFloat(tipValue) / 100;
        calculateTipAmount(billInputValue, tipCalculatedValue, numberOfPeopleValue);
        calculateTotalPerPerson(billInputValue, tipCalculatedValue, numberOfPeopleValue);
    })
})

tipCustomInput.addEventListener(('input'), ()=>{
    tipCalculatedValue = parseFloat(tipCustomInput.value) / 100;
    calculateTipAmount(billInputValue, tipCalculatedValue, numberOfPeopleValue);
    calculateTotalPerPerson(billInputValue, tipCalculatedValue, numberOfPeopleValue);
})


resetBtn.addEventListener(('click'), ()=>{
    tipAmount.textContent = '$0.00';
    totalPerPerson.textContent = '$0.00';
    billInput.value = '';
    numberOfPeopleInput.value = '';
    tipCustomInput.value = '';
})