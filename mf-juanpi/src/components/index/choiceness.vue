<template>
  <div id="main">
  	<ul id="nav">
  		<li v-for="item in list" @click="currentView=item[1]">
  			 	{{item[0]}}
  		</li>
  	</ul>
		<keep-alive include="Recommend,Women">
			<component :is="currentView" >
			  <!-- 组件在 vm.currentview 变化时改变！ -->
			</component>
		</keep-alive>
  </div>
</template>

<script>
import Recommend from '@/components/index/choicenessNav/recommend'
import Women from '@/components/index/choicenessNav/women'

export default {
  name: 'Choiceness',
  data () {
    return {
    	currentView:"Recommend",
    	list:[["推荐","Recommend"],["女装","Women"],["男装","men"],["美食","food"],["母婴","mater-child"],["鞋子","shose"],["内衣","underwear"]]
    }
  },
  components:{
  	Recommend:Recommend,
  	Women:Women
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#nav{
		height: .44rem;
		background: white;
		display: flex;
		justify-content: space-around;
	}
	#nav li{
		height: 100%;
		line-height: .44rem;
		padding:0 .1rem;
		font-size:0.16rem;
		color: #ff464e;
		/*border-bottom: 4px solid #ff464e;*/
	}
</style>
