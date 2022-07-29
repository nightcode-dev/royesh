<template>
	<div class="bg-white flex lg:flex-row flex-col-reverse">
		<div
			class="lg:w-2/6 h-screen border-t-2 lg:border-l-2 flex flex-col items-center border-gray-200 p-4 bg-gray-100"
		>
			<p class="font-mikh text-green-500 text-center">راه ارتباطی:</p>
			<div
				class="flex p-1.5 text-center mt-2 font-bold text-sm items-center font-mikh text-green-400 ml-2 bg-green-100 rounded-md"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
					/>
				</svg>
				<p class="mr-1">{{ pro.tel }}</p>
			</div>
			<br />
			<div
				class="mb-2 mt-2 flex flex-col bg-yellow-100 font-mikh text-yellow-400 flex p-1 rounded-md"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
						clip-rule="evenodd"
					/>
				</svg>
				<div>
					رویش به عنوان یک سرویس خدماتی فقط بستر تبلیغ فروشندگان را فراهم می کند
					و در صورت هر اتفاقی هیچ مسیولیتی نمی پذیرد پس در هنگام انتخاب دقت
					نمایید
				</div>
			</div>
		</div>
		<div class="lg:w-4/6 bg-white p-4 lg:shadow-xl">
			<div class="flex flex-col items-center p-4">
				<h1 class="text-green-500 font-Bmikh text-xl mb-2">{{ pro.title }}</h1>
				<img :src="pro.img" class="w-5/6 h-2/6 mt-2 rounded-md" />
				<div class="flex items-center mt-4 mb-4">
					<div
						class="flex p-1.5 mt-2 text-center font-bold text-sm items-center font-mikh text-green-400 ml-2 bg-green-100 rounded-md"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="lg:h-6 lg:w-6 w-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<p class="mr-1 break-all">{{ pro.seller_name }}</p>
					</div>
					<div
						class="flex p-1.5 flex-wrap text-center font-bold text-sm items-center font-mikh text-green-400 ml-2 mt-2 bg-green-100 rounded-md"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="lg:h-6 lg:w-6 w-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
						<p class="mr-1 text-xs break-all">{{ pro.p_date }}</p>
					</div>
					<div
						class="flex p-1.5 mt-2 text-center font-bold text-sm items-center font-mikh text-green-400 ml-2 bg-green-100 rounded-md"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
							/>
						</svg>
						<p class="mr-1 break-all">{{ pro.price }}</p>
					</div>
					<div
						class="flex p-1.5 flex-wrap text-center font-bold text-sm items-center font-mikh text-green-400 ml-2 mt-2 bg-green-100 rounded-md"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
						<p class="mr-1 text-xs break-all">{{ pro.loc }}</p>
					</div>
				</div>
				<p class="w-5/6 font-mikh text-right">{{ pro.descy }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
import { useRoute } from "vue-router";
import { ref } from "@vue/runtime-core";

export default {
	setup() {
		var route = useRoute();
		var pro = ref(null);

		async function getPro() {
			axios
				.post("https://api.nightcode.ml/api/shop", null, {
					params: {
						method: "pro",
						data: JSON.stringify({
							id: route.params.id,
						}),
					},
				})
				.then((resp) => {
					pro.value = resp.data[0];
				})
				.catch((err) => {
					console.log(err);
				});
		}
		getPro();
		return { pro };
	},
};
</script>

<style></style>
