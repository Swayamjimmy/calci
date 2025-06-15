let num = document.querySelectorAll('.numpad');
let op = document.querySelectorAll('.operator');

let screen = document.querySelector('.screen');

let firstop = ' ';
let operator = ' ';
let secondop = ' ';

num.forEach((num) => {num.addEventListener('click', () => {
    if (operator == ' '){
        firstop = firstop + num.textContent; 
        screen.textContent = firstop ;
    }
    if (operator != ' ' && firstop != ' '){
        secondop = secondop + num.textContent;
        screen.textContent = secondop ;
    }
    console.log(screen.textContent);
})
})

op.forEach((op) => {op.addEventListener('click', () => {

     if(firstop == ' '){
        console.log('First Select an Operand');
        screen.textContent = ' ' ;
        firstop = ' ';
        operator = ' ';
        secondop = ' ';
    }
    
        if(op.textContent == 'AC'){
        screen.textContent = ' ' ;
        firstop = ' ';
        operator = ' ';
        secondop = ' ';
    }
       if(op.textContent == '='){
        let eval = evaluat(+firstop, operator, +secondop); 
        screen.textContent = eval;
        console.log(eval);
        firstop = ' ';
        operator = ' ';
        secondop = ' ';
        return;
    }
   
        if (firstop != ' '){
        operator = op.textContent;
    }

    screen.textContent = op.textContent;
    console.log(screen.textContent);
   
    
    
})
})

function evaluat(a, o, b){
    switch(o){
       case "X": 
            return a*b;
            break;
        case "/":
            return a/b;
            break;
        case "-":
            return a-b;
            break;
        case "+":
            return a+b;
            break;
}
}