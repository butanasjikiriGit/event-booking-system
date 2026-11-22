<script setup>

	import { ref } from 'vue';
	import Booking from '../data/Booking.json';
	import Event from '../data/Event.json';

	const ticket = ref(Booking[0]);
	const event = ref(Event[0]);

</script>

<template>

	<div class="container mt-5">
		<div class="ticket-heading text-center">
			<p><i class="bi bi-check-circle-fill"></i> TICKET ISSUED</p>
			<h1>Your digital pass is ready</h1>
			<p>Keep this page available and present the QR code when you arrive at the venue.</p>
		</div>

		<div class="ticket-box mt-4">
			<div class="ticket-status">
				<p><i class="bi bi-patch-check-fill"></i> {{ticket.bookingStatus.toUpperCase()}}</p>
				<p>Booking Reference: <strong>{{ticket.bookingReference}}</strong></p>
				<p>Payment: <strong>{{ticket.paymentStatus.toUpperCase()}}</strong></p>
			</div>

			<div class="ticket-content">
				<div class="event-section">
					<img :src="ticket.image" :alt="ticket.name">

					<div class="event-info">
						<p>{{ticket.genre.toUpperCase()}} • AURA VIP EXPERIENCE</p>
						<h2>{{ticket.name}}</h2>

						<div class="event-detail">
							<i class="bi bi-calendar-event"></i>
							<div>
								<p>SHOW DATE</p>
								<p>{{event.date}} • 8:00 PM</p>
							</div>
						</div>

						<div class="event-detail">
							<i class="bi bi-geo-alt"></i>
							<div>
								<p>VENUE</p>
								<p>{{ticket.location}}</p>
							</div>
						</div>

						<div class="ticket-data">
							<div>
								<p>TICKET HOLDER</p>
								<p>Donald Trump</p>
							</div>
							<div>
								<p>QUANTITY</p>
								<p>{{ticket.quantity}} Passes</p>
							</div>
							<div>
								<p>TOTAL PAID</p>
								<p>{{ticket.currency}} ${{ticket.totalAmount}}</p>
							</div>
						</div>
					</div>
				</div>

				<div class="qr-section text-center">
					<p><i class="bi bi-ticket-perforated-fill"></i> AURA VIP ENTRY PASS</p>
					<img src="/images/qr-code.jpg" alt="Digital ticket QR code">
					<h3>Scan at venue entrance</h3>
					<p>Each QR pass can only be scanned once. Do not share this code.</p>
					<p class="ticket-code">TKT-{{ticket.bookingReference}}</p>
				</div>
			</div>

			<div class="entry-note">
				<p><i class="bi bi-info-circle-fill"></i> Entry reminder</p>
				<p>Arrive at least 30 minutes before the show and bring a valid ID matching the ticket holder name.</p>
			</div>
		</div>

		<div class="ticket-actions">
			<button type="button" class="primary-action">
				<i class="bi bi-download"></i> Download Ticket
			</button>
			<router-link to="/bookings" class="secondary-action">
				<i class="bi bi-ticket-perforated"></i> View My Bookings
			</router-link>
			<router-link to="/" class="secondary-action">
				<i class="bi bi-arrow-left"></i> Return Home
			</router-link>
		</div>
	</div>

</template>

