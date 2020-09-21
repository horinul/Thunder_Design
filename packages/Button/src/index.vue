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
        return oneOf(value, ["default", "little", "large", "increase"]);
      },
      type: String,
      default: "default",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
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
        this.disabled ? "buttonDisabled" : null,
      ];
    },
    textStyle() {
      return [
        this.icon
          ? this.size === "little"
            ? "thunder-ml-6n"
            : this.size === "default"
            ? "thunder-ml-8n"
            : this.size === "large"
            ? "thunder-ml-10n"
            : this.size === "increase"
            ? "thunder-ml-12n"
            : null
          : null,
      ];
    },
  },
  methods: {
    buttonClick(event) {
      this.disabled ? null : this.$emit("click", event);
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
  background-color: #778899	;
  cursor: not-allowed;
}
.size-default {
  font-size: 13px;
  padding: 8px 12px;
}
.size-large {
  font-size: 15px;
  padding: 10px 12px;
}
.size-little {
  font-size: 12px;
  padding: 5px 8px;
}
.size-increase {
  font-size: 18px;
  padding: 14px 18px;
}
</style>
