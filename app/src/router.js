import Vue from "vue"
import Router from "vue-router"
import home from "./page/home.vue"

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            component: home,
            name: 'home'
        }
    ]
})

export default router
