import THButton from './Button'
import THIcon from './Icon'
import THInput from './Input'
import THCard from './Card'
export default {
    install(Vue) {
        Vue.use(THButton)
        Vue.use(THIcon)
        Vue.use(THInput)
        Vue.use(THCard)
    },
}