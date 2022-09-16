'use strict';


// 生成随机数20
let rightnumber = Math.trunc(Math.random() * 20 + 1);

//初始分数
let sh = 20;
let highscore = 0;


// document.querySelector('.number').

//对check按钮 事件监控
//addEventlistener 事件监视器
document.querySelector('.check').addEventListener('click', function() {
    const put = Number(document.querySelector('.guess').value);
    // console.log(put); //打印input输入框的value值



    // 判断put值是否为假值
    if (!put) {
        document.querySelector('.message').textContent = '请输入正确数字！'

        //判断输入值是否与随机数相等，相等就输出主页面数字    
    } else if (put === rightnumber) {
        document.querySelector('.message').textContent = '恭喜你赢了！'
        document.querySelector('.number').textContent = put;

        // document.querySelector('.highscore').textContent = Math.max.apply(null, maxsh); //获取数组里面最大值


        //猜对变换css样式
        //变换答案盒子大小
        document.querySelector('.number').style.width = '30rem';
        //变换body的背景颜色
        document.querySelector('body').style.backgroundColor = '#60b347';

        //历史最高分
        if (sh > highscore) {

            document.querySelector('.highscore').textContent = sh;
        }




        //输入值不等于随机数情况    
    } else if (put !== rightnumber) {

        if (sh > 0) {
            //使用重构条件减少代码量 ：put > rightnumber ? '您输入的数字太大了！' : '您输入的数字太小了！'
            document.querySelector('.message').textContent = put > rightnumber ? '您输入的数字太大了！' : '您输入的数字太小了！'

            sh--;

            document.querySelector('.score').textContent = sh;

        } else {
            document.querySelector('.message').textContent = '很遗憾，您输了！'
        }

    }
    // else if (put < rightnumber) {
    //     // 初始分数大于0时
    //     if (sh > 0) {
    //         document.querySelector('.message').textContent = '您输入的数字太小了！'

    //         sh--;

    //         document.querySelector('.score').textContent = sh;


    //     } else {
    //         document.querySelector('.message').textContent = '很遗憾，您输了！'
    //     }

    // }


})

//argin 按钮事件监控
//addEventListener事件监控
document.querySelector('.again').addEventListener('click', function() {
    sh = 20;
    // 重新生成随机数20
    rightnumber = Math.trunc(Math.random() * 20 + 1);


    //恢复原来样式
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    //恢复默认内容
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = sh;
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = '请输入数字开始游戏....';


})