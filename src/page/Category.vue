<template>
	<div>
		<NavBar>全部分类</NavBar>
		<!--<div class="gamelist">
			<GameItem v-for="g in gameList" :game="g"></GameItem>
		</div>-->
		
		<router-link to="/category/list">进入二级页面</router-link>
		
		
		
	</div>
</template>

<script>
	
	import GameItem from "../components/GameItem.vue";
	
	export default{
		
		components:{
			GameItem
		},
		
		data:function(){
			return {
				gameList:[]
			}
		},
		
		mounted:function(){
//			this.requestData();
		},
		
		methods:{
			requestData(){
				this.$ajax.get("/douyu/api/RoomApi/game")
				.then(function(res){
//					console.dir(res.data);
					this.gameList = res.data.data;
				}.bind(this));
			}
		}
		
	}
</script>

<style scoped>
	.gamelist{
		display: flex;
		flex-wrap: wrap;
	}
</style>