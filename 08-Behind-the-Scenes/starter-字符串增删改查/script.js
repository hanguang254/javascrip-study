'use strict';


const tp = 'Friend is Boy';

//小写方法
console.log(tp.toLowerCase());
//大写方法
console.log(tp.toUpperCase());
console.log('--------------分界线--------------');

//截取选择  取Friend
const a = tp.slice(0, 6)
console.log(a);
console.log('--------------分界线--------------');

//替换字符串
const test_1 = 'kjdakdf dkfkjddf dkjfskjd girl';
//replaceAll 方法
console.log(test_1.replaceAll('girl', 'boy'));
console.log('--------------分界线--------------');

//校验字符串是否包含某字符
const test2 = 'CSGO and PUBG';
//返回结果为布尔值true or falce
console.log(test2.includes('PUBG'));
console.log('--------------分界线--------------');

//切片分割
const [frist, last] = '天下万般兵刃，唯有过往伤人最深'.split('，');
//join 以空格分隔
const test3 = ['亚索：', frist, last].join(' ');
console.log(test3);
//repeat重复方法
console.log(test3.repeat(4))

console.log('--------------分界线--------------');













//打印 *
//padStart 字符串添加内容
for (let i = 1; i < 4; i++) {
    const str = '';
    console.log(str.padStart(i, '*'));
}
//html页面打印
// var content = '';
// for (var i = 1; i < 4; i++) {
//     content += '*'.repeat(i) + '<br>';
// }
// 操作元素 html显示
// document.querySelector('.class').innerHTML=content;