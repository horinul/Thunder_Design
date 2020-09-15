import THButton from "./Button";
import THIcon from "./Icon";
import THInput from "./Input";
import THCard from "./Card";
import THRadio from "./Radio";
import THModal from "./Modal";
import THCheckbox from "./Checkbox";
import THCheckboxGroup from './Checkbox'
import THMessage from './Message'
export default {
  install(Vue) {
    Vue.use(THButton);
    Vue.use(THIcon);
    Vue.use(THInput);
    Vue.use(THCard);
    Vue.use(THRadio);
    Vue.use(THModal);
    Vue.use(THCheckbox);
    Vue.use(THCheckboxGroup);
    Vue.use(THMessage);
  },
};