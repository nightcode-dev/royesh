<template>
	<div>
		<div>
			<div class="flex flex-col w-full pt-1 h-full">
				<div
					class="w-screen border-r-2 flex flex-col border-gray-100 p-4 bg-gray-100 items-center"
				>
					<h1 class="font-Dmikh text-green-500 text-xl mb-2">مقالات</h1>
					<div class="flex items-center">
						<input
							type="search"
							id="searchbox"
							placeholder="مقاله مورد نظر خود را جستجو کنید"
							class="outline-none bg-white border-2 p-2 rounded-md font-mikh focus:border-green-500 focus:bg-gray-100 focus:shadow-sm"
						/>
						<button
							type="submit"
							@click="searching"
							class="mr-2 bg-green-500 w-10 h-10 p-2 rounded-md"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="white"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div class="flex flex-col">
					<div class="flex flex-col items-center">
						<div class="w-full flex justify-center flex-wrap">
							<div
								v-for="(post, pid) in posts"
								:key="pid"
								class="lg:w-1/6 md:w-1/3 w-full mx-16 m-4 max-h-fit rounded-md shadow-lg bg-gray-100 flex flex-col"
							>
								<img :src="post.imgLink" class="w-full h-1/2" />
								<div class="h-fit max-h-fit w-full p-2">
									<router-link :to="`/article/${post.id}`"
										><h1 class="text-green-500 font-Bmikh text-xl mb-2">
											{{ post.title }}
										</h1></router-link
									>
									<p class="font-mikh mb-2 text-sm">
										{{ post.descy.slice(0, 70) }}...
									</p>
									<div class="flex p-2">
										<div
											class="flex p-1.5 flex-wrap text-center font-bold text-sm items-center font-mikh text-green-400 ml-2 bg-green-100 rounded-md"
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
											<p class="mr-1 text-xs">{{ post.art_date }}</p>
										</div>
										<div
											class="flex p-1.5 text-center font-bold text-sm items-center font-mikh text-green-400 ml-2 bg-green-100 rounded-md"
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
											<p class="mr-1">{{ post.author }}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
export default {
	setup() {
		var posts = ref([]);
		async function getArts() {
			await axios
				.post("https://api.nightcode.ml/api/blog", null, {
					params: {
						method: "arts",
					},
				})
				.then((resp) => {
					posts.value = resp.data;
				})
				.catch((err) => {
					console.log(err);
				});
		}
		function searching() {
			var searchBox = document.getElementById("searchbox");
			axios
				.post("https://api.nightcode.ml/api/blog", null, {
					params: {
						method: "search",
						data: { search: searchBox.value },
					},
				})
				.then((resp) => {
					if (!resp.data.err) {
						posts.value = resp.data;
					} else {
						posts.value = [];
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
		getArts();
		return { posts, searching };
	},
};
</script>

<style></style>
