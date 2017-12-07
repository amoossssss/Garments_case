import Vue from 'vue'
import Router from 'vue-router'
// import Layout from '../views/layout/Layout.vue'
import Mainpage from '../views/Mainpage.vue'
import Aboutpage from '../views/About.vue'
import BrandConcept from '../views/AboutPages/BrandConcept.vue'
import Materails from '../views/AboutPages/Materials.vue'
import PrintTechnique from '../views/AboutPages/PrintTechnique.vue'
import WaysToMaintain from '../views/AboutPages/WaysToMaintain.vue'
import Products from '../views/Products.vue'
import Portfolio from '../views/Portfolio.vue'
import ConnectUs from '../views/ConnectUs.vue'
import Tshirt from '../views/ProductPages/Tshirt.vue'
import Polo from '../views/ProductPages/Polo.vue'
import Bag from '../views/ProductPages/Bag.vue'
import Hoodie from '../views/ProductPages/Hoodie.vue'
import Hat from '../views/ProductPages/Hat.vue'

Vue.use(Router)


export default new Router({
  routes: [
    {path: '/', name: '', redirect: '/home'},
    {path: '/home', name: '主頁', component: Mainpage},
    {path: '/about', name:'關於', component: Aboutpage, redirect:'/concept',
      children:[
        {path:'/brandconcept', name:'品牌理念', component: BrandConcept},
        {path:'/materials', name:'布料材質', component: Materails},
        {path:'/techniques', name:'印刷技術', component: PrintTechnique},
        {path:'/howtomaintain', name:'保養方式', component: WaysToMaintain}
      ]},
    {path: '/products', name: '商品清單', component: Products},
    {path: '/tshirt', name:'T恤', component: Tshirt},
    {path: '/polo', name:'Polo衫', component: Polo},
    {path: '/bag', name:'帆布袋', component: Bag},
    {path: '/hoodie', name:'帽T', component: Hoodie},
    {path: '/hat', name:'帽子', component: Hat},
    {path: '/portfolio', name: '歷年作品', component: Portfolio},
    {path: '/connectus', name: '聯絡我們', component: ConnectUs},

  ]
})
