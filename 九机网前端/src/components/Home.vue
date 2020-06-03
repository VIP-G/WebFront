<template>
	<div class="home">
		<div class="heater">
			<div class="search">
				
				<van-search
				  v-model="value"
				  placeholder="5G手机"
				  shape="round"
				  @search="onSearch"
				  
				  background= '#FF3300'
				  label='地址  |'
				  @click="tosearch"
				>
				  
				</van-search>
			</div>
			<div id="label">
				<van-tabs   background= '#FF3300' type='0' title-active-color='white' title-inactive-color='white'	>
					<van-tab  :key="index"  v-for="(item,index) in Label" :title="item.name">
				   
					</van-tab>
				</van-tabs>
				
			</div>
			
		</div>
		<div class="zgh">
		<div class="middle">
			
			<div class="swipe" >
					<van-swipe :autoplay="3000" indicator-color="white" >
						<van-swipe-item v-if="index<5" :key="index" v-for="(item,index) in AdvantageList">
							<img  @click="intoDetail(item)" :src="item.img" alt="" style="border-radius: 20px;"  :style="{width:350+'px',height:170+'px'}">
						</van-swipe-item>
					</van-swipe>
			</div>
			<div  >
				<div   class="advantageimg" :key="index" v-for="(item,index) in AdvantageList">
					<img v-if="index==5" :src="item.img" alt="" style="width: 100%;">
				</div>
			</div>
			<div class="advantagelist" >
				<div class="good" :key="index" v-for="(item,index) in AdvantageList">
					<img  v-if="6<=index&&index<=10"  :src="item.img" alt="" style="width: ;">
				</div> 
			</div>
			<div class="hour" >
				<div v-if="11<=index&&index<=12" class="good" :key="index" v-for="(item,index) in AdvantageList" >
					<img   :src="item.img" alt="" style="width: ;">
				</div> 
			</div>
			<div class="hour" >
				<div v-if="13<=index&&index<=14" class="good" :key="index" v-for="(item,index) in AdvantageList">
					<img   :src="item.img" alt="" style="width: ;">
				</div> 
			</div>
			<div class="hour" >
				<div v-if="15<=index&&index<=16" class="good" :key="index" v-for="(item,index) in AdvantageList">
					<img   :src="item.img" alt="" style="width: ;">
				</div> 
			</div>
			<div class="hour" >
				<div v-if="17<=index&&index<=18" class="good" :key="index" v-for="(item,index) in AdvantageList">
					<img   :src="item.img" alt="" style="width: ;">
				</div> 
			</div>
			<div  >
				<div   class="advantageimg" :key="index" v-for="(item,index) in AdvantageList">
					<img v-if="index==19" :src="item.img" alt="" style="width: 100%;">
				</div>
			</div>
			
			
			<div class="mainmid" >
				
					<div class="good" :key="index" v-for="(item1,index) in Goods">
						<img @click="intoDetail(item1)" :src="item1.img" alt="" style="width: ;">
						<p class="mark">{{item1.desc}}</p>
						<div class="titdiv">
							<p class="title">{{item1.name}}</p>
						</div>
						
						<p class="price">{{item1.price}}</p>
						
					</div> 
				
			</div> 
			<h6>没有更多了...</h6>
			
			<br>
		</div>
		</div>
	</div>
</template>

<script>

	export default{
		data(){
			  return{
				 
				  value:'',
				  AdvantageList:[],
				  Goods:[],
				  Label:[],
			  }
		},
		created() {

			this.getGoodList()
			this.getAdvanList()
			this.getlabelList()
		},
		methods:{
			getGoodList(){				
				this.$api.getSgoodList().then(res=>{
					// console.log('获取商品成功',res)
					if (res.status==200){
						this.Goods=res.data;
						
					}
				}).catch(err=>{
					console.log('获取商品失败',err)
				})				
			},
			
			getAdvanList(){
				this.$api.getAdvanList().then(res=>{
					// console.log('获取广告成功',res)
					if (res.status==200){
						this.AdvantageList=res.data;
					}
				}).catch(err=>{
					console.log('获取广告失败',err)
				})				
			},
			getlabelList(){
				this.$api.getlabelList().then(res=>{
					// console.log('获取标签成功',res)
					if (res.status==200){
						this.Label=res.data;
					}
				}).catch(err=>{
					console.log('获取标签失败',err)
				})				
			},
			onSearch(){
				
			},
			intoDetail(item) {
				
				 this.$router.push('/detail/'+item.id)
				 this.$store.commit("detailData",item)
				 this.$store.commit("tran")
			},
			tosearch(){
				this.$router.push('/search')
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	
	.zgh{
		position: absolute;
		top:98px ;
		left: 0px;
		right: 0;
		bottom: 0px;
		overflow-y: auto;
	}
		
		
	
	.mark{
		font-size: 13px;
		width: 187.5px;
		background-color:rgb(235,246,254) ;
		margin: 0;
		padding: 0;
		
	}
	.titdiv{
		width: 187.5px;
		.title{
			
			font-size: 15px;
			width: 150px;
			margin: 0 auto;
			padding: 0;
			background-color: #00FF00;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}
	
	.price{
		font-size: 15px;
		width: 187.5px;
		margin: 0;padding: 0;
	}
	.search{
		height: 54px;
	}
	.middle{
		height: 105px;
		background-color: #FF3300;
	}
	
	.advantagelist{
		display: flex;
		img{
			width: 100%;
		}
	
	}
	.hour{
		display: flex;
		.good{
			
			width: 50%;
			img{
				width: 100%;
				
			}
		}
	}
	.mainmid{
		background-color: rgb(250,250,250);
		display: flex;
		flex-wrap:wrap;
		.good{
			width: 50%;
			
			img{
				box-sizing: border-box;
				padding: 10px;
				width: 100%;
			}
		}
	}
	
	
	
</style>

<style lang="less">
	#label {
		.van-tab--active{
			font-size: 18px;
		}
	}
</style>
