// 1. calculator logic 

let num1 = 10;
let num2 = 5;
let operator = "+";

if (operator === "+") {
    console.log("Addition:", num1 + num2);

} else if (operator === "-") {
    console.log("Subtraction:", num1 - num2);

} else if (operator === "*") {
    console.log("Multiplication:", num1 * num2);

} else if (operator === "/") {

    if (num2 === 0) {
        console.log("Cannot divide by zero");
    } else {
        console.log("Division:", num1 / num2);
    }

} else {
    console.log("Invalid operator"); }

// output 
// Addition: 15
// Subtraction: 5
// Multiplication: 50
// Division: 2
// Invalid operator (% modulus operator)




//2. let num=2 be zero
let num5 = 10;
let num6 = 0;

if (num6 === 0) {
    console.log("num6 cannot be zero");
} else {
    console.log(num5 / num6);
}

// output
// let num3 = 10; let num4 = 5;-----2
// let num5 = 10; let num6 = 0;---------num6 cannot be zero




// 3. create a variable "marks" to store student marks (0-100)
let marks = 80;
let bonus = 10;

// assignment operator (+=) //90
marks += bonus; 
console.log("Marks:", marks);


// determine grade using if-else:
let grade;
if (marks >= 90) {
    grade ="A" 
    console.log("Grade A");
}

else if (marks >= 70 && marks <= 89) {
    grade ="B" 
   console.log("Grade B");
}

else if(marks>= 50 && marks <= 69) {
    grade ="C" 
  console.log("Grade C");
}
else {
    grade ="F" 
   console.log("Grade F");
}

// ternary operator (pass/fail)

let result = (marks >= 50 ? "PASS" : "FAIL");
console.log(result);


// Remarks -  Switch statement
let remark;
switch (grade) {
    case "A" :
        remark= "Excellent"
        console.log (remark);
        break;

     case "B" :
        remark= "Good"
     console.log (remark);
        break;  

     case "C" :
        remark= "Average"
     console.log (remark);
        break;    
     case "F" :
        remark= "Needs Improvement"
     console.log (remark);
        break;    
    default:
        remark = "Invalid"
        console.log (remark);
            
}

// output
// Marks: 90
// script.js:32 Grade A
// script.js:52 PASS
// script.js:60 Excellent
