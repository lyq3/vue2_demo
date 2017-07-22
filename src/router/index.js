import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Two from '@/components/secondcomponent'
import One from '@/components/firstcomponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Hello
    },
    {
      path: '/2',
      name: '第二个页面',
      component: Two
    },
    {
      path: '/1',
      name: '第一个页面',
      component: One
    }
  ],
  mode: 'history'
})
