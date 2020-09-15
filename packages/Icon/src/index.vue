<template>
<div>
    <img :class="iconStyle" :src="imgSrc" />
</div>
</template>

<script>
import {
    oneOf
} from "../../../src/utils/index";
export default {
    name: "THIcon",
    props: {
        type: {
            validator: (value) => {
                return oneOf(value, ["default", "circle"]);
            },
            type: String,
            default: "default",
        },
        size: {
            validator: (value) => {
                return oneOf(value, ["default", "little", "large", "increase"]);
            },
            type: String,
            default: "default",
        },
        icon: {
            validator: (value) => {
                return oneOf(value, [
                    "icon1",
                    "icon2",
                    "icon3",
                    "icon4",
                    "icon5",
                    "icon6",
                    "icon7",
                    "icon8",
                    "icon9",
                    "icon10",
                ]);
            },
            type: String,
            default: "icon1",
        },
    },
    data() {
        return {
            imgSrc: this.icon ? require("../static/" + this.icon + ".png") : null,
        };
    },
    computed: {
        iconStyle() {
            return ["icon", "icon-base-" + this.size];
        },
    },
};
</script>

<style lang="less" scoped>
@import url("../../../src/css/index.css");

.icon {
    border: none;
    width: 40px;
    height: 32px;
    background-size: 40px 32px;
}

.icon-base-large {
    width: 50px;
    height: 40px;
    background-size: 50px 40px;
}

.icon-base-little {
    width: 30px;
    height: 24px;
    background-size: 30px 24px;
}

.icon-base-increase {
    width: 62px;
    height: 53px;
    background-size: 62px 53px;
}
</style>
