<template>
	<nav class="navbar navbar-expand-xl">
		<div class="container-fluid nav-container">
			<router-link class="navbar-brand" to="/">
				<span class="navbar-brand-icon">
					<i class="bi bi-ticket-perforated-fill" aria-hidden="true"></i>
				</span>
				<span><span class="text-dark">AURA</span> VIP</span>
			</router-link>

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

					<div class="dropdown profile-dropdown">
						<button
							id="accountMenuButton"
							class="profile dropdown-toggle"
							type="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
							aria-controls="accountMenu"
						>
							<img class="profile-img" src="https://upload.wikimedia.org/wikipedia/commons/1/19/January_2025_Official_Presidential_Portrait_of_Donald_J._Trump.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" alt="Profile">
							<span class="profile-name">Trump</span>
							<i class="bi bi-chevron-down"></i>
						</button>
						<ul id="accountMenu" class="dropdown-menu dropdown-menu-end profile-menu" aria-labelledby="accountMenuButton">
							<li><router-link class="dropdown-item" to="/profile">Profile</router-link></li>
							<li><router-link class="dropdown-item" to="/bookings">My Bookings</router-link></li>
							<li><router-link class="dropdown-item" to="/login">Log out</router-link></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<style scoped>
.navbar {
	background-color: #FAF7F2;
	border: solid 1px #EAE5DE;
	padding: 16px 24px;
}

.nav-container {
	gap: 20px;
}

.navbar-brand {
	display: flex;
	align-items: center;
	gap: 10px;
	color: #2B2F38;
	font-size: 28px;
	font-family: "Epilogue:Bold", sans-serif;
	font-weight: 700;
	letter-spacing: -0.6px;
}

.navbar-brand > span:last-child {
	font-family: "Epilogue:Bold", sans-serif;
}

.navbar-brand-icon {
	display: grid;
	width: 40px;
	height: 40px;
	flex: 0 0 40px;
	place-items: center;
	border-radius: 50%;
	background-color: #F1D9CF;
}

.navbar-brand-icon .bi {
	color: #D97757;
	font-size: 20px;
	line-height: 1;
}

.navbar-collapse {
	align-items: center;
	gap: 20px;
}

.nav-links {
	background-color: #F4EFEB;
	padding: 10px 20px;
	border: solid 2px #EAE5DE;
	border-radius: 100px;
}

.navbar-nav {
	gap: 18px;
}

.nav-link {
	color: #2B2F38;
	font-size: 14px;
	white-space: nowrap;
}

.nav-link:hover,
.router-link-active {
	color: #D97757;
}

.nav-actions {
	display: flex;
	align-items: center;
	gap: 10px;
}

.search-box {
	width: 230px;
}

.search-box .input-group-text,
.search-box .form-control {
	background-color: #FFFFFF;
	border-color: #EAE5DE;
}

.search-box .input-group-text {
	border-right: none;
	border-radius: 100px 0 0 100px;
}

.search-box .form-control {
	border-left: none;
	border-radius: 0 100px 100px 0;
}

.profile-dropdown {
	width: 180px;
	flex: 0 0 180px;
}

.profile {
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	gap: 10px;
	padding: 5px 10px;
	background-color: #FFFFFF;
	border: solid 1px #EAE5DE;
	border-radius: 100px;
	color: #2B2F38;
	cursor: pointer;
	font: inherit;
	transition:
		background-color 180ms ease,
		border-color 180ms ease,
		box-shadow 180ms ease,
		transform 180ms ease;
}

.profile:hover,
.profile.show {
	background-color: #FAF2E8;
	border-color: #D97757;
	box-shadow: 0 4px 12px rgb(217 119 87 / 15%);
	transform: translateY(-1px);
}

.profile-name {
	margin: 0 auto 0 0;
	font-size: 13px;
	font-weight: bold;
}

.profile .bi {
	font-size: 13px;
}

.profile .bi-chevron-down {
	transition: transform 180ms ease;
}

.profile.show .bi-chevron-down {
	transform: rotate(180deg);
}

.profile.dropdown-toggle::after {
	display: none;
}

.profile-menu {
	display: block;
	width: 100%;
	min-width: 0;
	padding: 6px;
	border: solid 1px #EAE5DE;
	border-radius: 14px;
	box-shadow: 0 8px 20px rgb(43 47 56 / 12%);

	/* Initial hidden state */
	opacity: 0;
	transform: translateY(-10px);
	visibility: hidden;
	pointer-events: none;

	/* Transition */
	transition:
		opacity 250ms ease,
		transform 250ms ease,
		visibility 0s linear 250ms;
}

.profile-menu.show {
	/* Visible state */
	opacity: 1;
	transform: translateY(0);
	visibility: visible;
	pointer-events: auto;

	transition:
		opacity 250ms ease,
		transform 250ms ease,
		visibility 0s;
}

.profile-menu .dropdown-item {
	padding: 9px 12px;
	border-radius: 9px;
	color: #2B2F38;
	font-size: 14px;
}

.profile-menu .dropdown-item:hover,
.profile-menu .dropdown-item:focus {
	background-color: #FAF2E8;
	color: #D97757;
}

.profile-img {
	width: 30px;
	height: 30px;
	object-fit: cover;
	border-radius: 100%;
}

@media (max-width: 1199px) {
	.navbar-collapse {
		margin-top: 15px;
	}

	.nav-links {
		width: 100%;
		padding: 10px 15px;
		border-radius: 20px;
	}

	.navbar-nav {
		gap: 0;
	}

	.nav-link {
		padding: 10px;
	}

	.nav-actions {
		margin-top: 12px;
	}
}

@media (max-width: 576px) {
	.navbar {
		padding: 12px;
	}

	.navbar-brand {
		font-size: 24px;
	}

	.navbar-brand-icon {
		width: 36px;
		height: 36px;
		flex-basis: 36px;
	}

	.nav-actions {
		align-items: stretch;
		flex-direction: column;
	}

	.search-box,
	.profile-dropdown {
		width: 100%;
	}

	.profile-dropdown {
		flex-basis: auto;
	}
}

@media (prefers-reduced-motion: reduce) {
	.profile,
	.profile .bi-chevron-down,
	.profile-menu {
		transition: none;
	}
}
</style>
