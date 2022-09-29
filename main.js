let x = prompt('Enter first number: ')
let y = prompt('Enter second number: ')
let z = prompt('Enter third number: ')

if (x > y && x > z) {
    console.log(x + ' ' + 'greater than' + ' ' + y + ' ' +'and'+ ' ' + z);
}else if (y > x && y > z) {
    console.log(y + ' ' + 'greater than' + ' ' + x + ' ' +'and'+ ' ' + z);
}else if (z > x && z > y) { 
    console.log(z + ' ' + 'greater than' + ' ' + x + ' ' +'and'+ ' ' + y);
}