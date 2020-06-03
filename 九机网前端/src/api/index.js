import axios from 'axios'
import jsCookie from 'js-cookie'

axios.defaults.baseURL = 'http://127.0.0.1:8000';

axios.interceptors.request.use(function (config) {
	if (jsCookie.get('access')){
		config.headers.Authorization=`Bearer ${jsCookie.get('access')}`
	}
	
    return config;
  }, function (error) {

    return Promise.reject(error);
  });

axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {

	if(error.response.status == 401 && !hasRefresh){
		console.log("授权失败");
		console.log("请求为",error.request.responseURL);
		hasRefresh = true
		axios.post("/refresh/",{
		 	refresh:jsCookie.get('refresh')  
		}).then(res=>{
			hasRefresh = false
			console.log("刷新成功");
			jsCookie.set("access",res.data.access);
		}).catch(err=>{
			console.log("刷新失败");
			jsCookie.remove("refresh");
			jsCookie.remove("access");
		})
	 }
    return Promise.reject(error);
  });
//   
 
  
  
  export const getSgoodList=()=>{
  	
  	return axios.get('/api/v1/sgood/')
  }


  export const getAdvanList=()=>{
  	
  	return axios.get('/api/v1/advanImgs/')
  }

  
  export const getlabelList=()=>{
  	
  	return axios.get('/api/v1/label/')
  }
  
  
  export const getCategoryList=()=>{
  	
  	return axios.get('/api/v1/categorys/')
  }
  
  export const Register=(param)=>{
  	
  	return axios.post('/api/v1/user/',param,)
  }
  
  
  export const Login=(param)=>{
  	
  	return axios.post('/login1/',param,)
  }
  
  export const getUserinfo=(param)=>{
  
  	return axios.get('/getuserinfo/',param,)
  }


  export const getToolList=()=>{
  	
  	return axios.get('/api/v1/tool/')
  }

  export const getPersonalList=()=>{
  	
  	return axios.get('/api/v1/personal/')
  }
  
  export const getGoodList=(param)=>{
  	
  	return axios.get(`/api/v1/goods/${param.id}`)
  }
  

export const UpdataUserinfo=(param)=>{
	// console.log(param,'8888')
	// let id=param.userinfo.id
	return axios.patch(`/api/v1/user/${param.id}/`,param,)
}