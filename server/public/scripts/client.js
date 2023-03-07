console.log('Wassup, world?!');
// Functions for operations
let buttonVal;

function useOperator(event){
    //the value was manually added to each operation button on press
    buttonVal = event.target.value;
    console.log(buttonVal);
}

function equals(event) {
    let firstNumber = document.querySelector('#first-number').value;
    let secondNumber = document.querySelector('#second-number').value;
    let operation = buttonVal
    console.log(firstNumber, secondNumber);

    let numbers = {
        first: firstNumber,
        second: secondNumber,
        operator: operation
    };
    console.log(numbers);

    //! POST Request
    axios.post('/numbers', numbers).then((response) => {
        console.log(response);
        getResult();
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong, yo.');
    })
}

// Function for getResult() GET request
function getResult() {
    //! GET Request
    axios.get( '/numbers' ).then((response) => {
        console.log('running in getResult()');
        let resultServer = response.data;
        let outputDiv = document.querySelector('#resultHistoryDiv');
        let resultDiv = document.querySelector('#resultDiv');
        outputDiv.innerHTML = '';
        for (let calculation of resultServer) {
            outputDiv.innerHTML += `
            <h2>${calculation.formula}</h2>
            `;
            resultDiv.innerHTML = `<h2>${calculation.result}<h2>`
        }
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong, yo.');
    })
}


// Function to clear input fields
function resetFields() { 
    let firstNumber = document.querySelector('#first-number');
    let secondNumber = document.querySelector('#second-number');
    firstNumber.value = '';
    secondNumber.value = '';
}

