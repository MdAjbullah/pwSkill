// Calculatore using Switch condition
let input=document.getElementById('num1');
let buttons=document.querySelectorAll('button');
let string="";
let Arr=Array.from(buttons);
Arr.forEach(button =>{
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML== '='){
        string= eval(string);
        input.value=string;
    }
    else if(e.target.innerHTML =='AC'){
        string="";
        input.value=string
    }
    else if(e.target.innerHTML =='DEL'){
        string= string.substring(0,string.length-1)
        input.value=string
       
    }

    else{
    
    string +=e.target.innerHTML;
    input.value=string;

    }
    });
});








// **********************************************************************



// function calculator(num1, num2, operator) {
//     let result;
//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num1 / num2;
//             break;
//         default:
//             console.log("Invalid operator");
//             return; // Exiting the function if operator is invalid
//     }
//     return result;
// }


// console.log(calculator(5, 3, '+'));  // Output: 8
// console.log(calculator(5, 3, '-'));  // Output: 2
// console.log(calculator(5, 3, '*'));  // Output: 15
// console.log(calculator(6, 2, '/'));  // Output: 3
// console.log(calculator(6, 2, '%'));  // Output: Invalid operator




// **********************************************************************
