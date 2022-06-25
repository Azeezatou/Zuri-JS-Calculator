function calculator(){
   let newline = "\r\n"
   let message= "Incorrect Input."
   message += newLine;

   let first_input = parseInt(prompt(" What is your first number?"));
   let operator = prompt("What is your operator?")
   let second_input = parseInt(prompt("What is your second number?"));

   if (operator === "+") {
    let addition = first_input+second_input;
    alert('Your answer is ${addition}')
   } else if (operator === "-") {
    let subtraction = first_input-second_input;
    alert('Your answer is ${subtraction}')
   } else if (operator === "*") {
    let multiplication = first_input*second_input;
    alert('Your answer is ${multiplication}')
   }  else if (operator === "/") {
    let division = first_input/second_input;
    alert('Your answer is ${division}')
   }  else if (operator === "%") {
    let remainder = first_input%second_input;
    alert('Your answer is ${remainder}')
   }  else{
    alert(message)
   }
}

Calculator()