<style scoped>

	.ticket-heading > p:first-child{
		display: inline-block;
		padding: 6px 14px;
		color: #4F6E56;
		background-color: #E7F1E8;
		border: solid 1px #D5E5D8;
		border-radius: 100px;
		font-size: 12px;
		font-weight: bold;
	}

	.ticket-heading h1{
		margin: 0;
		color: #2B2F38;
		font-size: 44px;
		font-weight: bold;
	}

	.ticket-heading > p:last-child{
		margin-top: 8px;
		color: #595E6B;
		font-size: 14px;
	}

	.ticket-box{
		max-width: 1100px;
		margin-left: auto;
		margin-right: auto;
		background-color: #FFFFFF;
		border: solid 1px #EAE5DE;
		border-radius: 24px;
		overflow: hidden;
		box-shadow: 0px 8px 24px #E8E8E8;
	}

	.ticket-status{
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 12px;
		padding: 14px 20px;
		background-color: #FAF2E8;
		border-bottom: solid 1px #EAE5DE;
	}

	.ticket-status p{
		margin: 0;
		color: #595E6B;
		font-size: 12px;
	}

	.ticket-status p:first-child{
		padding: 5px 12px;
		color: #4F6E56;
		background-color: #FFFFFF;
		border: solid 1px #D5E5D8;
		border-radius: 100px;
		font-weight: bold;
	}

	.ticket-content{
		display: flex;
		gap: 28px;
		padding: 28px;
	}

	.event-section{
		width: 72%;
		display: flex;
		gap: 24px;
	}

	.event-section > img{
		width: 42%;
		min-height: 390px;
		object-fit: cover;
		border-radius: 18px;
	}

	.event-info{
		width: 58%;
	}

	.event-info > p:first-child{
		margin-bottom: 6px;
		color: #D97757;
		font-size: 11px;
		font-weight: bold;
	}

	.event-info h2{
		margin-bottom: 24px;
		color: #2B2F38;
		font-size: 28px;
		font-weight: bold;
	}

	.event-detail{
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 12px 0;
		border-bottom: solid 1px #EAE5DE;
	}

	.event-detail > i{
		width: 36px;
		height: 36px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #D97757;
		background-color: #FDECE7;
		border-radius: 100%;
	}

	.event-detail p{
		margin: 0;
	}

	.event-detail p:first-child,
	.ticket-data p:first-child{
		color: #8C92A0;
		font-size: 10px;
		font-weight: bold;
	}

	.event-detail p:last-child,
	.ticket-data p:last-child{
		color: #2B2F38;
		font-size: 13px;
		font-weight: bold;
	}

	.ticket-data{
		display: flex;
		gap: 10px;
		margin-top: 20px;
	}

	.ticket-data > div{
		width: 33.33%;
		padding: 12px;
		background-color: #FAF7F2;
		border: solid 1px #EAE5DE;
		border-radius: 10px;
	}

	.ticket-data p{
		margin: 0;
	}

	.qr-section{
		width: 28%;
		padding: 22px;
		background-color: #FAF7F2;
		border: solid 1px #EAE5DE;
		border-radius: 18px;
	}

	.qr-section > p:first-child{
		color: #D97757;
		font-size: 11px;
		font-weight: bold;
	}

	.qr-section img{
		width: 170px;
		padding: 8px;
		background-color: #FFFFFF;
		border: solid 1px #EAE5DE;
		border-radius: 12px;
	}

	.qr-section h3{
		margin: 15px 0 5px;
		color: #2B2F38;
		font-size: 17px;
		font-weight: bold;
	}

	.qr-section h3 + p{
		color: #595E6B;
		font-size: 11px;
	}

	.ticket-code{
		margin: 14px 0 0;
		padding: 7px;
		color: #2B2F38;
		background-color: #FFFFFF;
		border: dashed 1px #D97757;
		border-radius: 6px;
		font-size: 11px;
		font-weight: bold;
	}

	.entry-note{
		display: flex;
		align-items: center;
		gap: 16px;
		padding: 14px 28px;
		background-color: #FDECE7;
		border-top: solid 1px #FAD8CE;
	}

	.entry-note p{
		margin: 0;
		color: #595E6B;
		font-size: 12px;
	}

	.entry-note p:first-child{
		color: #D97757;
		font-weight: bold;
		white-space: nowrap;
	}

	.ticket-actions{
		display: flex;
		justify-content: center;
		gap: 12px;
		margin: 24px 0 50px;
	}

	.primary-action,
	.secondary-action{
		padding: 11px 20px;
		border-radius: 100px;
		font-size: 12px;
		font-weight: bold;
		text-decoration: none;
	}

	.primary-action{
		color: #FFFFFF;
		background-color: #D97757;
		border: solid 1px #D97757;
	}

	.secondary-action{
		color: #2B2F38;
		background-color: #FFFFFF;
		border: solid 1px #EAE5DE;
	}

	.primary-action:hover{
		color: #FFFFFF;
		background-color: #C86445;
	}

	.secondary-action:hover{
		color: #D97757;
		border-color: #D97757;
	}

	@media (max-width: 992px){
		.ticket-content,
		.event-section{
			flex-direction: column;
		}

		.event-section,
		.event-section > img,
		.event-info,
		.qr-section{
			width: 100%;
		}

		.event-section > img{
			min-height: 260px;
			max-height: 340px;
		}
	}

	@media (max-width: 576px){
		.ticket-heading h1{
			font-size: 34px !important;
		}

		.ticket-status,
		.ticket-data,
		.entry-note,
		.ticket-actions{
			align-items: stretch;
			flex-direction: column;
		}

		.ticket-content{
			padding: 18px;
		}

		.event-section > img{
			min-height: 220px;
		}

		.ticket-data > div{
			width: 100%;
		}

		.entry-note{
			gap: 4px;
			padding: 14px 18px;
		}

		.primary-action,
		.secondary-action{
			text-align: center;
		}
	}

</style>
