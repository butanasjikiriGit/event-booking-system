<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

const route = useRoute();
const showSiteChrome = computed(() => route.meta.authPage !== true);
</script>

<template>
	<Navbar v-if="showSiteChrome" />
	<router-view />
	<Footer v-if="showSiteChrome" />
</template>
