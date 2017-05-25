import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from "../page/Home.vue";
import Category from "../page/Category.vue";
import CategoryList from "../page/CategoryList.vue";

export default new Router({
  routes: [
    {
    	path:"/",
    	component:Home
    },
    {
    	path:"/category",
    	component:Category
    },
    {
    	path:"/category/list",
    	component:CategoryList
    },
  ]
})
