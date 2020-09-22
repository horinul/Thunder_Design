<template>
  <div :class="componentStyle">
    <span v-if="checkedText">{{ checkedText }}</span>
    <input
      type="checkbox"
      @change="changeSwitch"
      :checked="checked"
      :disabled="disabled"
      :class="inputStyle"
    />
    <span v-if="disabledText">{{ disabledText }}</span>
  </div>
</template>

<script>
import { oneOf } from "../../../src/utils/index";
export default {
  name: "THSwitch",
  model: {
    prop: "checked",
    event: "change",
  },
  props: {
    checkedText: {
      type: String,
    },
    disabledText: {
      type: String,
    },
    checked: {
      default: false,
      type: Boolean,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    size: {
      default: "default",
      type: String,
      validator: (value) => {
        return oneOf(value, ["large", "default", "little", "increase"]);
      },
    },
  },
  methods: {
    changeSwitch(e) {
      this.$emit("change", e.target.checked);
    },
  },
  computed: {
    componentStyle() {
      return ["component", "switch-" + this.size];
    },
    inputStyle() {
      return ["input-" + this.size, this.disabled ? "input-disabled" : null];
    },
  },
};
</script>

<style lang="less" scoped>
.component {
  display: flex;
  align-items: center;
  font-size: 10px;
  input[type="checkbox"] {
    cursor: pointer;
    width: 26px;
    height: 14px;
    background-color: transparent;
    -webkit-appearance: none;
    border: 0;
    color: #000;
    outline: 0 !important;
    position: relative;
    transition: all 0.3s ease;
  }

  input[type="checkbox"]:before {
    content: "";
    display: block;
    width: 26px;
    height: 14px;
    background-color: #20b2aa;
    position: absolute;
    border-radius: 10px;
    position: absolute;
  }

  input[type="checkbox"]:after {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    background-color: #eee;
    border-radius: 50%;
    position: absolute;
    box-sizing: border-box;
    top: 1px;
    left: 1px;
    transition: all 0.3s ease;
  }

  input[type="checkbox"]:checked:before {
    display: block;
    width: 26px;
    height: 14px;
    border-radius: 10px;
    position: absolute;
    background-color: #66ccff;
    box-sizing: border-box;
  }

  input[type="checkbox"]:checked:after {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    position: absolute;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    left: 25px;
    background-color: #fff;
    box-sizing: border-box;
  }
}
.switch-large {
  font-size: 14px;
}
.switch-little {
  font-size: 8px;
}
.switch-increase {
  font-size: 16px;
}

.input-large,
.input-large:before,
.input-large:checked:before {
  width: 30px !important;
  height: 16px !important;
}
.input-large:after,
.input-large:checked:after {
  width: 14px !important;
  height: 14px !important;
}
.input-large:checked:after {
  left: 29px !important;
}

.input-little,
.input-little:before,
.input-little:checked:before {
  width: 18px !important;
  height: 10px !important;
}
.input-little:after,
.input-little:checked:after {
  width: 8px !important;
  height: 8px !important;
}
.input-little:checked:after {
  left: 17px !important;
}

.input-increase,
.input-increase:before,
.input-increase:checked:before {
  width: 32px !important;
  height: 16px !important;
}
.input-increase:after,
.input-increase:checked:after {
  width: 14px !important;
  height: 14px !important;
}
.input-increase:checked:after {
  left: 31px !important;
}
.input-disabled,
.input-disabled:before,
.input-disabled:checked:before {
  background-color: gray !important;
  border-radius: 10px;
}
</style>
