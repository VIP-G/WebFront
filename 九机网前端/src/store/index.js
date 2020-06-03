import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  dataList:[],
	  flag:true,
	  goodList:[],
	  allPrice:0,
	  userInfo:[],
	  detailid:null,
		
  },
  getters:{
	  getDetailid(state){
		  return state.detailid
	  },

	  
	  getUserInfo(state){
		   return state.userInfo
	  },
	  getDataList(state){
		  return state.dataList
	  },
	  getTran(state){
		  return state.flag
	  },
	  getGoodList(state){
		  return state.goodList
	  },
	  getAllPrice(state){
		  return state.allPrice
	  }
	  
	  
  },
  mutations: {

	  addUserInfo(state,info){
		  state.userInfo.push(info)
		  console.log(state.userInfo)
		  
	  },
	getdetailid(state,id){
		state.detailid=id
		console.log(state.detailid)
	},
	addAllPrice(state,price){
		state.allPrice+=(Number(price.price)*100*(price.num))
	},
	updaPrice(state,index){
		let temp=0
		state.allPrice=state.goodList.forEach((item)=>{
			temp+=(Number(item.price)*(item.num)*100)
		})
		
		state.allPrice=temp
	
	},
	detailData(state,data){
		  state.dataList.splice(0,1,data);
	},
	tran(state){
		  state.flag=false
		  
	},
	tranz(state){
		state.flag=true
	},
	addGood(state,good){
		// state.goodList.push(good);
	  	let canAdd=true;
	  	let index = -1;
	  	state.goodList.forEach((item,i)=>{
			if(item.id==good.id){
				canAdd=false;
					index = i
	  		}
	  	})
	  		  
	  	if(canAdd){
	  		state.goodList.push(good);
	  	}
	  	else{
	  		state.goodList[index].num+=good.num;
	  	}
	},
	changeGoodNUm(state,index_num){
		// console.log(index_num[0],index_num[1],"++");
		 state.goodList[index_num[0]].num = index_num[1];
	}
	  
  },
  actions: {
  },
  modules: {
  }
})
