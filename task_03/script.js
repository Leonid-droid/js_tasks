let money = +prompt('Ваш бюджет на месяц?', '');
time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    expenses: {}, // объект с обязательными расходами
    optionalExpenses: {}, // объект с необязательными расходами
    incom: [], // массив данных с доп. доходом
    timeData: time,
    savings: false
};



console.log(appData);
appData.moneyPerDay = appData.budget / 30 // Ежедневный уровень дохода
alert('Ежедневная трата: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Это минимальный уровень достатка.');
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка.');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка.');
}   else {
    console.log('Произошла ошибка.');
}