import Vue from 'vue'
import Router from 'vue-router'
// import Layout from '../views/layout/Layout.vue'
import Mainpage from '../views/Mainpage.vue'
import Aboutpage from '../views/About.vue'
import BrandConcept from '../views/component/BrandConcept.vue'
import Materails from '../views/component/Materials.vue'
import PrintTechnique from '../views/component/PrintTechnique.vue'
import WaysToMaintain from '../views/component/WaysToMaintain.vue'
import Products from '../views/Products.vue'
import Details from '../views/Details.vue'
import Portfolio from '../views/Portfolio.vue'
import ConnectUs from '../views/ConnectUs.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: '', redirect: '/home'},
    {path: '/home', name: '主頁', component: Mainpage},
    {path: '/about', name:'關於', component: Aboutpage, redirect:'/concept',
      children:[
        {path:'/brandconcept', name:'品牌理念', component: BrandConcept},
        {path:'/materials', name:'衣服布料', component: Materails},
        {path:'/techniques', name:'印刷技術', component: PrintTechnique},
        {path:'/howtomaintain', name:'保養方式', component: WaysToMaintain}
      ]},
    {path: '/products', name: '商品清單', component: Products},
    {path: '/details:id', name:'商品詳情', component: Details},
    {path: '/portfolio', name: '歷年作品', component: Portfolio},
    {path: '/connectus', name: '聯絡我們', component: ConnectUs},

  ]
})
