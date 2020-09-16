<template>
  <popper
    :trigger="trigger"
    :options="{
      placement: placement,
      modifiers: { offset: { offset: offset } },
    }"
    content="bbb"
    :visible-arrow="visibleArrow"
    class="component"
  >
    <div class="popper">
      {{ popperText }}
    </div>
    <THButton slot="reference" class="reference" :icon="icon">
      <slot></slot>
    </THButton>
  </popper>
</template>
<script>
import Popper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";
import { oneOf } from "../../../src/utils/index";
import THButton from "../../Button";
export default {
  components: {
    popper: Popper,
    THButton,
  },
  props: {
    placement: {
      type: String,
      validator: (value) => {
        return oneOf(value, ["left", "right", "top", "bottom"]);
      },
      default: "left",
    },
    offset: {
      default: "0,0",
      type: String,
    },
    popperText: {
      //   default:'popperText',
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
    },
    trigger: {
      type: String,
      validator: (value) => {
        return oneOf(value, [
          "hover",
          "clickToOpen",
          "clickToToggle",
          "click",
          "focus",
        ]);
      },
    },
    visibleArrow: {
      type: Boolean,
      default: true,
    },
    icon: {
      type: String,
      default: "icon5",
    },
  },
};
</script>
<style lang="less" scoped>
.component {
    margin: 10px;
}
// 触发节点
.reference {
  // color: #20b2aa;
  display: inline-block;
  //   min-height: 30px;
  //   width: 60px;
  text-align: center;
  vertical-align: middle;
}
// 弹窗
.popper {
  color: #20b2aa;
  background-color: #fff;
  border: none;
  display: inline-block;
  min-height: 30px;
  min-width: 70px;
  font-size: 12px;
  vertical-align: middle;
  line-height: 30px;
  box-shadow: 0px 0px 10px rgba(26, 171, 182, 0.9);
  /*考虑浏览器兼容性*/
  -moz-box-shadow: 0px 0px 10px rgba(26, 171, 182, 0.9);
  -webkit-box-shadow: 0px 0px 10px rgba(26, 171, 182, 0.9);
  padding: 0 10px;
}
</style>
