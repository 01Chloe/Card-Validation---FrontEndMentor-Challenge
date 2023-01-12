const form = document.querySelector('form')
let regExpNumber = /[0-9]/

let cardCryptoNum = document.querySelector('.card-crypto-num')
let cardNumber = document.querySelector('.card-number')
let cardName = document.querySelector('.card-name')
let cardDate = document.querySelector('.card-date')

//validation name
const msgErrorName = document.querySelector('.msg-error-name')
let nameChecker = false

form.name.addEventListener('input', checkName)
function checkName() {
     let regExpName = /[0-9.,+*/()^]/
     if(regExpName.test(form.name.value)) {
          msgErrorName.textContent = 'Please, enter your name without number'
          form.name.classList.add('active')
          nameChecker = false;
     } else {
          msgErrorName.textContent = ""
          form.name.classList.remove('active')
          nameChecker = true;
     }
}

//validation card number
const msgErrorNumber = document.querySelector('.msg-error-number')
let numberChecker = false

form.number.addEventListener('input', checkNumber)
function checkNumber() {
     if(form.number.value.length <= 15 || form.number.value.length >= 17 || !regExpNumber.test(form.number.value)) {
          msgErrorNumber.textContent = 'Wrong format, number only'
          form.number.classList.add('active')
          numberChecker = false;
     } else {
          msgErrorNumber.textContent = "";
          form.number.classList.remove('active')
          numberChecker = true;
     }
}

//validation date
const msgErrorDate = document.querySelector('.msg-error-date')
const yearExpir = document.querySelector('.year')
let dateMonthChecker = false;
let dateYearChecker = false;

form.expir.addEventListener('input', ckeckDateMonth)
yearExpir.addEventListener('input', ckeckDateYear)

//validation month
function ckeckDateMonth() {
     if(form.expir.value.length <= 1 || form.expir.value.length >=3 || !regExpNumber.test(form.expir.value)) {
          msgErrorDate.textContent = 'Requires 2 numbers'
          form.expir.classList.add('active');
          dateMonthChecker = false;
     } else {
          msgErrorDate.textContent = ""
          form.expir.classList.remove('active')
          dateMonthChecker = true
     }
}

//validation year
function ckeckDateYear() {
     if(yearExpir.value.length <= 1 || yearExpir.value.length >= 3 || !regExpNumber.test(yearExpir.value)) {
          msgErrorDate.textContent = 'Requires 2 numbers'
          yearExpir.classList.add('active')
          dateYearChecker = false;
     } else if(yearExpir.value <= 22) {
          msgErrorDate.textContent = '23 years minimum'
          yearExpir.classList.add('active')
          dateYearChecker = false;
     } 
     else {
          msgErrorDate.textContent = ""
          yearExpir.classList.remove('active')
          dateYearChecker = true
     }
}

//validation crypto
const msgErrorCrypto = document.querySelector('.msg-error-crypto')
let cryptoChecker = false

form.cvc.addEventListener('input', checkCrypto)
function checkCrypto() {
     if(form.cvc.value.length <= 2 || form.cvc.value.length >= 4 || !regExpNumber.test(form.cvc.value)) {
          msgErrorCrypto.textContent = 'Requires 3 numbers'
          form.cvc.classList.add('active')
          cryptoChecker = false;
     } else {
          msgErrorCrypto.textContent = ""
          form.cvc.classList.remove('active')
          cryptoChecker = true
     }
}

//click au bouton
const submitBtn = document.querySelector('button')
const formInfo = document.querySelector('.form-info')

submitBtn.addEventListener('click', handleInfo)
function handleInfo(e) {
     e.preventDefault();
     
     if(nameChecker && numberChecker && dateMonthChecker && dateYearChecker && cryptoChecker) {
          formInfo.textContent = 'Send successfully !'
          formInfo.style.color = 'green'
          form.classList.remove('active')
     } else {
          formInfo.textContent = 'Please, complete all fields.'
          formInfo.style.color = 'crimson'
          form.classList.add('active');
     }

     setTimeout(() => {
          form.classList.remove('active')
          formInfo.textContent = ""
     }, 1000)
}

submitBtn.addEventListener('click', showNumberOnCardImage)
function showNumberOnCardImage() {
     cardCryptoNum.textContent = form.cvc.value;
     cardNumber.textContent = form.number.value;
     cardName.textContent = form.name.value;
     cardDate.textContent = form.expir.value + ' / ' + yearExpir.value;
}