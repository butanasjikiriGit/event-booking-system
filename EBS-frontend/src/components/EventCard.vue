<script setup>
	
	import Events from '../data/Event.json';

</script>

<template>
	
	<div class="container pt-5">
		<div class="row">

			<div class="heading">
				<div class="heading-details">
					<p><i class="bi bi-calendar-heart"></i> UPCOMING LIVE SHOWS</p>
					<p>Performances You'll Love</p>
					<p>Curated concerts featuring verified backstage packages, early soundcheck entry, and prime seating.</p>
				</div>
				<div class="total-events">
					<p>Showing {{Events.length}} Active Events</p>
				</div>
			</div>

			<div class="col-3" v-for="event in Events" :key="event.id">
				<div class="card-event-box">
					<div class="image" :style="{ backgroundImage: `url(${event.image})` }">
						<p>{{event.genre}}</p>
						<p>{{event.date}}</p>
					</div>
					<div class="event-details">
						<p><i class="bi bi-geo-alt-fill"></i>{{event.location}}</p>
						<p>{{event.name}}</p>
						<p>{{event.description}}</p>
						<hr>
						<div class="capacity-button-box">
							<div class="capacity-price-box">
								<p>Capacity: {{event.capacity}}</p>
								<h5>VIP From: <p class="price">${{event.price}}</p></h5>
							</div>
							<button class="pass-btn">View Pass <i class="bi bi-arrow-right"></i></button>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>

</template>

<style scoped>

	.heading{
		display: flex;
	}

	.heading-details{
		width: 100%;
	}

	.heading-details :nth-child(1){
		color: #D97757;
		font-size: 12px;
		font-weight: bold;
	}

	.heading-details :nth-child(2){
		color: #2B2F38;
		font-size: 36px;
		font-weight: bold;
		margin: 0;
	}

	.heading-details :nth-child(3){
		color: #595E6B;
		font-size: 16px;
		margin: 0;
	}





	.total-events{
		position: relative;
		width: 100%;
	}
	

	.total-events :nth-child(1){
		position: absolute;
		bottom: 10px;
		right: 10px;
		background-color: #FDECE7;
		border: solid 1px #FAD8CE;
		border-radius: 100px;
		padding: 5px 10px;
		font-size: 12px;
		font-weight: 600;
	}





	.card-event-box{
		padding: 10px;
		position: relative;
	}

	.image{
		height: 200px;
		background-size: cover;
		background-repeat: no-repeat;
		border-radius: 30px 30px 0px 0px;
		position: relative;
	}

	.image :nth-child(1){
		font-size: 11px;
		color: #2B2F38;
		background-color: #FFFFFFE5;
		border-radius: 100px;
		padding: 5px 10px;
		font-weight: bold;
		display: inline-block;
		position: absolute;
		top: 10px;
		left: 10px;
	}

	.image :nth-child(2){
		position: absolute;
		bottom: 0;
		right: 10px;
		font-weight: bold;
		font-size: 11px;
		color: #FFFFFF;
		background-color: rgba(0, 0, 0, .5);
		padding: 5px 10px;
		border-radius: 100px;
		backdrop-filter: blur(5px);
	}






	.event-details{
		padding: 20px;
		position: relative;
		border: solid 1px #EAE5DE;
		background-color: #FFFFFF;
		border-radius: 0px 0px 30px 30px;
		box-shadow: 0px 0px 20px #E8E8E8;
	}

	.event-details :nth-child(1){
		color: #D97757;
		font-size: 12px;
		font-weight: bold;
	}

	.event-details :nth-child(2){
		font-size: 18px;
		color: #2B2F38;
		font-weight: bold;
	}

	.event-details :nth-child(3){
		font-size: 12px;
		color: #595E6B;
	}





	.capacity-button-box{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.capacity-price-box :nth-child(1){
		font-size: 12px;
		font-weight: bold;
		color: #2B2F38;
		margin: 0;
	}

	.capacity-price-box :nth-child(2){
		font-weight: bold;
		font-size: 14px;
		color: #2B2F38;
	}

	.capacity-price-box :nth-child(2) .price{
		color: #D97757;
		display: inline-block;
	}


	.pass-btn{
		padding: 5px 20px;
		background-color: #F5F0E8;
		border-radius: 100px;
		border: none;
		font-size: 12px !important;
		transition: .2s ease;
	}

	.pass-btn:hover{
		background-color: #D97757;
		color: white;
	}

	.pass-btn:hover i{
		color: white !important;
	}

	.pass-btn i {
		color: black !important;
		transition: .2s ease;
	}

</style>