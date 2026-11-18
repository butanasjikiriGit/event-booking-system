<script setup>

	import { ref, computed } from 'vue';
	import Booking from '../data/Booking.json';

	const activeTab = ref('All Bookings');
	const searchQuery = ref('');

	const bookings = ref(Booking);

	const filteredBookings = computed(() => {
	  return bookings.value.filter(booking => {
	    const matchesTab = 
	      activeTab.value === 'All Bookings' || 
	      booking.bookingStatus.toLowerCase() === activeTab.value.toLowerCase();

	    const query = searchQuery.value.toLowerCase();
	    const matchesSearch = booking.bookingReference.toLowerCase().includes(query);

	    return matchesTab && matchesSearch;
	  });
	});

	const selectTab = (tabName) => {
	  activeTab.value = tabName;
	};

</script>

<template>
		
	<div class="container mt-4 mt-md-5 px-3 px-md-4">

		<div class="booking-headings">
			
			<p><i class="bi bi-ticket-perforated-fill"></i> BOOKINGS & TICKETS</p>
			<p>My Experiences & Bookings</p>
			<p>Access your verified digital passes, booking references, payment status, and check-in schedules.</p>

		</div>
		<hr>

		<div class="row">
			<div class="col-12">
					
				<div class="booking-nav">
					<div class="tabs-wrapper">
						<ul>
							<li>
								<button 
									class="links" 
									:class="{ active: activeTab === 'All Bookings' }" 
									@click="selectTab('All Bookings')">
									All Bookings
								</button>
							</li>
							<li>
								<button 
									class="links" 
									:class="{ active: activeTab === 'Confirmed' }" 
									@click="selectTab('Confirmed')">
									Confirmed
								</button>
							</li>
							<li>
								<button 
									class="links" 
									:class="{ active: activeTab === 'Pending' }" 
									@click="selectTab('Pending')">
									Pending
								</button>
							</li>
							<li>
								<button 
									class="links" 
									:class="{ active: activeTab === 'Cancelled' }" 
									@click="selectTab('Cancelled')">
									Cancelled
								</button>
							</li>
						</ul>
					</div>
					<div class="search-box">
						<span><i class="bi bi-search"></i></span>
						<input type="text" v-model="searchQuery" placeholder="Search booking references or artist....">
					</div>
				</div>

			</div>
		</div>

		<div class="row mt-4">
			
			<div class="col-12">
				
				<div v-if="filteredBookings.length > 0">

					<div class="booking-card-box" v-for="booking in filteredBookings" :key="booking.booking_id">
						<div class="status">
							<p>• {{booking.bookingStatus.toUpperCase()}}</p>
							<p>Ref: {{booking.bookingReference}}</p>
							<p>Payment: {{booking.paymentStatus}}</p>
						</div>
						<div class="main-content">
							<div class="image" :style="{ backgroundImage: `url(${booking.image})` }">
								<p>Tier I Apex</p>
							</div>
							<div class="content-details">
								<p>{{booking.genre.toUpperCase()}} • BOOKED {{booking.bookedAt.toUpperCase()}}</p>
								<p>{{booking.name}}</p>
								<p>Tier I Apex • {{booking.quantity}} Passes (${{booking.totalAmount}} {{booking.currency}})</p>
								<div class="date-qrcode">
									<div class="show-date">
										<p>SHOW DATE & TIME</p>
										<p>Nov 14, 2026 • 8:00 PM</p>
									</div>
									<div class="qrcode">
										<p>GENERATED TICKETS</p>
										<p>{{booking.quantity}} Digital QR Keys</p>
									</div>
								</div>
								<div class="attendee">
									<p>Issued Attendee Tickets</p>
									<div class="inner-attendee-box">
										<p><i class="bi bi-person-badge"></i> Donald Trump <em>(TKT-{{booking.bookingReference}})</em></p>
										<p>Valid Pass</p>
									</div>
								</div>
							</div>
							<div class="qrcode-image text-center d-flex justify-content-center align-items-center flex-column">
								<img src="/images/qr-code.jpg" class="qr-sample-image">
								<p>Tap below to inspect full run-of-show & QR pass</p>
								<button class="w-100">View Digital Pass <i class="bi bi-arrow-right"></i></button>
								<button class="w-100">{{booking.bookingStatus === 'confirmed' ? 'Cancel Booking' : 'Canceled'}}</button>
							</div>
						</div>
					</div>
					
				</div>

				<div v-else>
					
					<div class="empty-filter d-flex justify-content-center align-items-center flex-column text-center">
						
						<p><i class="bi bi-ticket-perforated"></i></p>
						<p>No bookings match this filter</p>
						<router-link class="link" to="/">Explore VIP Events</router-link>

					</div>

				</div>

			</div>

		</div>

	</div>

