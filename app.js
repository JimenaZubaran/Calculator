const numbers = document.getElementsByName('number');
const clean = document.getElementById('clean');
const operations = document.getElementsByName('operations')
const equal = document.getElementById('equal');
const result = document.getElementById('result');
let currentOperation = '';
let previousOperation = '';
let operationSymbol = '';
let calculate = '';


numbers.forEach(function(button){
    button.addEventListener('click', function(){
        shownumber(button.innerHTML)

    })
});

operations.forEach(function(operation){
    operation.addEventListener('click', function(){
        operationOnProcess(operation.innerHTML);
    })
});

clean.addEventListener('click', function(){
    clearNumber();
})

equal.addEventListener('click', function(){
    calculateOp();
    updateOperation(currentOperation);
    
})

//Show numbers & operations
function shownumber(showNumber){
   if(calculate != ''){
    calculate = '';
    currentOperation = '';
   }
   currentOperation = currentOperation.toString() + showNumber.toString();
   //updateDisplay()
   result.value = currentOperation;
} 


function clearNumber(){
    result.value = ' ';
    currentOperation = '';
    previousOperation = '';
    operation = '';
}

function operationOnProcess(op){
    result.value = '';
    operationSymbol = op.toString();
    result.value = operationSymbol;
    if(currentOperation == '') return;
    if(previousOperation !== ''){
        calculateOp();
    }
    previousOperation = currentOperation;
    currentOperation = '';

}

function calculateOp(){
    const previous = parseFloat(previousOperation);
    const current = parseFloat(currentOperation);
    if(isNaN(previous) && isNaN(current)) return;

    switch(operationSymbol){
        case '-':
            calculate = previous - current;
            break;
        case '+':
            calculate = previous + current;
            break;
        case 'x':
            calculate = previous * current;
            break;
        case '%':
            calculate = previous % current;
            break;
        case '/':
            calculate = previous / current;
            break;

    }
    
    currentOperation = calculate;
    previousOperation = '';
    operationSymbol = '';
}

function updateOperation(equal){
    result.value = currentOperation;
}