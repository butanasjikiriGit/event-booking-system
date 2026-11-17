<script setup>
	
	import { ref, computed } from 'vue';
	import User from '../data/User.json';


	const users = ref(User);

	const specificUser = computed(() => {
		return users.value.find(user => user.id === 1);
	})

</script>
<template>
		
	<div class="container mt-5">

		<div class="profile-heading">
			<p><i class="bi bi-award-fill"></i> PERSONAL HOSPITALITY HUB • MEMBER</p>
			<p>Profile & VIP Preferences</p>
			<p>Manage your personal details, bespoke lounge riders, and preferred sightline acoustic spots for seamless live show experiences.</p>
		</div>
		<hr>

		<div class="row">
	
			<div class="col-12 col-md-4 mb-3">
				
				<div class="profile">
					<div class="profile-img">
						<p><i class="bi bi-check-circle-fill"></i></p>
					</div>
					<p>{{specificUser.firstName}} {{specificUser.lastName}}</p>
					<p>Live Symphony & Acoustic Connoisseur</p>
					<p><i class="bi bi-star-fill"></i> VIP MEMBER</p>
					<hr>
					<div class="date-status">
						<div class="box">
							<p>MEMBER SINCE</p>
							<p>{{specificUser.createdAt}}</p>
						</div>
						<div class="box">
							<p>ACCOUNT STATUS</p>
							<p>Verified</p>
						</div>
					</div>
				</div>

			</div>

			<div class="col-12 col-md-8">
				
				<div class="profile-details">
					<p>01 • Personal & Contact Details</p>
					<p>Information used for digital ticket issuance and SMS check-in notifications.</p>
					<hr>
					
					<table>
						<tbody>
							<tr>
								<td>
									<label for="firstname">FIRS NAME</label>
									<input type="text" id="firstname" v-model="specificUser.firstName">
								</td>
								<td>
									<label for="firstname">LAST NAME</label>
									<input type="text" id="firstname" v-model="specificUser.lastName">
								</td>
							</tr>
							<tr>
								<td>
									<label for="firstname">EMAIL ADDRESS</label>
									<input type="text" id="firstname" v-model="specificUser.email">
								</td>
								<td>
									<label for="firstname">MOBILE NUMBER</label>
									<input type="text" id="firstname" v-model="specificUser.mobileNo">
								</td>
							</tr>
						</tbody>
					</table>
					<hr>

					<p>02 • VIP Hospitality & Seating Notes</p>
					<p>Dietary Notes & Lounge Refreshment Rider</p>
					<textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></textarea>
					<button><i class="bi bi-floppy"></i> Save Profile Changes</button>

				</div>

			</div>

		</div>
	</div>

</template>

<style scoped>
	
	.profile-heading :nth-child(1){
		color: #D97757;
		font-size: 12px;
		font-weight: bold;
		padding: 5px 10px;
		border-radius: 100px;
		background-color: #FDECE7;
		border: solid 1px #FAD8CE;
		display: inline-block;
	}

	.profile-heading :nth-child(1) i{
		border: none;
		padding: 0;
	}

	.profile-heading :nth-child(2){
		color: #2B2F38;
		font-size: 44px;
		font-weight: bold;
		margin: 0;
	}

	.profile-heading :nth-child(3){
		color: #595E6B;
		font-size: 16px;
		margin: 0;
		font-weight: 400;
	}




	.profile{
		background-color: #FFFFFF;
		border: solid 1px #EAE5DE;
		border-radius: 20px;
		padding: 20px;
		text-align: center;
		box-shadow: 0px 0px 20px #E8E8E8;
	}

	.profile :nth-child(2){
		color: #2B2F38;
		font-size: 20px;
		font-weight: bold;
		margin: 0;
		padding: 0;
	}

	.profile :nth-child(3){
		color: #595E6B;
		font-size: 12px;
		font-weight: 400px;
		margin: 0;
	}

	.profile :nth-child(4){
		color: #D97757;
		font-size: 12px;
		font-weight: bold;
		background-color: #FDECE7;
		border: solid 1px #FAD8CE;
		border-radius: 100px;
		display: inline-block;
		padding: 2px 15px;
		margin-top: 10px;
	}

	.profile-img{
		width: 100px;
		height: 100px;
		object-fit: cover;
		border-radius: 100%;
		background-image: url(https://upload.wikimedia.org/wikipedia/commons/1/19/January_2025_Official_Presidential_Portrait_of_Donald_J._Trump.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original);
		background-size: cover;
		position: relative;
		display: inline-block;
	}

	.profile-img p{
		color: #D97757;
		font-size: 25px;
		position: absolute;
		bottom: -20px;
		right: 0px;
	}

	.date-status{
		display: flex;
		justify-content: space-evenly;
		align-content: center;
		padding: 20px;
		background-color: #FAF7F2;
		border: solid 1px #EAE5DECC;
		border-radius: 10px;
	}

	.box p:nth-child(1){
		color: #8C92A0;
		font-size: 11px;
		font-weight: 600;
		margin: 0;
	}

	.box p:nth-child(2){
		color: #2B2F38;
		font-size: 12px;
		font-weight: bold;
		margin: 0;
	}






	

	.profile-details{
		background-color: #FFFFFF;
		border: solid 1px #EAE5DE;
		border-radius: 20px;
		padding: 20px;
		box-shadow: 0px 0px 20px #E8E8E8;
		display: flex;
		flex-direction: column;
	}

	.profile-details p:nth-child(1){
		color: #2B2F38;
		font-size: 20px;
		font-weight: bold;
		margin: 0;
	}

	.profile-details p:nth-child(2){
		color: #595E6B;
		font-size: 12px;
		font-weight: 400;
		margin: 0;
	}

	.profile-details table{
		width: 100%;
	}

	td{
		padding: 0px 20px;
	}

	label{
		color: #595E6B;
		font-size: 12px;
		font-weight: bold;
	}

	input{
		width: 100%;
		background-color: #F5F0E8;
		padding: 8px 20px;
		border: none;
		border-radius: 100px;
		color: #2B2F38;
		font-size: 14px;
	}

	input:focus{
		outline: solid 2px #D97757;
	}

	.profile-details p:nth-child(6){
		color: #2B2F38;
		font-size: 20px;
		font-weight: bold;
		margin: 0;
	}

	.profile-details p:nth-child(7){
		color: #595E6B;
		font-weight: 400;
		font-size: 12px;
	}

	.profile-details textarea{
		width: 100%;
		border-radius: 10px;
		background-color: #F5F0E8;
		border: none;
		height: 100px;
		padding: 20px;
	}

	textarea:focus{
		outline: solid 2px #D97757;
	}

	.profile-details button{
		padding: 10px 20px;
		background-color: #D97757;
		border: none;
		border-radius: 100px;
		color: #FFFFFF;
		font-size: 12px;
		font-weight: 600;
		margin-top: 20px;
		margin-left: auto;
	}



</style>