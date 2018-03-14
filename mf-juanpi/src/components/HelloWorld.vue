<template>
  <div class="hello">
   	
   	<!--<Search></Search>-->
  	<Choiceness></Choiceness>
  	<Beauty></Beauty>
  </div>
</template>

<script>
//	import Search  from '@/components/index/search'

	
	import Choiceness from '@/components/index/choiceness'
	import Beauty from '@/components/index/beauty'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
<<<<<<< HEAD
  	 Choiceness,
  	 Beauty
=======
  	Choiceness
>>>>>>> 4fe9a3999949868719f630e8a8a48e3ac758f194
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
