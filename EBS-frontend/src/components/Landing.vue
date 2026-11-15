<template>
	
	<div class="container">
		<div class="row">
			<div class="col-6">
				<div class="landing-1">
					<p class="text-1"><i class="bi bi-stars"></i> UNFORGETTABLE LIVE MUSIC MOMENTS</p>
					<h1>Experience live shows closer than ever.</h1>
					<p class="text-2">From intimate soundchecks and artist meet-and-greets to cozy hospitality lounges and clear sightlines. Discover curated, verified VIP passes with zero guesswork.</p>
					<div class="button">
						<button>Browse Events & Passes <i class="bi bi-arrow-right"></i></button>
						<button>See VIP Experiences</button>
					</div>
					<div class="links">
						<p><i class="bi bi-patch-check-fill"></i> 100% Oraganizer Verified</p>
						<p><i class="bi bi-shield-check"></i> Guaranteed Easy Entry</p>
						<p><i class="bi bi-person-heart"></i> Dedicated On-Site Host</p>
					</div>
				</div>
			</div>
			<div class="col-6">
				<div class="landing-2">
					<div class="box-1">
						<p><i class="bi bi-record-circle-fill"></i> Now Booking: North American Tour</p>
					</div>
					<div class="box-2">
						<p>FEATURED SPOTLIGHT</p>
						<p>Sympohinic Resonance <br> Acoustic Series</p>
						<p>Radio City Music Hall &middot; Soundcheck & Lounge Access</p>
					</div>
					<div class="box-3">
						<p>STAGE VIEW</p>
						<p>Unobstructed View</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	
</template>

<style scoped>
	
	.container{
		margin-top: 3%;
	}





	/*LANDING 1*/
	.text-1{
		color: #D97757;
		font-size: 12px;
		font-weight: bold;
		padding: 5px 10px;
		background-color: #FDECE7;
		border: solid 1px #FAD8CE;
		border-radius: 100px;
		display: inline-block;
	}

	.text-2{
		font-size: 18px;
		color: #595E6B;
		font-weight: 400;
	}

	h1{
		font-weight: 700;
		font-style: Bold;
		font-size: 54px;
		color: #2B2F38;
	}








	.button{
		display: flex;
		gap: 10px;
	}

	.button :nth-child(1){
		padding: 10px 15px;
		border: none;
		background-color: #D97757;
		border-radius: 100px;
		color: white;
		font-weight: bold;
	}

	.button :nth-child(2){
		padding: 10px 15px;
		border: solid 1px #EAE5DE;
		background-color: #FFFFFF;
		border-radius: 100px;
		color: #2B2F38;
		font-weight: bold;
	}








	.links{
		display: flex;
		margin-top: 20px;
		gap: 20px;
		font-size: 12px;
	}

	.links p:nth-child(1) i {
		color: #4F6E56;
	}

	.links p:nth-child(2) i {
		color: #C88334;
	}

	.links p:nth-child(3) i {
		color: #C88334;
	}









	/*LANDING 2*/
	.landing-2{
		background-image: url('/images/image1.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		height: 390px;
		width: 100%;
		border-radius: 30px;
		position: relative;
	}

	.box-1 p {
		color: #2B2F38;
		position: absolute;
		top: 20px;
		left: 20px;
		font-weight: bold;
		background-color: #FFFFFFF2;
		display: inline-block;
		padding: 5px 10px;
		border-radius: 100px;
		font-size: 12px;
	}

	.box-1 p:nth-child(1) i {
		color: #D97757;
	}




	.box-2{
		position: absolute;
		bottom: 20px;
		left: 20px;
	}

	.box-2 :nth-child(1){
		background-color: #D97757;
		color: white;
		font-weight: bold;
		font-size: 11px;
		display: inline-block;
		padding: 5px 10px;
		border-radius: 100px;
	}

	.box-2 :nth-child(2){
		color: white;
		font-size: 24px;
		font-weight: bold;
	}

	.box-2 :nth-child(3){
		color: white;
		font-size: 14px;
	}



	.box-3{
		background-color: rgb(255, 255, 255, .3);
		bottom: 20px;
		right: 20px;
		backdrop-filter: blur(4px);
		padding: 10px;
		position: absolute;
		border: solid 1px white;
		border-radius: 20px;
	}

	.box-3 :nth-child(1){
		font-size: 11px;
		color: white;
	}

	.box-3 :nth-child(2){
		font-size: 14px;
		font-weight: bold;
		color: white;
	}

</style>