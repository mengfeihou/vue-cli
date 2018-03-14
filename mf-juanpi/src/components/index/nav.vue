<template>
	<div id="main">
		<ul>
			<li v-for="item in navList1">
				<a :href="item.child[0].url"><img :src="item.child[0].pic" /></a>
			</li>
			<li v-for="item in navList1">
				<a :href="item.child[0].url"><img :src="item.child[0].pic" /></a>
			</li>
		</ul>
		<div>
			<a :href='banner.url'><img :src="banner.pic" /></a>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
	
export default {
  name: 'Nav',
  data () {
    return {
    	navList1:[],
    	navList2:[],
    	banner:[],
    }
  },
  mounted(){
  	axios.get("/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4_1456_1220_1186_1406_1184_1217_1371_5_128_106_51_18_1391&app_name=zhe&app_version=&platform=&catname=newest_zhe")
  	.then((res)=>{
		this.navList1=res.data.adsInfo.block[0].multi_block[0].data;
		this.navList2=res.data.adsInfo.block[0].multi_block[1].data;
  		this.banner=res.data.adsInfo.block[0].multi_block[2].data[0].child[0];
  	})
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	ul{
		width: 100%;
		background: white;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	ul img{
		width: .93rem;
		height: .83rem;
	}
	#main div img{
		width:100%;
	}
</style>
