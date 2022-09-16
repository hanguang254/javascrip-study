'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};

//添加网页元素
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));


document.querySelector('button').addEventListener('click', function() {
    const text = document.querySelector('textarea').value;
    const row_text = text.split('\n');
    console.log(row_text);

    //in是数组元素有几个下标合元素，of是获取数组元素内容
    //entries()解构数组  i元素位   row为值
    for (let [i, row] of row_text.entries()) {
        let [frist, last] = row.toLowerCase().trim().split('_');
        //replace 选择
        let output = `${frist.replace(frist[0],frist[0].toUpperCase())}${last.replace(last[0],last[0].toUpperCase())}`

        console.log(`${output.padEnd(15)}${'✅'.repeat(i+1)}`)
    }

})

const fina_test = () => {

}