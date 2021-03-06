import Vue from 'vue';
import Router from 'vue-router';
import home from './components/home'
import enlist from './components/enlist'
import roster from './components/roster'
import adminpanel from './components/adminpanel'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: "/", component: home },
      { path: "/enlist", component: enlist },
      { path: "/roster", component: roster },
      { path: "/admin", component: adminpanel,
        children: [

        ]
      }
    ]
  })
}
