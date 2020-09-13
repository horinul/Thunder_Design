<template>
  <div class="component">
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
      <THInput type="text" icon="icon8" size="little"></THInput>
      <THInput type="text" icon="icon9" size="increase"></THInput>
    </div>
    <div>
      <THCard>
        <div slot="title">9.13</div>
        <div slot="body">今天天气不错
        </div>
      </THCard>
      <THCard type="blue" @click="test">
        <div slot="body">今天天气不错
        </div>
      </THCard>
    </div>
  </div>
</template>

<script>
import THButton from "../../packages/Button/index";
import THIcon from "../../packages/Icon/index";
import THInput from "../../packages/Input/index";
import THCard from "../../packages/Card/index";
export default {
  name: "HelloWorld",
  components: {
    THButton,
    THIcon,
    THInput,
    THCard,
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
