<script setup>
		
	import { ref } from 'vue';
	import Events from '../data/Event.json';
	import Package from '../data/Package.json';
	import Activities from '../data/Activities.json';
	import Booking from '../data/Booking.json';

	const activeTab = ref('events');

</script>

<template>
	
	<div class="container mt-5">
		<div class="row">
			
			<div class="status-ledger">
				<div class="heading-1">
					<p>• OPS ADMIN</p>
					<p>STATUS: LIVE OPERATION LEDGER</p>
				</div>
				<hr>

				<div class="row">
					
					<div class="col-12 col-md-6 col-lg-3">
						<div class="status-ledger-box">
							<div class="status-heading">
								<p>ACTIVE VIP ALLOCATIONS</p>
								<p><i class="bi bi-ticket-detailed"></i></p>
							</div>
							<div class="status-heading2">
								<h3>1,420</h3>
								<p>PASSES</p>
							</div>
							<p>Across 4 Active Events</p>
						</div>
					</div>

					<div class="col-12 col-md-6 col-lg-3">
						<div class="status-ledger-box">
							<div class="status-heading">
								<p>Escrowed GMV (Settled)</p>
								<p><i class="bi bi-shield-check"></i></p>
							</div>
							<div class="status-heading2">
								<h3>$1,842,500</h3>
								<p>USD</p>
							</div>
							<p>100% Primary Escrow Backed</p>
						</div>
					</div>

					<div class="col-12 col-md-6 col-lg-3">
						<div class="status-ledger-box">
							<div class="status-heading">
								<p>Meet & Greet Capacity</p>
								<p><i class="bi bi-people"></i></p>
							</div>
							<div class="status-heading2">
								<h3>89.4%</h3>
								<p>BOOKED</p>
							</div>
							<div class="range">
								<div class="range-value"></div>
							</div>
						</div>
					</div>

					<div class="col-12 col-md-6 col-lg-3">
						<div class="status-ledger-box">
							<div class="status-heading">
								<p>Venue Ticket Check-Ins</p>
								<p><i class="bi bi-qr-code-scan"></i></p>
							</div>
							<div class="status-heading2">
								<h3>1 / 3</h3>
								<p>VERIFIED</p>
							</div>
							<p>Real-Time Tracker</p>
						</div>
					</div>

				</div>

			</div>

		</div>

		<div class="row mt-5">
			
			<div class="navigation">
					
				<button
							:class="{ active: activeTab === 'events' }"
							@click="activeTab='events'"
						><i class="bi bi-calendar-check"></i> Events</button>
				<button
							:class="{ active: activeTab === 'packages' }"
							@click="activeTab='packages'"
						><i class="bi bi-box"></i> VIP Packages</button>
				<button
							:class="{ active: activeTab === 'activities' }"
							@click="activeTab='activities'"
						><i class="bi bi-clock"></i> Package Activities</button>
				<button
							:class="{ active: activeTab === 'bookings' }"
							@click="activeTab='bookings'"
						><i class="bi bi-qr-code-scan"></i> Booking & Tickets</button>
				<button
							:class="{ active: activeTab === 'users' }"
							@click="activeTab='users'"
						><i class="bi bi-people-fill"></i> User & Role Management</button>

			</div>

		</div>




		<!-- EVENTS -->

		<div class="row mt-5" v-if="activeTab === 'events'">
			
			<div class="all-display">
				
				<div class="heading-action">
					<p>Event Operations</p>
					<button><i class="bi bi-plus-lg"></i> Create New Event</button>
				</div>

				<div class="inner-details">
					
					<table>
						<thead>
							<tr>
								<th>EVENT & ARTIST</th>
								<th>CATEGORY</th>
								<th>VENUE & LOCATION</th>
								<th>SCHEDULE</th>
								<th>CAPACITY</th>
								<th>STATUS</th>
								<th>ADMIN ACTIONS</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="event in Events" :key="event.id">
								<td>{{event.name}}</td>
								<td>{{event.genre}}</td>
								<td>{{event.location}}</td>
								<td>{{event.date}}</td>
								<td>{{event.capacity}}</td>
								<td>Upcoming</td>
								<td>
									<button>Edit</button>
									<button>Archive</button>
								</td>
							</tr>
						</tbody>
					</table>

				</div>

			</div>

		</div>

		<!-- PACKAGES -->

		<div class="row mt-5" v-if="activeTab === 'packages'">
			
			<div class="all-display">
							
				<div class="heading-action">
					<p>VIP Package Operations</p>
					<button><i class="bi bi-plus-lg"></i> Create VIP Package</button>
				</div>

				<div class="inner-details">
					
					<table>
						<thead>
							<tr>
								<th>PACKAGE NAME</th>
								<th>INCLUSIONS</th>
								<th>PRICE</th>
								<th>SLOT CAPACITY</th>
								<th>PUBLIC VISIBILITY</th>
								<th>ADMIN ACTIONS</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="pack in Package" :key="pack.id">
								<td>{{pack.name}}</td>
								<td v-for="inc in pack.inclusions.filter(i => i.inclusion_id === 1)" :key="inc.inclusion_id">{{inc.inc_desc}}...</td>
								<td>${{pack.price}} USD</td>
								<td>{{pack.capacity}}</td>
								<td>{{pack.isActive ? 'Active' : 'Inactive'}}</td>
								<td>
									<button>Edit</button>
								</td>
							</tr>
						</tbody>
					</table>

				</div>		

			</div>

		</div>

		<div class="row mt-5" v-if="activeTab === 'activities'">
			
			<div class="all-display">
				
				<div class="heading-action">
					<p>Package Activity Itinerary Operations</p>
					<button><i class="bi bi-plus-lg"></i> Add Package Activity</button>
				</div>

				<div class="inner-details">
					
					<table>
						<thead>
							<tr>
								<th>ACTIVITY TITLE</th>
								<th>PACKAGE</th>
								<th>TIME WINDOW</th>
								<th>MEETING LOCATION</th>
								<th>GUEST INSTRUCTION</th>
								<th>ADMIN ACTIONS</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="act in Activities" :key="act.id">
								<td>{{act.act_Title}}</td>
								<td>{{act.package_Id}}</td>
								<td>{{act.startsAt}}-{{act.endsAt}}</td>
								<td>{{act.meetLoc}}</td>
								<td>{{act.instruction}}</td>
								<td>
									<button>Delete</button>
								</td>
							</tr>
						</tbody>
					</table>

				</div>

			</div>

		</div>

		<div class="row mt-5" v-if="activeTab === 'bookings'">
			
			<div class="all-display">
							
				<div class="heading-action">
					<p>Customer Bookings</p>
					<button hidden><i class="bi bi-plus-lg"></i> Create VIP Package</button>
				</div>

				<div class="inner-details">
					
					<table>
						<thead>
							<tr>
								<th>BOOKING REF</th>
								<th>CUSTOMER ID</th>
								<th>PACKAGE</th>
								<th>QTY & TOTAL</th>
								<th>BOOKING STATUS</th>
								<th>PAYMENT STATUS</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="book in Booking" :key="book.id">
								<td>{{book.bookingReference}}</td>
								<td>USER-2026</td>
								<td>PKG-001</td>
								<td>{{book.totalAmount}}</td>
								<td>{{book.bookingStatus}}</td>
								<td>
								  	<select v-model="book.paymentStatus" @change="updatePaymentStatus(book)">
								    	<option value="unpaid">Unpaid</option>
								    	<option value="paid">Paid</option>
								    	<option value="refunded">Refunded</option>
								  	</select>
								</td>
							</tr>
						</tbody>
					</table>

				</div>		

			</div>

			<div class="all-display mt-3">
							
				<div class="heading-action">
					<p>Generated Attendee Tickets & Live Check-In</p>
					<button hidden><i class="bi bi-plus-lg"></i> Create VIP Package</button>
				</div>

				<div class="inner-details">
					
					<table>
						<thead>
							<tr>
								<th>TIKCET CODE</th>
								<th>BOOKING REF</th>
								<th>ATTENDEE NAME</th>
								<th>ISSUED AT</th>
								<th>CHECKED-IN AT</th>
								<th>STATUS</th>
								<th>VENUE CHECK-IN ACTION</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>TKT-AUR-8829-01</td>
								<td>BKG-1001</td>
								<td>Donald Trump</td>
								<td>2026-10-22 14:31</td>
								<td>2026-11-14 16:32</td>
								<td>Checked-In</td>
								<td><span class="check"><i class="bi bi-check-lg"></i> Checked In</span></td>
							</tr>
							<tr>
								<td>TKT-AUR-8829-02</td>
								<td>BKG-1002</td>
								<td>Rodrigo Duterte</td>
								<td>2026-10-22 14:31</td>
								<td>2026-11-14 16:32</td>
								<td>Checked-In</td>
								<td><span class="check"><i class="bi bi-check-lg"></i> Checked In</span></td>
							</tr>
							<tr>
								<td>TKT-AUR-8829-03</td>
								<td>BKG-1003</td>
								<td>Vladimir Putin</td>
								<td>2026-10-22 14:31</td>
								<td>2026-11-14 16:32</td>
								<td>Checked-In</td>
								<td><span class="check"><i class="bi bi-check-lg"></i> Checked In</span></td>
							</tr>
						</tbody>
					</table>

				</div>		

			</div>

		</div>

		<div class="row mt-5" v-if="activeTab === 'users'">
			
			<div class="all-display">
							
				<div class="heading-action">
					<p>Registered Customer Profiles & Admin Role Assignment</p>
					<button hidden><i class="bi bi-plus-lg"></i> Create VIP Package</button>
				</div>

				<div class="inner-details">
					
					<table>
						<thead>
							<tr>
								<th>USER ID</th>
								<th>FULL NAME</th>
								<th>EMAIL</th>
								<th>MOBILE NO</th>
								<th>CREATED AT</th>
								<th>ROLE</th>
								<th>ROLE ACTION</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>TKT-AUR-8829-11</td>
								<td>Incognito Junior</td>
								<td>incognito@mail.com</td>
								<td>+63 999 999 9999</td>
								<td>2030-07-24</td>
								<td><strong>ADMIN</strong></td>
								<td><button>Revoke Admin</button></td>
							</tr>
							<tr>
								<td>TKT-AUR-8829-01</td>
								<td>Donald Trump</td>
								<td>Donald@mail.com</td>
								<td>+63 111 111 1111</td>
								<td>2026-11-14</td>
								<td><strong>COSTUMER</strong></td>
								<td><button>Grant Admin</button></td>
							</tr>
							<tr>
								<td>TKT-AUR-8829-02</td>
								<td>Rodrigo Duterte</td>
								<td>Rodrigo@mail.com</td>
								<td>+63 222 222 2222</td>
								<td>2026-11-14</td>
								<td><strong>COSTUMER</strong></td>
								<td><button>Grant Admin</button></td>
							</tr>
							<tr>
								<td>TKT-AUR-8829-03</td>
								<td>Vladimir Putin</td>
								<td>Vladimir@mail.com</td>
								<td>+63 333 333 3333</td>
								<td>2026-11-14</td>
								<td><strong>COSTUMER</strong></td>
								<td><button>Grant Admin</button></td>
							</tr>
						</tbody>
					</table>

				</div>		

			</div>

		</div>

	</div>

