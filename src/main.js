import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
// 引入饿了么plus的css文件
import 'element-plus/dist/index.css';


const app = createApp(App);

// 引入的包都在这个下面
app.use(ElementPlus);


// 通过id挂载运行后的结果，这一行需要放在这个文件的最后
app.mount('#app')
