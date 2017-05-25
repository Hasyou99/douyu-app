<template>
	<div class="root">
		
		<button @click="goback">返回</button>
		
		<h1>分类列表</h1>
	</div>
</template>

<script>
	export default{
		methods:{
			goback(){
				history.back();
			}
		}
	}
</script>

<style scoped>
	.root{
		background-color: red;
	}
</style>