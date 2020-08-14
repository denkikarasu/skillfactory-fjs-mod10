let x = [1, 2, 3];

switch (typeof(x)) {
    case 'number':
        console.log('X - число');
        break;
    case 'string':
        console.log('X - строка');
        break;
    case 'Boolean':
        console.log('X - логический тип');
        break;
    default:
        console.log('Тип x не определён');
}