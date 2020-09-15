import THAlert from './src/index.vue'
THAlert.install = function(Vue) {
    Vue.component(THAlert.name, THAlert);
};
export default THAlert;
