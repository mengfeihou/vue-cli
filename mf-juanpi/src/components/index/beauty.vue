<template>
  <div class="hello">
   	<ul class="beauty">
   		<li v-for="item in lists">
		   		<div v-for="(itema,index) in item">
		   			<a href="#" v-for="itemb in itema.data">
		   				<img  v-lazy="itemb.child[0].pic" />
		   			</a>
		  		</div>	
   		</li>
   	</ul>
  </div>
</template>

<script>
	import axios from "axios"
	
export default {
  name: 'HelloWorld',
  data () {
    return {
    	list : [],
    	lists :[],
    	message:0,
    }
  },
  mounted : function(){
  	axios.get("/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4_51_1220_1186_1184_1391_1406_1371_1217_5_128_106&app_name=zhe&app_version=&platform=&catname=newest_zhe")
    .then((res)=>{
      this.list = res.data.adsInfo.block[0].multi_block;
      
      for(var i = 0 ; i<6 ; i++){
      	var a = [];
      	for(var j=6+3*i ; j <= 5+3*(i+1); j++){
      		a.push(this.list[j]);
      		console.log(j);
      	}
      		this.lists[i] = a;
      		console.log(this.lists);
      }
    })
  }
}
</script>

<style scoped  src="../../../style/index/beauty.css">

</style>
