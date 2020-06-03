<template>
	<div class="catalogyDetail">
		<div class="heater">
			<van-nav-bar
			  title="分类"
			  left-arrow
			  @click-left="onClickLeft"
			  @click-right="onClickRight"
			>
			<van-icon name="search" slot="right" />
			</van-nav-bar>
			<div class="heaTitle">
				<div class="mainT">
					<div class="dropdown-item">
						<van-dropdown-menu >
							<van-dropdown-item v-model="value1" :options="option1" />
						</van-dropdown-menu>
						<van-dropdown-menu >
							<van-dropdown-item v-model="value2" :options="option2" />
						</van-dropdown-menu>
					</div>
					
					<div class="showPopup">
						<van-cell is-link @click="showPopup">筛选</van-cell>
						
						<van-popup
						  v-model="show"
						  position="right"
						  :style="{ height: '100%',width:'50%' }"
						>
						<van-popup v-model="show">py1911</van-popup>
						</van-popup>
					</div>
					
				</div>
			</div>
		</div>
		<div>
			{{this.$route.params.id}}
		</div>
		<div class="main">
			<div class="goodlist" :key="index" v-for="(item,index) in goodList.sgoods ">
				<div class="img">
					<img @click="todetail(item)" :src="item.img" alt="">
				</div>
				<div class="goodDetail">
					<p>{{item.name}}</p>
					<p>
						<span>
							浏览量{{item.view}}
						</span>
						<span>
							特点二
						</span>
					</p>

					<p>
						<span>¥{{item.price}}</span>
						<span>分期免息</span>
						
					</p>
					<p>{{item.desc}}</p>
					
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			  return{
				 show:false,
				 cataDetailList:null,
				 value1: 0,
				 value2: 0,
				 goodList:[],
				 option1:
				 [
				 	{ text: '综合', value: 0 },
				 	{ text: '按销量排序', value: 1 },
				 	
				 ],
				 option2:
				 [
				 	{ text: '价格', value: 0 },
				 	{ text: '1000以下', value: 1 },
				 	{ text: '1000-2500', value: 2 },
				 	{ text: '2500-4000', value: 3 },
				 	
				 	{ text: '4000-6000', value: 4 },
				 	{ text: '6000以上', value: 5 }
				 ]
				 
				
				 
			    
				 
			  }
		},
		created() {
			this.$api.getGoodList({
				id:this.$route.params.id
			}).then(res=>{
				
				this.goodList=res.data
				console.log(res.data)
			}).catch(err=>{
				console.log(err)
			})
			
		},
		methods:{
			todetail(item){
				this.$store.commit("detailData",item),
				this.$router.push('/detail/'+item.id)
				this.$store.commit("tran")
			},
			onClickLeft() {
				this.$router.go(-1)
				this.$store.commit("tranz")
			     
			},
			onClickRight() {
			  this.$router.push('/search')
			},
			showPopup() {
			     this.show = true;
		    }
		}
	}
</script>

<style scoped="scoped" lang="less">
	
	.main{
		background-color:rgb(255,255,255)
	}
		.goodlist{
			display: flex;
			
			.img{
				
				width: 35%;
				
				img{
					width: 100%;
				}
			}
			.goodDetail{
				border-bottom: 1px rgb(233,233,233) solid;
				p:nth-of-type(1){
					font-size: 13px;
					font-weight: 800;
					text-align: left;
					margin-left: 18px;
				}
				p:nth-of-type(2){
					font-size: 10px;
					span{
						margin-right: 20px;
						
						background-color: rgb(244,244,244);
					}
				}
				p:nth-of-type(3){
					text-align: left;
					margin:0 0 0 15px;
					span:nth-of-type(1){
						font-size: 22px;
						color: crimson;
					}
					span:nth-of-type(2){
						font-size: 12px;
						color: crimson;
						margin-left: 18px;
					}
					
				}
				p:nth-of-type(4){
					font-size: 10px;
					margin-left: 10px;
					text-align: left;
				}
			}
				
				
			
		}
	
	.mainT{
		display: flex;
		.dropdown-item{
			width: 80%;
			display: flex;
			justify-content: space-around
			
		}
		.showPopup{
			
			width: 30%;
		}
	}
</style>