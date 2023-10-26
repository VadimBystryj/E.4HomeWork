// Задание 1
//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль
// все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.
function getValue(obj) {
    for(let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key, obj[key])
        }
    }
}

const car= {
    model: 'Ford'
}

const electric_car = Object.create(car);
electric_car.ownModel = 'Tesla'

getValue(electric_car);
// Задание 2
//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть
//ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.
function check(str,obj) {
    return str in obj;
}
const dict = {
    one: 1,
    two: '2',
}
const first = 'one';
const second = '2';
console.log(check(first, dict));
console.log(check(second, dict));
// Задание 3
//Написать функцию, которая создает пустой объект, но без прототипа.
function isProtoIn(){
    return Object.create(null);
}
console.log (isProtoIn());