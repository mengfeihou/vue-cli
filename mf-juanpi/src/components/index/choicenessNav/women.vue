<template>
  <div class="hello">
  	Women
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Women',
  data () {
    return {
    	
    }
  },
  components:{
  	
  },
  mounted(){
  	axios.get("/api/getGoods?page=1&zy_ids=p8_c4_l4_1456_1220_1186_1406_1184_1217_1371_5_128_106_51_18_1391&app_name=zhe")
  	.then((res)=>{
  		console.log(res)
  	})
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
</style>
