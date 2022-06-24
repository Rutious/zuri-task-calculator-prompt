const operator =prompt(' Enter operator  (+, -, *, /:)');
// const operator =prompt("-");
// const operator =prompt("*");
// const operator =prompt("/");
const number1 =parseFloat(prompt('Enter nr1:'));
const number2 =parseFloat(prompt('Enter nr2:'));

let result;
if(operator=="+"){
    result= number1 + number2;
}
else if(operator=="-"){
    result= number1 - number2;
}

else if(operator=="*"){
    result= number1 * number2;
}
else{result= number1 / number2;
}
document.write(number1 + operator + number2 +'=' + result);