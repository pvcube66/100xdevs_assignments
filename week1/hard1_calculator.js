/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

//spiderman4uu

let expression = '10 +   2 *    (   6 - (4 + 1) / 2) + 7  ';
expression=expression.trim();
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    print() {
        console.log(this.items);
    }
}

function isAlphabet(char) {
    return /^[a-zA-Z]$/.test(char);
}

function isDigit(num) {
    return /^[0-9]$/.test(num);
}

function precedence(c) {
    switch (c) {
        case '+':
        case '-':
            return 1;
        case '*':
        case '/':
            return 2;
        case '^':
            return 3;
    }
    return -1;
}

function isOperator(c) {
    return (c === '+' || c === '-' || c === '/' || c === '*' || c === '^');
}

function performCalculation(operand, operator) {
    const num2 = parseInt(operand.pop()); // Note the order: num2 first, then num1
    const num1 = parseInt(operand.pop());
    const operation = operator.pop();

    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) return num1 / num2;
            console.error("Division by zero");
            return NaN;
    }
}

class Calculator {
   
    constructor(result){
        this.result=0;
        // console.log(result)
    }
    add(num){
        this.result+=num;
        return this.result
    }
    subtract(num){
        this.result-=num;
        return this.result

    }
    multiply(num){
        this.result*=num;
        return this.result

    }
    divide(num){
        this.result/=num;
        return this.result

    }
    clear(){
        this.result=0;
        return this.result

    }
    getResult(){
        return this.result
    }
    calculate(expression){
        let temp = '';
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] !== ' ')
            temp += expression[i];
}

function evalExpression(temp) {
    let operator = new Stack();
    let operand = new Stack();

    for (let i = 0; i < temp.length; i++) {
        let c = temp[i];

        if (isAlphabet(c)) {
            console.log("Please enter only numbers");
            return;
        } else if (isDigit(c)) {
            let tempNum = 0;
            while (i < temp.length && isDigit(temp[i])) {
                tempNum = tempNum * 10 + parseInt(temp[i]);
                i++;
            }
            i--; 
            operand.push(tempNum);
        } else if (c === '(') {
            operator.push(c);
        } else if (c === ')') {
            while (!operator.isEmpty() && operator.peek() !== '(') {
                let output = performCalculation(operand, operator);
                operand.push(output);
            }
            operator.pop();
        } else if (isOperator(c)) {
            while (!operator.isEmpty() && precedence(c) <= precedence(operator.peek())) {
                let output = performCalculation(operand, operator);
                operand.push(output);
            }
            operator.push(c);
        }
    }

    while (!operator.isEmpty()) {
        let output = performCalculation(operand, operator);
        operand.push(output);
    }

    return operand.pop();
    
}
this.result= evalExpression(temp);
return this.result;

    }
}
let result=0;
let ans=new Calculator(result);
console.log(ans.add(5))
// console.log(ans.multiply(2))
// console.log(ans.getResult())
// console.log(ans.clear())
//working till now
// it was a difficult task i mean not so difficult for the calculate() method: but somehow we managed to finish it
console.log(ans.calculate(expression));

module.exports = Calculator;
