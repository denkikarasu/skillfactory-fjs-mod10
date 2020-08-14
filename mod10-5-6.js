let arr = [1, 1, 1, 1, '1'];

// Вариант 1
let result = true;
// Цикл можно начинать с 1, т.к. нулевой элемент является базой для сравнения
for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
        result = false;
        break;
    }
}

console.log(result);

// Вариант 2
// Согласно документации, параметры index и array являются необязательными, неиспользуемые переменные вроде бы рекомендуется обозначать нижним подчеркиванием.
let result1 = arr.reduce(function(_isEqual, item) {
    if (item === arr[0]) {
        return true;
    } else {
        return false;
    }
}, true);

console.log(result1);

// Вариант 3
let result2 = true;

arr.forEach(function(item) {
    if (item !== this) {
        result2 = false;
    }
}, arr[0]);

console.log(result2);