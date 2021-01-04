console.log("------------------------------------")
/* Дедупликация массива */
console.log("1. Дедупликация массива")

let value1 = [7, 1, 2, 3, 4, 8, 4, 3, 5, 6, 8, 7, 9]

console.log(`Input: [${value1}]`)

function dd(array) {
    if (Array.isArray(array)) {
        return [...new Set([...array])];
    } else {
        console.log("Input value not array");
        return 0;
    }
    // return result = Array.of(...new Set(Array.of(...array)));
    // return result = Array.from(new Set(array));
}

console.log(`Output: [${dd(value1)}]`)

console.log("------------------------------------")
/* Сортировка массива пузырьком */
console.log("2. Сортировка массива пузырьком")

let value2 = [6, 1, 2, 3, 4, 5]

console.log(`Input: [${value2}]`)

function bubble(array) {
    if (Array.isArray(array)) {
        for (let i = 0; i < array.length - 1; i++) {
            let wasSwap = false;
            for (let j = 0; j < array.length - i; j++) {
                if (array[j] > array[j + 1]) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];
                    wasSwap = true;
                }
            }
            if (!wasSwap) break;
        }
    } else {
        console.log("Input value not array");
        return 0;
    }
    return array
}

console.log(`Output: [${bubble(value2)}]`)

console.log("------------------------------------")
/* Проверка, что строка является палиндромом */
console.log("3. Проверка, что строка является палиндромом")

let value3 = 'racecar';

console.log(`Input: '${value3}'`)

function isPalindrome(str) {
    let halfLength = Math.floor(str.length / 2);
    for (let i = 0; i < halfLength; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(`Output: ${isPalindrome(value3)}`)

console.log("------------------------------------")
/* Проверка, что строка является анаграммой другой строки */
console.log("4. Проверка, что строка является анаграммой другой строки")

let value4 = '123456789'
let value4_1 = '853691742'

console.log(`Input: '${value4}' '${value4_1}'`)

function buildCharObject(str) {
    const charObj = {}
    for (let char of str.replace(/[^\w]/g).toLowerCase()) {
        charObj[char] = charObj[char] + 1 || 1
    }
    return charObj
}

function anagram(str, anagramStr) {
    const aCharObject = buildCharObject(str)
    const bCharObject = buildCharObject(anagramStr)
    if (Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
        return false
    }
    for (let char in aCharObject) {
        if (aCharObject[char] !== bCharObject[char]) {
            return false
        }
    }
    return true
}

console.log(`Output: ${anagram(value4, value4_1)}`)

console.log("------------------------------------")
/* Поиск гласных в строке */
console.log("5. Поиск гласных в строке")

let value5 = 'hello bart привет барт'

console.log(`Input: '${value5}'`)

function findVowels(str) {
    const matched = str.match(/[aeiouйуеыаоэяию]/gi)
    return matched ? matched.length : 0
}

console.log(`Output: ${findVowels(value5)}`)

console.log("------------------------------------")
/* Определения числа Фибоначи */
console.log("6. Определения числа Фибоначи")

function fibonacci(num) {
    const result = [0, 1]

    for (let i = 2; i <= num; i++) {
        const prevNum1 = result[i - 1]
        const prevNum2 = result[i - 2]
        result.push(prevNum1 + prevNum2)
    }
    console.log(`Input: ${result}`)
    return result[num]
}

console.log(`Output: ${fibonacci(7)}`)

console.log("------------------------------------")
/* Функция геттер, которая спустится по вложенности данных на основе указанного строкой ключа через точку */
console.log("7. Функция геттер, которая спустится по вложенности данных на основе указанного строкой ключа через точку")

let value7 = {
    users: ['Alex', 'Max', 'Ins'],
    status: true,
    teacher: {
        name: 'Vika',
        age: 23,
        family: {
            mother: {
                name: 'Sofia',
                age: 45
            },
            father: {
                name: 'Jhon',
                age: 24
            }
        }
    }
}
//'teacher.family.mother.age'
//'teacher.name'
let key = 'teacher.name'
console.log(`Input: ${JSON.stringify(value7, true, 4)}`)
console.log(`key: ${key}`)

function getValue(obj, str) {
    let array = str.split(".")
    let result = 'obj';
    for (let i = 0; i < array.length; i++) {
        result += `['${array[i]}']`;
    }
    return eval(result)
}

console.log(`Output: ${getValue(value7, key)}`)

console.log("------------------------------------")
/* Генерация случайного hex цвета */
console.log("8. Генерация случайного hex цвета")

function getRandomHEX() {
    return '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)
}

console.log(`Output: ${getRandomHEX()}`)

console.log("------------------------------------")
/* Функция для конвертации короткой записи hex цвета в полную (#05а => #0055aa) */
console.log("9. Функция для конвертации короткой записи hex цвета в полную (#05а => #0055aa)")

let value9 = '#ff0';

console.log(`Input: ${value9}`)

function getFullHex(str) {
    return '#' + str[1] + str[1] + str[2] + str[2] + str[3] + str[3]
}

console.log(`Output: ${getFullHex(value9)}`)

