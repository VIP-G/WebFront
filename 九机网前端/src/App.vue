<template>
  <div id="app">
    
    <router-view/>
	
	<van-tabbar v-model="active" v-if="$store.getters.getTran" >
	  <van-tabbar-item icon="home-o">
		  <router-link to="/">首页</router-link>
	  </van-tabbar-item>
	  <van-tabbar-item icon="coupon">
		  <router-link to="/catalogy">分类</router-link>
	  </van-tabbar-item>
	 
	  <van-tabbar-item icon="shopping-cart">
		  <router-link to="/cart">购物车</router-link>
	  </van-tabbar-item>
	  <van-tabbar-item icon="friends">
	  		  <router-link to="/mine">我的</router-link>
	  </van-tabbar-item>
	</van-tabbar>
	
	
  </div>
</template>
<script>
	export default {
	  data() {
	    return {
	      active: 0,
		  
	    }
	  }
	}
</script>
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
