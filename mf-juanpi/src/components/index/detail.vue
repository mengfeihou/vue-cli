<template>
	<div id="main">
	</div>
</template>

<script>
import axios from 'axios';
	
export default {
  name: 'Detail',
  data () {
    return {
    	gid:""
    }
  },
  mounted(){
  	this.gid=this.$route.params.gid;
  	console.log(this.gid)
	axios.get("/api/getMemberAboutInfo?goods_id="+this.gid+"&is_pt_goods=0&req_coupons_id="+this.gid)
	.then((res)=>{
		console.log(res)
	})
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