</template>

<style scoped>
	
	.status-ledger{
		padding: 20px;
		border-radius: 20px;
		box-shadow: 0px 0px 20px #E8E8E8;
		background-color: white;
		border: solid 1px #E3DBD0;
	}

	.heading-1{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.heading-1 p:nth-child(1){
		background-color: #D97757;
		color: white;
		padding: 5px 15px;
		border-radius: 100px;
		font-size: 12px;
		font-weight: bold;
		margin: 0;
	}

	.heading-1 p:nth-child(2){
		color: #006F79;
		background-color: #EDFDF6;
		border: solid 1px #82ECBE;
		padding: 5px 15px;
		border-radius: 100px;
		font-weight: bold;
		font-size: 12px;
		margin: 0;
	}

	.status-ledger-box{
		background-color: #F5F0E8;
		padding: 20px;
		border: solid 1px #E3DBD0;
		border-radius: 20px;
		margin-bottom: 20px;
	}

	.status-heading{
		display: flex;
		justify-content: space-between;
	}

	.status-heading p:nth-child(1){
		color: darkslategray;
		font-size: 12px;
		font-weight: bold;
	}

	.status-heading p:nth-child(2){
		color: orange;
	}

	.status-heading2{
		display: flex;
		justify-content: start;
		align-items: center;
		gap: 5px;
	}

	.status-heading2 h3{
		font-weight: bold;
		font-size: 40px;
	}

	.status-heading2 p:nth-child(2){
		font-weight: normal;
		color: gray;
		font-size: 12px;
		margin: 0;
		font-weight: bold;
	}

	.status-ledger-box p:nth-child(3){
		color: #D97757;
		font-weight: bold;
		font-size: 12px;
		background-color: #F7D7CE;
		padding: 2px 20px;
		border-radius: 100px;
		display: inline-block;
		margin: 0;
	}

	.range{
		height: 7px;
		width: 100%;
		background-color: white;
		border-radius: 100px;
		overflow: hidden;
	}

	.range-value{
		height: 100%;
		width: 89.4%;
		background-color: #D97757;
		border-radius: 100px;
	}







	.navigation{
		padding: 20px;
		border-radius: 20px;
		box-shadow: 0px 0px 20px #E8E8E8;
		background-color: white;
		border: solid 1px #E3DBD0;
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
	}

	.navigation button{
		padding: 5px 40px;
		border: none;
		border-radius: 5px;
		font-weight: bold;
		font-size: 14px;
		background-color: #F5F0E8;
	}

	.navigation button.active{
		background-color: #D97757;
		color: white;
	}







	.all-display{
		padding: 20px;
		border-radius: 20px;
		box-shadow: 0px 0px 20px #E8E8E8;
		background-color: white;
		border: solid 1px #E3DBD0;
	}

	.heading-action{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
	}

	.heading-action p:nth-child(1){
		font-size: 30px;
		font-weight: bold;
		margin: 0;
	}

	.heading-action button:nth-child(2){
		padding: 7px 20px;
		color: white;
		border: none;
		border-radius: 100px;
		background-color: #D97757;
		font-weight: bold;
		font-size: 12px;
		margin: 0;
	}

	table{
		width: 100%;
		border-radius: 10px 10px 0px 0px;
		overflow: hidden;
		border-collapse: collapse;
	}

	th{
		text-align: center;
		padding: 5px;
		background-color: #F5F0E8;
		color: gray;
		font-size: 14px;
	}

	td{
		text-align: center;
		padding: 10px 0px;
		border: solid 1px #E3DBD0;
		border-bottom: none;
		border-left: none;
		border-right: none;
		font-size: 12px;
		font-weight: 500;
	}

	tr{
		transition: .2s;
	}

	tr:hover{
		background-color: #F5F0E8;
	}

	td select{
		padding: 2px 15px;
		border: solid 1px #E3DBD0;
		margin: 0px 5px;
		border-radius: 3px;
		font-weight: bold;
	}

	td button{
		padding: 2px 15px;
		border: none;
		margin: 0px 5px;
		border-radius: 3px;
		font-weight: bold;
		transition: .2s;
	}

	td button:hover{
		background-color: #D97757;
		color: white;
	}

	.check{
		padding: 5px 20px;
		border-radius: 100px;
		border: solid 1px #E3DBD0;
		font-weight: bold;
		background-color: #F5F0E8;
		pointer-events: none;
	}

</style>