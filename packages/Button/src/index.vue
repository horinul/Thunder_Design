<template>
  <div :class="buttonStyle" @click="buttonClick">
    <THIcon v-if="icon" :size="size" :icon="icon" class="buttonIcon"></THIcon>
    <span :class="textStyle"><slot></slot></span>
  </div>
</template>
<script>
import { oneOf } from "../../../src/utils/index";
import THIcon from "../../Icon";
export default {
  name: "THButton",
  components: {
    THIcon,
  },
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
      // default: "icon1",
    },
  },
  data() {
    return {
      // imgSrc: require("../static/" + this.icon + ".png"),
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
.buttonIcon {
  position: absolute;
  top: 0;
  left: 0;
}
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
