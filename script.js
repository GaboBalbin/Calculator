const buttons = document.querySelectorAll('.main-button');
const result = document.querySelector('.results');
const otherButtons = document.querySelectorAll('.other-button');


let buffer = ''


let num1 = 0;
let num2 = 0;
let operation = 0;


// my version
// for (let i = 0; i<buttons.length; i++){
//     buttons[i].addEventListener('click', e=>{console.log(e.target.textContent)})
// }


// Give every number and decimal a button
buttons.forEach(button => {
    button.addEventListener('click', e => {
        buffer += e.target.innerText
        result.innerText = buffer; // Updates the results
        num1 = buffer
        
    })
})

// Give other buttons (AC +/- % / *...) functionality
otherButtons.forEach(otherButton => {
    otherButton.addEventListener('click', functionality)
    })





// operation
function functionality(e){
    if (e.target.getAttribute('data-value') === 'AC'){
        result.textContent = 0;
        buffer = ''
        num1 = 0;
        num2 = 0;
    }
    else if (e.target.getAttribute('data-value') === '+/-'){
        // ?
    }
    else if (e.target.getAttribute('data-value') === '%'){
        // percentage
    }
    else if (e.target.getAttribute('data-value') === '/'){
        // divide
    }
    else if (e.target.getAttribute('data-value') === '*'){
        // multiply
    }
    else if (e.target.getAttribute('data-value') === '-'){
        // subtract
    }
    else if (e.target.getAttribute('data-value') === '+'){
        // add
        result.innerText = Number(num2) + Number(num1)
        console.log(num1)
        console.log(num2)

        num2 = result.innerText


        
        buffer=''

        
        


        
    }
    else if (e.target.getAttribute('data-value') === '='){
        // results
    }
}



// function to add, subtract


