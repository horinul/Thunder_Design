import THButton from "./Button";
import THIcon from "./Icon";
import THInput from "./Input";
import THCard from "./Card";
import THRadio from "./Radio";
import THModal from "./Modal";
import THCheckbox from "./Checkbox";
export default {
  install(Vue) {
    Vue.use(THButton);
    Vue.use(THIcon);
    Vue.use(THInput);
    Vue.use(THCard);
    Vue.use(THRadio);
    Vue.use(THModal);
    Vue.use(THCheckbox);
  },
};
