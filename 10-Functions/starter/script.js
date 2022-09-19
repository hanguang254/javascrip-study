'use strict';
/*
const xbody = [];
//箭头函数
const creatText = (name, pass = 1, age = 20) => {

    const boy = {
        name,
        pass,
        age
    }
    console.log(boy);
    xbody.push('阿克尚');
}

creatText('小明');
creatText('小红', 0, 23);
//undfined跳过函数参数
creatText('流星', undefined, 18)

*/

// ['xsd', 'sjdfh']

console.log('-------------------------------------------------------------------------------');

//返回函数
const test = function(name) {
    return function(age) {
        console.log(`${name}年龄：${age}`);
    }
}
const final = test('小明');
final(18);
test('小红')(19);

//箭头函数重写
const student = id => tp_name => console.log(`${id}在${tp_name}`);

const test_final = student(188);
test_final('五班');

student(288)('六班');
console.log('-------------------------------------------------------------------------------');

const skay = {
    id: 'MH666',
    place: '上海',
    bookings: [],

    book(seat, name2) {
        console.log(`航班机号：${this.id} 目的地：${this.place} 座位：${seat} 姓名：${name2}`);
        this.bookings.push({ '飞机': `${this.id} ${seat}号`, name2 })
    }

}
skay.book(12, '王总');

// console.log(skay.bookings);   //打印bookings的值

//构建新对象
const skay2 = {
    id: 'MH555',
    place: '北京',
    bookings: []
}


//skay对象的book函数重用，book值为函数
const book = skay.book;
//this对象的调用
book.call(skay2, 19, '于谦');


//bind() 方法this重新指向
const bookHB = book.bind(skay2);
bookHB(20, '李世民');

//预设参数  座位25号
const bookHB25 = book.bind(skay, 25);
bookHB25('陈真');
console.log('-------------------------------------------------------------------------------');

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0)
}

;
(function() {
    console.log('IIFE 调用函数表达式');
})();

;
(() => console.log('IIFE 调用函数表达式'))();
console.log('-------------------------------------------------------------------------------');

//闭包