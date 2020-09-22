<template>
  <div
    class="component"
    :style="{ bottom: bottom + 'px', right: right + 'px' }"
    @click="handleClick"
    v-show="showBackTop"
  >
    <div :class="iconStyle">
      <div class="arrowTop"></div>
      <THIcon :icon="icon" size="little"></THIcon>
    </div>
  </div>
</template>
<script>
import THIcon from "../../Icon/index";
export default {
  name: "THBackTop",
  components: {
    THIcon,
  },
  data() {
    return {
      showBackTop: false,
    };
  },
  props: {
    bottom: {
      type: Number,
      default: 20,
    },
    right: {
      type: Number,
      default: 20,
    },
    icon: {
      type: String,
    },
    height: {
      type: Number,
      default: 100,
    }
  },
  computed: {
    iconStyle() {
      return ["iconDefault", "icon-shape-" + this.shape];
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      scrollTop > this.height
        ? (this.showBackTop = true)
        : (this.showBackTop = false);
    },
    handleClick() {
      // 每30ms调用一次直到回到顶部了
      let timer = setInterval(function() {
        // 获取滚动条到顶部的位置
        let toTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let speed = Math.floor(-toTop / 5);
        // 判断到顶部的等式：滚动条到顶部的位置 + 当前窗口内容可视区 == 滚动条的总高度
        document.documentElement.scrollTop = document.body.scrollTop =
          toTop + speed;
        if (toTop === 0) {
          clearInterval(timer);
        }
      }, 30);
    },
  },
};
</script>
<style lang="less" scoped>
.component {
  position: fixed;
  background-color: rgba(62, 190, 211, 0.4);
  width: 30px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
}
.iconDefault {
  margin-top: 3px;
}
.arrowTop {
  background-image: url("https://pic.downk.cc/item/5f69e5eb160a154a674d1b7d.png");
  background-size: cover;
  display: inline-block;
  width: 30px;
  height: 20px;
  position: absolute;
  top: -25px;
}
</style>
