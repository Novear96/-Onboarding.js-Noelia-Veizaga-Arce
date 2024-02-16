//Difficulty Level: Low
// Create a variable called myName and store your first name in it:
let myNamee = "Noelia"

// In your JavaScript file create a variable called myName with your name as the value. Put your name inside string quotes, e.g., "Rose". Then add a line of code to print the variable name to the console after the previous message. 
let myName = "Noelia"
console.log(myName)


// Save your JavaScript file in your editor. Reload the HTML page in your browser. You should see your name printed. If not, investigate and fix (do this step for the next exercises too)
// Create a variable called myLastName and store your last name in it.
let myLastName = "Veizaga Arce"

// Create a variable called myAge and save your age in it.
let myAge = (27)

// Create a variable called myPet and save the name of your pet in it. If you don't have a pet, you can invent a name.
let myPet = ("Max")
// Create a variable called petAge and save the pet's age in it.
let petAge = (5)

// Create a variable called fullName and store the concatenation of myFirstName and myLastName in it.
let fullName = (myName + myLastName)

// Create a variable called presentationText and save in it a text comprised of all the variables created so far.
let presentationText = (`Mi nombre es ${fullName} y tengo ${myAge} años, vivo con mi perro ${myPet} que tiene ${petAge} años`)


// Difficulty Level: Medium
// Create a variable sumAges, subtractAges, productAges, divisionAges and calculate their respective operations with the variables myAge and agePet.
let sumAges = (myAge + petAge)
let subtractAges = (myAge - petAge)
let productAges =("")
let divisionAges = (myAge / myPet)

// Create an object called student with a minimum of 5 properties, display said object using console.table( ) and also display each of the object's properties separately through the console.

const student = {
    name: "noelia",
    lastName: "veizaga",
    pet: true,
    age: 27,
    gender:"F",
}
console.table(student)
console.log(student.name)
console.log(student.lastName)
console.log(student.pet)
console.log(student.age)
console.log(student.gender)
// Create an object called pet with a minimum of 5 properties, display said object using console.table( ) and also display each of the object's properties separately through the console.

const pet = {
    name: "max",
    raza: "mestizo",
    color: "black",
    age: 5,
    gender:"M",
}

console.table(pet)
console.log(pet.name)
console.log(pet.raza)
console.log(pet.color)
console.log(pet.age)
console.log(pet.gender)

// Create an array called fruits with a minimum of 5 elements and display the entire array in the console and also display each of the elements separately in the console.

const fruits = ["frutilla", "pera", "ciruela", "manzana", "naranja"]
console.log(fruits)
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])
console.log(fruits[4])

// Difficulty Level: High
// Use a prompt ( ) that allows the entry of an age on the screen and compare it with the number 18, once this is done, save the result in a variable called IamAdult and display a message in the console that says:
// "I am an adult" (and the value of the variable).

let age = prompt("cual es tu edad?")
if ( age >= 18) {
    let iamAdult = alert(`Soy un adulto, ${age}`)  
}

// Create an array called "numbers" with a minimum of 5 elements and display the entire array and each of the elements separately in the console.

const numbers = [7, 9, 4, 1, 8]
console.log(numbers)
console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])
console.log(numbers[3])
console.log(numbers[4])

// Create an array called "family" with a minimum of 5 objects and display the entire array and each of the elements separately in the console.

const family = [
    {nombre: "noelia"},
    {localida: "caba"},
    {genero: "F"},
    {hijos: false},
    {casada: false},
]

console.log(family)
console.log(family[0])
console.log(family[1])
console.log(family[2])
console.log(family[3])
console.log(family[4])
// Create a variable called "randomText" forming a phrase with the second element of the fruits array, the fourth element at numbers array and the first property of the fifth object of the family array.

let randomText = "mi fruta favorita es la " + fruits[2] + ". El numero que me da suerte es el15: " + numbers[4] + " y es " + family.casada + "que este casada."

