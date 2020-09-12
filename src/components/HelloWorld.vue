<template>
  <div>
    <div>
      <THButton icon="icon1" disabled="true" @click="test">dhakj</THButton>
      <THButton size="little" icon="icon1" @click="test">dhakj</THButton>
      <THButton size="large">dajkdlslakdkas</THButton>
    </div>
    <div>
      <THIcon icon="icon8" size="increasse"></THIcon>
    </div>
    <div>
      <THInput maxlength="10" type="textarea"></THInput>
      <THInput  type="text" icon="icon1"></THInput>
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
