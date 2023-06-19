// Exercise
// Arrow function method
const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(bill([10, 12], 0.2)); //10 * 0.2 + 10 // Output: 92.4