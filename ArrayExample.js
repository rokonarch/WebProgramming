let fruits = ['apple', 'banana', 'orange'];
console.log(fruits[0]); // Output: 'apple'
fruits[1] = 'grape';
console.log(fruits); // Output: ['apple', 'grape', 'orange']
console.log(fruits.length); // Output: 3
fruits.push('kiwi');
console.log(fruits); // Output: ['apple', 'grape', 'orange', 'kiwi']
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Using forEach method
fruits.forEach(function(fruit) {
    console.log(fruit);
});
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matrix[1][2]); // Output: 6
