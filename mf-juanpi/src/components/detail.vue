<template>
	<div id="main">
		<div id="top">
			<div id="bigshow">
				<ul>
					<li><img :src="bigPic"/></li>
				</ul>
			</div>
			<div id="price_name">
				<div>
					<b><i>¥</i>{{fprice}}</b>
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
			<span @click="pupChoose">加入购物车</span>
		</div>
		<div v-show="popup" id="chooseWrap">
			<transition name="flew">
			<div v-show="popup" id="choose">
				<div>
					<div id="close" @click="pupChoose">×</div>
					<div id="text">
						<div id="count">
							<div>购买数量</div>
							<div id="addcount">
								<span @click="count--">-</span>
								<i>{{count<1?1:count}}</i>
								<span @click="count++">+</span>
							</div>
						</div>
					</div>
				</div>
				<button>确定</button>
			</div>
			</transition>
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
    	popup:false,
    	count:"1",
    }
  },
  methods:{
  	pupChoose(){
//		this.$store.dispatch("addGoodsA",this.gid);
		this.popup=!this.popup;
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
<style scoped src="../../style/detail/detail.css">
</style>
