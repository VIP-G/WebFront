<template>
	<div>
		<div class="heater">
			<van-nav-bar
			  title="详情"
			  left-arrow
			  @click-left="tohome"
			   @click-right="tosearch"
			>
			<van-icon name="search" slot="right" />
			</van-nav-bar>
		</div>
		
		<div class="main">
			<div class="detail" :key="index" v-for="(item,index) in dataList" >
				<p class="title">{{item.name}}</p>
				<img  :src="item.img" alt="" style="width: 70%;" >
				<p class="mark">{{item.desc}}</p>
				<p class="price">
					<span>新年特惠价:</span>
					<span class="it2">¥{{item.price}}</span>
					
				</p>
			</div>
			 <div class="window">
				 <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
				 	
				 	<div class="buy" :key="index" v-for="(item,index) in dataList" >
				 		<img  :src="item.img" alt=""  >
						<span>选择购买个数：<van-stepper v-model="buyNum" /></span>
				 		
				 	</div>
				 	<van-button type="primary" @click="addCart">加入购物车</van-button>
				 </van-popup>
			 </div>
		</div>
		<div class="bottom">
			
			<van-goods-action>
			  <van-goods-action-icon icon="chat-o" text="客服" />
			  <van-goods-action-icon icon="cart-o" text="购物车" @click="$router.push('/cart')" :info="$store.getters.getGoodList.length" />
			  
			  <van-goods-action-button type="warning" text="加入购物车" @click="show=true" />
			  <van-goods-action-button type="danger" text="立即购买" />
			</van-goods-action>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				dataList:null,
				show:false,
				buyNum:1
			}
		},
		methods: {
			tosearch(){
				this.$router.push('/search')
			},
			tohome(){
				this.$router.go(-1)
				this.$store.commit("tranz")
			},
			addCart(){
				this.show=false;
				// console.log(this.dataList[0])
				this.$toast("加入成功")
				
				this.$store.commit("addGood",{id:this.dataList[0].id,price:this.dataList[0].price,num: this.buyNum,img:this.dataList[0].img,title:this.dataList[0].name} )
				this.$store.commit("addAllPrice",{price:this.dataList[0].price,num: this.buyNum})
			}
			
		},
		created() {
			this.dataList=this.$store.getters.getDataList
			
		}
	}
</script>

<style scoped="scoped" lang="less"> 
	.buy{
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 80%;
		
		img{
			width: 50%;
		}
		span{
			
		}
	}
	.main{
		 // border: 1px #000 solid;
		background-color: rgb(240,240,240);
	}
	.title{
		font-size: 25px;
		width: 80%;
		margin: 0 auto;
	}
	.mark{
		color: lightcoral;
		margin: 0;
	}
	.price{
		color: red;
		
		.it2{
			font-size: 28px;
			
		}
		
	}
</style>
