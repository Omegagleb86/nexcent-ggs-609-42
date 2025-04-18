import '@/assets/style/style.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

// Открытие \ закрытие навигации
const buttonMenu = document.querySelector('.mobile-navigation__header-button');
const mobileNavigation = document.querySelector('.mobile-navigation');

buttonMenu.addEventListener('click', buttonMenuClicked)

function buttonMenuClicked(){
    console.log('Кнопка нажата')
    mobileNavigation.classList.toggle('opened')
    document.querySelector('html').classList.toggle('hidden')
}
