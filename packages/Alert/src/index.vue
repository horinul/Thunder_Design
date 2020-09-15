<template>
<div :class="alertStyle" v-if="showAlert" @click="handleClick">
    <THIcon :icon="icon" :size="currentSize" style="margin-top:5px"></THIcon>
    <div :class="textStyle">
        <slot></slot>
        <i class="cancleIcon" @click="cancelClick" v-if="showCancel">×</i>
    </div>
</div>
</template>

<script>
import {
    oneOf
} from "../../../src/utils/index";
import THIcon from "../../Icon/index";
export default {
    name: "THAlert",
    components: {
        THIcon,
    },
    data() {
        return {
            currentSize: this.size === "little" ?
                "default" :
                this.size === "default" ?
                "large" :
                this.size === "large" ?
                "increase" :
                null,
            showAlert: true,
        };
    },
    props: {
        icon: {
            type: String,
            default: "icon1",
        },
        type: {
            type: String,
            validator: (value) => {
                return oneOf(value, ["blue", "green"]);
            },
            default: "green",
        },
        size: {
            type: String,
            validator: (value) => {
                return oneOf(value, ["default", "little", "large"]);
            },
            default: "default",
        },
        showCancel: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        alertStyle() {
            return [
                "alert-type-" + this.type,
                "alert-size-" + this.size,
                "alertDefault",
            ];
        },
        textStyle() {
            return ["text-" + this.size, "textDefault"];
        },
    },
    methods: {
        cancelClick() {
            this.showAlert = false;
            event.stopPropagation(); //阻止事件冒泡，避免同时触发整个alert的点击事件
        },
        handleClick(event) {
            this.$emit("click", event);
        },
    },
};
</script>

<style lang="less" scoped>
.alertDefault {
    min-height: 40px;
    width: 300px;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    padding: 5px;
    font-size: 16px;
    position: relative;
}

.textDefault {
    // line-height: 50px;
    display: flex;
    justify-content: space-between;
    color: #20b2aa;
    margin-left: 10px;
    width: 100%;
}

.text-default {
    line-height: 50px;
}

.text-little {
    line-height: 40px;
}

.text-large {
    line-height: 60px;
}

.alert-type-blue {
    background-color: rgba(57, 197, 187, 0.4);
}

.alert-type-green {
    background-color: rgba(62, 190, 211, 0.4);
}

.alert-size-little {
    font-size: 14px;
    min-height: 30px;
}

.alert-size-large {
    font-size: 18px;
    min-height: 50px;
}

.cancleIcon {
    font-size: 20px;
    cursor: pointer;
    user-select: none;
    color: #20b2aa;
    margin-right: 10px;
}
</style>
