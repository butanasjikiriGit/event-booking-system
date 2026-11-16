<template>
	
	<div class="container pt-5 mt-5" id="container">

		<div class="activity-headings">
			<p><i class="bi bi-map"></i> SYNCHRONIZED ITINERARY</p>
			<p>Great Sighlines & What to Expect</p>
			<p>From the moment your itinerary arrives to the final encore, we make sure you have the easiest night possible</p>
		</div>

		<div class="row">
			
			<div class="col-12 col-lg-6">
				<div class="left-box">
					<div>
						<p>Verified Stage Front Pit & Lounge Map</p>
						<p>Elevation: +1.2m</p>
					</div>
					<div class="image">
						<div class="inner-image">
							<p>Just 12 meters from Main Stage</p>
							<p>Direct unobstructed sightline, Dedicated Gate VIP A Entry</p>
						</div>
					</div>
					<div>
						<div class="box-1">
							<p>ELEVATION</p>
							<p>Raised +1.2m</p>
						</div>
						<div class="box-1">
							<p>ACOUSTIC ANGLE</p>
							<p>15&deg; Direct Center</p>
						</div>
						<div class="box-1">
							<p>LOUNGE WALK</p>
							<p>~1 Minute</p>
						</div>
					</div>
				</div>
			</div>

			<div class="col-12 col-lg-6">
				<div class="right-box">
					<div class="inner-right-box">
						<p class="right-box-text">Gate VIP A</p>
						<div>
							<p>4:30 PM — Curbside Welcome & Host Greeting</p>
							<p>Meet your dedicated on-site VIP host for express credential pickup and security fast-track.</p>
						</div>
					</div>
					<div class="inner-right-box">
						<p class="right-box-text">Stage Pit</p>
						<div>
							<p>5:15 PM — Private Rehearsal & Soundcheck Access</p>
							<p>Experience an intimate 30-minute acoustic soundcheck session and Q&A before public doors open.</p>
						</div>
					</div>
					<div class="inner-right-box">
						<p class="right-box-text">Lounge 01</p>
						<div>
							<p>6:15 PM — 1-on-1 Artist Encounter & Hospitality Salon</p>
							<p>Enjoy artisan refreshments, commemorative tour vinyl signing, and individual photo opportunity.</p>
						</div>
					</div>
					<div class="inner-right-box">
						<p class="right-box-text">Main Arena</p>
						<div>
							<p>8:00 PM — Showtime: Prime Catwalk View</p>
							<p>Escorted entry to your reserved front-row pit or box suite with continuous in-seat hospitality.</p>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>

</template>

<style scoped>
	
	#container{
		padding: 20px;
		background-color: white;
		border: solid 1px #EAE5DE;
		border-radius: 30px;
		box-shadow: 0px 0px 20px #E8E8E8;
	}



	.activity-headings :nth-child(1){
		color: #203825;
		font-size: 12px;
		font-weight: bold;
	}

	.activity-headings :nth-child(2){
		font-size: 36px;
		font-weight: bold;
		color: #2B2F38;
		margin: 0;
	}

	.activity-headings :nth-child(3){
		color: #595E6B;
		font-size: 16px;
		margin: 0;
	}







	.left-box{
		background-color: #FAF2E8;
		padding: 20px;
		border-radius: 20px;
		margin-top: 20px;
		border: solid 1px #FAD8CE;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.left-box :nth-child(1){
		display: flex;
		justify-content: space-between;
	}

	.left-box :nth-child(1) :nth-child(1){
		color: #2B2F38;
		font-size: 12px;
		font-weight: bold;
		margin: 0;
	}

	.left-box :nth-child(1) :nth-child(2){
		color: #2B2F38;
		font-size: 12px;
		padding: 5px 10px;
		background-color: white;
		border: solid 1px #FAD8CE;
		border-radius: 100px;
		display: inline-block;
		margin: 0;
	}

	.image{
		background-image: url('/images/stage-image1.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		height: 300px;
		border-radius: 10px;
		position: relative;
	}

	.image .inner-image{
		position: absolute;
		bottom: 10px;
		left: 10px;
		display: flex;
		flex-direction: column;
	}

	.image .inner-image :nth-child(1){
		font-size: 16px !important;
		font-weight: bold !important;
		color: white !important;
		margin: 0;
		padding: 0;
	}

	.image .inner-image :nth-child(2){
		font-size: 14px !important;
		font-weight: normal !important;
		color: white !important;
		background-color: transparent;
		border: none;
		margin: 0;
		padding: 0;
	}





	.left-box :nth-child(3){
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
	}

	.box-1{
		padding: 5px;
		background-color: white;
		border: solid 1px #FAD8CE;
		border-radius: 10px;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center !important;
	}

	.box-1 :nth-child(1){
		font-size: 11px !important;
		font-weight: bold !important;
		color: #595E6B !important;
		margin: 0 !important;
		padding: 0 !important;
	}

	.box-1 :nth-child(2){
		font-size: 14px !important;
		font-weight: bold !important;
		color: #2B2F38 !important;
		border: none !important;
		padding: 0 !important;
		margin: 0 !important;
	}








	.right-box .inner-right-box{
		background-color: #FAF2E8;
		padding: 20px;
		border-radius: 20px;
		margin-top: 20px;
		border: solid 1px #FAD8CE;
		display: flex;
		flex-direction: column;
		gap: 20px;
		position: relative;
	}

	.right-box-text{
		color: #D97757;
		font-size: 11px;
		font-weight: bold;
		background-color: white;
		padding: 5px 10px;
		border-radius: 100px;
		position: absolute;
		right: 10px;
		top: 10px;
	}

	.inner-right-box div :nth-child(1){
		color: #2B2F38;
		font-size: 16px;
		font-weight: bold;
		margin: 0;
	}

	.inner-right-box div :nth-child(2){
		color: #595E6B;
		font-size: 12px;
		font-weight: 400;
		margin: 0;
	}

</style>
