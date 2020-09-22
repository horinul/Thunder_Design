<template>
  <div>
    <div :class="componentStyle">
      <vue-loading
        :class="loadingStyle"
        :type="type"
        color="#20b2aa"
        :size="{ width: '15px', height: '15px' }"
      ></vue-loading>
    </div>
  </div>
</template>
<script>
// thanks for https://github.com/jkchao/vue-loading
import { VueLoading } from "vue-loading-template";
import { oneOf } from "../../../src/utils/index";
export default {
  name: "THLoading",
  components: {
    VueLoading,
  },
  props: {
    type: {
      default: "spin",
      type: String,
      validator: (value) => {
        return oneOf(value, ["spin", "balls", "cylon"]);
      },
    },
  },
  computed: {
    componentStyle() {
      return ["defaultComponent", "component-" + this.type];
    },
    loadingStyle() {
      return ["defaultLoading", "loading-" + this.type];
    },
  },
};
</script>
<style lang="less" scoped>
.defaultComponent {
  display: inline-block;
  width: 70px;
  height: 70px;
  background-image: url("https://pic.downk.cc/item/5f69e52c160a154a674c956b.png");
  background-size: cover;
  position: relative;
}
.component-balls {
  display: inline-block;
  width: 80px;
  height: 60px;
  background-image: url("https://pic.downk.cc/item/5f69e52c160a154a674c9571.jpg");
  background-size: cover;
  position: relative;
  margin-top: 20px;
}
.component-cylon {
  display: inline-block;
  width: 70px;
  height: 70px;
  background-image: url("https://pic.downk.cc/item/5f69e52c160a154a674c9576.png");
  background-size: cover;
  position: relative;
  margin-top: 10px;
}
.defaultLoading {
  position: absolute;
  margin: 0;
  top: 6px;
  left: 9px;
}
.loading-balls {
  position: absolute;
  margin: 0;
  top: -15px;
  left: 25px;
}

.loading-cylon {
  position: absolute;
  margin: 0;
  top: -5px;
  left: 25px;
}
</style>
