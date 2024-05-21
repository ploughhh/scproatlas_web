import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/index.scss'
import * as echarts from 'echarts'
import * as echartsGL from 'echarts-gl'

const app = createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
app.echarts = echarts
app.echartsGL = echartsGL
