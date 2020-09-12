import THButton from './Button'
import THIcon from './Icon'
import THInput from './Input'
export default {
    install(Vue) {
        Vue.use(THButton);
        Vue.use(THIcon)
        Vue.use(THInput)
    },
}