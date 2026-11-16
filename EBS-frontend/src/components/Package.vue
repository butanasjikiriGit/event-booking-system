<script setup>
	
	import packageData from '../data/Package.json';

</script>

<template>
	
	<div class="container pt-5">
		<div class="row">

			<div class="package-headings">
				<p><i class="bi bi-bookmark-fill"></i> CURATED VIP TIERS</p>
				<p>Find Your Perfect Concert Experience</p>
				<p>Choose the level of access you love - from intimate 1 on 1 artist encounters to relaxed lounge hospitality before the main lights dim.</p>
			</div>
			
			<div class="col-12 col-md-6 col-lg-4 mb-4" v-for="pkg in packageData" :key="pkg.id">
				<div class="package-box">
					<p>{{pkg.capacity}} {{pkg.capacity > 1 ? 'Slots Left' : 'Slot Left'}}</p>
					<p>{{pkg.name}}</p>
					<h3>${{pkg.price}} <p class="price">{{pkg.currency}} / Guest</p></h3>
					<p>{{pkg.description}}</p>
					<div class="inclusions" v-for="inc in pkg.inclusions" :key="inc.inclusion_id">
						<ul>
							<li><i class="bi bi-check-circle-fill"></i> {{inc.inc_desc}}</li>
						</ul>
					</div>
					<hr>
					<button class="book-btn">Book Package <i class="bi bi-arrow-right"></i></button>
				</div>
			</div>

		</div>
		<div class="row pt-5">
			<div class="col-12">
				<div class="explore">
					<p><i class="bi bi-shield-check"></i></p>
					<div class="inner-explore">
						<p>The 100% Verified Buyer & Capacity Guarantee</p>
						<p>Every pass is direct from the event organizer with strict database slot tracking to prevent double-booking.</p>
					</div>
					<button class="explore-btn">Explore All Packages <i class="bi bi-arrow-right"></i></button>
				</div>
			</div>
		</div>
	</div>

</template>

<style scoped>

	.package-headings{
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.package-headings :nth-child(1){
		color: #D97757;
		font-size: 12px;
		font-weight: bold;
	}

	.package-headings :nth-child(2){
		font-size: 36px;
		font-weight: bold;
		color: #2B2F38;
		margin: 0;
	}

	.package-headings :nth-child(3){
		font-size: 16px;
		color: #595E6B;
		margin: 0;
		margin-bottom: 20px;
	}




	

	.package-box{
		display: flex;
		flex-direction: column;
		background-color: #FFFFFF;
		border: solid 1px #EAE5DE;
		border-radius: 30px;
		padding: 20px;
		box-shadow: 0px 0px 20px #E8E8E8;
		position: relative;
		cursor: pointer;
	}

	.package-box:hover{
		outline: solid 2px #D97757;
	}

	.package-box :nth-child(1){
		margin-left: auto;
		font-size: 12px;
		color: #D97757;
		border-radius: 100px;
		background-color: #FDECE7;
		font-weight: bold;
		padding: 5px 15px;
	}

	.package-box :nth-child(2){
		color: #2B2F38;
		font-size: 24px;
		font-weight: bold;
	}

	.package-box :nth-child(3) {
		font-size: 37px;
		color: #2B2F38;
		font-weight: bold;
	}

	.package-box :nth-child(3) .price{
		color: #8C92A0;
		font-size: 12px;
		background-color: white !important;
		display: inline-block;
		margin: 0;
		padding: 0;
	}

	.package-box :nth-child(4){
		color: #595E6B;
		font-size: 14px;
		font-weight: 400;
	}






	.inclusions li{
		background-color: white !important;
		list-style: none;
		color: #595E6B !important;
		margin: 0;
	}

	.inclusions ul{
		background-color: white !important;
		list-style: none;
		color: #595E6B !important;
		margin: 0;
	}

	.inclusions li i{
		background-color: white !important;
		list-style: none;
		color: #D97757 !important;
	}


	.book-btn{
		width: 100%;
		padding: 8px !important;
		border-radius: 100px;
		border: none;
		background-color: #D97757;
		color: white;
		font-size: 14px;
		font-weight: bold;
	}

	.book-btn i{
		color: white !important;
		background-color: #D97757 !important;
		font-weight: bold !important;
		font-size: 16px !important;
	}






	.explore{
		background-color: #FAF2E8;
		border: solid 1px #FAD8CE;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px;
		border-radius: 30px;
	}

	.explore :nth-child(1){
		color: white;
		padding: 10px;
		background-color: #D97757;
		font-size: 20px;
		border-radius: 20px;
		margin: 0;
	}

	.inner-explore{
		width: 100%;
		padding: 10px;
	}

	.explore .inner-explore :nth-child(1){
		color: #2B2F38;
		font-size: 20px;
		font-weight: bold;
		background-color: #FAF2E8;
		margin: 0;
		padding: 0;
	}

	.explore .inner-explore :nth-child(2){
		color: #595E6B;
		font-size: 14px;
		background-color: #FAF2E8;
		margin: 0;
		padding: 0;
	}

	.explore-btn{
		background-color: #D97757;
		color: #FFFFFF;
		font-size: 12px;
		font-weight: bold;
		border: none;
		border-radius: 100px;
		margin: 0;
		padding: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 300px;
	}

	.explore-btn i{
		font-size: 12px !important;
	}

</style>
