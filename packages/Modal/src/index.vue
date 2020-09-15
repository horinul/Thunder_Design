<template>
<div v-if="isActive">
    <div class="modalMask"></div>
    <div class="window">
        <THIcon :icon="icon" size="increase" style="position:absolute;bottom:0;right:0;z-index:500;"></THIcon>
        <div class="modalHead" v-if="title">
            {{ title }}
            <i class="cancleIcon" @click="cancelClick">×</i>
        </div>
        <div class="modalBody">
            <slot></slot>
        </div>
        <div class="modalFoot">
            <!-- 两个方法必写 -->
            <!-- todos：设置两个方法必写的属性，不写报错 -->
            <THButton @click="okClick">{{ okText }}</THButton>
            <THButton @click="cancelClick">{{ cancelText }}</THButton>
        </div>
    </div>
</div>
</template>

<script>
import THIcon from "../../Icon/index";
import THButton from "../../Button/index";
export default {
    name: "THModal",
    components: {
        THIcon,
        THButton,
    },
    data() {
        return {
            isActive: false,
        };
    },
    watch: {
        isActiveProp(data) {
            this.isActive = data;
            if (this.isActive === true) {
                // 非常无奈的在此操纵DOM，了解vue中不推荐操作DOM
                // 但技术限制暂时未想到办法解决，有待改进
                document.body.style.overflow = "hidden";
            }
        },
    },
    methods: {
        bothClick() {
            this.isActive = false;
            document.body.style.overflow = "visible";
            this.$emit("update:isActiveProp", false);
        },
        okClick(event) {
            // todo:第一步执行完再执行下一步
            this.$emit("okClick", event);
            this.bothClick()
        },
        cancelClick(event) {
            this.$emit("cancelClick", event);
            this.bothClick()
        },
    },
    props: {
        isActiveProp: {
            type: Boolean,
        },
        okText: {
            type: String,
            default: "确定",
        },
        cancelText: {
            type: String,
            default: "取消",
        },
        mask: {
            type: Boolean,
        },
        title: {
            type: String,
        },
        icon: {
            type: String,
        },
        // 是否显示右上角关闭按钮
        closable: {
            type: Boolean,
        },
    },
};
</script>

<style lang="less" scoped>
.modalMask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(55, 55, 55, 0.6);
    height: 100%;
    z-index: 1000;
}

.modalHead {
    min-height: 35px;
    line-height: 35px;
    padding: 2px 2px;
    font-size: 17px;
    font-weight: 800;
}

.modalBody {
    min-height: 100px;
    line-height: 20px;
    padding: 12px 5px;
}

.modalFoot {
    min-height: 35px;
    text-align: right;
    margin-right: 50px;
}

.window {
    top: 100px;
    min-width: 500px;
    min-height: 135px;
    padding: 9px;
    margin: 0 auto;
    border-radius: 10px;
    color: #20b2aa;
    width: 400px;
    z-index: 1000;
    background-color: rgb(215, 249, 250);
    position: relative;
    background-clip: padding-box;
    -webkit-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.cancleIcon {
    position: absolute;
    right: 20px;
    top: 10px;
    font-size: 20px;
    cursor: pointer;
    z-index: 1000;
    user-select: none;
}
</style>
