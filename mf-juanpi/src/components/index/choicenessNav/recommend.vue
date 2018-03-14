<template>
  <div id="main">
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
</template>

<script>
import axios from 'axios';

export default {
  name: 'Recommend',
  data () {
    return {
    	recommend_list:[],
    }
  },
  components:{
  	
  },
  mounted(){
  	axios.get("/api/getGoods?page=1&zy_ids=p8_c4_l4_1456_1220_1186_1406_1184_1217_1371_5_128_106_51_18_1391&app_name=zhe&catname=xbsytj&flag=xbsytj")
  	.then((res)=>{
  		this.recommend_list=res.data.data.goods;
  		console.log(this.recommend_list)
  	})
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#main{
		display: flex;
		flex-wrap: wrap;
		font-size: .07rem;
		justify-content: space-between;
	}
	#main .goods{
		background: white;
	}
	#main a{
		color: #3b3b3b;
	}
	#main a .text{
		padding: 0 .08rem;
	}
	#main a i{
		font-size: .14rem;
		color: #ff464e;
		height: .25rem;
	}
	#main a span{
		margin-bottom: .12rem;
	}
	.imgs img{
		width:1.865rem;
	}
</style>
