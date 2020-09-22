<template>
  <div :class="componentStyle" v-if="isActive">
    <span :class="textStyle">
      <slot></slot>
    </span>
    <span v-if="showClose">
      <span :class="lineStyle"></span>
      <span :class="closeStyle" @click="closeTag"></span>
    </span>
  </div>
</template>

<script>
import { oneOf } from "../../../src/utils/index";
export default {
  name: "THTag",
  data() {
    return {
      isActive: true,
    };
  },
  props: {
    showClose: {
      default: true,
      type: Boolean,
    },
    color: {
      default: "green",
      validator: (value) => {
        return oneOf(value, ["red", "yellow", "green", "blue"]);
      },
      type: String,
    },
    borderShow: {
      default: false,
      type: Boolean,
    },
  },
  methods: {
    closeTag() {
      this.isActive = false;
    },
  },
  computed: {
    componentStyle() {
      return [
        "defaultComponent",
        this.borderShow
          ? this.color === "green"
            ? "component-borderShow"
            : "component-borderShow-" + this.color
          : null,
        "component-" + this.color,
      ];
    },
    textStyle() {
      return ["defaultText"];
    },
    lineStyle() {
      return [
        "lineDefault",
        this.borderShow
          ? this.color === "green"
            ? "line-borderShow"
            : "line-borderShow-" + this.color
          : null,
      ];
    },
    closeStyle() {
      return [
        "closeDefault",
        this.borderShow
          ? this.color === "green"
            ? "close-borderShow"
            : "close-borderShow-" + this.color
          : null,
      ];
    },
  },
};
</script>

<style lang="less" scoped>
.defaultComponent {
  min-width: 30px;
  height: 12px;
  font-size: 10px;
  display: inline-block;
  background-color: #20b2aa;
  line-height: 12px;
  padding: 2px 3px;
  color: #fff;
  border-radius: 5px;
  margin: 5px;
  position: relative;
  border: 1px solid #20b2aa;
}

.component-borderShow {
  background-color: #fff !important;
  border: 1px solid #20b2aa;
  color: #20b2aa;
}

.component-borderShow-yellow {
  background-color: #fff !important;
  border: 1px solid #f90;
  color: #f90;
}

.component-borderShow-blue {
  background-color: #fff !important;
  border: 1px solid #66ccff;
  color: #66ccff;
}

.component-borderShow-red {
  background-color: #fff !important;
  border: 1px solid #faa2a2;
  color: #faa2a2;
}

.component-yellow {
  background-color: #f90;
  border: 1px solid #f90;
}

.component-blue {
  background-color: #66ccff;
  border: 1px solid #66ccff;
}

.component-red {
  background-color: #faa2a2;
  border: 1px solid #faa2a2;
}

.lineDefault {
  width: 1px;
  height: 16px;
  background-color: #fff;
  display: inline-block;
  margin-left: 3px;
  position: absolute;
  top: 0;
}

.line-borderShow {
  background-color: #20b2aa;
}

.line-borderShow-yellow {
  background-color: #f90;
}

.line-borderShow-blue {
  background-color: #66ccff;
}

.line-borderShow-red {
  background-color: #faa2a2;
}

.closeDefault {
  background-image: url("https://pic.downk.cc/item/5f69e692160a154a674d7876.png");
  background-size: cover;
  display: inline-block;
  height: 10px;
  width: 10px;
  margin-left: 6px;
  vertical-align: middle;
  cursor: pointer;
}

.close-borderShow {
  background-image: url("https://pic.downk.cc/item/5f69e692160a154a674d787e.png");
}

.close-borderShow-blue {
  background-image: url("https://pic.downk.cc/item/5f69e692160a154a674d7878.png");
}

.close-borderShow-yellow {
  background-image: url("https://pic.downk.cc/item/5f69e692160a154a674d7883.png");
}

.close-borderShow-red {
  background-image: url("https://pic.downk.cc/item/5f69e692160a154a674d7880.png");
}
</style>
