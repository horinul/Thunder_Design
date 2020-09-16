import THTooltip from './src/index.vue'
THTooltip.install = function(Vue) {
    Vue.component(THTooltip.name, THTooltip);
};
export default THTooltip;
