<template>
  <div>
    <label :for="id">
      <input
        type="radio"
        :id="id"
        :name="name"
        :checked="checked"
        :disabled="disabled"
        @change="handleChange"
        @click="handleClick"
      />
      <i :class="spot"></i>
      <span :class="textStyle">
        <slot>
          <div></div>
        </slot>
      </span>
    </label>
  </div>
</template>
<script>
import { oneOf } from "../../../src/utils/index";
export default {
  props: {
    // id应是始终唯一的
    id: {
      type: [String, Number],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      validator(value) {
        return oneOf(value, ["blue", "green"]);
      },
      type: String,
      default: "green",
    },
    icon: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    textStyle() {
      return ["text-" + this.type, "radioText"];
    },
    iconStyle() {
      return ["addIcon"];
    },
    spot() {
      return ["spot-" + this.type];
    },
  },
  methods: {
    handleChange(event) {
      this.$emit("change", event.target.checked);
    },
    handleClick(event) {
      this.$emit("click", event);
    },
  },
};
</script>
<style lang="less" scoped>
@import url("../../../src/css/index.css");
label {
  display: inline-block;
  padding: 5px;
  line-height: 0.8rem;
  text-align: left;
  position: relative;
}
label input {
  opacity: 0;
}
.spot-blue,
.spot-green {
  display: inline-block;
  width: 30px;
  height: 30px;
  background: url("../static/bac1.png") no-repeat; /*默认的样式图片*/
  background-size: 30px;
  position: absolute;
  top: 0.2rem;
  left: 0;
  border-radius: 50%;
  z-index: 5;
  opacity: 0.8;
}
input:checked + .spot-green {
  /*选中后的样式*/
  background: url("../static/bac1.png") no-repeat;
  background-size: 30px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(62, 190, 211, 0.4); /*考虑浏览器兼容性*/
  -moz-box-shadow: 0px 0px 10px rgba(62, 190, 211, 0.4);
  -webkit-box-shadow: 0px 0px 10px rgba(26, 171, 182, 0.9);
}
input:checked + .spot-blue {
  background: url("../static/bac1.png") no-repeat;
  background-size: 30px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(57, 197, 187, 0.4); /*考虑浏览器兼容性*/
  -moz-box-shadow: 0px 0px 10px rgba(57, 197, 187, 0.4);
  -webkit-box-shadow: 0px 0px 10px rgba(19, 133, 179, 0.9);
}
.radioText {
  margin-left: 8px;
  height: 30px;
  line-height: 30px;
}
</style>
