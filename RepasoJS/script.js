// Variables & Condicionales
function checkAge(age) {
    debugger
    let message;
    // y &&
    // o ||
    if (age >= 60) {
        message = "Eres de la tercera edad";
    } else if (age < 18) {
        message = "Eres menor de edad.";
    } else if (age >= 18 || age < 59) {
        message = "Eres mayor de edad.";
    }

    return message;

}

console.log(checkAge(62))

// Ciclos
function listNumbers() {
    let numbers = [1, 2, 3, 4];
    for (let i = 1; i <= 5; i++) {
        numbers.push(i);
    }
    return numbers;
}


const sumarNumeros50 = () => {
    let sumatoria = 0
    for (i = 1; i <= 50; i + 1) {
        if (i % 2 == 0) {
            sumatoria = sumatoria + i
            sumatoria += i
        }
    }
    console.log(sumatoria)
}



// Arreglos
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray([1,2,3,4,5]))

// Funciones
function greet(name) {
    return `Hola, ${name}!`;
}

// JSON
let name
let age
let city

function getPersonInfo() {
    const person = {
        name: "Juan",
        age: 25,
        city: "Madrid"
    };
    return JSON.stringify(person, null, 2); // Pretty-print JSON
}

const animales = {}

// Function to run all examples and output the results
function runExamples() {
    let output = '';

    output += "1. Variables & Condicionales:\n";
    output += checkAge(20) + "\n\n";

    output += "2. Ciclos:\n";
    output += listNumbers().join(", ") + "\n\n";

    output += "3. Arreglos:\n";
    const exampleArray = [1, 2, 3, 4, 5];
    output += `La suma del arreglo [${exampleArray.join(", ")}] es: ${sumArray(exampleArray)}\n\n`;

    output += "4. Funciones:\n";
    output += greet("Estudiante") + "\n\n";

    output += "5. JSON:\n";
    output += getPersonInfo() + "\n";

    document.getElementById("output").textContent = output;
}

// Attach event listener to button
document.getElementById("runCode").addEventListener("click", runExamples);
