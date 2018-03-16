<template>
  <div id="main">
  	<div id="nav">
	  	<ul>
	  		<li v-for="item in nav_list" :id="item.item" @click="abc($event)">
	  			 	{{item.title}}
	  		</li>
	  	</ul>
  	</div>
  	<div id="content">
  	<div class="goods" v-for="item in arr_list">
  		<a :href="item.goods_jump_url">
  			<div class="imgs">
  				<img v-lazy="item.pic_url" />
  			</div>
  			<div class="text">
  				<i v-if="item.cprice!=''">¥{{item.cprice}}</i>
					<span>{{item.title}}</span>
  			</div>
  		</a>
  	</div>
 	 </div>
  </div>
</template>

<script>
import axios from 'axios';
	
export default {
  name: 'Choiceness',
  data () {
    return {
    	nav_list:[],
    	arr_list:[],
    	arr:{
    	xbsytj:[],
    	xbsytab1:[],
    	xbsytab2:[],
    	xbsytab3:[],
    	xbsytab4:[],
    	xbsytab5:[],
    	xbsytab6:[],
    	xbsytab7:[],
    	xbsytab8:[],
    	xbsytab9:[],
    	xbsytab10:[],
    	},
    }
  },
  components:{
  	
  },
  methods:{
  	abc:function(event){
  		console.log(event.target.id);
  		var item=event.target.id;
  		if(this.arr[item]==""){
	  		axios.get("/api/getGoods?page=2&zy_ids=p8_c4_l4_1456_1220_1186_1406_1184_1217_1371_5_128_106_51_18_1391&app_name=zhe&catname="+item+"&flag="+item)
		  	.then((res)=>{
		  		this.arr[item]=res.data.data.goods;
		  		this.arr_list=this.arr[item];
		  		console.log(this.arr_list)
		  	})
  		}else{
		  		this.arr_list=this.arr[item];
  		}
  	}
  },
  mounted(){
  	axios.get("/api/getGoods?page=1&zy_ids=p8_c4_l4_1456_1220_1186_1406_1184_1217_1371_5_128_106_51_18_1391&app_name=zhe&catname=xbsytj&flag=xbsytj")
  	.then((res)=>{
  		this.arr.xbsytj=res.data.data.goods;
  		this.arr_list=this.arr.xbsytj;
  	}),
  	axios.get("/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4_1456_1220_1186_1406_1184_1217_1371_5_128_106_51_18_1391&app_name=zhe&app_version=&platform=&catname=newest_zhe")
  	.then((res)=>{
			this.nav_list=res.data.menuInfo.app_menu.menulist[0].subtab[0].child_tab;
			console.log(res.data.menuInfo.app_menu.menulist[0].subtab[0]);
				
  	})
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#main{
		height: 100%;
		overflow: hidden;
	}
	#nav{
		height: .44rem;
		background: white;
		overflow: auto;
	}
	#nav ul{
		width: 6rem;
		height: .44rem;
		background: white;
	}
	
	#nav ul li{
		float: left;
		height: 100%;
		line-height: .44rem;
		padding:0 .1rem;
		font-size:0.16rem;
		color: #ff464e;
		/*border-bottom: 4px solid #ff464e;*/
	}
	#content{
		display: flex;
		flex-wrap: wrap;
		font-size: .07rem;
		justify-content: space-between;
	}
	#content .goods{
		background: white;
	}
	#content a{
		color: #3b3b3b;
	}
	#content a .text{
		width:1.865rem;
		padding: 0 .08rem;
	}
	#content a i{
		font-size: .14rem;
		color: #ff464e;
		height: .25rem;
	}
	#content a span{
		margin-bottom: .12rem;
	}
	.imgs img{
		width:1.865rem;
	}
</style>
