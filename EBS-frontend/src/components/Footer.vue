<template>
	
	<div class="container-fluid mt-5">
		<div class="row">
			
			<div class="col-3">
				<div class="footer">
					<p>AURA VIP</p>
					<p>Making extraordinary concert memories simple, warm, and approachable. Certified VIP passes, friendly hospitality, and unobstructed views.</p>
					<div class="footer-input-box">
						<p>Get Presale & Tour Alerts</p>
						<div class="footer-input-box2">
							<input type="text" placeholder="Your email address">
							<button>Join</button>
						</div>
					</div>
				</div>
			</div>

			<div class="col-3">
				<h4>LIVE SHOWS</h4>
				<p>
					Stadium Concerts <br>
					Classical Symphonies <br>
					Intimate Residencies <br>
					Acoustic Sessions
				</p>
			</div>

			<div class="col-3">
				<h4>PERKS & PASSES</h4>
				<p>
					Artist Meet & Greets <br>
					Soundcheck Access <br>
					Club Lounges <br>
					Curbside Valet Escort
				</p>
			</div>

			<div class="col-3">
				<h4>TSD AUTHORS</h4>
				<p>
					Jikiri Isaiah L. Butanas <br>
					Raniel Paul Miranda <br>
					Jelie Ann Limotan <br>
					Keith Handumon
				</p>
			</div>

		</div>
		<hr>
		<div class="row">
			
			<div class="lower-footer">
				<p><i class="bi bi-globe"></i> Global • USD ($) • © 2026 AURA VIP Event Booking System (EBS v1.0). All rights reserved.</p>
				<div class="lower-footer2">
					<p>Terms of Protocol</p>
					<p>Privacy Policy</p>
					<p>Security & Escrow</p>
				</div>
			</div>

		</div>
	</div>

</template>

<style scoped>
		
	.container-fluid{
		background-color: white;
		padding: 20px;
		border: solid 1px #EAE5DE;
	}

	.row{
		display: flex;
		justify-content: space-between;
		margin: 0px 10% 0px 10%;
	}

	.col-3{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}




	.footer :nth-child(1){
		color: #2B2F38;
		font-size: 20px;
		font-weight: bold;
	}

	.footer :nth-child(2){
		color: #595E6B;
		font-size: 14px;
	}

	.footer-input-box :nth-child(1){
		color: #2B2F38;
		font-size: 12px;
		font-weight: bold;
	}

	.footer-input-box2 input{
		padding: 8px 15px;
		background-color: #FAF2E8;
		border: none;
		border-radius: 100px;
	}

	input:focus{
		outline: solid 1px #D97757 !important;
	}

	.footer-input-box2 button{
		background-color: #D97757;
		color: white !important;
		padding: 7px 20px;
		font-weight: bold;
		letter-spacing: 2px;
		border: none;
		border-radius: 100px;
		margin-left: 10px;
	}



	.col-3 h4{
		color: #2B2F38;
		font-size: 12px;
		font-weight: bold;
	}

	.col-3 p{
		color: #595E6B;
		font-size: 12px;
	}





	.lower-footer{
		display: flex;
		justify-content: space-between;
		padding: 20px;
	}

	.lower-footer p{
		color: #595E6B;
		font-size: 12px;
		margin: 0;
		padding: 0;
	}

	.lower-footer2{
		display: flex;
		gap: 20px;
	}

</style>