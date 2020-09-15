<template>
  <div
    :class="componentStyle"
    v-if="showMessage"
    :style="{ top: distanceFromTop + 'px' }"
  >
    <span :class="iconStyle"></span>
    <span :class="textStyle">
      <slot>
        <div></div>
      </slot>
    </span>
  </div>
</template>
<script>
// 两个阶段，iview中也只实现了单个显示，再来一个则覆盖。
// element实现了再来一个就往下推，用的计算上一个显示的消息的距离顶部的距离
import { oneOf } from "../../../src/utils/index";
export default {
  name: "THMessage",
  data() {
    return {
      showMessage: true,
    };
  },
  props: {
    type: {
      type: String,
      validator: (value) => {
        return oneOf(value, ["success", "warn", "message", "error"]);
      },
      default: "message",
    },
    duration: {
      type: Number,
      default: 2,
    },
    distanceFromTop: {
      type: Number,
      default: 30,
    },
  },
  computed: {
    componentStyle() {
      return ["component", "component-type-" + this.type];
    },
    iconStyle() {
      return ["defaultIcon", "icon-type-" + this.type];
    },
    textStyle() {
      return [];
    },
  },
};
</script>
<style lang="less" scoped>
.component {
  min-width: 300px;
  min-height: 40px;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1100;
  border-radius: 8px;
}
.component-type-success {
  background-color: rgb(159, 250, 238);
}
.component-type-error {
  background-color: rgb(250, 162, 162);
}
.component-type-warn {
  background-color: rgb(244, 250, 164);
}
.component-type-message {
  background-color: rgba(153, 227, 238);
}
.defaultIcon {
  height: 40px;
  width: 30px;
  background-size: cover;
  display: inline-block;
  margin-left: 8px;
}
.icon-type-success {
  background-image: url("../static/success.png");
}
.icon-type-error {
  background-image: url("../static/error.png");
}
.icon-type-warn {
  background-image: url("../static/warn.png");
}
.icon-type-message {
  background-image: url("../static/message.png");
}
</style>
