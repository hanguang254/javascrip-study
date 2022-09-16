// 严格模式，提示编码错误
'use strict'

// 函数
function studyTest(math) {

    // var声明的变量后面可变
    var ah = `${math} 个人`;

    return ah;
}
var x;
x = studyTest(8);
console.log(x);



/*
// 冒泡排序
const friends = [23, 56, 34, 28, 7, 67, 87]

for (let i = 0; i < friends.length - 1; i++) {
    // console.log(friends[i])
    for (let j = 0; j <= friends.length - i + 1; j++) {
        if (friends[j] > friends[j + 1]) {
            [friends[j], friends[j + 1]] = [friends[j + 1], friends[j]]
            // console.log(friends)
        }
    }
}
console.log(friends)
*/

/*
const a = ['绝对是', '小木', '星云', '劫'];
// b存储 有几个元素
const b = a.push('添加');
console.log(a);
*/

const hg = {
    name: '小明',
    age: 19,
    height: '50kg',
    cm: '175cm',

    fx: function() {
        return 25 - this.age; //this 直接调用
    },
    say: function() {
        return `${this.name}是一个比他小${this.fx()}岁boy!`
    },
}

console.log(hg.fx())
console.log(hg.say())

console.log('----------------------------------')

