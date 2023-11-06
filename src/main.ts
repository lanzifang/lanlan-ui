import "./lib/lanlan.scss"
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import 'github-markdown-css'
import Markdown from './components/Markdown.vue'

const app=createApp(App)
app.use(router)
app.mount('#app')
app.component("Markdown",Markdown)

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
  }) //跳转回首页时，回到页面顶部
