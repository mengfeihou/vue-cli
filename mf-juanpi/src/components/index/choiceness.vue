<template>
  <div id="main">
  	<ul>
  		<li v-for="item in list">{{item}}</li>
  	</ul>
  	<!--<keep-alive include="">-->
  		<component :is="currentView">
  			
  		</component>
  	<!--</keep-alive>-->
  </div>
</template>

<script>
import Recommend from '@/components/index/choicenessNav/recommend'

export default {
  name: 'Choiceness',
  data () {
    return {
    	currentView:"Recommend",
    	list:["推荐","女装","男装","美食","母婴","卸载","内衣"]
    }
  },
  components:{
  	Recommend:Recommend
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#main ul{
		height: .44rem;
		background: white;
		display: flex;
		justify-content: space-around;
	}
	#main ul li{
		height: 100%;
		line-height: .44rem;
		padding:0 .1rem;
		font-size:0.16rem;
		color: #ff464e;
		/*border-bottom: 4px solid #ff464e;*/
	}
</style>
