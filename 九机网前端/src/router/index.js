import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Catalogy from '../views/Catalogy.vue'

import Cart from '../views/Cart.vue'
import Mine from '../views/Mine.vue'
import Detail from '../components/Detail.vue'
import Search from '../components/Search.vue'
import CataDetail from '../components/CataDetail.vue'
import Login from '../components/Login.vue'
import Setting from '../components/Setting.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
	meta:{
		look:true
	}
  },
  {
    path: '/setting',
    name: 'setting',
    component: Setting
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/cataDetail/:id',
    name: 'cataDetail',
    component: CataDetail
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  },
  {
    path: '/catalogy',
    name: 'catalogy',
    component: Catalogy,
	meta:{
		look:true
	}
  },
  
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
	meta:{
		look:true
	}
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine,
	meta:{
		look:true
	}
  }
  
]

const router = new VueRouter({

  routes
})


router.beforeEach(function(t,f,n){
	if(t.meta.auch){
		let r=localStorage.getItem("login")
		if(r){
			n()
		}
		else{
			n("/Mine?t="+t.path)
		}
	}
	else{
		n()
	}
	
})


export default router
