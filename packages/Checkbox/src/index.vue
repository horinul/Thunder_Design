<template>
  <div class="component">
    <input type="checkbox" @click="handleClick" />
    <span class="textStyle">
      <slot>
        <div></div>
      </slot>
    </span>
  </div>
</template>

<script>
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
      isChecked: false,
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
      type: [Array, String],
    },
  },
  methods: {
    handleClick() {
      this.isChecked = !this.isChecked;
      if (this.isChecked) {
        this.$parent.$emit("pushItem", this.value);
      } else {
        this.$parent.$emit("removeItem", this.value);
      }
      this.$emit("input", this.isChecked);
    },
  },
};
</script>

<style lang="less" scoped>
.component {
  margin: 5px;
  min-width: 30px;
  display: inline-block;
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
  cursor: pointer;
}

input[type="checkbox"]::before {
  content: "";
  position: absolute;
  top: -1px;
  left: -1px;
  background: url("https://pic.downk.cc/item/5f69e574160a154a674cb71d.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1px solid #fff;
}

input[type="checkbox"]:checked::before {
  background: url("https://pic.downk.cc/item/5f69e574160a154a674cb71d.jpg");
  background-size: cover;
  box-shadow: 0px 0px 10px rgba(62, 190, 211, 0.4);
  /*考虑浏览器兼容性*/
  -moz-box-shadow: 0px 0px 10px rgba(62, 190, 211, 0.4);
  -webkit-box-shadow: 0px 0px 10px rgba(26, 171, 182, 0.9);
  position: absolute;
  top: -1px;
  left: -1px;
  border: 1px solid #fff;

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
