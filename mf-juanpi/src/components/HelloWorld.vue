<template>
  <div class="hello">
   	<!--<Search></Search>
  	<Beauty></Beauty>-->
  	<!--<Choiceness></Choiceness>-->
  	
  	
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
  	 Choiceness,
  	 Beauty,
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
