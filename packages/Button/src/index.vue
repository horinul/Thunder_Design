<template>
  <div :class="buttonStyle" @click="buttonClick">
    <img :class="iconStyle" v-if="this.icon" :src="imgSrc" />
    <span :class="textStyle"><slot></slot></span>
  </div>
</template>
<script>
import {oneOf} from '../../../src/utils/index'
export default {
  name: "THButton",
  props: {
    type: {
      validator: (value) => {
        return oneOf(value, ["blue", "green"]);
      },
      type: String,
      default: "blue",
    },
    size: {
      validator: (value) => {
        return oneOf(value, ["default", "little", "large"]);
      },
      type: String,
      default: "default",
    },
    disabled: {
      validator: (value) => {
        return oneOf(value, ["false", "true"]);
      },
      type: String,
      default: "false",
    },
    icon: {
      validator: (value) => {
        return oneOf(value, ["icon1", "icon2"]);
      },
      type: String,
      default: "icon1",
    },
  },
  data() {
    return {
      imgSrc: require("../static/" + this.icon + ".png"),
    };
  },
  computed: {
    buttonStyle() {
      return [
        "buttonBase",
        "type-" + this.type,
        "size-" + this.size,
        this.disabled === "true" ? "buttonDisabled" : null,
      ];
    },
    iconStyle() {
      return [
        "icon-" + this.icon,
        this.size === "large"
          ? "icon-base-large"
          : this.size === "little"
          ? "icon-base-little"
          : null,
      ];
    },
    textStyle() {
      return [
        this.icon
          ? this.size === "large"
            ? "thunder-ml-8n"
            : "thunder-ml-6n"
          : null,
      ];
    },
  },
  methods: {
    buttonClick(event) {
      this.disabled === "true" ? null : this.$emit("click", event);
    },
  },
};
</script>
<style lang="less" scoped>
@import url("../../../src/css/index.css");
.buttonBase {
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  border: 1px solid transparent;
  color: #fff;
  margin: 5px;
  position: relative;
  border-radius: 4px;
}

.buttonText {
  margin-left: 30px;
}
.type-blue {
  background-color: #66ccff;
}
.type-green {
  background-color: #39c5bb;
}
.buttonDisabled {
  background-color: #4169e1;
  cursor: not-allowed;
}
.size-default {
  font-size: 13px;
  padding: 5px 10px;
}
.size-large {
  font-size: 15px;
  padding: 6px 12px;
}
.size-little {
  font-size: 12px;
  padding: 4px 8px;
}
.icon-icon1 {
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 26px;
  background-size: 32px 26px;
}
.icon-base-large {
  width: 40px;
  height: 32px;
  background-size: 40px 32px;
}
.icon-base-little {
  width: 30px;
  height: 24px;
  background-size: 30px 24px;
}
</style>
