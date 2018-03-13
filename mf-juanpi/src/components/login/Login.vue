<template>
	<div id="main">
	  	<div id="head">
	  		<a href="#">
	  			<img src="../../../static/imgs/arrow_white.png" />
	  		</a>
	  		<b>
	  			登录
	  		</b>
	  		<a href="#">
	  			注册
	  		</a>
	  	</div>
	  	<div id="method">
	  		<span @click="currentView = 'account'">
	  			卷皮账号登录
	  		</span>
	  		<span @click="currentView = 'phone'">
	  			手机快捷登录
	  		</span>
	  	</div>
	  	<keep-alive include="account, phone">
			<component v-bind:is="currentView" >
			  <!-- 组件在 vm.currentview 变化时改变！ -->
			</component>
		</keep-alive>
	</div>
</template>

<script>
	import Account from '@/components/login/Account'
	import Phone from '@/components/login/phone'
	export default {
	  name: 'Login',
	  data () {
	    return {
	    	"currentView":'account'
	    }
	  },
	  components:{
	  	"Account": Account,
		"Phone": Phone
	  },
	  methods:{
	  	sub:function(){
	  	}
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../../../style/login/login.css">
	
</style>
