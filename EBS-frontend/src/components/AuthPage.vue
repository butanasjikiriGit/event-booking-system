<script setup>
import { computed, ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

const props = defineProps({
	mode: {
		type: String,
		required: true
	}
});

const isSignIn = computed(() => props.mode === 'signin');
const showPassword = ref(false);
const remember = ref(true);
const router = useRouter();

function goHome() {
	router.push({ name: 'home' });
}
</script>

<template>
	<main class="auth-page">
		<div class="page-shell">
			<header class="brand-bar">
				<RouterLink class="brand" to="/" aria-label="AURA VIP home">
					<span class="brand-icon">
						<i class="bi bi-ticket-perforated-fill" aria-hidden="true"></i>
					</span>
					<span class="brand-name">AURA <b>VIP</b></span>
				</RouterLink>
				<RouterLink class="return-link" to="/">
					<i class="bi bi-arrow-left" aria-hidden="true"></i>
					Return to Explore
				</RouterLink>
			</header>

			<section class="auth-card" aria-label="AURA VIP authentication">
				<aside class="experience-panel">
					<div class="glow glow-one"></div>
					<div class="glow glow-two"></div>

					<div class="panel-badges">
						<span class="welcome-badge">
							<i></i>
							WELCOMING LIVE MOMENTS
						</span>
						<span class="club-badge">AURA VIP Club</span>
					</div>

					<article class="feature-card">
						<div class="venue-image">
							<img src="/loginPage/preview.png" alt="An intimate view of a concert hall">
							<div class="image-shade"></div>
							<span class="sightline-badge">UNOBSTRUCTED SIGHTLINES</span>
							<div class="venue-caption">
								<strong>Acoustic Soundchecks &amp; Lounges</strong>
								<span>Radio City • Royal Albert Hall • MSG</span>
							</div>
						</div>
						<div>
							<h2>“Access Live Moments You’ll Love.”</h2>
							<p>
								Intimate soundchecks, cozy hospitality salons, and friendly on-site hosts making
								every show stress-free.
							</p>
						</div>
					</article>

					<div class="perks">
						<div class="host-card">
							<span class="host-icon">
								<i class="bi bi-emoji-smile" aria-hidden="true"></i>
							</span>
							<span>
								<strong>Friendly Dedicated On-Site Host</strong>
								<small>Real human help to greet and escort your group</small>
							</span>
						</div>
						<div class="trust-row">
							<span>
								<i class="bi bi-patch-check-fill" aria-hidden="true"></i>
								100% Organizer Verified
							</span>
							<i></i>
							<span>
								<i class="bi bi-shield-check" aria-hidden="true"></i>
								Guaranteed Easy Entry
							</span>
						</div>
					</div>
				</aside>

				<div class="auth-panel">
					<div class="auth-content">
						<div class="tab-row">
							<div class="tabs" role="tablist" aria-label="Authentication options">
								<RouterLink
									:class="{ active: isSignIn }"
									:to="{ name: 'login' }"
									role="tab"
									:aria-selected="isSignIn"
								>
									Sign In
								</RouterLink>
								<RouterLink
									:class="{ active: !isSignIn }"
									:to="{ name: 'register' }"
									role="tab"
									:aria-selected="!isSignIn"
								>
									Create Account
								</RouterLink>
							</div>
							<span class="verified-pill">
								<i class="bi bi-lock-fill" aria-hidden="true"></i>
								Verified Guest Access
							</span>
						</div>

						<div class="intro">
							<h1>{{ isSignIn ? 'Welcome back' : 'Join AURA VIP' }}</h1>
							<p>
								{{ isSignIn
									? 'Enter your email and password to access your concert passes, soundcheck itineraries, and lounge reservations.'
									: 'Create your account to unlock concert passes, intimate soundchecks, and hosted lounge experiences.' }}
							</p>
						</div>

						<form class="auth-form" novalidate @submit.prevent="goHome">
							<label v-if="!isSignIn" class="field">
								<span class="field-label">
									<b>FULL NAME</b>
									<small>As shown on your tickets</small>
								</span>
								<span class="input-wrap no-icon">
									<input type="text" placeholder="Your name" required>
								</span>
							</label>

							<label class="field">
								<span class="field-label">
									<b>EMAIL ADDRESS</b>
									<small>Your tickets are sent here</small>
								</span>
								<span class="input-wrap">
									<i class="bi bi-envelope" aria-hidden="true"></i>
									<input type="email" placeholder="you@email.com" required>
								</span>
							</label>

							<label class="field">
								<span class="field-label">
									<b>PASSWORD</b>
									<template v-if="isSignIn">
										<button type="button">Forgot password?</button>
									</template>
									<small v-else>At least 8 characters</small>
								</span>
								<span class="input-wrap">
									<i class="bi bi-lock" aria-hidden="true"></i>
									<input
										:type="showPassword ? 'text' : 'password'"
										:placeholder="isSignIn ? '••••••••••••' : 'Create a password'"
										minlength="8"
										required
									>
									<button
										class="password-toggle"
										type="button"
										@click="showPassword = !showPassword"
										:aria-label="showPassword ? 'Hide password' : 'Show password'"
									>
										<i :class="['bi', showPassword ? 'bi-eye-slash' : 'bi-eye']" aria-hidden="true"></i>
									</button>
								</span>
							</label>

							<div class="options-row">
								<label class="remember">
									<input v-model="remember" type="checkbox">
									<span class="custom-check">
										<i v-if="remember" class="bi bi-check-lg" aria-hidden="true"></i>
									</span>
									{{ isSignIn ? 'Keep me signed in on this device' : 'Send me AURA event updates' }}
								</label>
								<span class="encrypted">
									<i class="bi bi-shield-lock" aria-hidden="true"></i>
									Encrypted VIP Session
								</span>
							</div>

							<RouterLink class="primary-button" to="/">
								Continue to Home &amp; Catalog
								<i class="bi bi-arrow-right" aria-hidden="true"></i>
							</RouterLink>
						</form>

						<div class="divider">
							<span>OR CONTINUE WITH</span>
						</div>

						<div class="social-row">
							<button type="button">
								<i class="bi bi-google" aria-hidden="true"></i>
								Google
							</button>
							<button type="button">
								<i class="bi bi-apple" aria-hidden="true"></i>
								Apple
							</button>
						</div>
					</div>

					<footer class="auth-footer">
						<span>
							<i class="bi bi-headset" aria-hidden="true"></i>
							Host Assistance: <b>+1 (888) 940-AURA</b>
						</span>
						<span>
							{{ isSignIn ? "Don't have an account?" : 'Already a member?' }}
							<RouterLink :to="isSignIn ? { name: 'register' } : { name: 'login' }">
								{{ isSignIn ? 'Register for free' : 'Sign in' }}
							</RouterLink>
						</span>
					</footer>
				</div>
			</section>
		</div>
	</main>
</template>

<style scoped src="../assets/auth.css"></style>
