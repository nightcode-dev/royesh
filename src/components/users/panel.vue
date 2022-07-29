<template>
	<div class="flex lg:flex-row flex-col w-full pt-1 h-full">
		<div
			class="lg:w-2/6 border-t-2 lg:border-t-0 lg:border-l-2 flex flex-col items-center border-gray-200 p-4 bg-gray-100"
		>
			<h1 class="text-green-500 text-xl font-Bmikh">{{ username }}</h1>
			<div class="font-mikh w-full mt-4">
				<p class="text-green-500 text-center">امکانات:</p>
				<router-link
					to="/panel/articles"
					class="flex p-1.5 text-center mt-2 font-bold text-sm items-center font-mikh text-green-400 ml-2 bg-green-100 rounded-md"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
							clip-rule="evenodd"
						/>
					</svg>
					<p class="mr-1">مقالات من</p>
				</router-link>
				<router-link
					to="/panel/questions"
					class="flex p-1.5 text-center font-bold mt-2 text-sm items-center font-mikh text-green-400 ml-2 bg-green-100 rounded-md"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
							clip-rule="evenodd"
						/>
					</svg>
					<p class="mr-1">سوالات من</p>
				</router-link>
				<router-link
					to="/panel/media"
					class="flex p-1.5 text-center font-bold mt-2 text-sm items-center font-mikh text-green-400 ml-2 bg-green-100 rounded-md"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
							clip-rule="evenodd"
						/>
					</svg>
					<p class="mr-1">ویدیو های من</p>
				</router-link>
				<router-link
					to="/panel/products"
					class="flex p-1.5 text-center font-bold mt-2 text-sm items-center font-mikh text-green-400 ml-2 bg-green-100 rounded-md"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
							clip-rule="evenodd"
						/>
					</svg>
					<p class="mr-1">محصولات من</p>
				</router-link>
			</div>
		</div>
		<div class="lg:w-4/6 bg-white p-4 lg:shadow-xl">
			<router-view :key="$route.fullPath"></router-view>
		</div>
	</div>
</template>

<script>
export default {
	setup() {
		var username = sessionStorage.getItem("username");
		return { username };
	},
};
</script>

<style></style>
