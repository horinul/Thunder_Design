<template>
  <div id="app">
    <Test></Test>
  </div>
</template>

<script>
import Test from './components/HelloWorld.vue'
export default {
  name: "app",
  components: {
    Test
  },
};
</script>

<style>
body {
  margin: 0;
}
.left-5{
  margin-left: 5px;
}
.left-10{
  margin-left: 10px;
}
</style>
