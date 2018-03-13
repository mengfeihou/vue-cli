<template>
  <div class="register">
  	 <div class="top">
  	 			<img src="../../../static/imgs/arrow.png" />
  	 			<span>注册</span>
  	 </div>
  	 <div class="main">
  	 		<p>请确保您的手机畅通，用于接收短信</p>
  	 		<ul>
  	 			<li>
  	 				<input type="text"  placeholder="请输入手机号" ref="username"/>
  	 				<b><img src="../../../static/imgs/x.png" /></b>
  	 			</li>
  	 			<li>
  	 				<input type="text"  placeholder="验证码" ref="psw"/>
  	 				<b><img src="../../../static/imgs/x.png" /></b>
  	 				<span>获取验证码</span>
  	 			</li>
  	 		</ul>
  	 		<a @click="sendnode()">下一步</a>
  	 </div>
  	 <!--<Index-footer class="foot"></Index-footer>-->
  </div>
</template>

<script>

//import IndexFooter from '../component/IndexFooter.vue'
import axios from 'axios'
	
export default {
  name: 'Register',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
//    username : 
    }
  },
methods : {
	sendnode : function(){
		var username = this.$refs.username.value;
		var res = /^1[357]\d{9}$/;
		console.log(res.test(username));
		var psw =  this.$refs.psw.value;
		
		if(res.test(username)){
			axios.post('/myapi/register', {
		    username:username,
		    psw:psw
		  })
		  .then(function (response) {
		    console.log(response);
		    alert(response.data.message);
		  })
		  .catch(function (error) {
		    console.log(error);
		    alert(error);
		  });
		}else{
			alert("请您输入正确的手机号");
		}
	}
},
  mounted : function(){
  
  }
  
/*  components : {
  	IndexFooter,
  }*/
  
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped src="../../../style/register/register.css"></style>

