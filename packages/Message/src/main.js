import messages from './index.vue'
const THMessage = {};
/* eslint-disable */

// todo：暂时无法实现展示多个，受限于fixed布局
// 导致必须要进行计算进行展示，可实现至逐步向下衍生的组件
// 但在到时间的组件消失时，仍存在的组件不会自动向上
// 问题在于需要将所有组件放入一个数组中
// 在消失组件后进行再次渲染，故将closeMessage方法提出
// 暂时搁置，2.0+
THMessage.install = function (Vue) {
    // 生成一个Vue的子类
    // 同时这个子类也就是组件
    const ToastConstructor = Vue.extend(messages);
    // 生成一个该子类的实例
    const instance = new ToastConstructor();
    // 将这个实例挂载在我创建的div上
    instance.$mount(document.createElement('div'));
    // 并将此div加入全局挂载点内部
    document.body.appendChild(instance.$el);
    // s定义一个外部的变量，用于控制调用多次提示组件时，清除延时器
    // 相当于重新计时
    let timer;
    // 通过Vue的原型注册一个方法
    // 让所有实例共享这个方法 
    const message_main = {
        lastNum: 0,
        all_message(msg, type, duration, distanceFromTop) {
            // if (this.lastNum !== 1) {
            //     distanceFromTop += lastDuration * (this.lastNum-1)
            // }
            // console.log(this.lastNum, distanceFromTop)
            clearTimeout(timer);
            timer = setTimeout(() => {
                // this.lastNum--;
                instance.showMessage = false;
            }, duration);
            instance.message = msg;
            instance.showMessage = true;
            instance.type = type;
            instance.distanceFromTop = distanceFromTop
        },
        success(msg, duration = 2000, distanceFromTop = 30) {
            this.all_message(msg, 'success', duration, distanceFromTop);
        },
        error(msg, duration = 2000, distanceFromTop = 30) {
            this.all_message(msg, 'error', duration, distanceFromTop);
        },
        warn(msg, duration = 2000, distanceFromTop = 30) {
            this.all_message(msg, 'warn', duration, distanceFromTop)
        },
        message(msg, duration = 2000, distanceFromTop = 30) {
            this.all_message(msg, 'message', duration, distanceFromTop)
        }
    }
    //将方法挂载全局
    Vue.prototype.$message = message_main;
}

export default THMessage