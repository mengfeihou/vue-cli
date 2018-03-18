<template>
  <div class="hello">
   	<div class="brandtop">
   		<a v-for="item in list" href="#">
	   		<img :src="item.child[0].pic" />
   		</a>
   	</div>
   	<div class="brand">
   		<ul>
   			<li v-for="item in list1">
   				<a href="#">
	   				<img :src="item.child[0].pic" />
   				</a>
   			</li>
   			<li v-for="item in list2">
   				<a href="#">
	   				<img :src="item.child[0].pic" />
   				</a>
   			</li>
   		<!--	<li v-for="item in list3">
   				<a href="#">
	   				<img :src="item.child[0].pic" />
   				</a>
   			</li>-->
   		</ul>
   	</div>
  </div>
</template>

<script>
	import axios from "axios"
	
export default {
  name: 'HelloWorld',
  data () {
    return {
      list : [],
      list1 : [],
      list2 : [],
      list3 : []
    }
  },
  mounted : function(){
  	axios.get("/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4_51_1220_1186_1184_1391_1406_1371_1217_5_128_106&app_name=zhe&app_version=&platform=&catname=newest_zhe")
    .then((res)=>{
      console.log(res.data.adsInfo.block[0].multi_block);
      this.list = res.data.adsInfo.block[0].multi_block[3].data;
   		this.list1 = res.data.adsInfo.block[0].multi_block[4].data;
   		this.list2 = res.data.adsInfo.block[0].multi_block[5].data;
   		this.list3 = res.data.adsInfo.block[0].multi_block[6].data;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  src="../../../style/index/brand.css">

</style>
