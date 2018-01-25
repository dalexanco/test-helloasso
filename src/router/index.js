import Vue from 'vue'
import Router from 'vue-router'
import OrganismList from '@/components/OrganismList'
import OrganismDetail from '@/components/OrganismDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OrganismList',
      component: OrganismList
    },

    {
      path: '/',
      name: 'OrganismDetail',
      component: OrganismDetail
    }
  ]
})
