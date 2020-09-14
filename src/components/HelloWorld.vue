<template>
  <div class="component">
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
      <THInput type="text" icon="icon8" size="little" :disabled="true"></THInput>
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
    </div>
  </div>
</template>

<script>
import THButton from "../../packages/Button/index";
import THIcon from "../../packages/Icon/index";
import THInput from "../../packages/Input/index";
import THCard from "../../packages/Card/index";
import THRadio from "../../packages/Radio/index";
export default {
  name: "HelloWorld",
  components: {
    THButton,
    THIcon,
    THInput,
    THCard,
    THRadio,
  },
  props: {
    msg: String,
  },
  methods: {
    test() {
      console.log("test");
    },
  },
};
</script>

<style scoped lang="scss"></style>
