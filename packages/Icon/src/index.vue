<template>
<div>
    <img :class="iconStyle" :src="imgSrc" />
</div>
</template>

<script>
const imgUrlArray=[
    'https://pic.downk.cc/item/5f69e27a160a154a674b6b9a.png',
    'https://pic.downk.cc/item/5f69e27a160a154a674b6b9d.png',
    'https://pic.downk.cc/item/5f69e27a160a154a674b6ba0.png',
    'https://pic.downk.cc/item/5f69e2bf160a154a674b8eeb.png',
    'https://pic.downk.cc/item/5f69e2bf160a154a674b8eed.png',
    'https://pic.downk.cc/item/5f69e2bf160a154a674b8ef0.png',
    'https://pic.downk.cc/item/5f69e2bf160a154a674b8efa.png',
    'https://pic.downk.cc/item/5f69e2bf160a154a674b8eed.png',
    'https://pic.downk.cc/item/5f69e2df160a154a674ba095.png',
    'https://pic.downk.cc/item/5f69e2df160a154a674ba098.png'
]
import {
    oneOf
} from "../../../src/utils/index";
export default {
    name: "THIcon",
    props: {
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
        // https://raw.githubusercontent.com/frotage/Thunder_Design/master/packages/Icon/static/icon1.png?token=AMUMPO7YZMFBLS2JGIPNTQ27NHQPQ
        var  imgUrlNum=Number(this.icon.split('icon')[1])
        return {
            imgSrc: this.icon ?imgUrlArray[imgUrlNum-1] : null,
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
