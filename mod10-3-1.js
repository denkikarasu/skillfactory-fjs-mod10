let num = prompt('Введите число: ');

num++;
console.log('Тип переменной: ' + typeof(num));

// Судя по заданию, выводится информация о четности или нечетности числа, полученного с помощью инкремента.
if ((typeof(num) == 'number') && !isNaN(num)) {
    if (num % 2 == 0) {
        console.log('Четное');
    } else {
        console.log('Нечетное');
    }

} else {
    console.log('Упс, кажется, вы ошиблись!');
}