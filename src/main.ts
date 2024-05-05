import { createApp } from "vue"
import "@/style.css"
import App from "./App.vue"
import VueScrollTo from "vue-scrollto"

const app = createApp(App)
app.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
})
app.mount("#app")