</template>

<style scoped>
	
	.booking-headings p:nth-child(1){
		color: #D97757;
		font-size: 12px;
		font-weight: bold;
		padding: 5px 10px;
		background-color: #FDECE7;
		border: solid 1px #FAD8CE;
		border-radius: 100px;
		display: inline-block;
	}

	.booking-headings p:nth-child(2){
		color: #2B2F38;
		font-size: 44px;
		font-weight: bold;
		margin: 0;
	}

	.booking-headings p:nth-child(3){
		color: #595E6B;
		font-weight: 400;
		margin: 0;
	}

	.booking-nav{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 15px;
	}

	.tabs-wrapper {
		overflow-x: auto;
		white-space: nowrap;
		max-width: 100%;
		padding-bottom: 5px;
	}

	ul{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		list-style: none;
		gap: 10px;
		padding: 0;
		margin: 0;
	}

	.links{
		background-color: #FFFFFF;
		border: solid 1px #EAE5DE;
		padding: 8px 15px;
		border-radius: 100px;
		font-size: 12px;
		font-weight: 600;
		color: #595E6B;
		text-decoration: none;
		box-shadow: 0px 0px 20px #E8E8E8;
		cursor: pointer;
		transition: all 0.2s ease;
		white-space: nowrap;
	}

	.links:hover{
		background-color: #FCFBF9;
		border-color: #D97757;
		color: #D97757;
	}

	.links.active{
		background-color: #D97757;
		border-color: #D97757;
		color: #FFFFFF;
	}

	.search-box{
		display: flex;
		width: 100%;
		max-width: 320px;
	}

	span{
		background-color: #FFFFFF;
		border: solid 1px #EAE5DE;
		padding: 8px 12px;
		border-radius: 100px 0px 0px 100px;
		border-right: none;
		color: #8C92A0;
		margin: 0;
		display: flex;
		align-items: center;
	}

	input{
		background-color: #FFFFFF;
		border: solid 1px #EAE5DE;
		border-radius: 0px 100px 100px 0px;
		border-left: none;
		padding: 8px 15px;
		width: 100%;
		font-weight: 400;
		font-size: 14px;
		margin: 0;
	}

	input:focus{
		outline: solid 2px #D97757;
	}

	.booking-card-box{
		border: solid 1px #FAD8CE;
		border-radius: 20px;
		background-color: white;
		overflow: hidden;
		margin-bottom: 20px;
		box-shadow: 0px 0px 20px #E8E8E8;
	}

	.status{
		display: flex;
		justify-content: space-between;
		background-color: #FAF2E8;
		padding: 10px 15px;
		align-items: center;
		flex-wrap: wrap;
		gap: 8px;
	}

	.status p:nth-child(1){
		background-color: #FDECE7;
		border: solid 1px #FAD8CE;
		border-radius: 100px;
		padding: 5px 10px;
		color: #D97757;
		font-size: 11px;
		font-weight: bold;
		display: inline-block;
		margin: 0;
	}
	.status p:nth-child(2){
		color: #2B2F38;
		font-size: 12px;
		font-weight: bold;
		margin: 0;
	}

	.status p:nth-child(3){
		color: #4F6E56;
		font-weight: bold;
		font-size: 12px;
		background-color: white;
		border: solid 1px #FAD8CE;
		border-radius: 100px;
		margin: 0;
		padding: 5px 10px;
	}

	.main-content{
		padding: 20px;
		display: flex;
		justify-content: space-between;
		align-items: stretch;
		gap: 20px;
		flex-direction: row;
	}

	.image{
		height: 220px;
		width: 320px;
		min-width: 280px;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		border-radius: 20px;
		position: relative;
		display: flex;
		flex-shrink: 0;
	}

	.image p{
		color: white;
		background-color: #D97757;
		font-size: 12px;
		font-weight: bold;
		padding: 5px 20px;
		border-radius: 100px;
		position: absolute;
		top: 10px;
		left: 10px;
	}

	.content-details {
		flex: 1;
		width: 100%;
	}

	.content-details p:nth-child(1){
		color: #D97757;
		font-size: 12px;
		font-weight: bold;
		margin-bottom: 5px;
	}

	.content-details p:nth-child(2){
		color: #2B2F38;
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 5px;
	}

	.content-details p:nth-child(3){
		color: #595E6B;
		font-size: 12px;
		font-weight: bold;
		margin-bottom: 15px;
	}

	.date-qrcode{
		display: flex;
		justify-content: space-between;
		gap: 15px;
		flex-wrap: wrap;
	}

	.show-date{
		background-color: #FAF7F2;
		border: solid 1px #EAE5DE;
		border-radius: 10px;
		padding: 10px;
		flex: 1;
		min-width: 140px;
	}

	.show-date p:nth-child(1){
		color: #8C92A0;
		font-size: 10px;
		font-weight: bold;
		margin: 0;
	}

	.show-date p:nth-child(2){
		color: #2B2F38;
		font-size: 12px;
		font-weight: bold;
		margin: 0;
	}

	.qrcode{
		background-color: #FAF7F2;
		border: solid 1px #EAE5DE;
		border-radius: 10px;
		padding: 10px;
		flex: 1;
		min-width: 140px;
	}

	.qrcode p:nth-child(1){
		color: #8C92A0;
		font-size: 10px;
		font-weight: bold;
		margin: 0;
	}

	.qrcode p:nth-child(2){
		color: #D97757;
		font-size: 12px;
		font-weight: bold;
		margin: 0;
	}

	.attendee p:nth-child(1){
		color: #8C92A0;
		font-size: 11px;
		font-weight: bold;
		margin: 10px 0 5px 0;
	}

	.inner-attendee-box{
		background-color: #F5F0E8;
		border: solid 1px #EAE5DE;
		border-radius: 100px;
		padding: 6px 15px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
		flex-wrap: wrap;
	}

	.inner-attendee-box p:nth-child(1){
		color: #D97757;
		font-size: 12px;
		font-weight: bold;
		margin: 0;
	}

	.inner-attendee-box p:nth-child(2){
		font-size: 12px;
		color: #2B2F38;
		margin: 0;
	}

	.qrcode-image{
		padding: 20px;
		background-color: #FAF7F2;
		border: solid 1px #EAE5DE;
		border-radius: 20px;
		width: 240px;
		flex-shrink: 0;
	}

	.qr-sample-image{
		height: 80px;
		padding: 5px;
		border-radius: 10px;
		border: solid 1px #EAE5DE;
		background-color: #FFF;
	}

	.qrcode-image p{
		color: #8C92A0;
		font-size: 11px;
		font-weight: 600;
		margin: 10px 0;
	}

	.qrcode-image button:nth-child(3){
		background-color: #D97757;
		color: #FFFFFF;
		padding: 7px 15px;
		border: none;
		border-radius: 100px;
		font-size: 12px;
		font-weight: 600;
		margin: 3px 0;
		cursor: pointer;
	}

	.qrcode-image button:nth-child(4){
		background-color: #FFFFFF;
		border: solid 1px #EAE5DE;
		border-radius: 100px;
		padding: 7px 15px;
		color: #2B2F38;
		font-size: 12px;
		font-weight: 600;
		margin: 3px 0;
		cursor: pointer;
	}

	.empty-filter{
		background-color: #FFFFFF;
		border: solid 1px #EAE5DE;
		border-radius: 20px;
		padding: 40px;
	}

	.empty-filter p:nth-child(1){
		font-size: 40px;
		margin: 0;
		color: #D97757;
	}

	.empty-filter p:nth-child(2){
		font-size: 17px;
		font-weight: bold;
		margin: 0;
	}

	.link{
		background-color: #D97757;
		color: white;
		text-decoration: none;
		font-weight: bold;
		font-size: 12px;
		padding: 7px 15px;
		border-radius: 100px;
		margin: 10px;
	}

	/* Responsive Media Queries */
	@media (max-width: 992px) {
		.main-content {
			flex-direction: column;
		}

		.image {
			width: 100%;
			height: 200px;
		}

		.qrcode-image {
			width: 100%;
		}
	}

	@media (max-width: 768px) {
		.booking-headings p:nth-child(2){
			font-size: 32px;
		}

		.search-box {
			max-width: 100%;
		}

		.date-qrcode {
			flex-direction: column;
		}

		.inner-attendee-box {
			border-radius: 12px;
		}
	}

</style>