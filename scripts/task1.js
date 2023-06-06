// Array with repeated values
const array = [1, 2, 3, 3, 1];

// Use a for loop to loop through the array and print repeated numbers
for (let x = 0; x < array.length; x++) {
    for (let y = x + 1; y < array.length; y++) {
        if (array[x] === array[y]) {
            console.log(array[x]);
            break;
        }
    }
}