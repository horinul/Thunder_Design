<template>
<div class="component">
    <div>
        <THTooptip popperText="hdkjasnjdsan" placement="right">aaa</THTooptip>
        <THTooptip popperText="hdkjasnjdsan" placement="top">aaa</THTooptip>
        <THTooptip placement="bottom" popperText="hdkjasnjdsan">
            <THButton icon="icon1" @click="test">testMessage</THButton>
        </THTooptip>
    </div>
    <!-- <div>
      <THBackTop icon="icon6"></THBackTop>
    </div>
    <div>

      <THButton icon="icon6" @click="testWarn">testMessage</THButton>
      <THButton icon="icon6" @click="testError">testMessage</THButton>
      <THButton icon="icon6" @click="testSuccess">testMessage</THButton>
    </div>
    <div>
      <THCheckboxGroup v-model="checkbox" @click="checkboxMethod">
        <THCheckbox value="aaa">aaa</THCheckbox>
        <THCheckbox value="bbb">bbb</THCheckbox>
        <THCheckbox value="ccc">ccc</THCheckbox>
      </THCheckboxGroup>
    </div>
    <div>
      <THAlert type="blue" :showCancel="true">三年二班</THAlert>
      <THAlert icon="icon9">李子明同学</THAlert>
      <THAlert type="blue" size="little">三年二班</THAlert>
      <THAlert icon="icon9" size="large">李子明同学</THAlert>
    </div>
    <div>
      <THButton @click="modalMethod">testModal</THButton>
      <THModal
        :isActiveProp.sync="testModal"
        title="测试标题"
        @okClick="test"
        @cancelClick="test"
        icon="icon8"
        >dbajshbdjsahbhdsb</THModal
      >
    </div>
    <div>
      <THRadio value="test" id="test" name="test" @click="test">aaa</THRadio>
      <THRadio type="blue" value="aaa" id="test1" name="test">aaa</THRadio>
    </div>
    <div>
      <THButton icon="icon1" disabled="true" @click="test">dhakj</THButton>
      <THButton size="little" icon="icon1" @click="test">dhakj</THButton>
      <THButton size="large" icon="icon1">dajkdlslakdkas</THButton>
      <THButton size="increase" icon="icon1">dajkdlslakdkas</THButton>
    </div>
    <div>
      <THIcon icon="icon8" size="increase"></THIcon>
    </div>
    <div>
      <THInput maxlength="8" type="textarea"></THInput>
      <THInput type="text" icon="icon6" @keyup.enter="test"></THInput>
      <THInput type="text" icon="icon7" size="large" autofocus></THInput>
      <THInput
        type="text"
        icon="icon8"
        size="little"
        :disabled="true"
      ></THInput>
      <THInput type="text" icon="icon9" size="increase"></THInput>
    </div>
    <div>
      <THCard>
        <div slot="title">9.13</div>
        <div slot="body">今天天气不错</div>
      </THCard>
      <THCard type="blue" @click="test" :shadow="false">
        <div slot="body">今天天气不错</div>
      </THCard>
    </div> -->
</div>
</template>

<script>
import THButton from "../../packages/Button/index";
// import THIcon from "../../packages/Icon/index";
// import THInput from "../../packages/Input/index";
// import THCard from "../../packages/Card/index";
// import THRadio from "../../packages/Radio/index";
// import THModal from "../../packages/Modal/index";
// import THAlert from "../../packages/Alert/index";
// import THCheckbox from "../../packages/Checkbox/index";
// import THCheckboxGroup from "../../packages/Checkbox/src/checkboxGroup.vue";
// // THMessage直接引用无效，必须在整个项目的main.js中引入并Vue.use
// // import THMessage from "../../packages/Message/index";
// import THBackTop from "../../packages/BackTop/src/index"
import THTooptip from "../../packages/Tooltip/src/index";

export default {
    name: "HelloWorld",
    components: {
        THButton,
        // THIcon,
        // THInput,
        // THCard,
        // THRadio,
        // THModal,
        // THAlert,
        // THCheckbox,
        // THCheckboxGroup,
        // // THMessage,
        // THBackTop,
        THTooptip,
    },
    data() {
        return {
            testModal: false,
            checkbox: [],
            checkbox1: "",
            testString: "aaa",
        };
    },
    props: {
        msg: String,
    },
    methods: {
        test() {
            console.log("test");
        },
        modalMethod() {
            this.testModal = true;
        },
        checkboxMethod() {
            console.log(this.checkbox);
        },
        testMsg() {
            this.$message.message("test");
        },
        testWarn() {
            this.$message.warn("test");
        },
        testError() {
            this.$message.error("test");
        },
        testSuccess() {
            this.$message.success("testndsoandsakddsnajdnajk");
        },
    },
};
</script>

<style scoped lang="scss"></style>
