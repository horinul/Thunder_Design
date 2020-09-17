<template>
  <div class="myswipper">
    <div class="switch-text" v-if="options">
      <span v-if="showstatus">{{options.show}}</span>
      <span v-else>{{options.hide}}</span>
    </div>
    <input type="checkbox" 
      :checked="checked"
      :disabled="disabled"
      @change="changeSwitch" />
  </div>
</template>
<script>
export default {
  components: {
  },
  computed: {
  },
  model:{
    prop: 'checked',
    event: 'change'
  },
  data() {
    return{
      
    }
  },
  watch: {
  },
  methods: {
    changeSwitch(e){
      console.log(e)
      this.$emit('change',e.target.checked)
    }
  },
  props: {
    checked:{
      type:Boolean,
      default:false
    },
    disabled:{
      type:Boolean,
      default:false
    },
    options:{
      type:Object
    }
  },
  destroyed() {
  },
}
</script>
<style lang='less' scoped>
.myswipper{
  display: flex;
  align-items: center;
  input[type=checkbox] {
    width: 1.04rem;
    height: .64rem;
    -webkit-appearance: none;
    background-color: transparent;
    border: 0;
    outline: 0 !important;
    color: #d8d8d8;
    position: relative;
    transition: all .3s ease;
  } 
  input[type=checkbox]:before{
    content: "";
    display:block;
    width: 1.04rem;
    height: .64rem;
    border: 1px solid #ddd;
    background-color: #fff;
    box-sizing:border-box;  
    border-radius: .64rem;
    position: absolute;
  }
  input[type=checkbox]:after{
    content: "";
    display:block;
    width: .6rem;
    height: .6rem;
    left:1px;
    top:1px;
    border: 1px solid #fff;
    background-color: #fff;
    box-sizing:border-box;  
    box-shadow: 0 1px 3px rgba(0,0,0,.4);
    border-radius: 50%;
    position: absolute;
    transition: all .3s ease;
  }
  input[type=checkbox]:disabled:before{
    content: "";
    display:block;
    width: 1.04rem;
    height: .64rem;
    border: 1px solid #999;
    background-color: #999;
    box-sizing:border-box;  
    border-radius: .64rem;
    position: absolute;
  }
  input[type=checkbox]:disabled:after{
    content: "";
    display:block;
    width: .6rem;
    height: .6rem;
    left:1px;
    top:1px;
    border: 1px solid #fff;
    background-color: #fff;
    box-sizing:border-box;  
    box-shadow: 0 1px 3px rgba(0,0,0,.4);
    border-radius: 50%;
    position: absolute;
  }
  input[type=checkbox]:checked:before{
    content: "";
    display:block;
    width: 1.04rem;
    height: .64rem;
    border: 1px solid #ddd;
    background-color: #D2A47E;
    box-sizing:border-box;  
    border-radius: .64rem;
    position: absolute;
  }
  input[type=checkbox]:checked:after{
    content: "";
    display:block;
    width: .6rem;
    height: .6rem;
    left:100%;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    border: 1px solid #fff;
    background-color: #fff;
    box-sizing:border-box;  
    box-shadow: 0 1px 3px rgba(0,0,0,.4);
    border-radius: 50%;
    position: absolute;
  }
  .switch-text{
    margin-right: 5px;
  }
}
</style>
