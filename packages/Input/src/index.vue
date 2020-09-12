<template>
  <div class="component">
    <div v-if="!isTextarea">
      <THIcon
        v-if="isAddIcon"
        :icon="icon"
        class="inputIcon"
        size="large"
      ></THIcon>
      <input
        :type="type"
        :size="size"
        :value="value"
        :requi#483d8b="requried"
        :readonly="readonly"
        :placeholder="placeholder"
        :pattern="pattern"
        :name="name"
        :maxlength="maxlength"
        :disabled="disabled"
        :autofocus="autofocus"
        :class="textStyle"
      />
    </div>
    <div v-else>
      <textarea
        :name="name"
        :cols="cols"
        :rows="rows"
        :autofocus="autofocus"
        :disabled="disabled"
        :maxlength="maxlength"
        :placeholder="placeholder"
        :readonly="readonly"
        :requied="requried"
        :wrap="wrap"
      ></textarea>
      <span></span>
    </div>
  </div>
</template>
<script>
import { oneOf } from "../../../src/utils/index";
import THIcon from "../../Icon/index";
export default {
  name: "THInput",
  components: {
    THIcon,
  },
  props: {
    type: {
      validator: (value) => {
        return oneOf(value, [
          "text",
          "textarea",
          "tel",
          "password",
          "email",
          "number",
        ]);
      },
      type: String,
      default: "text",
      required: true,
    },
    icon: {
      type: String,
    },
    size: {
      validator: (value) => {
        return oneOf(value, ["default", "little", "large", "increase"]);
      },
      type: String,
      default: "default",
    },
    /**
     * 以下为原生属性
     */
    value: {
      type: [String, Number],
    },
    required: {
      type: Boolean,
    },
    readonly: {
      type: Boolean,
    },
    placeholder: {
      type: [String, Number],
      default: "请输入",
    },
    pattern: {
      type: String,
    },
    name: {
      type: String,
    },
    maxlength: {
      // 字符最大长度
      type: Number,
    },
    disabled: {
      type: Boolean,
    },
    autofocus: {
      type: String,
    },
    // textarea属性
    cols: {
      type: Number,
    },
    rows: {
      type: Number,
    },
    wrap: {
      validator: (value) => {
        return oneOf(value, ["hard", "soft"]);
      },
      type: String,
    },
  },
  data() {
    return {
      isTextarea: this.type === "textarea",
      isAddIcon: this.icon,
    };
  },
  computed: {
    textStyle() {
      return [this.icon ? "inputAddIcon" : null];
    },
  },
};
</script>
<style lang="less" scoped>
.component {
  padding: 5px;
}
input,
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  font-size: 0.9em;
  height: 2.6em;
  line-height: 2.6em;
  border-radius: 4px;
  border: 1px solid #87cefa;
  outline: 0;
  padding: 0 0.5em;
  color: #48d1cc;
  font-family: "微软雅黑";
}
textarea {
  padding: 0.5em;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #48d1cc;
}
:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #483d8b;
}
::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #483d8b;
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #483d8b;
}
input::-ms-input-placeholder,
textarea::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #483d8b;
}
.inputIcon {
  position: absolute;
  z-index: 500;
    margin-top: 2px;
    margin-left: 3px;
}
.inputAddIcon {
  position: relative;
  padding: 0 0.5em 0 46px;
}
</style>
