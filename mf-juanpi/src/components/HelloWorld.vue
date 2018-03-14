<template>
  <div class="hello">
  	<Choiceness></Choiceness>
  </div>
</template>

<script>
	import Choiceness from '@/components/index/choiceness'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  	"Choiceness": Choiceness
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active{
	color:red;
}
</style>
