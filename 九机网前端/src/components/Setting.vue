
<template>
	<div class="userInfo">

			<van-nav-bar
			  title="设置"
			  left-arrow
			  @click-left="tomine"
			   
			>
			
			</van-nav-bar>
		<div v-if="userinfo | flag">
			
			<p>用户名{{userinfo.username}}</p>
			<p>注册时间{{userinfo.date_joined|dateFormat}}</p>
			<p>邮箱{{userinfo.email}}</p>
			<van-button @click="changeflag" round block type="info" native-type="submit">
			  修改用户信息
			  
			</van-button>
		</div>
		<div v-else >
			
			<van-field
			  v-model="newusername"
			  name="用户名"
			  label="用户名"
			  placeholder="请输入新的用户名"
			  :rules="[{ required: true, message: '请填写用户名' }]"
			/>
			<van-field
			  v-model="newemail"
			  name="邮箱"
			  label="邮箱"
			  placeholder="请输入新的邮箱"
			  :rules="[{ required: true, message: '请填写邮箱' }]"
			/>
			<van-field
			  v-model="newname"
			  name="name"
			  label="name"
			  placeholder="请输入新的name"
			  :rules="[{ required: true, message: '请填写name' }]"
			/>
			<!-- <van-field
			  v-model="userinfo.name"
			  name="name"
			  label="name"
			  placeholder="请输入新的name"
			  :rules="[{ required: true, message: '请填写name' }]"
			/> -->
			
			<van-button @click="modefly" round block type="info" native-type="submit">
			  
			  确认提交
			</van-button>
		</div>
		
			
	
		

		
		

	</div>
</template>

<script>
	export default{
		data(){
			return{
				userinfo:'',
				flag:true,
				newusername:'',
				newemail:'',
				newname:','
			}
		},
		methods:{
			tomine(){
				this.$router.push('/mine')
				this.$store.commit("tranz")
			},
			changeflag(){
				this.flag=false
			},
			modefly(){

				this.$api.UpdataUserinfo({
					username:this.newusername,
					name:this.name,
					email:this.newemail,
					id:this.userinfo.id
					// userinfo:this.userinfo
				}).then(res=>{
					console.log('更新成功',res.data)
					this.flag=true
					this.$jsCookie.remove('username')
					this.$jsCookie.set('username',this.newusername);
					this.$router.go(0)
				}).catch(err=>{
					console.log('更新失败')
				})
			},
						
		},
		created() {
			this.$api.getUserinfo().then(res=>{
				console.log('个人信息',res)
				this.userinfo=res.data;
			}).catch(err=>{
				console.log('出错了')
			})
			
		},
		filters:{
			dateFormat(date){
				date =new Date(date)

				return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
			}
		}
	}
</script>

<style>
</style>

