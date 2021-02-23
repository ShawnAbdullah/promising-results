//promising results

// promise.then() chaining

// slowMath.add(6, 2)
// .then ((sum) => {
//     console.log(`sum of 6 and 2 is ${sum}`);
//     return slowMath.multiply(sum, 2)
// }) .then ((product) =>{
//     console.log(`that number times 2 is ${product}`)
//     return slowMath.divide(product, 4)
// }) .then ((quotient) => {
//     console.log(`divide the product by 4 to obtain ${quotient}`)
//     return slowMath.subtract(quotient, 3)
// }) .then ((difference) => {
//     console.log(`subtract three to get ${difference}`)
//     return slowMath.add(difference, 98)
// }) .then ((sum) => {
//     console.log(`add 98 to the difference to obtain ${sum}`)
//     return slowMath.remainder(sum, 2)
// }).then ((remainder) => {
//     console.log(`divide the sum by 2 to receive a remainder of ${remainder}`)
//     return slowMath.multiply(remainder, 50)
// }).then ((product) => {
//     console.log(`multiply the remainder by 50 to obtain a product of ${product}`)
//     return slowMath.remainder(product, 40)
// }).then ((remainder) => {
//     console.log(`dividing the product by 40 results in a remainder of ${remainder}`)
//     return slowMath.add(remainder, 32)
// }).then((sum) => {
//     console.log(`adding 32 to the remainder yields a sum of ${sum}`)
//     console.log(`these operations yield a final result of ${sum}`)
// });

// async await method

window.addEventListener('DOMContentLoaded', async () => {
    try {
    let doMath = await slowMath.add(6, 2);;
    console.log(`sum of 6 and 2 is ${doMath}`);
    doMath = await slowMath.multiply(doMath, 2);
    console.log(`that number times 2 is ${doMath}`);
    doMath = await slowMath.divide(doMath, 4);
    console.log(`divide the product by 4 to obtain ${doMath}`);
    doMath = await slowMath.subtract(doMath, 3);
    console.log(`subtract three to get ${doMath}`);
    doMath = await slowMath.add(doMath, 98);
    console.log(`add 98 to the difference to obtain ${doMath}`);
    doMath = await slowMath.remainder(doMath, 2)
    console.log(`divide the sum by 2 to receive a remainder of ${doMath}`);
    doMath = await slowMath.multiply(doMath, 50);
    console.log(`multiply the remainder by 50 to obtain a product of ${doMath}`);
    doMath = await slowMath.remainder(doMath, 40);
    console.log(`dividing the product by 40 results in a remainder of ${doMath}`);
    doMath = await slowMath.add(doMath, 32);
    console.log(`adding 32 to the remainder yields a sum of ${doMath}`);
    console.log(`these operations yield a final result of ${doMath}`);
}catch (error) {
    console.log(`something's wrong`)
}
});