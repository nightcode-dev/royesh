<template>
	<div class="w-full h-full">
		<div
			class="w-full bg-gray-200 z-50 flex items-center justify-between h-12 p-4 shadow-md shadow-black"
		>
			<div>
				<div class="lg:hidden" :class="{ 'mr-auto': open }">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						@click.self="opening"
						:class="{ hidden: open }"
						class="h-6 w-6 z-20"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						@click.self="closing"
						:class="{ hidden: close }"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</div>
				<div
					class="flex flex-col items-center pt-12 fixed h-screen top-0 right-0 overflow-hidden duration-1000 bg-green-500 lg:h-auto lg:w-full lg:flex lg:flex-row lg:items-start lg:bg-transparent lg:mt-4 lg:mr-auto lg:p-0 lg:static"
					:class="{ 'w-0': close, 'w-1/2 md:w-1/4 shadow-2xl': open }"
				>
				<router-link
						to="/shop"
						@click="closing"
						active-class="text-xl lg:text-sm lg:text-green-300 lg:font-bold"
						class="font-mikh text-white m-2 lg:text-black lg:m-0 lg:mr-2 lg:ml-2 lg:text-sm text-lg"
						>فروشگاه</router-link
					>
					<router-link
						to="/media"
						@click="closing"
						active-class="text-xl lg:text-sm lg:text-green-300 lg:font-bold"
						class="font-mikh text-white m-2 lg:text-black lg:m-0 lg:mr-2 lg:ml-2 lg:text-sm text-lg"
						>ویدیوها</router-link
					>
					<router-link
						to="/blog"
						@click="closing"
						active-class="text-xl lg:text-sm lg:text-green-300 lg:font-bold"
						class="font-mikh text-white m-2 lg:text-black lg:m-0 lg:mr-2 lg:ml-2 lg:text-sm text-lg"
						>بلاگ</router-link
					>
					<router-link
						to="/questions"
						@click="closing"
						active-class="text-xl lg:text-sm lg:text-green-300 lg:font-bold"
						class="font-mikh text-white m-2 lg:text-black lg:m-0 lg:mr-2 lg:ml-2 lg:text-sm text-lg"
						>پرسش ها
					</router-link>
					<router-link
						to="/"
						@click="closing"
						active-class="text-xl lg:text-sm lg:text-green-300 lg:font-bold"
						class="font-mikh text-white m-2 lg:text-black lg:m-0 lg:mr-2 lg:ml-2 lg:text-sm text-lg"
						>خانه</router-link
					>
				</div>
			</div>
			<div class="flex">
				<img src="./assets/logo.png" class="h-20 p-4" />
				<img
					src="./assets/user.png"
					@click="goUser"
					class="h-12 my-auto rounded-full"
				/>
			</div>
		</div>
		<div
			class="h-full w-full z-0 overflow-hidden"
			:class="{ 'md:mr-1/4 mr-1/2': open }"
			@click="closing"
		>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
	setup() {
		var close = ref(true);
		var open = ref(false);
		var router = useRouter();
		function goUser() {
			var userAuth = sessionStorage.getItem("auth");
			console.log(userAuth);
			if (userAuth == "true") {
				router.push("/panel");
			} else {
				router.push("/signin");
			}
		}
		function opening() {
			open.value = true;
			close.value = false;
		}
		function closing() {
			open.value = false;
			close.value = true;
		}

		return { close, open, opening, closing, goUser };
	},
};
</script>

<style></style>
