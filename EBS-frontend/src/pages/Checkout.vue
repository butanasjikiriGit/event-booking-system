<script setup>
	
	import { ref } from 'vue';

	import Events from '../data/Event.json';
	import Packages from '../data/Package.json';

	const qty = ref(1);

</script>

<template>
		
	<div class="container mt-5">
		<div class="row">
			<div class="col-12">
				
				<div class="box-1st">
					<p>• Passes On Hold</p>
					<div class="inner-box-1st">
						<p>1 Review Experrience</p>
						<p>-</p>
						<p>2 Guest & Ticket Details</p>
						<p>-</p>
						<p>3 Payment & Protection</p>
					</div>
				</div>

			</div>
		</div>

		<div class="row mt-5">

			<div class="col-12 col-md-12 col-lg-8 order-2 order-md-2 order-lg-1">
				
				<div class="checkout-details">
					
					<div class="checkout-box-1">
						<p>Review Your Experience & VIP Package</p>
						<p>Select your event, VIP tier, and check your synchronized itinerary.</p>
					</div>

					<div class="checkout-box-2">
						<div class="inner-box-2">
							<label>SELECT EVENT</label>
							<select>
								<option v-for="event in Events" :key="event.id" value="event.id">{{event.name}}</option>
							</select>
						</div>
						<div class="inner-box-2">
							<label>SELECT VIP PACKAGE</label>
							<select>
								<option v-for="pack in Packages" :key="pack.id">{{pack.name}}</option>
							</select>
						</div>
					</div>

					<div class="event-display">
						
						<img src="/images/card-image1.jpg">

						<div class="event-details">
							<p>POP & ELECTRIC • UPCOMING</p>
							<p>Maya Sterling: The Elysian Echoes</p>
							<p><i class="bi bi-geo-alt"></i> Madison Square Garden — New York, NY</p>
							<p><i class="bi bi-calendar-event"></i> Nov 14, 2026 • 8:00 PM</p>
							<p>✓ Personal 1-on-1 Artist Meet & Greet</p>
							<p>✓ Private 30-min Soundcheck Access</p>
							<p>✓ Reserved Front-Row Pit Sightline</p>
						</div>

						<p>Capacity: 14 Passes Left</p>

					</div>

					<hr>

					<div class="activities">
						
						<p><i class="bi bi-calendar3"></i> Scheduled Package Activities </p>

						<div class="inner-activities">
							
							<div class="act-box">
								<p><i class="bi bi-clock"></i> 4:30 PM - 5:00 PM</p>
								<p>ACT-01</p>
								<p>Curbside Welcome & Host Greeting</p>
								<p><strong>Meet:</strong> Gate VIP A (7th Ave Subterranean Entrance)</p>
								<p>"Present your bookingReference or QR ticketCode to Senior Host Marcus Sterling."</p>
							</div>

							<div class="act-box">
								<p><i class="bi bi-clock"></i> 5:15 PM - 6:00 PM</p>
								<p>ACT-02</p>
								<p>Private Rehearsal & Soundcheck Access</p>
								<p><strong>Meet:</strong> Main Stage Front Pit Catwalk</p>
								<p>"No flash photography during acoustic numbers; host will escort group from Gate A."</p>
							</div>

							<div class="act-box">
								<p><i class="bi bi-clock"></i> 6:15 PM - 7:15 PM</p>
								<p>ACT-03</p>
								<p>1-on-1 Artist Encounter & Hospitality Salon</p>
								<p><strong>Meet:</strong> Backstage Greenroom Salon 01</p>
								<p>"High-res digital photos are synced directly to your AURA VIP account within 2 hours."</p>
							</div>

						</div>

					</div>

				</div>

				<div class="guest-details mt-3">
					
					<div class="guest-box-1">
						<p>Guest Details & Ticket Allocation</p>
						<p>Each ticket generates a unique and QR pass assigned to the attendee name below.</p>
					</div>

					<div class="ticket-qty">
						<p>Ticket Quantity</p>
						<div class="qty">
							<button @click="qty > 1 ? qty-- : qty"><i class="bi bi-dash-lg"></i></button>
							<input type="text" disabled v-model="qty">
							<button @click="qty++"><i class="bi bi-plus-lg"></i></button>
						</div>
					</div>

					<div class="ticket-holder">
						<p>● Guest 01 — Primary Ticket Holder</p>
						<div class="text-box">
							<div class="inner-text">
								<label>FULL LEGAL NAME</label>
								<input type="text" disabled value="Donald Trump">
							</div>
							<div class="inner-text">
								<label>EMAIL FOR DIGITAL PASS DISPATCH</label>
								<input type="text" disabled value="Donald@mail.com">
							</div>
						</div>
					</div>

				</div>

				<div class="payment-details mt-3">
					
					<div class="payment-box-1">
						<p>Payment & Booking Protection</p>
						<p>Safe, encrypted checkout with our 100% money-back event guarantee.</p>
					</div>

					<div class="payment-choice">
						<button><i class="bi bi-credit-card"></i> Credit / Debit Card</button>
						<button><i class="bi bi-wallet2"></i> Apple Pay / Gcash / Maya</button>
						<button><i class="bi bi-bank"></i> Concierge Wire Transfer</button>
					</div>

					<div class="card-details">
						<div class="name-card">
							<label>NAME ON CARD</label>
							<p>Donald Trump</p>
						</div>
						<div class="card-expires-cvc">
							<div class="inner-card">
								<label>CARD NUMBER</label>
								<p>•••• •••• •••• 8512</p>
							</div>
							<div class="inner-card">
								<label>EXPIRES</label>
								<p>09/28</p>
							</div>
							<div class="inner-card">
								<label>CVC</label>
								<p>•••</p>
							</div>
						</div>
					</div>

				</div>

			</div>

			<div class="col-12 col-md-12 col-lg-4  order-1 order-md-1 order-lg-2">
				
				<div id="payment">
					
					<div class="complete-payment">
						
						<div class="payment-heading">
							<p>YOUR BOOKING</p>
							<div class="inner-heading">
								<p>Order Summary</p>
								<p>#AUR-8829-NY</p>
							</div>
						</div>
						<hr>

						<div class="payment-body-details">
							<div class="body-1">
								<p>Tier I Apex: Artist Meet & Greet</p>
								<p>$850.00</p>
							</div>
							<div class="body-2">
								<p>Quantity</p>
								<p>1 Pass</p>
							</div>
							<div class="body-2">
								<p>VIP Host & Concierge Allocation</p>
								<p>INCLUDED</p>
							</div>
							<div class="body-2">
								<p>Currency</p>
								<p>USD ($)</p>
							</div>
						</div>
						<hr>

						<div class="total-amount">
							<p>TOTAL AMOUNT</p>
							<p>$850.00</p>
						</div>

						<button>Complete VIP Booking <i class="bi bi-arrow-right"></i></button>
						<p><i class="bi bi-patch-check-fill"></i> 100% Organizer Certified • Decrements</p>

					</div>

					<div class="bottom-details mt-3">
						<p>FRIENDLY ASSISTANCE</p>
						<p>Questions about your night?</p>
						<p>Need companion passes, accessible arrival directions, or special dietary arrangements?</p>
						<p><i class="bi bi-telephone-fill"></i> Call VIP Host Support: +1 (800) 555-AURA</p>
					</div>

				</div>

			</div>

		</div>

	</div>

