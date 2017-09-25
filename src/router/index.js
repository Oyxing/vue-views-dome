import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Grid from '@/components/Grid'
import Layout from '@/components/Layout'
import Button from '@/components/Button'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/grid',
      component: Grid
    },
    {
      path: '/layout',
      component: Layout
    },
    {
      path: '/button',
      component: Button
    }
  ]
})
