import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'notyf/notyf.min.css';
import { createRouter, createWebHistory } from 'vue-router';


import { createApp } from 'vue'
import './style.css'
import App from './App.vue'





// Routes
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
			meta: { authPage: true }
		},
		{
			path: '/register',
			name: 'register',
			component: Register,
			meta: { authPage: true }
		},
		{
			path: '/checkout',
			name: 'checkout',
			component: Checkout
		},
		{
			path: '/ticket',
			name: 'ticket',
			component: Ticket
		},
		{
			path: '/bookings',
			name: 'bookings',
			component: Bookings
		},
		{
			path: '/profile',
			name: 'profile',
			component: Profile
		}
	]
});






// Route imports
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import Checkout from './pages/Checkout.vue';
import Ticket from './pages/Ticket.vue';
import Bookings from './pages/Bookings.vue';
import Profile from './pages/Profile.vue';






const app = createApp(App);
app.use(router);
app.mount('#app');
