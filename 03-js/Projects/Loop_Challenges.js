// 1. Print odds 1-20
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}

// 2. Decreasing Multiples of 3
for (let i = 100; i >= 0; i--) {
    if (i % 3 == 0) {
        console.log(i)
    }
}

// 3. Print the sequence
for (let i = 4; i >= -4; i -= 1.5) {
    console.log(i)
}

// 4. sigma
var sum = 0
for (let i = 1; i <= 100; i++) {
    sum += i
}
console.log(sum)

// 5. Factorial
var product = 1
for (let i = 1; i <= 12; i++) {
    product *= i
}
console.log(product)