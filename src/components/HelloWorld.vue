<template>
  <div>
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
      <THInput type="text" icon="icon10" size="increase"></THInput>
    </div>
  </div>
</template>

<script>
import THButton from "../../packages/Button/index";
import THIcon from "../../packages/Icon/index";
import THInput from "../../packages/Input/index";
export default {
  name: "HelloWorld",
  components: {
    THButton,
    THIcon,
    THInput,
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
