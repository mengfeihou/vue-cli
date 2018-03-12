<template>
  <div>
  	<input type="text" @blur="msgblur" v-model="msg" placeholder="手机号/邮箱/用户名"/>
  	<input type="text" placeholder="密码"/>
  </div>
</template>

<script>
export default {
  name: 'Account',
  data () {
    return {
      msg: ''
    }
  },
  methods:{
  	msgblur:()=>{
  		console.log(this.msg)
  	}
  }
}
</script>
<style scoped>
	div input{
		padding: 0 .1rem;
		outline: none;
		height: .48rem;
		border: 0 none;
		width: 100%;
	}
</style>
