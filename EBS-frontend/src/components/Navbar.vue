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

<style scoped src="../assets/navbar.css"></style>
