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
								{{ isSignIn ? 'Sign in to Aura' : 'Create My Account' }}
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

<style scoped>
@font-face {
  font-family: "Epilogue:Bold";
  src: url("https://static.figma.com/font/Epilogue_wght__1") format("woff2");
  font-style: normal;
  font-weight: 700;
}

@font-face {
  font-family: "Epilogue:SemiBold";
  src: url("https://static.figma.com/font/Epilogue_wght__1") format("woff2");
  font-style: normal;
  font-weight: 600;
}

@font-face {
  font-family: "Plus Jakarta Sans:Bold";
  src: url("https://static.figma.com/font/PlusJakartaSans_wght__2") format("woff2");
  font-style: normal;
  font-weight: 700;
}

@font-face {
  font-family: "Plus Jakarta Sans:Medium";
  src: url("https://static.figma.com/font/PlusJakartaSans_wght__2") format("woff2");
  font-style: normal;
  font-weight: 500;
}

@font-face {
  font-family: "Plus Jakarta Sans:Regular";
  src: url("https://static.figma.com/font/PlusJakartaSans_wght__2") format("woff2");
  font-style: normal;
  font-weight: 400;
}

@font-face {
  font-family: "Plus Jakarta Sans:SemiBold";
  src: url("https://static.figma.com/font/PlusJakartaSans_wght__2") format("woff2");
  font-style: normal;
  font-weight: 600;
}

.auth-page {
  color: #2b2f38;
  font-family: "Plus Jakarta Sans:Regular", sans-serif;
  font-synthesis: none;
}

.auth-page button,
.auth-page a,
.auth-page input {
  outline-color: #d97757;
}

.auth-page button,
.auth-page a {
  -webkit-tap-highlight-color: transparent;
}

.auth-page button {
  border: 0;
  font-family: inherit;
}

.auth-page {
  min-height: 100dvh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #faf7f2;
  padding: 0 20px;
  margin-top: 5vh;
}

.page-shell {
  width: min(100%, 1152px);
}

.brand-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px 24px;
}

.brand,
.return-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.brand {
  gap: 10px;
}

.brand-icon {
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #f1d9cf;
  box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
}

.brand-icon .bi {
  color: #d97757;
  font-size: 20px;
}

.brand-name {
  font-family: "Epilogue:Bold", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.6px;
}

.brand-name b {
  color: #d97757;
  font-family: "Epilogue:SemiBold", sans-serif;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0;
}

.return-link {
  gap: 6px;
  padding: 7px 15px;
  border: 1px solid #eae5de;
  border-radius: 999px;
  background: white;
  color: #595e6b;
  box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
  font-family: "Plus Jakarta Sans:SemiBold", sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
}

.return-link .bi {
  font-size: 10px;
}

.auth-card {
  min-height: 680px;
  display: grid;
  grid-template-columns: 5fr 7fr;
  overflow: hidden;
  border: 1px solid #eae5de;
  border-radius: 28px;
  background: white;
  box-shadow:
    0 20px 25px -5px rgb(231 229 228 / 50%),
    0 8px 10px -6px rgb(231 229 228 / 50%);
}

.experience-panel {
  position: relative;
  min-width: 0;
  min-height: 692px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  padding: 40px;
  border-right: 1px solid #eae5de;
  background: linear-gradient(125deg, #faf2e8 0%, #f5f0e8 50%, #eae5de 100%);
}

.glow {
  position: absolute;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  filter: blur(32px);
  pointer-events: none;
}

.glow-one {
  top: -96px;
  left: -96px;
  background: rgb(217 119 87 / 10%);
}

.glow-two {
  right: -96px;
  bottom: -96px;
  background: rgb(200 131 52 / 10%);
}

.panel-badges,
.trust-row {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.welcome-badge,
.club-badge {
  border: 1px solid #eae5de;
  border-radius: 999px;
  white-space: nowrap;
}

.welcome-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 15px;
  background: rgb(255 255 255 / 90%);
  box-shadow: 0 1px 2px rgb(0 0 0 / 5%);
  font-family: "Plus Jakarta Sans:Bold", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.3px;
}

.welcome-badge i {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #d97757;
}

.club-badge {
  padding: 5px 11px;
  background: rgb(255 255 255 / 70%);
  color: #595e6b;
  font-family: "Plus Jakarta Sans:Medium", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
}

.feature-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 21px;
  border: 1px solid #eae5de;
  border-radius: 28px;
  background: rgb(255 255 255 / 90%);
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 10%),
    0 2px 4px -2px rgb(0 0 0 / 10%);
}

.venue-image {
  position: relative;
  height: 176px;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: inset 0 2px 4px rgb(0 0 0 / 5%);
}

.venue-image > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgb(43 47 56 / 80%), transparent 55%);
}

.sightline-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 8px 10px;
  border-radius: 999px;
  background: rgb(255 255 255 / 95%);
  color: #d97757;
  box-shadow: 0 1px 2px rgb(0 0 0 / 5%);
  font-family: "Plus Jakarta Sans:Bold", sans-serif;
  font-size: 10px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0.5px;
}

