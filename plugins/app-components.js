import Vue from 'vue'

// ТУТ МОЖНО ПОДКЛЮЧАТЬ ВСЕ ГЛОБАЛЬНО КОМПОНЕНТЫ И ДРУГИЕ ПЛАГИНЫ



// UI
import Message from '@/components/UI/Message.vue'
import Intro from '@/components/UI/Intro.vue'
import PostsList from '@/components/blog/PostsList.vue'


// CONTROLS
import AppButton from '@/components/UI/controls/Button.vue'
import AppInput from '@/components/UI/controls/Input.vue'
import AppTextArea from '@/components/UI/controls/TextArea.vue'



// надо бы писать первый параметр с большой буквы Message пример
// UI
Vue.component('AppButton', AppButton)
Vue.component('Intro', Intro)
Vue.component('PostsList', PostsList)




// CONTROLS
Vue.component('AppInput', AppInput)
Vue.component('AppTextArea', AppTextArea)
Vue.component('Message', Message)