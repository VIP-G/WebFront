<template>
	<div class="mine">
		<div class="heater">
			<div class="bg">
				<van-button class="button1" @click="loginout"  color='#FF3300'  >注销</van-button>
				<van-button class="button2" @click="setting" color='#FF3300' icon="setting-o" >设置</van-button>
			
				<div class="people" v-if="flag" >
					<img src="head.jpeg" alt="">
					
					<span >{{username}}</span>
					
				</div>
				
				<div class="peo" v-else>
					<img  src="peo.png.webp" alt="" >
					<span @click="toLogin">  登录 |</span>
					<span @click="toLogin">  注册</span>
				</div>
				
				<div class="heaMid">
					<div class="heaMain" :key="index" v-for="(item,index) in personalList ">
						<div class="heaMainMid">
							<p>{{item.num}}</p>
							<p>{{item.name}}</p>
							
						</div>
					</div>
				</div>
				
			</div>
			
		</div>
		<div class="heaBot">
			<img src="../../public/轮播背景_1@2x.jpg" alt="">
			
				<!-- <div class="heaBotMR">
					<van-swipe style="height: 30px;" class="heaBotM"  :autoplay='1000' >
						<van-swipe-item >
							{{minedatasList.headAdvertising.items[0].titleAttribute.content}}
						</van-swipe-item>
					</van-swipe>
				</div> -->
			
		</div>
		<div class="middle" >
			
			<div class="middleT" :key="index" v-for="(item,index) in ToolLIst">
				<div class="sd" >
					<span>{{item.title}}</span>
				
				</div>
				<div class="z" >
					<div class="g" :key="index" v-for="(item1,index) in item.toolimg">
						<img :src="item1.img" alt="">
						<span>{{item1.name}}</span>
					</div>
				</div>
				<div class="imgzgh" v-if="index==1">
					<img src="huiyuan.jpg" alt="" >
					<img src="lingquan.jpg" alt="">
					
				</div>
			</div>
			
		</div>
		<br>
		<br>
	
	</div>
	
	
</template>

<script>
	export default{
		data(){
			  return{
				minedatasList:null,
				
				personalList:[],
				flag:localStorage.getItem("login"),
				username:this.$jsCookie.get('username'),
				ToolLIst:[]
			  }
		},
		created() {
			this.getToolList()
			this.getPersonalList()
		},
		methods:{
			getToolList(){
				this.$api.getToolList().then(res=>{
					console.log('获取工具列表成功',res.data)
					this.ToolLIst=res.data
				}).catch(err=>{
					console.log('获取失败',err.responce.status)
				})
			},
			getPersonalList(){
				this.$api.getPersonalList().then(res=>{
					console.log('获取个人信息列表成功',res.data)
					this.personalList=res.data
				}).catch(err=>{
					console.log('获取个人信息列表失败',err)
				})
			},
			toLogin(){
				this.$router.push('login')
				
			},
			loginout(){
				this.flag=false
				localStorage.removeItem("login")
			},
			setting(){
				this.$router.push('setting')
			}
			
		}
	}
</script>

<style scoped="scoped" lang="less">
	
	.people{
		display: flex;
		
		img{
			width: 20%;
			margin-top: 50px;
			margin-left: 50px;
			border-radius: 50%;
		}
		span{
			color: white;
			margin-top: 80px;
			margin-left: 30px;
		}
		
	}
	.imgzgh{
		display: flex;
		width: 100%;
		img{
			width: 50%;
		}
	}
	.middle{
		display: flex;
		flex-direction: column;
		background-color: rgb(244,244,244);
		.sd{
			background-color: white;
		}
		.z{
			
			display: flex;
			flex-direction:row;
			flex-wrap:wrap;
		
			background-color: white;
			// margin:0 15px 0 15px;
			.g{
				display: flex;
				flex-direction: column;
				width: 25%;
				align-items: center;
				margin-top: 15px;
				margin-bottom: 15px;
				background-color: white;
				img{
					width: 25%;
				}
				span{
					font-size: 15px;
				}
			}	
		}	
		
	}
	.middleT{
			// border: 1px #000 solid;
			
			width: 90%;
			margin: 20px 18px 0 18px;
			// background-color: rgb(244,244,244);
			
	}
	
	
	.heater{
		
		.bg{
			height: 250px;
			width: 100%;
			background-color:#FF3300;
		}
		.button2{
			position: absolute;
			right: 10px;top: 0px;
		}
		.button1{
			position: absolute;
			left: 10px;top: 0px;
		}
		.peo{
			position: absolute;
			top: 45px;left: 27px;
			
			img{
				width: 100%;
				border-radius: 100%;
				border: 4px  #fff solid;
				margin: 0 10px;
				width: 65px;height: 65px;
				vertical-align:middle;
			}
			span{
				color: white;
			}
		}
	}
	.heaMid{
		position: absolute;
		top: 135px;
		display: flex;
		width: 100%;
		justify-content: space-around ;
		.heaMain{
			display: flex;
			p{
				margin: 5px;
				font-size: 15px;
				color: white;
			}
			
		}
	}
	.heaBot{
		position: absolute;
		top: 188px;
		width: 100%;
		
		img{
			width: 90%;
			border-radius: 15px 15px 0 0;
			
		}
	}
	.heaBotMR{
		position: absolute;
		top: 20px;
		left: 10px;
	}
	
	
	
</style>
