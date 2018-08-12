import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: () => import('@/views/homepage')
    },
    {
      path:'/tongzhi',
      name:"通知早知道",
      component:() => import('@/views/tongzhi')
    },
    {
      path:'/myparty',
      name:"我的党建",
      component:() => import('@/views/myparty')
    },
    {
      path:'/login',
      name:"登录",
      component:() => import('@/views/login')
    },
    {
      path:'/info',
      name:"个人信息",
      component:() => import('@/views/info')
    },
    {
      path:'/infoChange',
      name:"修改个人信息",
      component:() => import('@/views/infoChange')
    },
    {
      path:'/score',
      name:"个人量化积分",
      component:() => import('@/views/score')
    },
    {
      path:'/scoreDetail',
      name:"积分明细",
      component:() => import('@/views/scoreDetail')
    },
    {
      path:'/message',
      name:'党员云互动',
      component:() => import('@/views/message')
    },
    {
      path:'/reply',
      name:'党员云互动',
      component:() => import('@/views/reply')
    },
    {
      path:'/live',
      name:'掌上组织生活',
      component:() => import('@/views/live')
    },
    {
      path:'/twobtn',
      name:'掌上组织生活',
      component:() => import('@/views/twobtn')
    },
    {
      path:'/personSummary',
      name:'个人总结',
      component:() => import('@/views/personSummary')
    },
    {
      path:'/sixianghuibao',
      name:'思想汇报',
      component:() => import('@/views/personSummary')
    },
    {
      path:'/xindezongjie',
      name:'心得总结',
      component:() => import('@/views/personSummary')
    },
    {
      path:'/talk',
      name:'民主评议',
      component:() => import('@/views/talk')
    },
    {
      path:'/dangyuan',
      name:'参评党员',
      component:() => import('@/views/dangyuan')
    },
    {
      path:'/pinglun',
      name:'民主评议',
      component:() => import('@/views/pinglun')
    },
    {
      path:'/map',
      name:'流动党员找组织',
      component:() => import('@/views/map')
    },
    {
      path:'/news',
      name:'',
      component:() => import('@/views/news')
    },
    {
      path:'/news/detail',
      name:'',
      component:() => import('@/views/news_detail')
    },
    {
      path:'/historyToday',
      name:'党史上的今天',
      component:() => import('@/views/history_today')
    },
    {
      path:'/changePwd',
      name:'修改密码',
      component:() => import('@/views/changePwd')
    }
  ]
})
