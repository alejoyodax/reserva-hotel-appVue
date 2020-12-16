import vueRouter from 'vue-router'
import Home from './components/Home'
import Panel_cliente_inicio from './components/Panel_cliente_inicio'


const router = new vueRouter({
    mode: 'history',
    routes: [{
            path: '/sss',
            name: "login",
            component: Home
        },
        {
            path: '/user/home',
            name: "dashboard",
            component: Panel_cliente_inicio
        },
    ]
})

export default router