<template>
  <div id="main" class="swiper-container">
  	<ul class="swiper-wrapper">
  		<li class="swiper-slide" v-for="item in imgArr">
  			<a :href="item.jump_url"><img  :src="item.pic" /></a>
  		</li>
  	</ul>
  </div>
</template>

<script>
import axios from 'axios';
	
export default {
  name: 'Slideshow',
  data () {
    return {
    	imgArr:[]
    }
  },
  mounted(){
  	axios.get("/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4_1456_1220_1186_1406_1184_1217_1371_5_128_106_51_18_1391&app_name=zhe&app_version=&platform=&catname=newest_zhe")
  	.then((res)=>{
  		this.imgArr=res.data.adsInfo.slide_ads.config.slide;
  		console.log(this.imgArr)
  	})
  },
  updated(){
  	var mySwiper = new Swiper('.swiper-container', {
  		loop : true,
		  autoplay: {
		    delay: 1000,//1秒切换一次
		  }
		});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	ul{
		display: flex;
	}
	img{
		width:3.75rem;
		height: 1.5rem;
	}
</style>
