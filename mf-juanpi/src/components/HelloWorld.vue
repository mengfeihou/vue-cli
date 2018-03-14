<template>
  <div class="hello">
   	
   	<!--<Search></Search>-->
  	<Choiceness></Choiceness>
  </div>
</template>

<script>
//	import Search  from '@/components/index/search'
	import Choiceness from '@/components/index/choiceness'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components : {
//	Search,
  }
  components:{
  	Choiceness
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
