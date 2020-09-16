<template>
  <transition
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutUp"
  >
    <div
      class="component"
      v-if="showMessage"
      :style="{ top: distanceFromTop + 'px' }"
    >
      <div :class="componentStyle">
        <span :class="iconStyle"></span>
        <span :class="textStyle">
          <span>{{ message }}</span>
        </span>
        <span :class="fontStyle"></span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "messages",
  data() {
    return {
      showMessage: false,
      message: "",
      type: "message",
      //   基础设置第一个弹窗距离顶部的距离
      distanceFromTop: 30,
    };
  },
  computed: {
    componentStyle() {
      console.log(this.type);
      return ["componentDefault", "component-type-" + this.type];
    },
    iconStyle() {
      return ["defaultIcon", "icon-type-" + this.type];
    },
    textStyle() {
      return ["defaultText"];
    },
    fontStyle() {
      return ["defaultFont", "font-type-" + this.type];
    },
  },
};
</script>

<style lang="less" scoped>
.component {
  width: 100%;
  min-height: 40px;
  position: fixed;
  left: 50%;
  margin-left: -50%;
  z-index: 1100;
  font-size: 14px;
  text-align: center;
}
.componentDefault {
  display: inline-block;
  position: relative;
  min-width: 200px;
  text-align: left;
  border-radius: 8px;
}
.component-type-success {
  background-color: rgb(217, 250, 246);
  color: #20b2aa;
}
.component-type-error {
  background-color: rgb(250, 162, 162);
  color: #ff6347;
}

.component-type-warn {
  background-color: #fffacd;
  color: #ffd700;
}

.component-type-message {
  background-color: rgb(203, 238, 243);
  color: #20b2aa;
}

.defaultIcon {
  height: 40px;
  width: 35px;
  background-size: cover;
  display: inline-block;
  margin-left: 8px;
  vertical-align: middle;
}

.icon-type-success {
  background-image: url("../static/success.png");
}

.icon-type-error {
  background-image: url("../static/error.png");
}

.icon-type-warn {
  background-image: url("../static/warn.png");
}

.icon-type-message {
  background-image: url("../static/message.png");
}

.defaultText {
  line-height: 40px;
  vertical-align: middle;
  margin-left: 10px;
  padding-right: 30px;
}
.defaultFont {
  height: 20px;
  width: 20px;
  display: inline-block;
  background-size: cover;
  display: inline-block;
  vertical-align: middle;
  position: absolute;
  top: 10px;
  right: 10px;
}
.font-type-message {
  background-image: url("../static/messageIcon.png");
}
.font-type-success {
  background-image: url("../static/successIcon.png");
}
.font-type-error {
  background-image: url("../static/errorIcon.png");
}
.font-type-warn {
  background-image: url("../static/warnIcon.png");
}
</style>
