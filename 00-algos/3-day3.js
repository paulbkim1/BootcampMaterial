var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
for (var x = 0; x < numbers.length; x++) {
    if (numbers[x] > 0) {
        countPositives = countPositives + 1
    }
}

console.log("there are " + countPositives + " positive values");
