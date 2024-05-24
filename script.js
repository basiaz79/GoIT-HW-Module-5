 // Funkcja do podwajania liczb w tablicy za pomocą metody map()
 function doubleArray(numbers) {
    return numbers.map(number => number * 2);
}

// Testowanie funkcji
const originalArray = [1, 2, 3, 4, 5]
const doubledArray = doubleArray(originalArray);

console.log("Original tablica:", originalArray);
console.log("Tablica podwojona:", doubledArray);

console.log("\n\n\n");


// Funkcja przyjmująca tablicę obiektow studentów i zwracająca tablicę imion studentów
function getStudentNames(students) {
    return students.map(student => student.name);
}

// Testowanie funkcji 
const studentsArray = [
    {name: "Kasia", id: 11},
    {name: "Julia", id: 15},
    {name: "Jacek", id: 13}
];

const studentNames = getStudentNames(studentsArray);

console.log("Oryginal tablica studentów:", studentsArray);
console.log("Tablica imion studentów:", studentNames);

