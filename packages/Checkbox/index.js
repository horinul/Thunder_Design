import THCheckbox from './src/index.vue'
import THCheckboxGroup from './src/checkboxGroup.vue'
THCheckbox.install = function (Vue) {
    Vue.component(THCheckbox.name, THCheckbox);
};
THCheckboxGroup.install = function (Vue) {
    Vue.component(THCheckboxGroup.name, THCheckboxGroup);
}
THCheckbox.Group=THCheckboxGroup
export default THCheckbox;
