<template>
	<div class="catalogy">
		<div class="heater">
			<van-nav-bar
			  title="分类"
			  left-arrow
			  @click-left="onClickLeft"
			  @click-right="onClickRight"
			>
			<van-icon name="search" slot="right" />
			</van-nav-bar>
		</div>
		
		<div class="main" v-if="catalogyList">
			
			<div class="leftTitle">
				<van-sidebar v-model="activeKey" @change="onChange" >
					<van-sidebar-item :key="index" v-for="(item,index) in catalogyList" :title="item.name" />
				</van-sidebar>
			</div>
			<div class="right">
				<div class="righth">
					<img src="../../public/发现好货.png" alt="">
				</div>
				<div class="rightMid">
					<div :key="index" class="midImg" v-for="(item,index) in updataList.goods">
						<div :key="index" class="midTImg" v-for="(item1,index) in item.imgs">
							<div class="midMain">
								<img @click="toCataDetail(item.id)" :src="item1.img" alt="">
								<span>{{item1.good}}</span>
						
							</div>
						</div>
					</div>
				</div>
				
			</div>

	
			
			
		</div>
		
	</div>
</template>

<script>

	export default{
		data(){
			  return{
				  catalogyList:null,
				  activeKey: 0,
				  updataList:null,
				 
			  }
		},
		created() {			
			this.getCategoryList()			
		},
		methods:{
			getCategoryList(){
				this.$api.getCategoryList().then(res=>{
					console.log('获取分类列表成功',res.data)
					this.catalogyList=res.data
					this.updataList=this.catalogyList[0]
			
				}).catch(err=>{
					console.log('获取分类列表失败',err)
				})
			},
			onClickLeft() {
				this.$router.push('/')
			     
			},
			onClickRight() {
			  this.$router.push('/search')
			},
			onChange(index) {
				this.updataList=this.catalogyList[index]
			     
			},
			toCataDetail(item){
				
				this.$router.push('/cataDetail/'+item)
				this.$store.commit("tran")

			}
		}
	}
</script>
<style scoped="scoped" lang="less">
	.main{
		background-color:whitesmoke ;
		display: flex;
		.leftTitle{
			width: 25%;
			
			
		}
		.right{
			width: 75%;
			display:flex;
			flex-direction:column;
			.righth{
				img{
					width: 100%;
				}
				p{
					margin-top: 10px;
					margin-bottom: 0;
				}
				background-color: #FF79C6;
			}
			.rightMid{
				display: flex;
				flex-direction:column;
				.midImg{
					display: flex;
					flex-wrap:wrap;
					
					.midTImg{
						display: flex;
						width: 33%;
						.midMain{
							img{
								width: 100%;
							}
							span{
								width: 100%;
								font-size: 18px;
							}
							margin: 0;
							padding: 10px;
						}
						
					}
				}
				
			}
		}
		
		
	}
	.leftTitle{
		position: absolute;
		overflow-y: auto;
		left: 0;
		top:48px ;
		bottom: 50px;
		right: 0;
	}
	.right{
		position: absolute;
		left: 25%;
		top:48px ;
		bottom: 50px;
		right: 0;
		overflow-y: auto;
	}
	.midImg{
		background-color:white;
		margin-top: 20px;
	}
	
	
	
</style>



