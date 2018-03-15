<template>
  <div class="hello">
   	<ul class="beauty">
   		<li>
   			<div>
	   			<a href="#">
	   				<img v-lazy="list_one_aone" />
	   			</a>
	   		</div>	
	   		<div>
	   			<a href="#" v-for="item in list_one_atwo">
	   				<img v-lazy="item.child[0].pic" />
	   			</a>
	   		</div>	
	   		<div>
	   			<a href="#" v-for="item in list_one_athree">
	   				<img v-lazy="item.child[0].pic" />
	   			</a>
	   		</div>	
   		</li>
   		
   		<li>
   			<div>
	   			<a href="#">
	   				<img v-lazy="list_two_aone" />
	   			</a>
	   		</div>	
	   		<div>	
	   			<a href="#" v-for="item in list_two_atwo">
	   				<img v-lazy="item.child[0].pic" />
	   			</a>
	   		</div>	
	   		<div>	
	   			<a href="#" v-for="item in list_two_athree">
	   				<img v-lazy="item.child[0].pic" />
	   			</a>
	   		</div>
   		</li>
   		
   		<li>
   			<div>
	   			<a href="#">
	   				<img v-lazy="list_three_aone" />
	   			</a>
	   		</div>
	   		<div>
	   			<a href="#" v-for="item in list_three_atwo">
	   				<img v-lazy="item.child[0].pic" />
	   			</a>
	   		</div>	
	   		<div>	
	   			<a href="#" v-for="item in list_three_athree">
	   				<img v-lazy="item.child[0].pic" />
	   			</a>
	   		</div>	
   		</li>
   		
   		<li>
   			<div>
	   			<a href="#">
	   				<img v-lazy="list_four_aone" />
	   			</a>
	   		</div>	
	   		<div>
	   			<a href="#" v-for="item in list_four_atwo">
	   				<img v-lazy="item.child[0].pic" />
	   			</a>
	   		</div>	
	   		<div>
	   			<a href="#" v-for="item in list_four_athree">
	   				<img v-lazy="item.child[0].pic" />
	   			</a>
	   		</div>	
   		</li>
   		
   		<li>
   			<div>
	   			<a href="#">
	   				<img v-lazy="list_five_aone" />
	   			</a>
	   		</div>	
	   		<div>
	   			<a href="#" v-for="item in list_five_atwo">
	   				<img v-lazy="item.child[0].pic" />
	   			</a>
	   		</div>	
	   		<div>
	   			<a href="#" v-for="item in list_five_athree">
	   				<img v-lazy="item.child[0].pic" />
	   			</a>
	   		</div>
   		</li>
   		
   		<li>
   			<div>
	   			<a href="#">
	   				<img v-lazy="list_six_aone" />
	   			</a>
	   		</div>	
	   		<div>
	   			<a href="#" v-for="item in list_six_atwo">
	   				<img  v-lazy="item.child[0].pic" />
	   			</a>
	   		</div>	
	   		<div>
	   			<a href="#" v-for="item in list_six_athree">
	   				<img v-lazy="item.child[0].pic" />
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
      list_one_aone : [],
      list_one_atwo : [],
      list_one_athree : [],
      
       list_two_aone : [],
      list_two_atwo : [],
      list_two_athree : [],
      
       list_three_aone : [],
      list_three_atwo : [],
      list_three_athree : [],
      
       list_four_aone : [],
      list_four_atwo : [],
      list_four_athree : [],
      
       list_five_aone : [],
      list_five_atwo : [],
      list_five_athree : [],
      
       list_six_aone : [],
      list_six_atwo : [],
      list_six_athree : [],
    }
  },
  mounted : function(){
  	axios.get("/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4_51_1220_1186_1184_1391_1406_1371_1217_5_128_106&app_name=zhe&app_version=&platform=&catname=newest_zhe")
    .then((res)=>{
      console.log(res.data.adsInfo.block[0].multi_block);
      this.list_one_aone = res.data.adsInfo.block[0].multi_block[7].data[0].child[0].pic;
      this.list_one_atwo = res.data.adsInfo.block[0].multi_block[8].data;
      this.list_one_athree = res.data.adsInfo.block[0].multi_block[9].data;
    
    	 this.list_two_aone = res.data.adsInfo.block[0].multi_block[10].data[0].child[0].pic;
      this.list_two_atwo = res.data.adsInfo.block[0].multi_block[11].data;
      this.list_two_athree = res.data.adsInfo.block[0].multi_block[12].data;
      
       this.list_three_aone = res.data.adsInfo.block[0].multi_block[13].data[0].child[0].pic;
      this.list_three_atwo = res.data.adsInfo.block[0].multi_block[14].data;
      this.list_three_athree = res.data.adsInfo.block[0].multi_block[15].data;
      
       this.list_four_aone = res.data.adsInfo.block[0].multi_block[16].data[0].child[0].pic;
      this.list_four_atwo = res.data.adsInfo.block[0].multi_block[17].data;
      this.list_four_athree = res.data.adsInfo.block[0].multi_block[18].data;
      
       this.list_five_aone = res.data.adsInfo.block[0].multi_block[19].data[0].child[0].pic;
      this.list_five_atwo = res.data.adsInfo.block[0].multi_block[20].data;
      this.list_five_athree = res.data.adsInfo.block[0].multi_block[21].data;
      
       this.list_six_aone = res.data.adsInfo.block[0].multi_block[22].data[0].child[0].pic;
      this.list_six_atwo = res.data.adsInfo.block[0].multi_block[23].data;
      this.list_six_athree = res.data.adsInfo.block[0].multi_block[24].data;
    console.log(res.data.adsInfo.block[0].multi_block[7].data[0].child[0].pic);
/*   		this.list1 = res.data.adsInfo.block[0].multi_block[4].data;
   		this.list2 = res.data.adsInfo.block[0].multi_block[5].data;
   		this.list3 = res.data.adsInfo.block[0].multi_block[6].data;*/
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  src="../../../style/index/beauty.css">

</style>
