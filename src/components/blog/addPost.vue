<template>
	<div
		v-show="logined"
		class="w-screen h-screen flex flex-col items-start p-2 pt-4"
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
		<h1 class="font-Dmikh text-right text-green-500 text-xl">افزودن مقاله</h1>
		<div class="flex w-full flex-col items-start font-mikh mt-2">
			<label for="qtitle">عنوان مقاله</label>
			<input
				type="text"
				id="titleinp"
				class="bg-white w-3/4 outline-none border-green-500 border-2 font-mikh p-1 mt-1 rounded-md hover:bg-gray-100"
				placeholder="عنوان سوال خود را وارد کنید"
			/>
		</div>
		<div class="flex w-full flex-col items-start font-mikh mt-2">
			<label for="qtitle">متن مقاله</label>
			<div
				contenteditable="true"
				id="descinp"
				class="bg-white w-3/4 outline-none border-green-500 border-2 font-mikh p-1 mt-2 rounded-md hover:bg-gray-100"
			></div>
		</div>
		<div class="flex w-full flex-col items-start font-mikh mt-2">
			<label for="qtitle">عکس</label>
			<div class="flex flex-col p-2 items-center">
				<form enctype="multipart/form-data" class="flex flex-col items-center">
					<input
						type="file"
						id="upload"
						name="imgUpload"
						ref="imgUpload"
						@change="sendFile"
						class="hidden"
					/>
					<p class="font-mikh text-green-500 mb-2 text-center">
						{{ fileName }}
					</p>
					<label
						for="upload"
						class="font-mikh m-2 text-green-500 border-2 border-green-500 p-1 rounded-md hover:bg-green-500 hover:text-white"
						>انتخاب عکس</label
					>
				</form>
				<img :src="imgUrl" v-if="imgUrl !== ''" class="w-1/4 h-1/4" />
			</div>
		</div>
		<button
			@click="subArt"
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
			<span class="mr-1">ثبت مقاله</span>
		</button>
	</div>
</template>

<script>
import { ref } from "@vue/reactivity";
import axios from "axios";
import { useRouter } from "vue-router";
export default {
	setup() {
		var logined = ref(false);
		var nothide = ref(true);
		var inserted = ref(true);
		var notftext = ref("شما باموفقیت وارد شدی");
		var imgUpload = ref(null);
		var fileName = ref("هیچ فایلی انتخاب نشده است");
		var imgUrl = ref("");
		function sendFile() {
			var formFile = new FormData();
			formFile.append("img", imgUpload.value.files[0]);
			axios
				.post("https://api.nightcode.ml/api/ask", formFile, {
					params: {
						method: "upload",
					},
					headers: {
						"Content-Type": "multipart/form-data",
					},
				})
				.then((resp) => {
					fileName.value = resp.data.data.fileName;
					imgUrl.value = resp.data.data.link;
				})
				.catch((err) => {
					console.log(err);
				});
		}
		function chlog() {
			if (sessionStorage.getItem("auth")) {
				logined.value = true;
			} else {
				var router = useRouter();
				router.push("/signin");
			}
		}
		chlog();
		function subArt() {
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
			axios
				.post("https://api.nightcode.ml/api/blog", null, {
					params: {
						method: "addArt",
						data: JSON.stringify({
							title: title,
							author: author,
							date: now,
							desc: desc,
							img: img,
						}),
					},
				})
				.then((resp) => {
					if (resp.data.inserted) {
						nothide.value = false;
						inserted.value = true;
						notftext.value = "مقاله شما ثبت شد";
					} else {
						if (resp.data.err == "blocked char") {
							nothide.value = false;
							inserted.value = false;
							notftext.value =
								"شما از کاراکترهای ممنوعه استفاده کرده اید!لطفا بعد از اصلاح اطلاعات دوباره تلاش نمایید";
						} else {
							nothide.value = false;
							inserted.value = false;
							notftext.value = "ثبت مقاله شما با مشکل مواجه شد";
						}
					}
					setTimeout(() => {
						nothide.value = true;
					}, 2000);
				});
		}
		return {
			imgUpload,
			sendFile,
			imgUrl,
			fileName,
			nothide,
			notftext,
			inserted,
			subArt,
			logined,
		};
	},
};
</script>

<style></style>
