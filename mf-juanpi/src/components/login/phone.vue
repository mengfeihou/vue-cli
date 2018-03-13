<template>
  <div id="text">
  	<div>
	  	<input type="text" placeholder="请输入手机号"/>
  	</div>
  	<div>
	  	<input type="text" placeholder="请输入验证码"/>
  		<span>
  			获取验证码
  		</span>
  	</div>
  	<span id="ok">
			<button type="button" >登录</button>
		</span>
  </div>
</template>

<script>
export default {
  name: 'Account',
  data () {
    return {
      msg: ''
    }
  }
}
</script>
<style scoped>
	#text div{
		background: white;
		display: flex;
		padding: 0 .1rem;
		height: .48rem;
		width: 100%;
	}
	#text div input{
		outline: none;
		border: 0 none;
		flex: 1;
	}
	#text div span{
		height: 0.44rem;
		font-size: 0.14rem;
		color: #999;
		line-height: 0.44rem;
		padding-left:.4rem ;
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