.venue-caption {
  position: absolute;
  right: 14px;
  bottom: 10px;
  left: 14px;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 11px;
  line-height: 16.5px;
  text-align: right;
}

.venue-caption strong {
  font-family: "Plus Jakarta Sans:Bold", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
}

.venue-caption span {
  color: rgb(255 255 255 / 80%);
}

.feature-card h2 {
  font-family: "Epilogue:Bold", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 27.5px;
}

.feature-card p {
  margin-top: 4px;
  color: #595e6b;
  font-size: 12px;
  line-height: 19.5px;
}

.perks {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.host-card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px;
  border: 1px solid #eae5de;
  border-radius: 20px;
  background: rgb(255 255 255 / 80%);
}

.host-icon {
  width: 32px;
  height: 32px;
  flex: 0 0 auto;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #e5efe7;
}

.host-icon .bi {
  color: #4f6e56;
  font-size: 16px;
}

.host-card > span:last-child {
  display: flex;
  min-width: 0;
  flex-direction: column;
}

.host-card strong {
  font-family: "Plus Jakarta Sans:Bold", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
}

.host-card small {
  overflow: hidden;
  color: #595e6b;
  font-size: 11px;
  line-height: 16.5px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.trust-row {
  padding: 0 4px;
  color: #595e6b;
  font-family: "Plus Jakarta Sans:Medium", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
}

.trust-row span {
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
}

.trust-row .bi {
  color: #4f6e56;
  font-size: 12px;
}

.trust-row > i {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #8c92a0;
}

.auth-panel {
  min-width: 0;
  display: flex;
  flex-direction: column;
  background: white;
}

.auth-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 48px;
}

.tab-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 17px;
  border-bottom: 1px solid #eae5de;
}

.tabs {
  display: flex;
  gap: 6px;
  padding: 6px;
  border-radius: 999px;
  background: #f5f0e8;
}

.tabs a {
  display: inline-block;
  padding: 8px 20px;
  border-radius: 999px;
  color: #595e6b;
  text-decoration: none;
  font-family: "Plus Jakarta Sans:SemiBold", sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  transition:
    color 160ms ease,
    background 160ms ease,
    transform 160ms ease;
}

.tabs a:active {
  transform: scale(0.97);
}

.tabs a.active {
  background: #d97757;
  color: white;
  box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
  font-family: "Plus Jakarta Sans:Bold", sans-serif;
  font-weight: 700;
}

.verified-pill,
.encrypted {
  display: flex;
  align-items: center;
  color: #4f6e56;
  font-family: "Plus Jakarta Sans:SemiBold", sans-serif;
  font-weight: 600;
  white-space: nowrap;
}

.verified-pill {
  gap: 6px;
  padding: 4px 12px;
  border-radius: 999px;
  background: #e5efe7;
  font-size: 12px;
  line-height: 16px;
}

.verified-pill .bi {
  font-size: 13px;
}

.intro h1 {
  font-family: "Epilogue:Bold", sans-serif;
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.75px;
}

