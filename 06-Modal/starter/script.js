'use strict';

// 使用窗口模型
const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');
//选择多个类用ALL
const showbtn = document.querySelectorAll('.show-modal');

const closebtn = document.querySelector('.close-modal');

//隐藏类函数
const clickfun = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < showbtn.length; i++) {
    showbtn[i].addEventListener('click', function() {
        //遍历删除隐藏类
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}

//窗口关闭加入隐藏类
closebtn.addEventListener('click', clickfun);
//窗口外点击自动隐藏
overlay.addEventListener('click', clickfun);

// 对键盘操作事件监控 keydown 按下键盘
document.addEventListener('keydown', function(e) {
    //打印 e 事件响应
    console.log(e.key);

    if (e.key == 'Escape' && !modal.classList.contains('hidden')) {

        //如果modal没有hidden类
        clickfun();

    }
})