console.log('Wassup, world?!');



// Functions for operations
function addNumbers(event) {
    let firstNumber = document.querySelector('#first-number').value;
    let secondNumber = document.querySelector('#second-number').value;
    console.log(firstNumber, secondNumber);

    let numbers = {
        first: firstNumber,
        second: secondNumber
    };

    axios.post('/numbers', numbers).then((response) => {
        console.log(response);
        getResult();
    })
}

function subNumber(event) {
    let firstNumber = document.querySelector('#first-number').value;
    let secondNumber = document.querySelector('#second-number').value;
    console.log(firstNumber, secondNumber);
}

function multNumber(event) {
    let firstNumber = document.querySelector('#first-number').value;
    let secondNumber = document.querySelector('#second-number').value;
    console.log(firstNumber, secondNumber);
}

function divNumber(event) {
    let firstNumber = document.querySelector('#first-number').value;
    let secondNumber = document.querySelector('#second-number').value;
    console.log(firstNumber, secondNumber);
    let result = firstNumber / secondNumber;
    return result;
}

//Function for getResult()
function getResult() {
    axios.get( '/numbers' ).then((response) => {
        console.log('running in getResult()');
    let resultServer = response.data;
    let outputDiv = document.querySelector('#resultDiv');
    outputDiv.innerHTML += `
    <h2>${resultServer}</h2>
    `;
    })
}