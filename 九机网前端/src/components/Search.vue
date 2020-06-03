<template>
  <div class="mine">
    <div class="header">
		<van-nav-bar
		  id="searchdiv"
		  title="标题"
		  
		 
		  left-arrow
		  @click-left="onClickLeft"
		  @click-right="onClickRight"
		>
		
		<input v-model="value" id="searchinput" slot="title" placeholder="请输入搜索内容" />
		
		<van-icon name="search" slot="right" />
		</van-nav-bar>
	</div>
	
	<div class="other">
		<div class="but">
			<p>历史搜索:</p>
			<p @click="clearsear">清空历史记录</p>
		</div>
		
		<div class="searchhot" v-if="flag">
			<van-tag class='searchitem' @click="searchHot(item)" v-for="item in searchHistory" :type="colors[ parseInt(Math.random()*colors.length)  ]">{{item}}</van-tag>
			
		</div>
		
		<p>热门搜索:</p>
		
		
		<div class="searchhot">
			<van-tag class='searchitem' @click="searchHot(item)" v-for="item in searchHis" :type="colors[ parseInt(Math.random()*colors.length)  ]">{{item.t}}</van-tag>
			
		</div>
		
		
	
	</div>
  </div>
</template>
<style scoped="scoped" lang="less">
	.but{
		display: flex;
		justify-content: space-between;
		p:nth-of-type(2){
			margin: 15px 0 15px 10px;
			font-size: 8px;
		}
	}
	.other{
		p:nth-of-type(1){
			text-align: left;
			margin-left: 10px;
			font-size: 15px;
		}
	}
	.header{
		
		#searchdiv{
			background-color: #f2f2f2;
		}
		#searchinput{
			height: 30px;
			line-height: 30px;
			border: none;
		}
	}
	.other{
		img{
			width: 100%;
		}
		.searchhot{
			padding: 10px;
			display: flex;
			flex-wrap: wrap;
			border-top: 1px rgb(200,200,200) solid;
			.searchitem{
				margin: 10px;
				padding: 10px;
			}
		}
	}
</style>
<script>
	export default {
		data(){
			return{
				value:"",
				colors:["primary","success","danger","warning"],
				historySearch: JSON.parse(localStorage.getItem("historySearch"))||[],
				searchHis:[
					{t:'荣耀20'},
					{t:'华为mate30pro'},
					{t:'华为mate00pro'},
					{t:'荣耀V30'},
					{t:'Appleiphone11pro'},
					{t:'小米9'}
				],
				flag:true
					
				
			}
		},
		computed:{
			searchHistory(){
				// let now = localStorage.getItem("historySearch");
				return this.historySearch
			}
		},
	  methods: {
		clearsear(){
			this.flag=false,
			localStorage.removeItem("historySearch")
		},
	    onClickLeft() {
	      // this.$toast('返回');
		  this.$router.go(-1)
	    },
	    onClickRight() {
			if(this.value.length<=0){
				this.$toast("请输入搜索内容")
			}
			else{
				this.$toast(`搜索了${this.value}`);
				this.historySearch.unshift(this.value);
				console.log(this.historySearch);
				localStorage.setItem("historySearch",JSON.stringify(this.historySearch))
				this.value=""
			}
	      
		  // 需要请求服务器对应的搜索接口
	    },
		searchHot(item){
			this.$toast(`搜索了${item}`);
			
		}
	  }
	}
</script>