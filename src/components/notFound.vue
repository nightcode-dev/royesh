<template>
	<div class="p-8 flex flex-col items-center justify-center h-screen">
		<div class="p-4 flex justify-center items-center">
			<img src="../assets/404.png" class="h-80" />
		</div>
		<div class="p-4 flex flex-col justify-center items-center">
			<h1 class="font-Dmikh text-green-500 text-3xl">
				صفحه ی مورد نظر یافت نشد
			</h1>
			<router-link
				to="/"
				class="font-mikh mt-8 select-none text-green-500 p-2 rounded-md border-2 border-green-400 hover:text-white hover:bg-green-500"
			>
				بازگشت
			</router-link>
		</div>
	</div>
</template>
<script>
export default {
	setup() {},
};
</script>
<style></style>
