<template>
  <div>
  	<input type="text" placeholder="手机号/邮箱/用户名" ref="nusername"/>
  	<input type="text" placeholder="密码"/>
  	<div id="ok">
			<button type="button" @click="sub">登录</button>
		</div>
  </div>
</template>

<script>
export default {
  name: 'Account',
  data () {
    return {
    }
  },
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
