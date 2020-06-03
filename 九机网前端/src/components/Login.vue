<template>
	<div class="login">
		<van-nav-bar
		  title="注册"
		  left-arrow
		  @click-left="tomine"
		>
		</van-nav-bar>
		<!-- <div v-if="userinfo">
				<p>用户信息</p>
				<p>用户名:{{userinfo.M_UserName}}</p>
				<p>类型:{{userinfo.M_MbType}}</p>
				<p>等级:{{userinfo.M_Honor}}</p>
				<p>注册时间:{{userinfo.M_JoinTime}}</p>
				<br>
				<br>
				<br>
				<van-button type="primary" @click="loginout">注销</van-button>
		</div> -->
			
		<div >
			<van-tabs v-model="active">
				<van-tab title="注册">
					<div class="rejis" >
						<van-cell-group>
						  <van-field
							v-model="username"
							required
							clearable
							label="用户名"
							placeholder="请输入用户名"
						  />
						  <van-field
							v-model="password"
							type="password"
							label="密码"
							placeholder="请输入密码"
							required
						  />
						  <van-field
							v-model="password2"
							type="password"
							label="密码"
							placeholder="请再次输入密码"
							required
						  />
						  <van-field
							v-model="email"
							clearable
							type="email"
							label="邮箱"
							placeholder="请输入邮箱"
							required
						  />
						</van-cell-group>
						<van-button type="primary" @click="register">注册</van-button>
						
					</div>
				</van-tab>
			   
				<van-tab title="登录">
					<div class="login" >
						<van-cell-group>
						  <van-field
							v-model="loginusername"
							required
							clearable
							label="用户名"
							placeholder="请输入用户名或邮箱"
						  />
						  <van-field
							v-model="loginpassword"
							type="password"
							label="密码"
							placeholder="请输入密码"
							required
						  />
						</van-cell-group>
						<van-button type="primary" @click="Login">登录</van-button>
					</div>
				</van-tab>
			</van-tabs>
		</div>
		
	</div>
</template>

<script>
	import Cookie from'js-cookie'
	export default{
		data(){
			  return{
				minedatasList:null,
				username:'',
				password:'123456',
				password2:'123456',
				email:'196956@qq.com',
				loginusername:'zgh',
				loginpassword:'123456',
				active: 2,
				userinfo:null
			  }
		},

		methods:{
			register(){
				this.$api.Register({
					username:this.username,
					password:this.password,
					password2:this.password2
				}).then(res=>{
					this.$toast('注册成功')
				}).catch(err=>{
					this.$toast('用户名或密码不正确')
				})
			},
			Login(){
				this.$api.Login({
					username:this.loginusername,
					password:this.loginpassword
				}).then(res=>{
					console.log('登录成功',res.data)
					this.$jsCookie.set('refresh',res.data.refresh);
					this.$jsCookie.set('access',res.data.access);
					this.$jsCookie.set('username',this.loginusername);
					this.$router.push('/mine');
					localStorage.setItem("login",true)
				}).catch(err=>{
					console.log('登录失败',err)
					this.$toast('用户名或密码不正确')
				})
			},
			tomine(){
				this.$router.push('/mine');
			}
		}

	}

</script>

<style>
</style>
