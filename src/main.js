import { createApp } from "vue"
import App from "./App.vue"
import "./assets/main.css"

const app = createApp(App)

app.directive("click-outside", {
    mounted(el, binding, vnode) {
        const vm = vnode.context
        const callback = binding.value
        el.clickOutsideEvent = function(event) {
            if (!(el === event.target || el.contains(event.target))) {
                return callback.call(vm, event)
            }
        }
        document.body.addEventListener("click", el.clickOutsideEvent)
    },
    unmounted(el) {
        document.body.removeEventListener("click", el.clickOutsideEvent)
    },
})

app.mount("#app")
