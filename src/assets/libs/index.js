import JBox from './Jaunt-Box.vue'
import JButton from './Jaunt-Button.vue'
import JIcon from './Jaunt-Icon.vue'
import JSearch from './Jaunt-Search.vue'
const components = [
    JBox,
    JButton,
    JIcon,
    JSearch,
]
export default {
    install: function (Vue) {
        components.forEach(com => Vue.component(com.name, com))
    }
}