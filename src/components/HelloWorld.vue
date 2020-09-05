<template>
  <div>
    <Button icon="icon1" disabled="true" @click="test">dhakj</Button>
    <Button size="little" icon="icon1" @click="test">dhakj</Button>
    <Button size="large" icon="icon1">dajkdlslakdkas</Button>
  </div>
</template>

<script>
import Button from "../../packages/Button/index";
export default {
  name: "HelloWorld",
  components: {
    Button,
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