.intro p {
  margin-top: 5px;
  color: #595e6b;
  font-size: 14px;
  line-height: 22.75px;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.field-label b {
  font-family: "Plus Jakarta Sans:Bold", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.6px;
}

.field-label small,
.field-label button {
  color: #595e6b;
  font-family: "Plus Jakarta Sans:Medium", sans-serif;
  font-size: 11px;
  font-weight: 500;
  line-height: 16.5px;
}

.field-label button {
  color: #d97757;
  cursor: pointer;
  font-family: "Plus Jakarta Sans:SemiBold", sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
}

.input-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.input-wrap > .bi {
  position: absolute;
  left: 16px;
  color: #8c92a0;
  font-size: 17px;
  pointer-events: none;
}

.input-wrap input {
  width: 100%;
  height: 48px;
  padding: 0 45px 0 41px;
  border: 1px solid transparent;
  border-radius: 20px;
  background: #f5f0e8;
  color: #2b2f38;
  font-size: 14px;
  line-height: normal;
  transition:
    border-color 160ms ease,
    box-shadow 160ms ease;
}

.input-wrap.no-icon input {
  padding-left: 17px;
}

.input-wrap input::placeholder {
  color: #8c92a0;
  opacity: 1;
}

.input-wrap input:focus {
  border-color: #d97757;
  box-shadow: 0 0 0 3px rgb(217 119 87 / 12%);
  outline: none;
}

.password-toggle {
  position: absolute;
  right: 10px;
  display: grid;
  width: 36px;
  height: 36px;
  place-items: center;
  cursor: pointer;
  border-radius: 50%;
}

.password-toggle:hover {
  background: rgb(217 119 87 / 8%);
}

.password-toggle .bi {
  color: #595e6b;
  font-size: 18px;
}

.options-row {
  min-height: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.remember {
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;
  font-family: "Plus Jakarta Sans:Medium", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
}

.remember input {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
}

.custom-check {
  width: 18px;
  height: 18px;
  display: grid;
  flex: 0 0 auto;
  place-items: center;
  overflow: hidden;
  border: 1px solid #d97757;
  border-radius: 8px;
  background: #d97757;
}

.remember input:not(:checked) + .custom-check {
  background: white;
}

.custom-check .bi {
  color: white;
  font-size: 14px;
}

.encrypted {
  gap: 4px;
  font-size: 11px;
  line-height: 16.5px;
}

.encrypted .bi {
  font-size: 14px;
}

.primary-button {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 999px;
  background: #d97757;
  color: white;
  box-shadow:
    0 4px 6px -1px rgb(217 119 87 / 20%),
    0 2px 4px -2px rgb(217 119 87 / 20%);
  font-family: "Plus Jakarta Sans:SemiBold", sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-decoration: none;
  transition:
    background 160ms ease,
    transform 160ms ease;
}

.primary-button:hover {
  background: #c96849;
}

.primary-button:active {
  transform: translateY(1px);
}

.primary-button .bi {
  font-size: 12px;
}

.success-message {
  margin: -8px 0 -3px;
  color: #4f6e56;
  font-family: "Plus Jakarta Sans:Medium", sans-serif;
  font-size: 11px;
  font-weight: 500;
  text-align: center;
}

.divider {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.divider::before {
  position: absolute;
  right: 0;
  left: 0;
  height: 1px;
  background: #eae5de;
  content: "";
}

.divider span {
  position: relative;
  padding: 0 12px;
  background: white;
  color: #8c92a0;
  font-family: "Plus Jakarta Sans:SemiBold", sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.6px;
}

.social-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.social-row button {
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  border: 1px solid #eae5de;
  border-radius: 999px;
  background: white;
  box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
  font-family: "Plus Jakarta Sans:Bold", sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  transition:
    border-color 160ms ease,
    transform 160ms ease;
}

.social-row button:hover {
  border-color: #d97757;
}

.social-row button:active {
  transform: scale(0.98);
}

.social-row .bi {
  color: #2b2f38;
  font-size: 16px;
}

.auth-footer {
  min-height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 48px;
  border-top: 1px solid #eae5de;
  background: rgb(250 242 232 / 60%);
  color: #595e6b;
  font-family: "Plus Jakarta Sans:Medium", sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
}

.auth-footer span {
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
}

.auth-footer span:first-child {
  gap: 8px;
}

.auth-footer .bi {
  color: #d97757;
  font-size: 15px;
}

.auth-footer b,
.auth-footer button,
.auth-footer a {
  font-family: "Plus Jakarta Sans:Bold", sans-serif;
  font-weight: 700;
}

.auth-footer button,
.auth-footer a {
  cursor: pointer;
  color: #d97757;
  font-size: 12px;
  text-decoration: underline;
  text-underline-position: from-font;
}

@media (max-width: 1000px) {
  .auth-card {
    grid-template-columns: 0.9fr 1.1fr;
  }

  .experience-panel {
    padding: 28px;
  }

  .auth-content {
    padding: 36px;
  }

  .auth-footer {
    align-items: flex-start;
    flex-direction: column;
    gap: 7px;
    padding: 14px 36px;
  }

  .panel-badges {
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }

  .trust-row {
    align-items: flex-start;
    flex-direction: column;
    gap: 6px;
  }

  .trust-row > i {
    display: none;
  }
}

@media (max-width: 760px) {
  .auth-page {
    align-items: flex-start;
    padding: 0 14px;
  }

  .brand-bar {
    padding: 0 2px 18px;
  }

  .auth-card {
    display: flex;
    min-height: 0;
    flex-direction: column;
  }

  .experience-panel {
    min-height: auto;
    gap: 24px;
    padding: 24px;
    border-right: 0;
    border-bottom: 1px solid #eae5de;
  }

  .panel-badges {
    align-items: center;
    flex-direction: row;
  }

  .feature-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .venue-image {
    height: 190px;
  }

  .feature-card > div:last-child {
    align-self: center;
  }

  .trust-row {
    align-items: center;
    flex-direction: row;
  }

  .trust-row > i {
    display: block;
  }

  .auth-content {
    padding: 32px 24px;
  }

  .auth-footer {
    padding: 16px 24px;
  }
}

@media (max-width: 576px) {
  .intro h1 {
    font-size: 30px !important;
  }
}

@media (max-width: 540px) {
  .brand-name {
    font-size: 20px;
  }

  .brand-name b {
    font-size: 17px;
  }

  .brand-icon {
    width: 36px;
    height: 36px;
  }

  .return-link {
    padding: 7px 11px;
  }

  .experience-panel {
    display: none;
  }

  .auth-card {
    border-radius: 22px;
  }

  .auth-content {
    gap: 22px;
    padding: 24px 18px 28px;
  }

  .tab-row {
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
  }

  .tabs {
    width: 100%;
  }

  .tabs a {
    flex: 1;
    padding-right: 10px;
    padding-left: 10px;
  }

  .intro h1 {
    font-size: 27px !important;
    line-height: 34px;
  }

  .field-label small {
    display: none;
  }

  .options-row {
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
  }

  .social-row {
    grid-template-columns: 1fr;
  }

  .auth-footer {
    gap: 10px;
    padding: 16px 18px;
  }

  .auth-footer span {
    flex-wrap: wrap;
    white-space: normal;
  }
}
</style>
