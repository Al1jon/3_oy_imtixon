// Masalalar:
// 1. kiritilgan soʻzda eng koʻp uchragan harfning sonini chiqarish funksyasi.
console.log('1-masala:');

let word = 'AssalomuAlaykum';
let word2 = 'Banana';
let word3 = 'Google';

function manyWords(words) {

    let wordArray = [];
    let numberOfLetters = [];
    let arrayItemNumber = 0;

    wordArray = words.split('');

    for (let i = 0; i < wordArray.length; i++) {

        let previousLetter = wordArray[i];

        for (let j = 0; j < wordArray.length; j++) {

            if (previousLetter.toLowerCase() == wordArray[j].toLowerCase()) {
                arrayItemNumber++;
            }
        };
        numberOfLetters.push(arrayItemNumber);
        arrayItemNumber = 0;
    }
    let result = 0;

    for (let i = 0; i < numberOfLetters.length; i++) {

        if (result < numberOfLetters[i]) {
            result = numberOfLetters[i];
        }
    }
    console.log(wordArray);
    console.log(numberOfLetters);
    return result;
}

console.log('Javob-> ', manyWords(word));



// 2. Palindrom songa tekshiruvchi funksiya(121).

console.log('\n2-masala:');

let number1 = 12321;
let number2 = 122;
let number3 = 76567;
function PalindromNumber(number) {
    let newArray = [];
    newArray = String(number).split('').reverse();
    let b = Number(newArray.join(''));
    console.log(number);
    if (number == b) {
        return 'Palindrom son';
    }
    else {
        return 'Palindrom son emas';
    }
   
}
console.log('Javob-> ', PalindromNumber(number2));



// 3. kabisa yilini tekshirish funksiyasi Kabisa yili(arabcha: toʻliq) – oddiy yildan
// bir kun(da).fevral) ko'proq kalendar yili.  4 ga qoldiqsiz bo‘linadigan yil Kabisa
// yili (400 ga bo‘linmaydigan yillar bundan mustasno. Masalan: 1800, 1900, 2100 kabisa
// yillar emas)
console.log('\n3-masala:');

let year1 = 1300;
let year2 = 48;

function kabisaYear(params) {
    console.log(params);
    if (params % 4 == 0 && params % 100 != 0 || params % 400 == 0) {
        return 'kabisa yili'
    }
    else {
        return 'kabisa yili emas'
    }
}
console.log('Javob-> ', kabisaYear(year1));



// 4. Funksiyaga ixtiyoriy sonlardan iborat array kiritiladi shu arraydagi manfiy sonlarni
// alohida qilib ularni array ko'rinishida qaytaring.

console.log('\n4-masala:');

let Numbers = [23, -137, 42, 66, -7, 89, 91, -76, -33, 0, -39];

function nanegativeNumberme(array) {

    let negativeNumber = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negativeNumber.push(array[i]);
        }
    }
    return negativeNumber;
}

console.log('Javob-> Manfiy sonlar:', nanegativeNumberme(Numbers));





