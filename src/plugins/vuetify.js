import '@mdi/font/css/materialdesignicons.css' 
import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
    //   натсройка тем https://vuetifyjs.com/en/features/theme/#light-and-dark
  theme: {
    themes: {
      light: {
        primary: '#9652ff',
        secondary: '#b0bec5',
        info: '#ffaa2c',
        error: '#f83e70',
        success: '#3cd1c2'
      },
    },
  },
})