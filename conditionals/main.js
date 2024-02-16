// Difficulty Level: Low
// Starting from the following example, create a conditional block that evaluates whether the variable num1 is greater than num2, if so, print the value of num1 via the console, otherwise print num2.
let num1 = 4
let num2 = 5

if (num1>num2) {
    alert(num1)
}else{
    alert(num2)
}

// Based on exercise 1, now modify the block as follows:
// If num1 is greater than num2, print num1 through the console,

// if num2 is greater, print num2 and finally

// if they are equal, print a string that says “The numbers are equal ”

if (num1 > num2) {
    console.log(num1)
} else if ( num1 == num2) {
    console.log("los numeros son iguales")
}else{
    alert(num2)
}

// Based on exercise 1, create a conditional block that evaluates whether these variables are equal or not, if so, print a string through the console “The numbers are equal”, otherwise “The numbers are different”

if (num1 == num2) {
    console.log("Los números son iguales")
}else{
    console.log("Los numeros son diferentes")}


// Starting from the following example, create a conditional block that evaluates whether one of these variables is greater than the other; if so, display “The date [variable 1] is greater than [variable 2]” by console, and, If they are the same, print “The dates are the same”
// Tip! Use backticks to print via console.
    let date1 = new Date("2018-9-2")
    let date2 = new Date("2023-7-5")

//                     The date 2023-7-5 is greater than the date 2018-9-2
if ( date1 > date2){
    console.log(`La fecha ${date1} es mayor que ${date1}`)
} else if (date1 == date2){
    console.log("Las fechas son iguales")
}

//         5. Now try changing the value of the variables. As in the previous exercises, a string must be printed through the console that says if date 1 is greater than date 2 or the opposite.
//            Tip! Investigate how the strings compare.

date1 = new Date("2023-7-5")
date2 = new Date("2018-9-2")

if ( date1 > date2){
    console.log( date1 + " es mayor")
}else{
    console.log( date2 + " es mayor")
}



//          6. In this case, create a conditional block that evaluates which of the three numbers stored in the variables is the largest. Print a string through the console that says “The number [ ] is the largest”.
   
let number1 = 5
let number2 = 7
let number3 = 9

if( number1 > number2 && number1 > number3){
   console.log(`The number ${number1} is the largest`)
} else if (number2 > number1 && number2 > number3) {
   console.log( `The number ${number2} is the largest`)
} else{
   console.log(`The number ${number3} is the largest`)
}

// Difficulty Level: Medium
// Using a "switch", create a program that allows you to enter these color names on the screen: red, blue or green. And print on the screen in each case:
// red: “The color of passion”
// blue: “The color of the sea.”
// green: “The color of nature”
// Tip! Don't forget the break statement
// Using a switch, create a program that allows you to enter on the screen: 
// two numerical values (number from 1 to 100)
// an operation (addition, subtraction, multiplication, division)
// and print on the screen in each case:
// sum: first value + the second
// subtraction: first value - the second
// multiplication: first value * second
// division: first value / second
// With the corresponding literal ("the sum of <num1> and <num2> is...", etc.)
// Tip! Don't forget the break statement
// Starting from the following structure, create a conditional block that
// receives 2 objects representing people with the properties: name, age, height
// and print by console in the same console.log:
// Which of the two people is the taller?
// Which is the oldest?
// Tip! You can use nested if or logical operators.
// let person = {
//        name = Juan,
//        age = 39,
//        height = 1.69
// }
// Example Result: "Juan is taller and older than Rosa"
// Create a program that allows you to enter on the screen:
// your name, age, height and vision.
// and print through the console a string “You are qualified to drive”,
// For this the person must:
// Be at least 18 years old.
// Measure more than 110 cm.
// Have a vision of at least 8 out of 10.
// Tip! Remember prompt( ) to enter data on the screen.
// Create a program that allows you to enter your age on the screen and print it on the screen if you are:
// infant (0 to 12 years)
// adolescent (13 to 18 years old)
// older young (19 to 45 years)
// elderly (over 45 years)
// Is he really that old? (more than 100 show)
// Tip! Remember alert( ) to display data on the screen.
// Create a program that allows you to enter only numbers from 1 to 3 on the screen and then any other numerical data. Print on screen:
// 1: “The number entered is [ ]”
// 2: “Twice the number entered is [ ]”
// 3: “Three times the number entered is [ ]”
// another: “That value is not allowed”
// Tip! Remember alert( ) to display data on the screen.
// Difficulty Level: High
// Create a program that allows the following data to be entered on the screen:

// Customer name, Pass (vip or normal), Entrance (yes or no).
// People who have your name ==> show a welcome message
// or VIP pass ==> show a welcome message
// If you have a ticket, ask if you want to use it
// If affirmative ==> show a welcome message
// If negative ==> show farewell message
// And finally in case of not having the same name or VIP pass or entry, ask "do you want to buy?". And in case:
// negative ==> show farewell message
// affirmative ==> ask for available money, in case:
// More than 1000 ==> show a successful sale and welcome message
// Less than 1000 ==> show sales rejection message