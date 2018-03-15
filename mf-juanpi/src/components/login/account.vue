<template>
  <div>
  	<input type="text" placeholder="手机号/邮箱/用户名" ref="username"/>
  	<input type="text" placeholder="密码" ref="psw"/>
  	<div id="ok">
			<button type="button" @click="sub">登录</button>
		</div>
  </div>
</template>

<script>
import axios from 'axios';
	
export default {
  name: 'Account',
  data () {
    return {
    	
    }
  },
  methods:{
  	sub(){
  		axios.post('/myapi/login', {
		    username: this.$refs.username.value,
		    psw: this.$refs.psw.value
		  })
	  	.then((res)=>{
				console.log(res)
				if(res.data.status == 1) {
					location.href = "/index";
				} else {
					alert(res.data.message);
				}
	  	})
  	}
  }
}
</script>
<style scoped>
	input{
		padding: 0 .1rem;
		outline: none;
		height: .48rem;
		border: 0 none;
		width: 100%;
	}
	#ok{
    padding: .1rem;
    background: white;
	}
	button{
	    font-size: .18rem;
	    color: white;
	    height: .48rem;
	    background: #dbdbdb;
	    border: 0 none;
	    width: 100%;
	    outline: none;
	}
</style>
