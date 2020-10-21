<template>
  <div class="component">
    <div class="item">
      <input
        type="text"
        :placeholder="placeholder"
        v-model="identifyInput"
        :class="inputStyle"
      />
      <input
        type="button"
        @click="createCode()"
        v-model="checkCode"
        :class="identifyShowStyle"
      />
      <button :class="identifyClickStyle" @click="clickToIdentify">确定</button>
    </div>
  </div>
</template>

<script>
import { oneOf } from "../../../src/utils/index";
export default {
  name:'THIdentify',
  data() {
    return {
      code: "",
      checkCode: "",
      identifyInput: "",
    };
  },
  created() {
    this.createCode();
  },
  props: {
    color: {
      validator: (value) => {
        return oneOf(value, ["blue", "green"]);
      },
      type: String,
      default: "blue",
    },
    size: {
      validator: (value) => {
        return oneOf(value, ["default", "large", "little"]);
      },
      type: String,
      default: "default",
    },
    placeholder: {
      type: String,
      default: "验证码",
    },
    clickButton: {
      // 传入的是ref的值
      type: String,
      default: "确定",
    },
  },
  computed: {
    inputStyle() {
      return ["defaultInput", this.size + "-input", this.color + "-input"];
    },
    identifyShowStyle() {
      return [
        "defaultIdentifyShow",
        this.size + "-identifyShow",
        this.color + "-identifyShow",
      ];
    },
    identifyClickStyle() {
      return [
        "defaultClickButton",
        this.size + "-clickButton",
        this.color + "-clickButton",
      ];
    },
  },
  methods: {
    clickToIdentify() {
      if (this.identifyInput === this.checkCode) {
        this.$emit("success");
      } else {
        this.$emit("error");
        this.createCode();
      }
    },
    // 图片验证码
    createCode() {
      //先清空验证码的输入
      this.code = "";
      this.checkCode = "";
      this.picLyanzhengma = "";
      //验证码的长度
      var codeLength = 4;
      //随机数
      var random = new Array(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      );
      for (var i = 0; i < codeLength; i++) {
        //取得随机数的索引（0~35）
        var index = Math.floor(Math.random() * 36);
        //根据索引取得随机数加到code上
        this.code += random[index];
      }
      //把code值赋给验证码
      this.checkCode = this.code;
    },
  },
};
</script>

<style lang="less" scoped>
.component {
  margin: 10px;
}
.defaultInput {
  outline: 0;
  font-weight: 600;
  text-align: center;
}
.default-input {
  height: 30px;
  width: 60px;
  border-radius: 4px 0 0 4px;
}
.little-input {
  height: 20px;
  width: 40px;
  border-radius: 3px 0 0 3px;
}
.large-input {
  height: 40px;
  width: 80px;
  border-radius: 5px 0 0 5px;
  font-size: 16px;
}
.blue-input {
  border: 1.5px solid #8ccef7;
  color: #8ccef7;
}
.blue-input::-webkit-input-placeholder {
  color: #8ccef7;
}
.green-input {
  border: 1.5px solid rgba(49, 194, 184, 0.4);
  color: rgba(20, 145, 136, 0.4);
}
.green-input::-webkit-input-placeholder {
  color: rgba(21, 146, 138, 0.4);
}
.defaultIdentifyShow {
  cursor: pointer;
  outline: 0;
}
.default-identifyShow {
  height: 35px;
  width: 67px;
  font-size: 13.5px;
  font-weight: 600;
  border-radius: 0 4px 4px 0;
}
.little-identifyShow {
  height: 25px;
  width: 67px;
  font-size: 13px;
  padding-top: 1.5px;
  font-weight: 600;
  border-radius: 0 4px 4px 0;
}
.large-identifyShow {
  height: 45px;
  width: 87px;
  border-radius: 0 5px 5px 0;
  font-size: 16px;
  font-weight: 600;
}
.blue-identifyShow {
  border: none;
  background-color: #8ccef7;
}
.green-identifyShow {
  border: none;
  background-color: rgba(21, 146, 138, 0.4);
}
.defaultClickButton {
  min-width: 40px;
  min-height: 20px;
  border-radius: 4px;
  color: aliceblue;
  margin: 10px;
  border: none;
  cursor: pointer;
  outline: 0;
}
.blue-clickButton {
  background-color: #406eeb;
}
.green-clickButton {
  background-color: #40afa6;
}
.little-clickButton {
  font-size: 12px;
}
.default-clickButton {
  font-size: 14px;
  min-width: 60px;
  min-height: 30px;
  border-radius: 5px;
}
.large-clickButton {
  min-height: 40px;
  min-width: 80px;
  font-size: 18px;
  border-radius: 6px;
}
</style>
