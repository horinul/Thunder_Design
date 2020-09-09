<template>
  <div>
    <THButton icon="icon1" disabled="true" @click="test">dhakj</THButton>
    <THButton size="little" icon="icon1" @click="test">dhakj</THButton>
    <THButton size="large" icon="icon1">dajkdlslakdkas</THButton>
  </div>
</template>

<script>
import THButton from "../../packages/Button/index";
export default {
  name: "HelloWorld",
  components: {
    THButton,
  },
  props: {
    msg: String,
  },
  methods:{
    test(){
      console.log('test')
    }
  }
};
</script>

<style scoped lang="scss"></style>
