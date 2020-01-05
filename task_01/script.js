let money = +prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');
let expensesData = prompt('Введите обязательную статью расходов в этом месяце');
let moneyExpenses = +prompt('Во сколько обойдется?');

let appData = {
    moneyData: money,
    timeData: time,
    expenses: { // объект с обязательными расходами
        [expensesData]: moneyExpenses // переменная вместо ключа в []
    },
    optionalExpenses: { // объект с необязательными расходами
    },
    incam: ArrayDop = [], // массив данных с доп. доходом
    savings: false
};

let moneyDay = (money / 30) - (moneyExpenses / 30);
alert(moneyDay);
console.log(appData);
console.log(moneyDay);