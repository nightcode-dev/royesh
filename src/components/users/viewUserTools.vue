<template>
	<div>
		<div v-show="arts">
			<router-link
				to="/blog/addArticles"
				class="border-2 w-1/6 border-green-500 p-2 font-mikh text-green-500 flex rounded-md w-3/4 mb-4 font-bold justify-center hover:bg-green-500 hover:text-white"
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
						d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<p>افزودن مقاله</p>
			</router-link>
			<div
				v-for="(art, aid) in arList"
				:key="aid"
				class="w-full mb-2 flex flex-col justify-start"
			>
				<div class="w-full">
					<router-link :to="`/article/${art.id}`"
						><h1 class="font-Bmikh pb-2 text-lg text-green-500">
							{{ art.title }}
						</h1></router-link
					>
					<p class="font-mikh">{{ art.descy.slice(0, 100) }}...</p>
				</div>
				<div class="flex justify-around pt-2">
					<div class="flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
						<p class="font-mikh text-sm">{{ art.art_date }}</p>
					</div>
					<div class="flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							/>
						</svg>
						<p class="font-mikh text-sm text-green-500">{{ art.author }}</p>
					</div>
				</div>
				<hr class="bg-gray-100" />
			</div>
		</div>
		<div v-show="ques">
			<div
				v-for="(ques, qid) in qList"
				:key="qid"
				class="w-full mb-2 flex flex-col justify-start"
			>
				<div class="w-full">
					<router-link :to="`/q/0`"
						><h1 class="font-Bmikh pb-2 text-lg text-green-500">
							{{ ques.title }}
						</h1></router-link
					>
					<p class="font-mikh">{{ ques.description.slice(0, 100) }}...</p>
				</div>
				<div class="flex justify-around pt-2">
					<div class="flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
						<p class="font-mikh text-sm">{{ ques.q_date }}</p>
					</div>
					<div class="flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							/>
						</svg>
						<p class="font-mikh text-sm text-green-500">{{ ques.author }}</p>
					</div>
				</div>
				<hr class="bg-gray-100" />
			</div>
		</div>
		<div v-show="media">
			<router-link
				to="/media/addMedia"
				class="border-2 w-1/6 border-green-500 p-2 font-mikh text-green-500 flex rounded-md w-3/4 mb-4 font-bold justify-center hover:bg-green-500 hover:text-white"
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
						d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<p>افزودن ویدیو</p>
			</router-link>
			<div
				v-for="(med, mid) in mList"
				:key="mid"
				class="w-full mb-2 flex flex-col justify-start"
			>
				<div class="w-full">
					<router-link :to="`/article/${med.id}`"
						><h1 class="font-Bmikh pb-2 text-lg text-green-500">
							{{ med.title }}
						</h1></router-link
					>
					<p class="font-mikh">{{ med.descy.slice(0, 100) }}...</p>
				</div>
				<div class="flex justify-around pt-2">
					<div class="flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
						<p class="font-mikh text-sm">{{ med.m_date }}</p>
					</div>
					<div class="flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							/>
						</svg>
						<p class="font-mikh text-sm text-green-500">{{ med.author }}</p>
					</div>
				</div>
				<hr class="bg-gray-100" />
			</div>
		</div>
		<div v-show="products">
			<router-link
				to="/shop/addProduct"
				class="border-2 w-1/6 border-green-500 p-2 font-mikh text-green-500 flex rounded-md w-3/4 mb-4 font-bold justify-center hover:bg-green-500 hover:text-white"
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
						d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
				<p>افزودن محصول</p>
			</router-link>
			<div
				v-for="(pro, pid) in pList"
				:key="pid"
				class="w-full mb-2 flex flex-col justify-start"
			>
				<div class="w-full">
					<router-link :to="`/article/${pro.id}`"
						><h1 class="font-Bmikh pb-2 text-lg text-green-500">
							{{ pro.title }}
						</h1></router-link
					>
					<p class="font-mikh">{{ pro.descy.slice(0, 100) }}...</p>
				</div>
				<div class="flex justify-around pt-2">
					<div class="flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
						<p class="font-mikh text-sm">{{ pro.p_date }}</p>
					</div>
					<div class="flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							/>
						</svg>
						<p class="font-mikh text-sm text-green-500">
							{{ pro.seller_name }}
						</p>
					</div>
				</div>
				<hr class="bg-gray-100" />
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { watch } from "@vue/runtime-core";
import axios from "axios";
export default {
	setup() {
		var arts = ref(false);
		var arList = ref();
		var qList = ref();
		var mList = ref();
		var pList = ref();
		var ques = ref(false);
		var media = ref(false);
		var products = ref(false);
		var route = useRoute();
		watch(arts, () => {
			if (arts) {
				var user = sessionStorage.getItem("username");
				axios
					.post("https://api.nightcode.ml/api/user", null, {
						params: {
							method: "getArts",
							data: JSON.stringify({
								user: user,
							}),
						},
					})
					.then((resp) => {
						arList.value = resp.data;
					})
					.catch((err) => {
						console.log(err);
					});
			}
		});

		watch(media, () => {
			if (media) {
				var user = sessionStorage.getItem("username");
				axios
					.post("https://api.nightcode.ml/api/user", null, {
						params: {
							method: "getMed",
							data: JSON.stringify({
								user: user,
							}),
						},
					})
					.then((resp) => {
						mList.value = resp.data;
					})
					.catch((err) => {
						console.log(err);
					});
			}
		});

		watch(products, () => {
			if (products) {
				var user = sessionStorage.getItem("username");
				axios
					.post("https://api.nightcode.ml/api/user", null, {
						params: {
							method: "getPros",
							data: JSON.stringify({
								user: user,
							}),
						},
					})
					.then((resp) => {
						pList.value = resp.data;
					})
					.catch((err) => {
						console.log(err);
					});
			}
		});

		watch(ques, () => {
			if (ques) {
				var user = sessionStorage.getItem("username");
				axios
					.post("https://api.nightcode.ml/api/user", null, {
						params: {
							method: "getQues",
							data: JSON.stringify({
								user: user,
							}),
						},
					})
					.then((resp) => {
						qList.value = resp.data;
					})
					.catch((err) => {
						console.log(err);
					});
			}
		});
		function getRoute() {
			var tool = route.params.tool;
			if (tool == "articles") {
				arts.value = true;
				ques.value = false;
				media.value = false;
				products.value = false;
			} else if (tool == "questions") {
				arts.value = false;
				ques.value = true;
				media.value = false;
				products.value = false;
			} else if (tool == "media") {
				arts.value = false;
				ques.value = false;
				media.value = true;
				products.value = false;
			} else if (tool == "products") {
				arts.value = false;
				ques.value = false;
				media.value = false;
				products.value = true;
			}
		}
		getRoute();
		return { arts, ques, arList, qList, media, products, pList, mList };
	},
};
</script>

<style></style>
