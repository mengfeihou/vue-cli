<template>
  <div class="hello">
  	<Slideshow></Slideshow>
  </div>
</template>

<script>
	import Slideshow from '@/components/slideshow'
	
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
	  	"Slideshow": Slideshow
	  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
