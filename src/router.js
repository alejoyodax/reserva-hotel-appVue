import vueRouter from 'vue-router'
import Home from './components/Home'
import Panel_cliente_inicio from './components/Panel_cliente_inicio'
import Registro from './components/Registro'
import App from './App'

const router = new vueRouter({
    mode: 'history',
    routes: [{
            path: '/',
            name: "home",
            component: Home
        },
        {
            path: '/user/home',
            name: "dashboard",
            component: Panel_cliente_inicio
        },
        {
            path: '/registro',
            name: "registro",
            component: Registro
        }
    ]
})

export default router