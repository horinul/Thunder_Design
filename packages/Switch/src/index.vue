<template>
<div class="component">
    <div v-if="text">
        <span>{{ text.checked }}</span>
        <span>{{ text.disabled }}</span>
    </div>
    <div>
        <input type="checkbox" @change="changeSwitch" :checked="checked" :disabled="disabled" />
    </div>
</div>
</template>

<script>
export default {
    name: "THSwitch",
    model: {
        prop: "checked",
        event: "change",
    },
    props: {
        text: {
            type: Object,
        },
        checked: {
            default: false,
            type: Boolean,
        },
        disabled: {
            default: false,
            type: Boolean,
        },
    },
    methods: {
        changeSwitch(e) {
            console.log(e);
            this.$emit("change", e.target.checked);
        },
    },
    computed: {},
};
</script>

<style lang="less" scoped>
.component {
    display: flex;
    align-items: center;

    input[type="checkbox"] {
        width: 20px;
        height: 10px;
        background-color: transparent;
        -webkit-appearance: none;
        border: 0;
        color: #000;
        outline: 0 !important;
        position: relative;
        transition: all 0.3s ease;
    }

    input[type="checkbox"]:before {
        content: "";
        display: block;
        width: 20px;
        height: 10px;
        background-color: #20b2aa;
        position: absolute;
        border-radius: 10px;
        position: absolute;
    }

    input[type="checkbox"]:after {
        content: "";
        display: block;
        width: 8px;
        height: 8px;
        background-color: #eee;
        border-radius: 50%;
        position: absolute;
        box-sizing: border-box;
        top: 1px;
        left: 1px;
        transition: all 0.3s ease;
    }

    input[type="checkbox"]:checked:before {
        display: block;
        width: 20px;
        height: 10px;
        border-radius: 10px;
        position: absolute;
        background-color: #66ccff;
        box-sizing: border-box;
    }

    input[type="checkbox"]:checked:after {
        content: "";
        display: block;
        width: 8px;
        height: 8px;
        position: absolute;
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
        left: 19px;
        background-color: #fff;
        box-sizing: border-box;
    }
}
</style>
