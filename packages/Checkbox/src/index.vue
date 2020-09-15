<template>
  <div class="component">
    <input type="checkbox" @click="handleClick" :checked="currentValue" />
    <span class="textStyle">
      <slot>
        <div></div>
      </slot>
    </span>
    <div>{{ currentValue }}</div>
  </div>
</template>

<script>
// import {
//     oneOf
// } from "../../../src/utils/index";
export default {
  name: "THCheckbox",
  model: {
    props: "checked",
    event: "changeCheck",
  },
  data() {
    return {
      checkboxData: "",
      currentValue: this.value,
    };
  },
  props: {
    checked: {
      type: [Boolean, String],
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [Boolean, Array, String, Number],
    },
  },
  //   watch: {
  //     checked: () => {
  //       this.$emit("onchange");
  //     },
  //   },
  watch: {
    value() {
      //   if (val === this.trueValue || val === this.falseValue) {
      this.updateModel();
      //   } else {
      // throw "Value should be trueValue or falseValue.";
      //   }
    },
  },
  methods: {
    handleClick(event) {
      this.$emit("click", event);
      this.$emit("changeCheck", !this.checked);
      this.$emit("toggleCheck");
    },
    change(event) {
      if (this.disabled) {
        return false;
      }

      const checked = event.target.checked;
    //   this.currentValue = checked;

    //   const value = checked 
      this.$emit("input", checked);
      this.$emit("change", checked);
    },
    updateModel() {
      this.currentValue = this.value 
    },
    // toggleCheck() {
    //   this.$emit("changeCheck", !this.checked);
    //   this.$emit("toggleCheck");
    // },
  },
};
</script>

<style lang="less" scoped>
.component {
  margin: 5px;
}
input[type="checkbox"] {
  width: 20px;
  height: 20px;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  line-height: 20px;
  margin-right: 5px;
  position: relative;
  vertical-align: middle;
  margin-top: 0;
}

input[type="checkbox"]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background: url("../static/bac1.png");
  background-size: cover;
  width: 100%;
  height: 100%;
  //   border: 1px solid #fff;
  border-radius: 4px;
}

input[type="checkbox"]:checked::before {
  background: url("../static/bac1.png");
  background-size: cover;
  box-shadow: 0px 0px 10px rgba(62, 190, 211, 0.4);
  /*考虑浏览器兼容性*/
  -moz-box-shadow: 0px 0px 10px rgba(62, 190, 211, 0.4);
  -webkit-box-shadow: 0px 0px 10px rgba(26, 171, 182, 0.9);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: #7d7d7d;
  font-size: 20px;
  font-weight: bold;
}
.textStyle {
  color: #20b2aa;
  font-size: 14px;
}
</style>
