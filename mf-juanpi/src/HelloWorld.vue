<template>
  <div class="hello">
   	<router-link active-class= "active" to="/" exact>财经</router-link>
   	<router-link active-class= "active" to="News">新闻</router-link>
   	<router-view/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active{
	color:red;
}
</style>
