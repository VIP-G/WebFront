<template>
	<div>
		<div class="heater">
			<van-nav-bar
			  title="购物车"
			  left-arrow
			  @click-left="onClickLeft"
			  @click-right="onClickRight"
			>
			<van-icon name="search" slot="right" />
			</van-nav-bar>
			<div class="main">
				
				<van-cell v-if="!flag" title="登录后享受更多优惠" is-link value="去登录" to="/mine"/>
				
				<div>
					 <van-card :key="index" v-for="(item,index) in $store.getters.getGoodList"
					   :num="item.num"
					   
						:price="item.price"
					   :title="item.title"
					   :thumb="item.img"
					 > 
					 <van-stepper @change="change(index,item.num)" v-model="item.num" slot="bottom" />
					 
					 </van-card>
						  
				</div>
				<div class="submit">
					<van-submit-bar
					  :price="$store.getters.getAllPrice "
					  button-text="提交订单"
					  @submit="onSubmit"
					/>
					<van-popup
					  v-model="show"
					  position="bottom"
					  :style="{ height: '38%' }"
					>
					<van-cell title="登录后才能结算" is-link value="去登录" to="/mine"/>
					</van-popup>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  data(){
		  return{
			  show:false,
			  flag:localStorage.getItem("login"),
		  }
	  },
	  methods: {
		change(index,num){
			// console.log(num,index);
			this.$store.commit("changeGoodNUm",[index,num]);
			// console.log(this.$store.getters.getGoodList)
			this.$store.commit("updaPrice",index)
			
			
		},
	    onClickLeft() {
	    	this.$router.push('/')
			this.$store.commit("tranz")
	         
	    },
	    onClickRight() {
	      this.$router.push('/search')
	    },
		onSubmit(){
			this.show=true
		}
	  }
	}
</script>

<style>
</style>
