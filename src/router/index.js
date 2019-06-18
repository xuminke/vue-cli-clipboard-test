import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [ ...routes ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    let title = to.meta.title
    document.title = title
  }
  next()
})


export default router
