<template>
  <div id="index">
  	<div id="top">
  		<search></search>
	  	<slideshow></slideshow>
	  	<Nav></Nav>
	  	<beauty></beauty>
	  	<brand></brand>
	  	<choiceness></choiceness>
  	</div>
  	<div class="foot">
	  	<index-footer></index-footer>
  	</div>
  </div>
</template>

<script>
	import Search from '@/components/index/search'
	import Slideshow from '@/components/index/slideshow'
	import Nav from '@/components/index/nav'
	import Beauty from '@/components/index/beauty'
	import Brand from '@/components/index/brand'
	import Choiceness from '@/components/index/choiceness'
	import IndexFooter from '@/components/component/IndexFooter'
	
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
	  	Search,
	  	Slideshow,
	  	Nav,
	  	Beauty,
	  	Brand,
	  	Choiceness,
	  	IndexFooter,
	  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#index{
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	#top{
		flex:1;
		overflow: auto;
	}
	.foot{
		height:0.5rem;
	}
	
</style>
