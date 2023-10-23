import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import HelloWorldVue from './components/HelloWorld.vue';
import MenuCompVue from './components/MenuComp.vue';
import UnwateredFlowersVue from './components/UnwateredFlowers.vue';
import FlowerDetailVue from './components/FlowerDetail.vue';
import NewFlowerVue from './components/NewFlower.vue';
import UpdateFlowerVue from './components/UpdateFlower.vue';


const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/unwatered', component: UnwateredFlowersVue},
        { path: '/home', component: HelloWorldVue},
        { path: '/detail', component: FlowerDetailVue},
        { path: '/new', component: NewFlowerVue},
        { path: '/update', component: UpdateFlowerVue},
        { path: '/m', component: MenuCompVue}
    ]
});

const app = createApp(App)

app.use(router)
app.mount('#app')
