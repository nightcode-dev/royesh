<template>
	<div
		v-show="logined"
		class="w-full h-full flex flex-col items-start p-2 pt-4"
	>
		<div
			:class="{
				hidden: nothide,
				'bg-green-300': inserted,
				'bg-red-300': !inserted,
			}"
			class="w-2/6 text-center p-4 mb-2 backdrop-blur-sm backdrop-grayscale w-2/4"
		>
			<p class="font-mikh text-md">
				{{ notftext }}
			</p>
		</div>
		<h1 class="font-Dmikh text-right text-green-500 text-xl">افزودن ویدیو</h1>
		<div class="flex w-full flex-col items-start font-mikh mt-2">
			<label for="qtitle">عنوان ویدیو</label>
			<input
				type="text"
				id="titleinp"
				class="bg-white w-3/4 outline-none border-green-500 border-2 font-mikh p-1 mt-1 rounded-md hover:bg-gray-100"
				placeholder="عنوان ویدیو خود را وارد کنید"
			/>
		</div>
		<div class="flex w-full flex-col items-start font-mikh mt-2">
			<label for="qtitle">متن ویدیو</label>
			<div
				contenteditable="true"
				id="descinp"
				class="bg-white w-3/4 outline-none border-green-500 border-2 font-mikh p-1 mt-2 rounded-md hover:bg-gray-100"
			></div>
		</div>
		<div class="flex w-full flex-col items-start font-mikh mt-2">
			<label for="qtitle"> ویدیو</label>
			<div class="flex">
				<input
					type="website"
					v-model="vidUrl"
					class="bg-white w-3/4 outline-none border-green-500 border-2 font-mikh p-1 mt-1 mr-1 rounded-md hover:bg-gray-100"
					placeholder="لینک ویدیو خود را وارد کنید"
				/>
			</div>
			<div class="flex w-full flex-col items-start font-mikh mt-2">
				<label for="qtitle">کاور ویدیو</label>
				<div class="flex">
					<input
						type="website"
						v-model="imgUrl"
						class="bg-white w-3/4 outline-none border-green-500 border-2 font-mikh p-1 mt-1 mr-1 rounded-md hover:bg-gray-100"
						placeholder="لینک تصویر خود را وارد کنید"
					/>
				</div>
				<router-link
					to="/uploadImg"
					class="border-2 font-mikh border-green-500 p-1 mt-4 rounded-md bg-green-500 text-white flex justify-center"
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
							d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
						/>
					</svg>
					اپلود
				</router-link>
			</div>
			<button
				@click="subMed"
				class="border-2 w-28 font-mikh border-green-500 p-1 mt-4 rounded-md bg-green-500 text-white flex justify-center"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
						clip-rule="evenodd"
					/>
				</svg>
				<span class="mr-1">ثبت ویدیو</span>
			</button>
		</div>
	</div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
	setup() {
		var logined = ref(true);
		var nothide = ref(true);
		var inserted = ref(true);
		var notftext = ref("شما باموفقیت وارد شدی");
		var vidUrl = ref("");
		var imgUrl = ref("");

		function chlog() {
			if (sessionStorage.getItem("auth")) {
				logined.value = true;
			} else {
				var router = useRouter();
				router.push("/signin");
			}
		}
		chlog();

		function subMed() {
			var date = new Date();
			var dtopt = {
				year: "numeric",
				month: "long",
				day: "numeric",
			};
			var now = date.toLocaleDateString("fa-IR", dtopt);
			var author = sessionStorage.getItem("username");
			var title = document.getElementById("titleinp").value;
			var desc = document.getElementById("descinp").innerHTML;
			var img = imgUrl.value;
			var vid = vidUrl.value;
			axios
				.post("https://api.nightcode.ml/api/media", null, {
					params: {
						method: "addMed",
						data: JSON.stringify({
							title: title,
							author: author,
							date: now,
							desc: desc,
							img: img,
							video: vid,
						}),
					},
				})
				.then((resp) => {
					if (resp.data.inserted) {
						nothide.value = false;
						inserted.value = true;
						notftext.value = "ویدیو شما ثبت شد";
					} else {
						if (resp.data.err == "blocked char") {
							nothide.value = false;
							inserted.value = false;
							notftext.value =
								"شما از کاراکترهای ممنوعه استفاده کرده اید!لطفا بعد از اصلاح اطلاعات دوباره تلاش نمایید";
						} else {
							nothide.value = false;
							inserted.value = false;
							notftext.value = "ثبت ویدیو شما با مشکل مواجه شد";
						}
					}
					setTimeout(() => {
						nothide.value = true;
					}, 2000);
				});
		}
		return {
			logined,
			nothide,
			inserted,
			notftext,
			vidUrl,
			imgUrl,
			subMed,
		};
	},
};
</script>

<style></style>
