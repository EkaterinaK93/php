function getValuesFromUser(){
    let defaultMinValue = 0;
    let lowestValue = -999;
    let inputMinValue = parseInt(prompt('Минимальное знание числа для игры','0')) || defaultMinValue;
    // let minValue = Math.max(inputMinValue, lowestValue);
    let minValue = (inputMinValue > lowestValue)? inputMinValue : lowestValue;

    let defaultMaxValue = 100;
    let largestValue = 999;
    let inputMaxValue = parseInt(prompt('Максимальное знание числа для игры','100')) || defaultMaxValue;
    // let maxValue = Math.min(inputMaxValue, largestValue);
    let maxValue = (inputMaxValue < largestValue)? inputMaxValue : largestValue;

    let answerPair = (minValue < maxValue)?[minValue, maxValue]:[maxValue, minValue];

    if (answerPair[0] < -999) {
        answerPair[0] = -lowestValue;
    }

    if (answerPair[1] > maxValue) {
        answerPair[1] = largestValue;
    }

    return answerPair;
}

let units = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
let dozens = ['', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
let hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

function numberToText(start_num) {
    let number = start_num;
    let minus = "";

    if (number < 0) {
        minus = "минус ";
        number = Math.abs(number);
    }

    if (number <= 19) {
        return minus + units[number];
    }

    if (number >= 20 && number <= 99) {
        let result = minus + dozens[(Math.floor(number / 10)) - 1] + " " + units[Math.floor(number % 10)];

        if (result.length > 20) {
            return start_num;
        }
        else  {
            return result;
        }
    }

    if (number >= 100 && number <= 999) {
        let result = minus + hundreds[Math.floor(number / 100)] + " " + numberToText(number % 100);

        if(result.length > 20) {
            return start_num;
        }
        else {
            return result;
        }
    }

    return "Вы ошиблись!!!!! КАК ТАК ТО ЗАЧЕМ ВЫ ТАК?!";
}

let [minValue, maxValue] = getValuesFromUser ();

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
let beforeGameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
const printField = document.getElementById('printField');

let textAnswer = numberToText(answerNumber);

const phrases = [
    `Вы загадали число ${textAnswer}`,
    `Может быть это число ${textAnswer }? Я угадал?`,
    `Это точно ${textAnswer }`,
]
const phraseRandomIndex = Math.round( Math.random() * (phrases.length - 1));
const answerPhrase = phrases[phraseRandomIndex];

answerField.innerText = answerPhrase;

document.getElementById('btnRetry').addEventListener('click', function () {

    gameRun = true;
    let minMaxValues = getValuesFromUser ();
    minValue = minMaxValues[0];
    maxValue = minMaxValues[1];
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    const orderNumberField = document.getElementById('orderNumberField');
    const answerField = document.getElementById('answerField');
        
    let textAnswer = numberToText(answerNumber);

    const phrases = [
        `Вы загадали число ${textAnswer}`,
        `Может быть это число ${textAnswer}? Я угадал?`,
        `Это точно ${textAnswer}\n\u{1F609}`,
    ]
    const phraseRandomIndex = Math.round( Math.random() * (phrases.length - 1));
    const answerPhrase = phrases[phraseRandomIndex];

    answerField.innerText = answerPhrase;
    
    }
    
)

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phrases = [
                `Вы загадали неправильное число!\n\u{1F914}`,
                `Я сдаюсь..\n\u{1F92F}`,
                `Я пытался\n\u{1F605}`,
            ]
            const phraseRandomIndex = Math.round( Math.random() * (phrases.length - 1));
            const answerPhrase = phrases[phraseRandomIndex];

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            let textAnswer = numberToText(answerNumber);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${textAnswer}?`;
        }
    }
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phrases = [
                `Вы загадали неправильное число!\n\u{1F914}`,
                `Я сдаюсь..\n\u{1F92F}`,
                `Я пытался\n\u{1F605}`,
            ]
            const phraseRandomIndex = Math.round( Math.random() * (phrases.length - 1));
            const answerPhrase = phrases[phraseRandomIndex];

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            let textAnswer = numberToText(answerNumber);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${textAnswer}?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phrases = [
            `Я всегда угадываю\n\u{1F60E}`,
            `Я молодец\n\u{1F601}`,
            `Давай ещё раз\n\u{1F600}`,
        ]
        const phraseRandomIndex = Math.round( Math.random() * (phrases.length - 1));
        const answerPhrase = phrases[phraseRandomIndex];

        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})
