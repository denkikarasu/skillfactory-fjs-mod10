let arr = [1, 0, 2, 45, 39, 128, 'abc', NaN, null, undefined, [0, 1, 3], 82, 0];

numEven = 0;
numOdd = 0;
numZero = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) == 'number' && arr[i] != NaN) {
        if (arr[i] == 0) {
            numZero++;
        } else if (arr[i] % 2 == 0) {
            numEven++;
        } else {
            numOdd++;
        }
    }
}

console.log(`Четных элементов: ${numEven}, нечетных элементов: ${numOdd}`);

if (numZero > 0) {
    console.log(`Нулевых элементов: ${numZero}`);
}
