<template>
	<nav class="navbar navbar-expand-xl">
		<div class="container-fluid nav-container">
			<router-link class="navbar-brand" to="/">AURA VIP</router-link>

			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#auraNavbar"
				aria-controls="auraNavbar"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="auraNavbar">
				<div class="nav-links mx-xl-auto">
					<ul class="navbar-nav">
						<li class="nav-item"><router-link to="/" class="nav-link">Home & Catalog</router-link></li>
						<li class="nav-item"><router-link to="/login" class="nav-link">Login / Register</router-link></li>
						<li class="nav-item"><router-link to="/checkout" class="nav-link">Packages & Checkout</router-link></li>
						<li class="nav-item"><router-link to="/ticket" class="nav-link">Ticket Issued</router-link></li>
						<li class="nav-item"><router-link to="/bookings" class="nav-link">My Bookings</router-link></li>
						<li class="nav-item"><router-link to="/profile" class="nav-link">Profile</router-link></li>
					</ul>
				</div>

				<div class="nav-actions">
					<div class="input-group search-box">
						<span class="input-group-text"><i class="bi bi-search"></i></span>
						<input type="text" class="form-control" placeholder="Search artist, shows...">
					</div>

					<div class="profile">
						<img class="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/1/19/January_2025_Official_Presidential_Portrait_of_Donald_J._Trump.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" alt="Profile">
						<p>Trump</p>
						<i class="bi bi-chevron-down"></i>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<style scoped>
.navbar{
	background-color: #FAF7F2;
	border: solid 1px #EAE5DE;
	padding: 16px 24px;
}

.nav-container{
	gap: 20px;
}

.navbar-brand{
	color: #2B2F38;
	font-size: 28px;
	font-weight: 600;
}

.navbar-collapse{
	align-items: center;
	gap: 20px;
}

.nav-links{
	background-color: #F4EFEB;
	padding: 10px 20px;
	border: solid 2px #EAE5DE;
	border-radius: 100px;
}

.navbar-nav{
	gap: 18px;
}

.nav-link{
	color: #2B2F38;
	font-size: 14px;
	white-space: nowrap;
}

.nav-link:hover,
.router-link-active{
	color: #D97757;
}

.nav-actions{
	display: flex;
	align-items: center;
	gap: 10px;
}

.search-box{
	width: 230px;
}

.search-box .input-group-text,
.search-box .form-control{
	background-color: #FFFFFF;
	border-color: #EAE5DE;
}

.search-box .input-group-text{
	border-right: none;
	border-radius: 100px 0 0 100px;
}

.search-box .form-control{
	border-left: none;
	border-radius: 0 100px 100px 0;
}

.profile{
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	padding: 5px 10px;
	background-color: #FFFFFF;
	border: solid 1px #EAE5DE;
	border-radius: 100px;
}

.profile p{
	margin: 0;
	font-size: 13px;
	font-weight: bold;
}

.profile i{
	font-size: 13px;
}

.profile-img{
	width: 30px;
	height: 30px;
	object-fit: cover;
	border-radius: 100%;
}

@media (max-width: 1199px){
	.navbar-collapse{
		margin-top: 15px;
	}

	.nav-links{
		width: 100%;
		padding: 10px 15px;
		border-radius: 20px;
	}

	.navbar-nav{
		gap: 0;
	}

	.nav-link{
		padding: 10px;
	}

	.nav-actions{
		margin-top: 12px;
	}
}

@media (max-width: 576px){
	.navbar{
		padding: 12px;
	}

	.navbar-brand{
		font-size: 24px;
	}

	.nav-actions{
		align-items: stretch;
		flex-direction: column;
	}

	.search-box,
	.profile{
		width: 100%;
	}
}
</style>
