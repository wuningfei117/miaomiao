import Vue from 'vue'
import Router from 'vue-router'
import mineRouter from './mine'
import movieRouter from './movie'
import cinemaRouter from './cinema'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:process.env.BASE_URL,
  routes: [
    mineRouter,
    movieRouter,
    cinemaRouter
  ]
})
