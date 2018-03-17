<template>
	<div id="main">
		<div id="top">
			<div id="bigshow">
				<ul>
					<li><img :src="bigPic"/></li>
				</ul>
			</div>
			<div>
				<div>
					<b>¥{{fprice}}</b>
				</div>
			</div>
		</div>
		<div id="foot">
			<a href="#">
				<img src="../../static/imgs/home_dark.41f2a808.png"/>
				<b>首页</b>
			</a>
			<a href="#">
				<img src="../../static/imgs/cart_icon.5d19f0b4.png"/>
				<b>购物车</b>
			</a>
			<i>立即购买</i>
			<span @click="add">加入购物车</span>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
	
export default {
  name: 'Detail',
  data () {
    return {
    	gid:"",
    	bigPic:"",
    	fprice:"",
    }
  },
  methods:{
  	add(){
  		alert(5)
  	}
  },
  mounted(){
  	this.gid=this.$route.params.gid;
  	console.log(this.gid)
	axios.get("/api/getMemberAboutInfo?goods_id="+this.gid+"&is_pt_goods=0&req_coupons_id="+this.gid)
	.then((res)=>{
		console.log(res);
		this.bigPic=res.data.skudata.info.goods_origin_url;
		this.fprice=res.data.skudata.info.fprice;
	})
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#main{
		font-size: .12rem;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	#top{
		overflow: auto;
	}
	#bigshow img{
		width: 100%;
	}
	#foot{
		height: .48rem;
		background: white;
		display: flex;
		align-items: center;
		font-size: .12rem;
		color: #333333;
	}
	#foot a{
		flex:1;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		color: #6b6b6b;
	}
	#foot a img{
		margin: auto;
		width:.24rem;
	}
	#foot i{
		color: #333333;
		font-size: .14rem;
		width:.93rem;
		text-align: center;
		line-height: .48rem;
	}
	#foot span{
		color: white;
		background: #ff464e;
		font-size: .14rem;
		line-height: .48rem;
		width: 1.33rem;
		text-align: center;
		
	}
</style>
