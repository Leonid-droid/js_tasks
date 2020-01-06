let money = prompt('Ваш бюджет на месяц?', '');
time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    expenses: {}, // объект с обязательными расходами
    optionalExpenses: {}, // объект с необязательными расходами
    incom: [], // массив данных с доп. доходом
    timeData: time,
    savings: false
};

for (i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', '');
    b = prompt('Во сколько обойдется?', '');

    appData.expenses[a] = b;
}
    console.log(appData);

alert(appData.budget / 30);