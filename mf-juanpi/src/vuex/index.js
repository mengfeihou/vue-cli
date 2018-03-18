import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);//use代表使用插件

const store = new Vuex.Store({
	state:{
		list:[]
	},
	mutations:{
		addGoodsM:function(state,data){
			state.list.push(data);
		}
	},
	actions:{
		addGoodsA:function({commit},data){
			commit("addGoodsM",data)
		}
	}
})

export default store;