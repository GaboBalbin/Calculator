const buttons = document.querySelectorAll('.main-button');
const result = document.querySelector('.results');
const otherButtons = document.querySelectorAll('.other-button');


let buffer = ''


let num1 = NaN;
let num2 = NaN;
let operator = NaN;
let answer = NaN;




// Give every number and decimal a button
buttons.forEach(button => {
    button.addEventListener('click', main => {
        
        buffer += main.target.innerText
        result.innerText = buffer; // Updates the results




        
        
    })
})



// Give other buttons (AC +/- % / *...) functionality
otherButtons.forEach(otherButton => {
    otherButton.addEventListener('click', other => {
        
        // so if num1 is not equal to NaN (has value) and num2 is equal to 
        // Nan (no value), then put the result in num2. Else, put it in num1


        
        if (other.target.innerText === "AC"){
            num1 = NaN;
            num2 = NaN;
            operator = NaN;
            answer = NaN;
            result.innerText = 0
            buffer = '';
        }
        else if (!isNaN(num1) && isNaN(num2)){
            num2 = result.innerText
            buffer = '';

            console.log(operator)
            operate(num1, operator, num2)
            operator = other.target.innerText
            // Functions have a weird way of changing variables. Change it after
            num1 = answer
            num2 = NaN
        }

        else if (isNaN(num1) && isNaN(num2)){
            num1 = result.innerText
            operator = other.target.innerText
            buffer = '';
        }




    })
    })










function operate(num1, operator, num2){
    if (operator === "+"){
        answer = Number(num1) + Number(num2);

    }
    else if (operator === "-"){
        answer = Number(num1) - Number(num2);
    }
    else if (operator === "*"){
        answer = Number(num1) * Number(num2);
    }
    else if (operator === "/"){
        answer = Number(num1) / Number(num2);
    }
    result.innerText = answer;
    buffer = '';
}


















// my version to add all the buttons
// for (let i = 0; i<buttons.length; i++){
//     buttons[i].addEventListener('click', e=>{console.log(e.target.textContent)})
// }