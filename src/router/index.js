import Vue from 'vue'
import Router from 'vue-router'
import OrganismList from '@/components/OrganismList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OrganismList',
      component: OrganismList
    }
  ]
})
