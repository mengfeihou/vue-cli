<template>
  <div id="main">
  	<ul id="nav">
  		<li v-for="item in list" @click="getNav()">
  			 <router-link :to="{name: 'Choiceness', params:{fid: item[0]}}">
  			 	{{item[0]}}
  			 </router-link>
  		</li>
  	</ul>
  	<div id="content">
  	<div class="goods" v-for="item in recommend_list">
  		<a :href="item.goods_jump_url">
  			<div class="imgs">
  				<img :src="item.pic_url" />
  			</div>
  			<div class="text">
  				<i v-if="item.cprice!=''">¥{{item.cprice}}</i>
					<span>{{item.title}}</span>
  			</div>
  		</a>
  	</div>
  </div>
  </div>
</template>

<script>
/*import Recommend from '@/components/index/choicenessNav/recommend'
import Women from '@/components/index/choicenessNav/women'*/
import axios from 'axios';

export default {
  name: 'Choiceness',
  data () {
    return {
    	recommend_list:[],
    	list:[["推荐","Recommend"],["女装","Women"],["男装","men"],["美食","food"],["母婴","mater-child"],["鞋子","shose"],["内衣","underwear"]]
    }
  },
  components:{
  	/*Recommend:Recommend,
  	Women:Women*/
  },
  mounted(){
  	console.log(this.$route.params)
  	axios.get("/api/getGoods?page=1&zy_ids=p8_c4_l4_1456_1220_1186_1406_1184_1217_1371_5_128_106_51_18_1391&app_name=zhe&catname=xbsytj&flag=xbsytj")
  	.then((res)=>{
  		this.recommend_list=res.data.data.goods;
  		console.log(this.recommend_list)
  	})
  },
  methods:{
  	getNav(){
  		console.log(this.$route.params)
  	}
  }
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
		/*border-bottom: 4px solid #ff464e;*/
	}
	#nav li a{
		display: block;
		height: 100%;
		color: #ff464e;
	}
	#content{
		display: flex;
		flex-wrap: wrap;
		font-size: .07rem;
		justify-content: space-between;
	}
	#content .goods{
		background: white;
	}
	#content a{
		color: #3b3b3b;
	}
	#content a .text{
		padding: 0 .08rem;
	}
	#content a i{
		font-size: .14rem;
		color: #ff464e;
		height: .25rem;
	}
	#content a span{
		margin-bottom: .12rem;
	}
	.imgs img{
		width:1.865rem;
	}
</style>
