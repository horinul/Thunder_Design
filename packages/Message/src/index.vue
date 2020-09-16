<template>
<transition enter-active-class="animate__animated animate__fadeInDown" leave-active-class="animate__animated">
    <div :class="componentStyle" v-if="showMessage" :style="{ top: distanceFromTop + 'px' }">
        <span :class="iconStyle"></span>
        <span :class="textStyle">
            <span>{{ message }}</span>
        </span>
    </div>
</transition>
</template>

<script>
// 两个阶段，iview中也只实现了单个显示，再来一个则覆盖。
// element实现了再来一个就往下推，用的计算上一个显示的消息的距离顶部的距离
// import {
//     oneOf
// } from "../../../src/utils/index";
export default {
    name: "messages",
    data() {
        return {
            showMessage: false,
            message: "",
            type: "message",
        };
    },
    props: {
        // type: {
        //     type: String,
        //     validator: (value) => {
        //         return oneOf(value, ["success", "warn", "message", "error"]);
        //     },
        //     default: "message",
        // },
        duration: {
            type: Number,
            default: 2,
        },
        distanceFromTop: {
            type: Number,
            default: 30,
        },
    },
    computed: {
        componentStyle() {
            console.log(this.type);
            return ["component", "component-type-" + this.type];
        },
        iconStyle() {
            return ["defaultIcon", "icon-type-" + this.type];
        },
        textStyle() {
            return ["defaultText"];
        },
    },
};
</script>

<style lang="less" scoped>
.component {
    min-width: 300px;
    min-height: 40px;
    position: fixed;
    // left: 50%;
    // margin: 0 auto;
    left: auto;
    right: auto;
    // transform: translate(-50%, 0);
    z-index: 1100;
    border-radius: 8px;
}

.component-type-success {
    background-color: rgb(217, 250, 246);
    color: #20b2aa;
}

.component-type-error {
    background-color: rgb(250, 162, 162);
    color: #ff6347;
}

.component-type-warn {
    background-color: #fffacd;
    color: #ffd700;
}

.component-type-message {
    background-color: rgb(203, 238, 243);
    color: #20b2aa;
}

.defaultIcon {
    height: 40px;
    width: 35px;
    background-size: cover;
    display: inline-block;
    margin-left: 8px;
    vertical-align: middle;
}

.icon-type-success {
    background-image: url("../static/success.png");
}

.icon-type-error {
    background-image: url("../static/error.png");
}

.icon-type-warn {
    background-image: url("../static/warn.png");
}

.icon-type-message {
    background-image: url("../static/message.png");
}

.defaultText {
    line-height: 40px;
    vertical-align: middle;
    margin-left: 10px;
}
</style>
