const numbers = [1, 2, 3, 4, 5]

// that is how we usually do that
// const newNumbers = []
// for (let i = 0; i < numbers.length; i++) {
//     newNumbers.push(numbers[i] + 1)
// }
// console.log(newNumbers)


// that is how we do that with higher order functions
function createAddNumber(number) {
    return function(arr) {
        return arr.map(item => item += number)
    }
}
const addOne = createAddNumber(1)
const addFive = createAddNumber(5)

console.log(addOne(numbers));
console.log(addFive(numbers));