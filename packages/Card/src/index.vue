<template>
<div :class="cardStyle" @click="handleClick">
    <THIcon :icon="icon" size="increase" style="position:absolute;bottom:0;right:0;z-index:500;"></THIcon>
    <div class="cardHead" v-if="showHead">
        <slot name="title"> </slot>
    </div>
    <div class="br" v-if="showHead"></div>
    <div class="cardBody">
        <slot name="body"></slot>
    </div>
</div>
</template>

<script>
import {
    oneOf
} from "../../../src/utils/index";
import THIcon from "../../Icon/index";
export default {
    name: 'THCard',
    components: {
        THIcon,
    },
    props: {
        type: {
            validator: (value) => {
                return oneOf(value, ["blue", "green"]);
            },
            default: "green",
            type: String,
        },
        icon: {
            type: String,
            default: "icon1",
        },
        shadow: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        cardStyle() {
            return [
                "transparent-" + this.type,
                "component",
                this.shadow ? "card-shadow" : null,
            ];
        },
    },
    data() {
        return {
            showHead: this.$slots.title,
        };
    },
    methods: {
        handleClick(event) {
            this.$emit("click", event);
        },
    },
};
</script>

<style lang="less" scoped>
.component {
    // border: 1px solid #eee;
    min-width: 200px;
    min-height: 200px;
    padding: 9px;
    margin: 10px;
    border-radius: 10px;
    position: relative;
    color: #20b2aa;
    width: 400px;
}

.card-shadow {
    transition: all 0.2s ease-in-out;
}

.card-shadow:hover {
    box-shadow: 0px 0px 8px rgba(62, 190, 211, 0.7);
    /*考虑浏览器兼容性*/
    -moz-box-shadow: 0px 0px 8px rgba(62, 190, 211, 0.7);
    -webkit-box-shadow: 0px 0px 8px rgba(62, 190, 211, 0.7);
}

.transparent-blue {
    background-color: rgba(57, 197, 187, 0.4);
}

.transparent-green {
    background-color: rgba(62, 190, 211, 0.4);
}

.br {
    height: 2px;
    background-color: #eee;
}

.cardHead {
    min-height: 35px;
    line-height: 35px;
    padding: 2px 2px;
    font-size: 25px;
    font-weight: 800;
}

.cardBody {
    white-space:pre;
    min-height: 100px;
    line-height: 20px;
    padding: 12px 2px;
}
</style>
