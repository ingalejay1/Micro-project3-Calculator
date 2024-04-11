// Calculator Program

const display = document.getElementById("display");

function addToDisplay(input){
    display.value +=input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        let expression = display.value.replace(/x/g, '*');
        let result = eval(expression);
        if (Number.isInteger(result)) {
            display.value = result;
        } else {
            display.value = result.toFixed(3);
        }
    }
    catch(error){
        display.value = "Error";
    }
}

function deleteFromDisplay(){
    display.value = display.value.slice(0, -1);
}

function replaceMultiplication(){
    display.value = display.value.replace(/\*/g, 'x');
}