</template>

<style scoped>
	
	.box-1st{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 15px;
		background-color: #FFFFFF;
		border: solid 1px #EAE5DE;
		border-radius: 20px;
		box-shadow: 0px 0px 20px #E8E8E8;
	}

	.box-1st p:nth-child(1){
		background-color: #FAD8CE;
		color: #D97757;
		font-weight: bold;
		font-size: 12px;
		padding: 3px 20px;
		border-radius: 100px;
		margin: 0;
	}

	.inner-box-1st{
		display: flex;
		justify-content: center;
		align-items: center;
		gap: -10px;
	}

	@media (max-width: 770px){
		.inner-box-1st{
			flex-wrap: wrap;
		}
	}


	.inner-box-1st p:nth-child(1){
		color: #D97757;
		background-color: transparent;
		font-weight: bold;
		font-size: 12px;
	}

	.inner-box-1st p{
		color: black;
		font-weight: bold;
		font-size: 12px;
		padding: 0px 10px;
		margin: 0;
	}

	.inner-box-1st p:nth-child(2),
	.inner-box-1st p:nth-child(4){
		color: gray;
		font-weight: bold;
		font-size: 20px;
		margin: 0;
	}




	.checkout-details{
		padding: 20px;
		border-radius: 20px;
		box-shadow: 0px 0px 20px #E8E8E8;
		background-color: #FFFFFF;
		border: solid 1px #EAE5DE;
	}

	.checkout-box-1 p:nth-child(1){
		font-weight: bold;
		font-size: 24px;
		color: #2B2F38;
		margin: 0;
	}

	.checkout-box-1 p:nth-child(2){
		font-size: 12px;
		color: #595E6B;
		margin: 0;
	}

	.checkout-box-2{
		padding: 10px;
		background-color: #FAF7F2;
		border: solid 1px #EAE5DE;
		border-radius: 10px;
		display: flex;
		justify-content: space-between;
		position: relative;
		margin: 20px 0px;
		gap: 10px;
	}

	.inner-box-2 label{
		color: gray;
		font-size: 12px;
		font-weight: bold;
	}

	.inner-box-2 select{
		width: 100%;
		padding: 10px 15px;
		border: solid 1px #EAE5DE;
		border-radius: 5px;
		background-color: white;
		font-size: 14px;
		font-weight: bold;
	}

	select:focus{
		outline: solid 1px #D97757;
	}

	.event-display{
		padding: 20px;
		background-color: #FAF7F2;
		border: solid 1px #EAE5DE;
		border-radius: 10px;
		display: flex;
		justify-content: space-between;
		position: relative;
		margin: 20px 0px;
		gap: 20px;
	}

	@media (max-width: 1000px){

		.event-display{
			flex-wrap: wrap;
		}

	}

	.event-display img{
		height: 200px;
		border-radius: 10px;
	}

	.event-details p:nth-child(1){
		font-weight: bold;
		font-size: 12px;
		color: #D97757;
		margin: 0;
	}

	.event-details p:nth-child(2){
		font-weight: bolder;
		font-size: 20px;
		margin: 0;
	}

	.event-details i{
		color: #D97757;
		font-size: 16px;
		font-weight: bold;
	}

	.event-details p:nth-child(3),
	.event-details p:nth-child(4){
		font-size: 12px;
		color: gray !important;
		font-weight: normal !important;
		background-color: transparent !important;
		margin: 0;
	}

	.event-details p:nth-child(5),
	.event-details p:nth-child(6),
	.event-details p:nth-child(7){
		background-color: white;
		padding: 4px 15px;
		color: black;
		border: solid 1px #EAE5DE;
		border-radius: 100px;
		font-size: 12px;
		font-weight: bold;
		margin: 2px;
		display: inline-block;
	}

	.event-display p:nth-child(3){
		color: #D97757;
		font-size: 12px;
		font-weight: bold;
	}



	.activities p:nth-child(1){
		color: black;
		font-size: 16px;
		font-weight: bold;
	}

	.activities i{
		color: #D97757;
		font-size: 16px;
	}

	.inner-activities{
		display: flex;
		gap: 20px;
	}

	@media (max-width: 1000px){
		.inner-activities{
			flex-wrap: wrap;
		}
	}

	.act-box{
		padding: 10px;
		border-radius: 10px;
		background-color: #FAF7F2;
		border: solid 1px #EAE5DE;
		display: flex;
		flex-direction: column;
	}

	.act-box p:nth-child(1){
		font-size: 12px;
		font-weight: bold;
		color: #D97757;
		margin: 0;
	}

	.act-box p:nth-child(2){
		font-size: 12px;
		font-weight: bold;
		color: #D97757;
		padding: 5px 20px;
		background-color: #FDECE7;
		display: inline-block;
	}

	.act-box p:nth-child(3){
		font-weight: bold;
		font-size: 14px;
	}

	.act-box p:nth-child(4){
		color: gray;
		font-size: 14px;
	}

	.act-box strong{
		color: black;
	}

	.act-box p:nth-child(5){
		color: gray;
		font-size: 14px;
		font-style: italic;
	}









	.guest-details{
		padding: 20px;
		border-radius: 20px;
		box-shadow: 0px 0px 20px #E8E8E8;
		background-color: #FFFFFF;
		border: solid 1px #EAE5DE;
	}

	.guest-box-1 p:nth-child(1){
		font-weight: bold;
		font-size: 24px;
		color: #2B2F38;
		margin: 0;
	}

	.guest-box-1 p:nth-child(2){
		font-size: 12px;
		color: #595E6B;
		margin: 0;
	}

	.ticket-qty{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 40px;
		border-radius: 10px;
		background-color: #FAF7F2;
		border: solid 1px #EAE5DE;
		width: 100%;
		max-width: 300px;
		margin: 20px 0px;
	}

	.ticket-qty p{
		font-size: 14px;
		font-weight: bold;
		margin: 0;
	}

	.qty{
		display: flex;
		gap: 5px;
	}

	.qty button{
		border-radius: 2px;
		border: none;
		width: 20px;
		height: 20px;
		font-size: 12px;
		background-color: #D97757;
		color: white;
		margin: 0;
	}

	.qty input{
		padding: 0px 11px;
		width: 40px;
		margin: 0;
		border: none;
		background-color: white;
	}

	.ticket-holder{
		border-radius: 10px;
		background-color: #FAF7F2;
		border: solid 1px #EAE5DE;
		padding: 20px;
	}

	.ticket-holder p{
		font-weight: bold;
		font-size: 14px;
		margin: 0;
	}

	.text-box{
		display: flex;
		justify-content: space-between;
		padding: 10px;
		gap: 20px;
	}

	.inner-text{
		width: 100%;
	}

	.inner-text label{
		font-size: 12px;
		font-weight: bold;
		color: gray;
	}

	.inner-text input{
		width: 100%;
		padding: 5px 20px;
		border-radius: 5px;
		border: solid 1px lightgray;
		background-color: white;
		color: black;
		font-weight: 500;
		font-size: 14px;
	}







	.payment-details{
		padding: 20px;
		border-radius: 20px;
		box-shadow: 0px 0px 20px #E8E8E8;
		background-color: #FFFFFF;
		border: solid 1px #EAE5DE;
	}

	.payment-box-1 p:nth-child(1){
		font-weight: bold;
		font-size: 24px;
		color: #2B2F38;
		margin: 0;
	}

	.payment-box-1 p:nth-child(2){
		font-size: 12px;
		color: #595E6B;
		margin: 0;
	}

	.payment-choice{
		display: flex;
		gap: 10px;
		margin-top: 20px;
	}

	.payment-choice button{
		padding: 5px 25px;
		border-radius: 100px;
		font-weight: 600;
		font-size: 14px;
		background-color: #FAF2E8;
		border: solid 1px #FAD8CE;
		color: #2B2F38;
	}

	.payment-choice i{
		color: #D97757;
		margin-right: 5px;
		font-size: 16px;
	}

	.card-details{
		display: flex;
		flex-direction: column;
		padding: 20px;
		background-color: #FAF7F2;
		margin-top: 20px;
		border-radius: 10px;
		border: solid 1px #FAD8CE;
	}

	.card-details label{
		color: gray;
		font-size: 14px;
		font-weight: bold;
	}

	.card-details p{
		width: 100%;
		background-color: white;
		font-size: 14px;
		padding: 5px 20px;
		border: solid 1px lightgray;
		border-radius: 8px;
		letter-spacing: 3px;
	}

	.card-expires-cvc{
		display: flex;
		justify-content: space-between;
		gap: 10px;
	}

	.inner-card{
		width: 100%;
	}







	.complete-payment{
		padding: 20px;
		border-radius: 20px;
		box-shadow: 0px 0px 20px #E8E8E8;
		background-color: #FFFFFF;
		border: solid 1px #EAE5DE;
	}

	#payment{
		position: sticky;
		top: 20px;
		margin-bottom: 20px;
	}

	.bottom-details{
		padding: 20px;
		border-radius: 20px;
		box-shadow: 0px 0px 20px #E8E8E8;
		background-color: #FFFFFF;
		border: solid 1px #EAE5DE;
	}

	.payment-heading p{
		color: #D97757;
		font-size: 12px;
		font-weight: bold;
	}

	.inner-heading{
		display: flex;
		justify-content: space-between;
	}

	.inner-heading p:nth-child(1){
		font-weight: bolder;
		font-size: 24px;
		color: black;
		margin: 0;
	}

	.inner-heading p:nth-child(2){
		padding: 0px 20px;
		color: black;
		font-weight: 600;
		border-radius: 4px;
		font-size: 12px;
		background-color: #FAF2E8;
		border: solid 1px #FAD8CE;
	}

	.body-1{
		display: flex;
		justify-content: space-between;
	}

	.body-2{
		display: flex;
		justify-content: space-between;
	}

	.body-1 p{
		font-weight: bold;
		font-size: 14px;
		margin: 0;
	}

	.body-2 p:nth-child(1){
		font-size: 14px;
		color: gray;
		margin: 0;
	}

	.body-2 p:nth-child(2){
		color: black;
		font-weight: bolder;
		font-size: 14px;
		margin: 0;
	}

	.total-amount{
		background-color: #FAF2E8;
		border: solid 1px #FAD8CE;
		padding: 20px;
		border-radius: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
	}

	.total-amount p:nth-child(1){
		font-size: 18px;
		font-weight: bold;
		margin: 0;
	}

	.total-amount p:nth-child(2){
		font-size: 30px;
		font-weight: bold;
		margin: 0;
		color: #D97757;
	}

	.complete-payment button{
		width: 100%;
		background-color: #D97757;
		color: white;
		padding: 10px 20px;
		border-radius: 100px;
		border: none;
		font-weight: bold;
		margin-top: 10px;
	}

	.complete-payment p:nth-child(7){
		font-size: 12px;
		color: gray;
		margin: 10px 0px;
	}

	.complete-payment p:nth-child(7) i{
		color: green;
	}

	.bottom-details p:nth-child(1){
		font-weight: bold;
		font-size: 12px;
		color: #D97757;
	}

	.bottom-details p:nth-child(2){
		font-size: 14px;
		font-weight: bold;
	}

	.bottom-details p:nth-child(3){
		font-size: 12px;
		font-weight: 500;
		color: gray;
	}

	.bottom-details p:nth-child(4){
		color: #D97757;
		font-weight: bold;
		font-size: 14px;
	}



</style>