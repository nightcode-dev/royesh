<template>
	<div>
		<div
			class="bg-green-500 w-full flex flex-col items-center py-8 lg:px-64 lg:flex-row lg:justify-between"
		>
			<div class="w-64 h-64 bg-white shadow-sm rounded-full">
				<img src="../assets/planting.png" class="select-none" />
			</div>
			<div class="w-80 text-center">
				<h1 class="font-Dmikh m-4">تو هم قهرمان باش</h1>
				<p class="font-mikh text-white">
					شاید فکر کنی قهرمان بودن سخته ولی یکی از بزرگترین راه ها برای قهرمان
					شدن کمک به همین زمین خودمونه تو این اوضاع که با پیشرفت تکنولوژی و بی
					توجهی ادما زمین داره نابود میشه بیا تا با پرورش گل و گیاه هم اطرافت رو
					آباد کنی هم یک کمک هر چند کوچک به زمین بکنی
				</p>
			</div>
		</div>
		<div
			class="bg-white w-full flex flex-col items-center lg:justify-between lg:flex-row-reverse justify-between py-8 lg:px-64"
		>
			<div class="w-64 h-64 bg-gray-100 p-8 shadow-sm rounded-full">
				<img src="../assets/tools.png" class="select-none" />
			</div>
			<div class="w-80 text-center">
				<h1 class="font-Dmikh text-green-500 m-4">کار رویش پس چیه؟</h1>
				<p class="font-mikh text-black">
					رویش تمام تلاشش رو می کنه تا با همراه کردن دانش جامعه و تیم توسعه رویش
					به شما در این راه کمک کنه این یعنی چی؟ این یعنی هر جا تو این راه گیج
					شدی یا سوالی داشتی تیم توسعه رویش پشتته ما با فراهم کردن امکانات به
					شما کمک می کنیم تا سوال خودتون رو از مردم بپرسید
				</p>
			</div>
		</div>
		<div
			class="bg-green-500 w-full flex flex-col justify-center items-center py-8"
		>
			<h1 class="font-Dmikh text-white text-center text-3xl mb-8">امکانات</h1>
			<div
				class="bg-white w-11/12 flex flex-col items-center lg:flex-row lg:justify-between py-8 px-44 rounded-md"
			>
				<div class="w-64 h-64 bg-gray-100 p-8 shadow-sm rounded-full">
					<img src="../assets/asking.png" class="select-none" />
				</div>
				<div class="w-80 text-center">
					<h1 class="font-Dmikh text-green-500 m-4">پرسش و پاسخ</h1>
					<p class="font-mikh text-black">
						یکی از امکانات شگفت انگیز وبسایت رویش بخش پرسش و پاسخش هست تو این
						بخش ما امکاناتی براتون فراهم کردیم تا سوالتون رو با بقیه در میون
						بگذارید تا اگه چیزی می دونن برامون بگن پس همین الان تو سایت یک اکانت
						بساز و اگه سوال داری بپرس حتی برعکس اگه پاسخ سوالی رو می دونی کمک کن
						<br /><button
							@click="goToQ"
							class="mt-8 select-none text-green-500 p-2 rounded-md border-2 border-green-400 hover:text-white hover:bg-green-500"
						>
							برو به پرسش ها
						</button>
					</p>
				</div>
			</div>
			<div
				class="bg-white w-11/12 flex flex-col items-center lg:flex-row-reverse mt-8 lg:justify-between py-8 px-44 rounded-md"
			>
				<div class="w-64 h-64 bg-gray-100 p-8 shadow-sm rounded-full">
					<img src="../assets/Blog.png" class="select-none" />
				</div>
				<div class="w-80 text-center">
					<h1 class="font-Dmikh text-green-500 m-4">بلاگ</h1>
					<p class="font-mikh text-black">
						یکی دیگه از امکانات پرکاربرد سایت رویش بلاگ هست که در اون تمام
						کاربران سایت توانایی انتشار مقاله دارن اینطوری اگه کسی چیزی می دونه
						می تونه با بقیه هم درمیون بذاره تازه اینطوری برخی از سوالات هم بدون
						هیچ پرسشی پاسخ داده میشه پس همین الان در سایت ثبت نام کن و اگه تو هم
						چیزی می دونی باانتشار محتوا بقیه کاربر ها هم اگاه کن

						<br /><button
							@click="goToB"
							class="mt-4 select-none text-green-500 p-2 rounded-md border-2 border-green-400 hover:text-white hover:bg-green-500"
						>
							برو به بلاگ
						</button>
					</p>
				</div>
			</div>
		</div>
		<div class="bg-white w-full flex flex-row justify-center py-8 px-auto">
			<br /><br />
		</div>
		<div
			class="bg-green-500 p-2 w-full flex flex-col items-center lg:flex-row lg:justify-between py-8 lg:px-24"
		>
			<div class="">
				<h1 class="text-right font-Bmikh text-black">درباره رویش</h1>
				<hr class="w-full bg-white mt-2 h-0.5" />
				<p class="text-white mt-2 text-right font-mikh">
					پروژه ای رویش یک طرح پژوهشی هست که برای جشنواره خوارزمی تولید شده است
					این پروژه توسط آقای امیرحسین آخوندزاده طراحی کردند و این طرح از طرف
					سیستان و بلوچستان شهر کنارک برای جشنواره خوارزمی اماده گشته است
				</p>
			</div>
			<div class="p-4">
				<img src="../assets/javan.png" class="h-44" />
			</div>
		</div>
		<div class="w-full bg-green-400 flex justify-center">
			<h1 class="text-center font-mikh text-white">
				تمام حقوق این سایت برای
				<b class="font-Bmikh"> امیرحسین آخوندزاده </b>محفوظ است و هر گونه کپی
				برداری حرام است
			</h1>
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
	setup() {
		var title = ref("home");
		var router = useRouter();
		function goToQ() {
			router.push("/questions");
		}
		function goToB() {
			router.push("/blog");
		}
		return { title, goToQ, goToB };
	},
};
</script>

<style></style>
