<template>
	
	<div class="container-fluid">
		<div class="row">
			<div class="col-12">
				<div class="inner-nav">

					<div class="nav">
						<h1>AURA VIP</h1>
					</div>

					<div class="nav">
						<div class="nav-links">
							<ul>
								<li><router-link to="/" class="r-link">Home & Catalog</router-link></li>
								<li><router-link to="/login" class="r-link">Login / Register</router-link></li>
								<li><router-link to="/checkout" class="r-link">Packages & Checkout</router-link></li>
								<li><router-link to="/ticket" class="r-link">Ticket Issued</router-link></li>
								<li><router-link to="/bookings" class="r-link">My Bookings</router-link></li>
								<li><router-link to="/profile" class="r-link">Profile</router-link></li>
							</ul>
						</div>
					</div>

					<div class="nav">
						<div class="search">
							<span>
								<i class="bi bi-search"></i>
							</span>
							<input type="text" placeholder="Search artist, shows...">
						</div>
						<hr class="vr">
						<div class="profile">
							<img class="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/1/19/January_2025_Official_Presidential_Portrait_of_Donald_J._Trump.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original">
							<p>Trump</p>
							<i class="bi bi-chevron-down"></i>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>

</template>

<style scoped>
	
	.inner-nav{
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 20px;
		border: solid 1px #EAE5DE;
	}
	.r-link{
		text-decoration: none;
		color: black;
	}











	/*NAVLINKS*/
	.nav-links{
		background-color: #F4EFEB;
		padding: 20px 30px;
		border: solid 2px #EAE5DE;
		border-radius: 100px;
	}

	ul{
		display: flex;
		gap: 30px;
		list-style: none;
		font-size: 14px;
		margin: 0;
		padding: 0;
	}










	/*SEARCH*/
	span{
		background-color: #FFFFFF;
		border: solid 1px #EAE5DE;
		padding: 10px;
		border: solid 1px #EAE5DE;
		border-right: none;
		border-radius: 100px 0px 0px 100px;
	}

	input{
		background-color: white;
		border: solid 1px #EAE5DE;
		border-left: none;
		padding: 8px;
		border-radius: 0px 100px 100px 0px;
		outline: none;
	}

	.nav hr {
		margin: 10px;
	}







	/*PROFILE*/
	.profile{
		border: solid 1px #EAE5DE;
		padding: 5px 10px;
		background-color: #FFFFFF;
		border-radius: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
		cursor: pointer;
	}

	.profile p {
		font-size: 13px;
		font-weight: bold;
		margin: 0;
	}

	.profile i {
		font-size: 13px;
	}

	.profile-img{
		height: 30px;
		border-radius: 100%;
		pointer-events: none;
	}

</style>