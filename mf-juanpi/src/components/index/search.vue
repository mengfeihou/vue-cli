<template>
  <div class="hello">
		<header class="head">
			<a href="#">
				<img src="../../../static/imgs/search_txt.png" />
				<i>搜索</i>
			</a>
			<img src="../../../static/imgs/search_r.png" />
		</header>
  </div>
</template>

<script>
	import axios from "axios"
	
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  mounted : function(){
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
		.head{
			background:#fff;
			height:0.4rem;
			display:flex;
			align-items:center;
			a{
				margin-left:0.14rem;
				flex:1;
				height:0.26rem;
				background:#f2f2f2;
				border-radius:5px;
				display:flex;
				align-items:center;
				i{
					color:#666;
					font-size:0.14rem;
				}
				img{
					width:0.20rem;
					height:0.14rem;
				}
			}
			img{
				width: 0.40rem;
				height:0.40rem;
			}
		}
	
</style>
