<template>
  <div class="hello">
			<footer>
					<ul>
						<li v-for="item in list">
							<a href="#">
								<span>
									<img :src="item.act_icon" />
								</span>
								<h3>{{item.title}}</h3>
							</a>
						</li>
					</ul>
			</footer>
			
  </div>
</template>

<script>
import axios from 'axios'
	
export default {
  name: 'IndexFooter',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list : []
    }
  },
  mounted : function(){
  	axios.get('/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l1_0&app_name=zhe&app_version=&platform=&catname=newest_zhe')
	  .then((response)=> {
	    console.log(response.data.menuInfo.app_menu.menulist);
	    this.list = response.data.menuInfo.app_menu.menulist;
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src = "../../../style/componentCss/IndexFooter.css">

</style>
