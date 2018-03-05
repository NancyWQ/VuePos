import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import posComponent from '@/components/page/pos'
import leftNavComponent from'@/components/page/common/leftNav'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'posComponent',
      component: posComponent
    },
    {
      path:"/left",
      name:"leftNavComponent",
      component:leftNavComponent
    }
  ]
})
